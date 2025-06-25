'use client';

import { JSX, useState } from 'react';
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

interface FormData {
  email: string;
  message: string;
}

type SubmitStatus = 'success' | 'error' | null;

export default function Cta(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Отправляем данные в Google Sheets через API route
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Контактная форма блок */}
        <div className="bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-8 border border-gray-700/50 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Левая часть - заголовок и описание */}
            <div className="text-center lg:text-left">
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-4xl lg:text-5xl font-semibold text-transparent mb-6">
                Contact us
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Ready to discuss your project? Fill out the form, and we’ll get back to you shortly for a detailed conversation.
              </p>
              
              {/* Статус отправки */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-700/50 rounded-lg backdrop-blur-sm">
                  <p className="text-green-300 flex items-center gap-2">
                    <span className="text-xl">✅</span>
                    Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/30 border border-red-700/50 rounded-lg backdrop-blur-sm">
                  <p className="text-red-300 flex items-center gap-2">
                    <span className="text-xl">❌</span>
                     An error occurred during sending. Please try again
                  </p>
                </div>
              )}
            </div>

            {/* Правая часть - форма */}
            <div>
              <form
                className="space-y-6"
                data-aos="fade-up"
                data-aos-delay={200}
                onSubmit={handleSubmit}
              >
                <div className="group">
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium transition-colors group-focus-within:text-indigo-400">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-xl bg-gray-800/80 border border-gray-600/50 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/90"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium transition-colors group-focus-within:text-indigo-400">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full rounded-xl bg-gray-800/80 border border-gray-600/50 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/90 resize-none"
                    placeholder="Share details about your project or ask us anything..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full sm:w-auto px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting 
                      ? 'bg-gray-600/80 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-lg hover:shadow-indigo-500/25'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Отправляется...
                      </>
                    ) : (
                      <>
                        Send message
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Контактная информация блок */}
        <div className="bg-gradient-to-r from-gray-800/60 via-gray-700/40 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-600/30 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl lg:text-4xl font-semibold text-transparent mb-4">
              Contact Us
            </h2>
            <p className="text-gray-300 text-lg">
              Get in touch with us any way you prefer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay={400}>
            {/* Email */}
            <div className="group text-center p-6 rounded-2xl bg-gray-800/40 border border-gray-600/30 hover:border-indigo-500/50 transition-all duration-300 hover:bg-gray-800/60">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600/20 mb-4 group-hover:bg-indigo-600/30 transition-colors">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a href="mailto:info@example.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                idev24@gmail.com
              </a>
            </div>

            {/* Телефон */}
            <div className="group text-center p-6 rounded-2xl bg-gray-800/40 border border-gray-600/30 hover:border-indigo-500/50 transition-all duration-300 hover:bg-gray-800/60">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600/20 mb-4 group-hover:bg-indigo-600/30 transition-colors">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Phone number</h3>
              <a href="tel:+1234567890" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                +992 880-51-40-04
              </a>
            </div>

            {/* Адрес */}
            <div className="group text-center p-6 rounded-2xl bg-gray-800/40 border border-gray-600/30 hover:border-indigo-500/50 transition-all duration-300 hover:bg-gray-800/60">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600/20 mb-4 group-hover:bg-indigo-600/30 transition-colors">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-gray-300">
                Dushanbe<br />
                123 Primernaya St.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br/><br/>
    </section>
    
  );
}