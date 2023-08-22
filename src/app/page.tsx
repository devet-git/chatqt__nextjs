'use client';
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const user = useAppSelector((state) => state.userReducer);
  const router = useRouter();
  useEffect(() => {
    if (user.id !== '') {
      router.push('/chat');
    }
  }, [router, user.id]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl">Welcome to ChatQT</h1>
      <div className="flex justify-between gap-3">
        <Link
          href={'/auth/login'}
          className="px-2 py-1 rounded-sm bg-primary-500 text-white"
        >
          Login
        </Link>
        <Link
          href={'/auth/register'}
          className="px-2 py-1 rounded-sm bg-primary-500 text-white"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
