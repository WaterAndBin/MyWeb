import { type ReactElement } from 'react';
import { animated, useSpring } from '@react-spring/web';

export default function Project(): ReactElement {
  const springs = useSpring({
    from: { height: '0%' },
    to: { height: '100%' },
    config: { tension: 20 }
  });

  return (
    <div className="h-full w-full project-shadow flex justify-center">
      <div className="h-full">
        <animated.div style={{ ...springs }} className="bg-black w-2">
          <div></div>
        </animated.div>
      </div>
    </div>
  );
}
