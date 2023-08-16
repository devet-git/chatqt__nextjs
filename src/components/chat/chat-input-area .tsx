import classNames from '@/utils/classNames';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';

type Props = {
  onSend?: (message: string | undefined) => any;
};

export default function ChatInputArea({ onSend }: Props) {
  const messageBoxRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState<string>('');

  const clearMessageBox = () => {
    if (messageBoxRef.current) messageBoxRef.current.textContent = '';
    setMessage('');
  };
  const hanldleKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      // TODO: create new line if user press enter+shift
      e.preventDefault();

      if (message) {
        handleOnSend();
        clearMessageBox();
      }
    }
  };
  const handleInputMessage = (e: React.SyntheticEvent<HTMLDivElement>) => {
    const mess = e.currentTarget.innerText.trim(); //.replace(/\n/g, '');
    setMessage(mess);
  };
  const handleOnSend = () => {
    onSend && onSend(message);
    clearMessageBox();
    // socket.emit('new mess', sendMessageRef.current?.value);
  };
  return (
    <div className="toolbar flex items-center gap-2 bg-blue-100 px-3 py-2 ">
      <div className="py-2 px-3 border border-white focus-within:border-blue-500 w-full overflow-y-auto pr-2 bg-white rounded-xl">
        <div
          ref={messageBoxRef}
          className=" max-h-[150px] overflow-y-auto outline-none bg-white"
          contentEditable
          onKeyDown={hanldleKeydown}
          onInput={handleInputMessage}
        />
      </div>
      <button
        onClick={handleOnSend}
        className={classNames(
          message && 'hover:text-blue-700 bg-blue-300',
          'bg-blue-200 px-3 py-3 rounded-full text-white'
        )}
        disabled={!message}
      >
        <PaperAirplaneIcon className="h-6 w-6 " />
      </button>
    </div>
  );
}
