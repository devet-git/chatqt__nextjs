'use client';
import Message from '@/components/chat/message';
import { useAppSelector } from '@/redux/hooks';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface IConversation {
  id: string | number;
  content: IMessage[];
}
const conversations: IConversation[] = [
  {
    id: 1,
    content: [
      { userId: 'uid1', content: 'Hello cậu', conversationId: 1 },
      { userId: 'uid2', content: 'Hello cậu nhá', conversationId: 1 },
      { userId: 'uid2', content: 'Hello cậu nhá', conversationId: 1 },
      { userId: 'uid1', content: 'Cậu là ai vại?', conversationId: 1 },
    ],
  },
  {
    id: 2,
    content: [
      { userId: 'uid1', content: 'Hello cậu bạn mới nhé', conversationId: 2 },
      { userId: 'uid2', content: 'Hello cậu nhá', conversationId: 2 },
      { userId: 'uid1', content: 'Cậu là ai vại?', conversationId: 2 },
      { userId: 'uid2', content: 'Hello cậu nhá', conversationId: 2 },
    ],
  },
];

const loggingUserId = 'uid1';

export default function Page() {
  const params = useParams();
  const messages = useAppSelector((state) => state.currentChatReducer);

  const selectConversation =
    conversations.find((con) => con.id == params.chatId) ||
    ({} as IConversation);
  const [conversation, setConversation] =
    useState<IConversation>(selectConversation);

  useEffect(() => {
    if (messages.length > 0) {
      setConversation((prev: any) => ({
        id: prev.id,
        content: [...prev?.content, ...messages.slice(-1)],
      }));
    }
  }, [messages]);

  return conversation.content ? (
    conversation.content.map((message, index) => (
      <Message
        key={index}
        sender={message.userId == loggingUserId}
        text={message.content}
      />
    ))
  ) : (
    <div className="flex flex-col justify-center items-center w-full h-80 ">
      <h1 className="font-bold">Gửi tin nhắn đến cho ấy</h1>
      <span>Hoặc</span>
      <button className="bg-blue-300 rounded-md p-3">Tạo nhóm với ấy</button>
    </div>
  );
}
