import { type ReactElement } from 'react';
import { animated, useSpring } from '@react-spring/web';

export default function Project(): ReactElement {
  const springs = useSpring({
    from: { height: '0%' },
    to: { height: '100%' },
    config: { tension: 20 }
  });

  return (
    <div className="h-full w-full bg-[#212121]">
      <div className="h-full box-border grid grid-cols-2 gap-4 items-center justify-center">
        {/* <animated.div style={{ ...springs }} className="bg-black w-2">
          <div></div>
        </animated.div> */}
        <div className="w-full h-full">
          <div className="projectBox ">123123</div>
        </div>
        <div className="projectBox">123123</div>
        <div className="projectBox">123123</div>
        <div className="projectBox">123123</div>
      </div>
    </div>
  );
}
