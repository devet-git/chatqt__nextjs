import classNames from '@/utils/classNames';

type Props = {
  sender?: true;
  showAvatar?: true;
  text: string;
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
          sender && 'bg-green-100',
          'w-fit bg-white px-2 py-1 rounded-lg'
        )}
      >
        {text}
      </div>
      {sender && <Avatar />}
    </div>
  );
}
