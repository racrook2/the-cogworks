import Client from '@/app/Client';
import { cookies } from 'next/headers';
import './globals.css';

export const metadata = {
  title: 'Cogworks'
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();

  return (
    <html lang="en">
      <body>
        <Client defaultTheme={cookieStore.get('theme').value}>
          {children}
        </Client>
      </body>
    </html>
  );
}
