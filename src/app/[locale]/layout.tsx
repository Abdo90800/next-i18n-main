import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from "../../component/Header";
import './globals.css';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  // Determine the text direction based on the locale
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <body>
        <NextIntlClientProvider messages={messages}>
        <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
