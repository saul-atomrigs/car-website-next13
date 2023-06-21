import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

export default function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image src="/logo.png" alt="logo" width={118} height={18} className="object-contain" />
          <CustomButton
            title="차량 검색하기"
            onClick={() => {}}
            buttonType="button"
            containerStyles="bg-primary-blue text-white rounded-full ml-10"
          />
        </Link>
      </nav>
    </header>
  );
}
