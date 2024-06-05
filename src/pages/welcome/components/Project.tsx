import { type ReactElement } from 'react';
// import ProjectBox from '@/components/ProjectBox';
// import defaultProjectText from '@/utils/projectText';
// import PhoneProjectBox from '@/components/PhoneProjectBox';

export default function Project(): ReactElement {
  return (
    <div className="h-full w-full overflow-hidden box-border p-4 bg-[#f2f2f2]">
      <div className="w-full text-center">
        <div className="text-[38px] font-semibold">项目</div>
      </div>
      {/* <div className="hidden md:inline">
        <div className="h-full grid grid-cols-2 2xl:grid-cols-4 gap-4 items-center justify-center ">
          {defaultProjectText.map((item, index) => (
            <animated.div ref={ref} style={{ ...springs }} key={index}>
              <ProjectBox title={item.title} content={item.content}></ProjectBox>
            </animated.div>
          ))}
        </div>
      </div>
      <div className="inline md:hidden">
        <div className="h-full grid grid-cols-2 2xl:grid-cols-4 gap-4 items-center justify-center ">
          {defaultProjectText.map((item, index) => (
            <div key={index}>
              <PhoneProjectBox title={item.title} content={item.content}></PhoneProjectBox>
            </div>
            // <animated.div ref={ref} style={{ ...springs }} key={index}>
            // </animated.div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
