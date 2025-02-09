import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Si no hay idioma en la URL, redirigir a inglés por defecto
  if (!pathname.startsWith('/en') && !pathname.startsWith('/es')) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // Ignora archivos estáticos y API routes
};