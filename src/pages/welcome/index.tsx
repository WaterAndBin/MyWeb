import Ball from '@/components/ball';
import React, { useState, useEffect, useRef } from 'react';
import './welcome.css';

export default function Welcome() {
  /**
   * 文字字段展示
   */
  const [textDisplayed, setTextDisplayed] = useState('');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /**
   * 文字描述
   */
  const fullText: string[] = [
    '欢迎来到我的个人网站',
    '本人是想成为前端开发工程师',
    '本网站由Next.js+Go构建',
  ];
  /**
   * 控制文本是显示还是删除的标志位
   */
  let isDisplaying: boolean = true;

  /**
   * 用于控制文本显示的函数
   */
  const startTextDisplay = (): void => {
    let point: number = 0; /* 数组指向 */
    let index: number = 0; /* 字段长度 */
    let displayText: string = ''; /* 要显示的文字 */
    let text: string = fullText[point]; /* 需要用到的某个字段 */

    timerRef.current = setInterval(() => {
      if (isDisplaying) {
        // 如果在显示阶段
        if (index < text.length) {
          displayText = text.slice(0, index + 1);
          index++;
        } else {
          setTimeout(() => {
            // 切换到删除阶段
            isDisplaying = false;
            index = text.length + 1;
          }, 2000);
        }
      } else {
        // 如果在删除阶段
        if (index > 0) {
          displayText = text.slice(0, index - 1);
          index--;
        } else {
          isDisplaying = true;
          if (point == fullText.length - 1) {
            point = 0;
          } else {
            point++;
          }
          text = fullText[point];
        }
      }
      setTextDisplayed(displayText);
    }, 150); // 每0.3秒执行一次
  };

  // 清除定时器的函数
  const clearTextDisplay = (): void => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // 使用useEffect来启动和清理定时器
  useEffect(() => {
    startTextDisplay(); // 组件挂载后启动文本显示
    return clearTextDisplay; // 组件卸载时清除定时器
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full">
        <div className="font-serif flex flex-col items-center justify-center h-full relative backdrop-blur-lg	bg-white card">
          <Ball></Ball>
          <Ball color="bg-stone-950"></Ball>
          <Ball color="bg-emerald-950"></Ball>
          <Ball color="bg-violet-950"></Ball>
          <Ball color="bg-rose-950"></Ball>
          <span className="text-6xl py-2">大家好</span>
          <span className="text-6xl py-2 pb-4">我是Bin</span>
          <span className="py-2 text-3xl box-border">
            <span className="box-border mx-3 text-center whitespace-pre-wrap">{textDisplayed}</span>
            <span className="border-[0.13rem] border-solid border-black w-1 transition-all blink-text"></span>
          </span>
          <span className="py-2 text-xl text-center flex flex-col sm:block mt-2">
            <span>Github：</span>
            <span className="relative link-after">
              <a href="https://github.com/WaterAndBin" target="true">
                https://github.com/WaterAndBin
              </a>
            </span>
          </span>
          <span className="py-2 text-xl text-center flex flex-col sm:block">
            <span>Gitee：</span>
            <span className="relative link-after">
              <a href="https://gitee.com/hallowhite" target="true">
                https://gitee.com/hallowhite
              </a>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
