import ReduxProvider from '@/redux/provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { io, Socket } from 'socket.io-client';

export const socket: Socket = io('http://localhost:8080');

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ChatQT',
  description: 'Chat app with multi language',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={`${inter.className} bg-white`}>{children}</body>
      </html>
    </ReduxProvider>
  );
}
