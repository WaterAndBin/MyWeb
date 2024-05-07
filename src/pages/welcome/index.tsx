import React, { useState, useEffect } from 'react';
import './welcome.css';

export default function Welcome() {
  const [textDisplayed, setTextDisplayed] = useState('');
  const fullText: string = '欢迎来到我的个人网站';
  let timerId: NodeJS.Timeout;
  let isDisplaying: boolean = true; // 控制文本是显示还是删除的标志位

  // 用于控制文本显示的函数
  const startTextDisplay = (): void => {
    let index: number = 0;
    let displayText = '';

    const timerId = setInterval(() => {
      if (isDisplaying) {
        // 如果在显示阶段
        if (index < fullText.length) {
          displayText = fullText.slice(0, index + 1);
          index++;
        } else {
          // 切换到删除阶段
          isDisplaying = false;
          index = fullText.length;
        }
      } else {
        // 如果在删除阶段
        if (index > 0) {
          displayText = fullText.slice(0, index - 1);
          index--;
        } else {
          // 文本已删除完毕，清除定时器
          clearInterval(timerId);
        }
      }
      setTextDisplayed(displayText);
    }, 300); // 每0.3秒执行一次
  };

  // 清除定时器的函数
  const clearTextDisplay = (): void => {
    clearInterval(timerId);
  };

  // 使用useEffect来启动和清理定时器
  useEffect(() => {
    startTextDisplay(); // 组件挂载后启动文本显示
    return clearTextDisplay; // 组件卸载时清除定时器
  }, []);

  return (
    <div className="h-screen">
      <div className="h-full">
        <div className="font-serif flex flex-col items-center justify-center h-full ">
          <span className="text-6xl py-2">大家好</span>
          <span className="text-6xl py-2 pb-4">我是Bin</span>
          <span className="py-2 text-3xl box-border">
            <span className="box-border mx-3">{textDisplayed}</span>
            <span className="border-[0.13rem] border-solid border-black w-1 transition-all blink-text"></span>
          </span>
          <span className="py-2">本网站由Next.js+Tailwand+Go构建</span>
          <span className="py-2">Github：...</span>
          <span className="py-2">Gitee：...</span>
        </div>
      </div>
    </div>
  );
}
