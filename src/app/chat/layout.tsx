'use client';

import ConversationCard from '@/components/chat/conversation-card';
import { addMessage } from '@/redux/features/conversationSlice';
import { useAppDispath, useAppSelector } from '@/redux/hooks';
import { useParams, useRouter } from 'next/navigation';
import { socket } from '../layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axiosRequestHanlder from '@/handlers/api-request.handler';
import api from '@/core/api';
import fetcher from '@/core/fetcher.core';

// interface IUser {
//   id: string | number;
//   name: string;
//   username: string;
//   avatar?: string;
//   email?: string;
// }
interface IChat {
  user: IUser;
  id: string | number;
  content?: any;
}
const coversations: any[] = [
  { id: 'uid1', name: 'Thang' },
  { id: 'uid2', name: 'Thien' },
  { id: 'uid3', name: 'Tho' },
  { id: 'uid4', name: 'Thu' },
  { id: 'uid5', name: 'Thy' },
  { id: 'uid6', name: 'Thong' },
  { id: 'uid7', name: 'Thanh' },
];

const chats: IChat[] = coversations.map((user) => {
  return { id: user.id, user };
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispath();
  const [users, setUsers] = useState<IUser[]>([]);
  const router = useRouter();
  const params = useParams();

  const handleSelectChat = (chatId: any) => {
    router.push(`/chat/${chatId}`);
  };
  useEffect(() => {
    (async () => {
      // const users = (await axiosRequestHanlder(() => api('users'))) as IUser[];
      const users = await fetcher.get('users');
      console.log(users);

      users && setUsers(users);
    })();
  }, []);

  return (
    <div className="h-screen grid grid-rows-[auto_minmax(0,1fr)]">
      <header className="px-2 py-3 bg-blue-200">
        <Link href={'/'}>ChatQT</Link>
      </header>
      <section className="flex flex-shrink-0">
        <aside className="flex flex-col gap-1 w-[25%] p-2 bg-blue-100 overflow-y-auto border-r border-r-blue-300">
          {chats.map((chat) => (
            <ConversationCard
              key={chat.id}
              active={params.chatId == chat.id}
              // activeColor="bg-red-100"
              name={chat.user.name || ''}
              onClick={() => handleSelectChat(chat.id)}
            />
          ))}
          {users.map((user) => (
            <h1 key={user.id}>{user.name || user.email}</h1>
          ))}
        </aside>
        {children}
      </section>
    </div>
  );
}
