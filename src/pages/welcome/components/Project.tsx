import { type ReactElement } from 'react';
import { animated, useInView } from '@react-spring/web';
import ProjectBox from '@/components/ProjectBox';
import defaultProjectText from '@/utils/projectText';
import PhoneProjectBox from '@/components/PhoneProjectBox';

export default function Project(): ReactElement {
  const [ref, springs] = useInView(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 }
    }),
    { once: true }
  );

  return (
    <div className="h-full w-full bg-[#e8e8e8] overflow-hidden">
      {/* 桌面端的项目经历 */}
      <div className="hidden md:inline">
        <div className="h-full grid grid-cols-2 2xl:grid-cols-4 gap-4 items-center justify-center ">
          {defaultProjectText.map((item, index) => (
            <animated.div ref={ref} style={{ ...springs }} key={index}>
              <ProjectBox title={item.title} content={item.content}></ProjectBox>
            </animated.div>
          ))}
        </div>
      </div>
      {/* 移动端的项目经历 */}
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
      </div>
    </div>
  );
}
