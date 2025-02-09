"use client";
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang) => {
    const newPath = `/${lang}${pathname.replace(/^\/[a-z]{2}/, '')}`;
    router.push(newPath);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>🇺🇸 English</button>
      <button onClick={() => changeLanguage('es')}>🇪🇸 Español</button>
    </div>
  );
}
