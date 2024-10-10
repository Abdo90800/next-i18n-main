import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';


export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <body>
        <NextIntlClientProvider messages={messages}>
    
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
