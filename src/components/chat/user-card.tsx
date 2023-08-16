import classNames from '@/utils/classNames';
import Image from 'next/image';

type Props = {
  avatar?: string;
  name: string;
  onClick?: () => any;
};
export default function ChatUserCard({ avatar, name, onClick }: Props) {
  return (
    <div
      className={classNames(
        'hover:transition ease-in-out duration-500',
        'flex items-center gap-2 rounded-xl p-2 bg-white cursor-pointer hover:bg-slate-100'
      )}
      onClick={onClick}
    >
      {avatar ? (
        <Image
          width={20}
          height={20}
          src={avatar}
          alt={`Avatar user ${name}`}
        />
      ) : (
        <div className="w-10 h-10	 rounded-full bg-blue-100"></div>
      )}
      <span>{name}</span>
    </div>
  );
}
