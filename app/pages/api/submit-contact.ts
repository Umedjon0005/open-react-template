// pages/api/submit-contact.ts
import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactFormData {
  email: string;
  message: string;
  timestamp: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
): Promise<void> {
  if (req.method !== 'POST') {
    return res.status(405).json({
        error: 'Метод не разрешен',
        success: false
    });
  }

  try {
    const { email, message, timestamp }: ContactFormData = req.body;

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
    })

    res.status(200).json({ 
      success: true, 
      message: 'Данные успешно добавлены в Google Sheets' 
    });

  } catch (error) {
    console.error('Ошибка при добавлении в Google Sheets:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Внутренняя ошибка сервера' 
    });
  }
}