import Image from 'next/image';
import Link from 'next/link';
import { type ReactElement } from 'react';

export default function notFound(): ReactElement {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Image src="/svg/sad.svg" alt="not-found" width="160" height="37" priority></Image>
      <span className="text-3xl py-4 font-semibold">东西去哪了呢?</span>
      <div>
        <Link href={'/welcome'}>
          <button className="border-solid border-4 border-black p-1 text-lg font-semibold">回到主页</button>
        </Link>
      </div>
    </div>
  );
}
