import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { io, Socket } from 'socket.io-client';

const socket: Socket = io('http://localhost:8080');
socket.on('connect', () =>
  console.log(`Connecting to server with id: ${socket.id}`)
);
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
    <html lang="en">
      <body className={`${inter.className} bg-white`}>{children}</body>
    </html>
  );
}
