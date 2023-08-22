'use client';
import Message from '@/components/chat/message';
import {
  clearConversation,
  createConversation,
} from '@/redux/features/conversationSlice';
import { useAppDispath, useAppSelector } from '@/redux/hooks';
import fetchApi from '@/utils/fetch-api';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const loggingUserId = 'uid1';

export default function Page() {
  const params = useParams();
  const chatId = params.chatId.toString();
  const conversation = useAppSelector((state) => state.conversationReducer);
  const user = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispath();
  useEffect(() => {
    dispatch(clearConversation());
    dispatch(createConversation(chatId));
  }, [chatId, dispatch]);

  return (
    <main>
      {conversation.content.length > 0 && conversation.id == params.chatId ? (
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
          <button className="bg-blue-300 rounded-md p-3">
            Tạo nhóm với ấy
          </button>
        </div>
      )}
    </main>
  );
}
