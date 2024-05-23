import { type DefaultProjectText } from '@/types/projectText';
import { type ReactElement, useRef, useState } from 'react';

export default function PhoneProjectBox(props: DefaultProjectText): ReactElement {
  const selctionRef = useRef<HTMLDivElement>(null);
  const [selectIndex, setSelectIndex] = useState(0);

  const handleDom = (item: string | string[] | undefined): string | React.JSX.Element[] | undefined => {
    if (!Array.isArray(item)) {
      return item;
    }
    return item.map((items, index) => <div key={index}>{items}</div>);
  };

  return (
    <div className="w-full h-full flex-default">
      <div className="w-[25rem] bg-[#fff] rounded-[10px] overflow-hidden project-shadow allow-scroller">
        <div className="bg-black text-[#fff] p-2 text-center text-[21px]">{props.title}</div>
        <div className="p-2 text-[18px] w-full break-words h-60 2xl:h-[24rem] overflow-auto">
          <span>{handleDom(props.content.find((item, index) => index == selectIndex))}</span>
        </div>
        <div className="grid grid-cols-3 text-center text-[18px] py-1 relative bg-black text-[#fff] border-4 border-solid border-black">
          <div
            className="cursor-pointer"
            onClick={() => {
              setSelectIndex(0);
            }}
          >
            技术栈
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setSelectIndex(1);
            }}
          >
            详情
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setSelectIndex(2);
            }}
          >
            地址
          </div>
          <div
            ref={selctionRef}
            className="absolute w-[calc(100%/3)] h-full mix-blend-difference bg-white rounded overflow-hidden cursor-pointer transition-all"
            style={{ left: `${(selectIndex * 100) / 3}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
