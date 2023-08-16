import Link from 'next/link';

export default function Page() {
  return (
    <div className=" flex gap-2">
      <Link href={'chat/1'}>Tạo đoạn chat mới</Link>
      <button>Tạo nhóm mới</button>
    </div>
  );
}
