import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { SidebarProvider } from '@/contexts/sidebar-context';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Motion for React Practice',
  description:
    'Practice environment for Motion for React live coding demonstrations',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${poppins.variable}`}>
      <body className='antialiased'>
        <SidebarProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </SidebarProvider>
      </body>
    </html>
  );
}
