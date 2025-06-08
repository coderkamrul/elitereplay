// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

export default async function LocaleLayout({ children, params }: { children: React.ReactNode, params: { locale: string } }) {
  const { locale } = params;

  const supportedLocales = ['en', 'de', 'es'];
  if (!supportedLocales.includes(locale)) {
    notFound(); // 👈 this triggers your custom not-found.tsx page
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound(); // 👈 this also catches missing translations
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
