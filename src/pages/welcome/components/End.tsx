'use client';

import Clock from '@/components/Clock';
import Image from 'next/image';
import React from 'react';
import { type ReactElement } from 'react';

export default function End(): ReactElement {
  return (
    <div className="end-bg text-white overflow-hidden p-16 box-border flex flex-col">
      <div className="flex-1">
        <div className="flex">
          {/* 文字 */}
          <div className="h-full flex items-center flex-1">
            <div className="text-[40px]">
              <div className="flex">
                <span className="transform scale-110 -rotate-6">B</span>
                <span className="transform scale-110 translate-x-3 -translate-y-2 rotate-12">i</span>
                <span className="transform translate-x-6 -translate-y-1 -rotate-12">n</span>
              </div>
              <div className="flex mt-4">
                <span className="transform scale-110 -translate-x-3 -rotate-12">前</span>
                <span className="transform scale-110 translate-x-3 -translate-y-2 rotate-12">端</span>
                <span className="transform translate-x-6 translate-y-3 -rotate-6">工</span>
                <span className="transform translate-x-6 -translate-y-6 -rotate-12">程</span>
                <span className="transform translate-x-6 -translate-y-0 rotate-12">师</span>
              </div>
            </div>
          </div>
          {/* 闹钟 */}
          <div className="">{/* <Clock></Clock> */}</div>
        </div>
        <div className="flex">
          <div className="mr-24">
            <div className="mb-2">项目</div>
            <div className="h-[2px] w-[180px] bg-white"></div>
            <div className="mt-6">
              <div className="mb-1">项目</div>
              <div className="mb-1">项目</div>
              <div className="mb-1">项目</div>
            </div>
          </div>
          <div className="mr-24">
            <div className="mb-2">项目</div>
            <div className="h-[2px] w-[180px] bg-white"></div>
            <div className="mt-6">
              <div className="mb-1">项目</div>
              <div className="mb-1">项目</div>
              <div className="mb-1">项目</div>
            </div>
          </div>
        </div>
      </div>
      {/* 地址 */}
      <div className="flex items-center">
        <div className="mr-4">
          <div className="cursor-pointer">
            <Image src="/svg/wechat.svg" alt="wechat" width="45" height="37" priority></Image>
          </div>
        </div>
        <div className="mr-4">
          <a href="https://gitee.com/hallowhite" target="true">
            <Image src="/svg/gitee.svg" alt="gitee" width="40" height="37" priority></Image>
          </a>
        </div>
        <div className="mr-4">
          <a href="https://github.com/WaterAndBin" target="true">
            <Image src="/svg/github.svg" alt="github" width="45" height="37" priority></Image>
          </a>
        </div>
      </div>
    </div>
  );
}
