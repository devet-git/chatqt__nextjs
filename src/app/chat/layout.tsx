'use client';

import ChatInputArea from '@/components/chat/chat-input-area ';
import ConversationCard from '@/components/chat/conversation-card';
import { addMessage } from '@/redux/features/currentChatSlice';
import { useAppDispath, useAppSelector } from '@/redux/hooks';
import { useParams, useRouter } from 'next/navigation';

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
const users: IUser[] = [
  { id: 1, name: 'Thang', username: 'thangq1' },
  { id: 2, name: 'Thien', username: 'thangq1' },
  { id: 3, name: 'Tho', username: 'thangq1' },
  { id: 4, name: 'Thu', username: 'thangq1' },
  { id: 5, name: 'Thy', username: 'thangq1' },
  { id: 6, name: 'Thong', username: 'thangq1' },
  { id: 7, name: 'Thanh', username: 'thangq1' },
];

const chats: IChat[] = users.map((user) => {
  return { id: user.id, user };
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispath();

  const router = useRouter();
  const params = useParams();

  const handleSelectChat = (chatId: any) => {
    router.push(`/chat/${chatId}`);
  };

  const handleOnSend = (message: string | undefined) => {
    dispatch(
      addMessage({
        userId: 'uid1',
        content: message,
        conversationId: params.chatId.toString(),
      })
    );
  };

  return (
    <div className="h-screen grid grid-rows-[auto_minmax(0,1fr)]">
      <header className="px-2 py-3 bg-blue-200">
        <h1>ChatQT</h1>
      </header>
      <section className="flex flex-shrink-0">
        <aside className="flex flex-col gap-1 w-[25%] p-2 bg-blue-100 overflow-y-auto border-r border-r-blue-300">
          {chats.map((chat) => (
            <ConversationCard
              key={chat.id}
              active={params.chatId == chat.id}
              // activeColor="bg-red-100"
              name={chat.user.name}
              onClick={() => handleSelectChat(chat.id)}
            />
          ))}
        </aside>
        <section className="flex flex-col justify-between bg-blue-100 w-full ">
          <main className="max-h-full py-2 px-3 overflow-y-auto">
            {children}
          </main>
          <ChatInputArea onSend={(messages) => handleOnSend(messages)} />
        </section>
      </section>
    </div>
  );
}
