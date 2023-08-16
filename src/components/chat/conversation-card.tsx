import classNames from '@/utils/classNames';
import Image from 'next/image';

type Props = {
  avatar?: string;
  name: string;
  active?: boolean;
  activeColor?: string; //use tailwindcss
  onClick?: () => any;
};
export default function ConversationCard({
  avatar,
  name,
  active,
  activeColor,
  onClick,
}: Props) {
  return (
    <div
      className={classNames(
        active
          ? activeColor || 'bg-blue-400'
          : 'hover:transition ease-in-out duration-500 hover:bg-slate-100 bg-white',
        'flex items-center gap-2 rounded-xl p-2  cursor-pointer '
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
