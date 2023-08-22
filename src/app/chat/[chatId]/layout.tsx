'use client';
import { socket } from '@/app/layout';
import ChatInputArea from '@/components/chat/chat-input-area ';
import { addMessage } from '@/redux/features/conversationSlice';
import { useAppDispath } from '@/redux/hooks';
import { useParams } from 'next/navigation';

const userId = 'uid1';

export default function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispath();
  const params = useParams();
  // FUNCTION
  const handleOnSend = (message: string | undefined): any => {
    socket.emit('newMessage', message, (response: any) => {
      console.log(response);
    });

    dispatch(
      addMessage({
        userId,
        content: message,
        conversationId: params.chatId.toString(),
      })
    );
  };

  return (
    <section className="flex flex-col justify-between bg-blue-100 w-full ">
      <div className="max-h-full py-2 px-3 overflow-y-auto">{children}</div>
      <ChatInputArea onSend={(message) => handleOnSend(message)} />
    </section>
  );
}
