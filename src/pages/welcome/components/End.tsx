import React, { useEffect } from 'react';
import { type ReactElement, useState } from 'react';

export default function End(): ReactElement {
  const [dateTime, setDateTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // 每分钟更新一次

    return () => {
      clearInterval(interval);
    };
  }, []);

  // 提取时间、日期、星期几等信息
  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');
  const ampm = dateTime.getHours() >= 12 ? 'PM' : 'AM';
  const dayOfWeek = ['日', '一', '二', '三', '四', '五', '六'][dateTime.getDay()];
  const month = (dateTime.getMonth() + 1).toString();
  const date = dateTime.getDate().toString().padStart(2, '0');

  return (
    <div className="end-bg text-white">
      <div className="pt-10 ml-10">
        <div
          className="text-sans relative group w-[300px] h-[150px] bg-gradient-to-r from-[rgb(20,30,48)] to-[rgb(36,58,85)] rounded-xl text-white flex justify-center flex-col transition-all duration-300 overflow-hidden"
          style={{ boxShadow: 'rgb(0,0,0,0.7) 5px 10px 50px ,rgb(0,0,0,0.7) -5px 0px 250px' }}
        >
          <p className="text-[44px] flex-[0.3] pt-4 ml-4">
            <span>
              {hours}:{minutes}
            </span>
            <span className="text-[20px] ml-1">{ampm}</span>
          </p>
          <p className="text-[20px] flex-[0.1] mt-1 ml-4">
            星期{dayOfWeek}，{month}月{date}日
          </p>
          <p className="absolute right-3 top-3 text-[20px] group-hover:text-[26px] transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              strokeWidth="0"
              fill="currentColor"
              stroke="currentColor"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}
