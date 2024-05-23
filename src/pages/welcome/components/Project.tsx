import { type ReactElement } from 'react';
import { animated, useSpring, useInView, config } from '@react-spring/web';
import ProjectBox from '@/components/ProjectBox';
import defaultProjectText from '@/utils/projectText';
import PhoneProjectBox from '@/components/PhoneProjectBox';

export default function Project(): ReactElement {
  const [ref, inView] = useInView({
    once: true
  });

  const springs = useSpring({
    from: { transform: 'translate3d(0,-50px,0)', opacity: 0 },
    to: inView ? { transform: 'translate3d(0,0,0)', opacity: 1 } : { transform: 'translate3d(0,-50px,0)', opacity: 0 },
    config: config.stiff
  });

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
            <animated.div ref={ref} style={{ ...springs }} key={index}>
              <PhoneProjectBox title={item.title} content={item.content}></PhoneProjectBox>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
}
