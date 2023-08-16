'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl">Welcome to chat app</h1>
      <Link href={'/auth/login'}>Login</Link>
      <Link href={'/auth/login'}>Register</Link>
    </div>
  );
}
