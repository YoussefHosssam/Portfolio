import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { AppProvider } from './providers';
import Sidebar from '../components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Youssef Hossam - Backend Developer',
  description: 'Backend Developer specializing in .NET Core and Node.js. Building scalable APIs and real-time applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <Sidebar />
          <div className="pt-16 lg:pt-0 lg:pl-64">
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
} 