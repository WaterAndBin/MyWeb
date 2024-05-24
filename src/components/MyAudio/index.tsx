import React from 'react';
import { type ReactElement } from 'react';
import Tip from '../Tip';

export default function MyAudio(): ReactElement {
  // const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className="w-screen h-screen flex-default overflow-visible">
      <div className="w-[17rem] h-[5rem] border-4 border-solid border-black rounded-xl p-2 bg-white relative">
        <div className="text-[18px] font-semibold">
          <Tip content="123123124214142123123124214142123123124214142123123124214142123123124214142"></Tip>
        </div>
      </div>
      {/* <audio ref={audioRef} src="/ぱじ - 花降らし.mp3" controls></audio> */}
    </div>
  );
}
