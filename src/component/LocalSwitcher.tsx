'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition, useEffect } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  useEffect(() => {
    const direction = localeActive === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
  }, [localeActive]);

  return (
    <label className='border-2 rounded'>
      <select
        defaultValue={localeActive}
        className='bg-transparent py-2'
        onChange={onSelectChange}
        disabled={isPending}
        aria-label="Select language"
      >
        <option value='en'>English</option>
        <option value='ar'>العربية</option>
        
      </select>
    </label>
  );
}