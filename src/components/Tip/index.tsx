import React from 'react';
import { type ReactElement } from 'react';

interface Props {
  content: string;
}

export default function Tip(props: Props): ReactElement {
  //   const [contentTop, setContentTop] = useState(0);

  const handleonMouseEnter = (): void => {
    console.log('进来了');
  };

  return (
    <div className="w-full">
      <span className="relative w-full">
        {/* <span className="relative group truncate block tip-title group p-2 rounded-md drop-shadow-xl bg-[#E60023] from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
          <div className="absolute -top-20 min-w-16 max-w-60 min-h-8 max-h-40 border-4 flex-default border-solid border-black rounded-md bg-white z-99 box-border opacity-0 group-hover:opacity-100 transition-opacity group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
          </div>
        </span> */}
        <div className="group font-semibold transition-all duration-500 cursor-pointer" onMouseEnter={handleonMouseEnter}>
          {props.content}
          <span className="absolute opacity-0 group-hover:opacity-100 duration-500 -top-0 transform -translate-y-8 min-w-16 max-w-60 min-h-8 max-h-40 border-4 flex-default border-solid border-black rounded-md bg-white z-99">
            <span className="text-pretty break-words flex-1 w-full px-2">{props.content}</span>
          </span>
        </div>
      </span>
    </div>
  );
}
