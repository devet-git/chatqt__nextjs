'use client';

import ChatInputArea from '@/components/chat/chat-input-area ';
import ChatUserCard from '@/components/chat/user-card';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen grid grid-rows-[auto_minmax(0,1fr)]">
      <header className="px-2 py-3 bg-blue-200">
        <h1>ChatQT</h1>
      </header>
      <section className="flex flex-shrink-0">
        <aside className="flex flex-col gap-1 w-[25%] p-2 bg-blue-100 overflow-y-auto">
          <ChatUserCard name="Bùi Quang Thang" />
          <ChatUserCard name="Bùi Quang Huy" />
          <ChatUserCard name="Bùi Quang Tuấn" />
          <ChatUserCard name="Bùi Quang Thịnh" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
          <ChatUserCard name="Bùi Quang Toàn" />
        </aside>
        <section className="flex flex-col justify-between bg-blue-100 w-full ">
          <main className="max-h-full py-2 px-3 overflow-y-auto">
            {children}
          </main>
          <ChatInputArea onSend={(message) => console.log(message)} />
        </section>
      </section>
    </div>
  );
}
