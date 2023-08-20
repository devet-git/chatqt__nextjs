import classNames from '@/utils/classNames';

type Props = {
  sender?: boolean;
  showAvatar?: true;
  text: string | undefined;
};
export default function Message({ sender, text, showAvatar }: Props) {
  const Avatar = () => (
    <div
      className={classNames(
        showAvatar ? 'opacity-1' : 'opacity-0',
        'w-7 h-7 rounded-full bg-red-200'
      )}
    ></div>
  );
  return (
    <div
      className={classNames(
        sender && 'justify-end ',
        'flex items-center gap-2 mb-1 bg-blue-100'
      )}
    >
      {!sender && <Avatar />}
      <div
        className={classNames(
          sender ? 'bg-blue-500 text-white' : 'bg-white',
          'w-fit px-3 py-1.5 rounded-xl'
        )}
      >
        {text}
      </div>
      {sender && <Avatar />}
    </div>
  );
}
