// app/api/submit-contact/route.ts
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  email: string;
  message: string;
  timestamp: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: ContactFormData = await request.json();
    const { email, message, timestamp } = body;

    // Настройка Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Добавляем данные в таблицу
    await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1!A1:C1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [
            [
                new Date(timestamp).toLocaleString('ru-RU'),
                email,
                message,
            ],
            ],
        },
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Данные успешно добавлены в Google Sheets' 
    });

  } catch (error) {
    console.error('Ошибка при добавлении в Google Sheets:', error);
    return NextResponse.json(
      { success: false, error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}