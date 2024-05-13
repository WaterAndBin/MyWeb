import { type ReactElement } from 'react';
import { useTrail, animated, config, useInView } from '@react-spring/web';
import '../welcome.css';

export default function Skill(): ReactElement {
  const skillData = ['相关技术一', '相关技术二', '相关技术三', '相关技术四'];

  const [ref, inView] = useInView({
    once: true
  });

  const trail = useTrail(skillData.length, {
    from: { transform: 'translate3d(200px,0,0)', opacity: 0 },
    to: inView ? { transform: 'translate3d(0,0,0)', opacity: 1 } : { transform: 'translate3d(200px,0,0)', opacity: 0 },
    config: config.stiff
  });

  return (
    <div className="h-full">
      <div className="flex justify-around items-center h-full">
        <div className="h-full mt-10">
          <animated.div ref={ref} className="transition-all">
            Hello world
          </animated.div>
          <ul>
            {trail.map((props, index) => (
              <animated.li key={index} style={props} className={`transition-all ${inView ? 'duration-0' : 'duration-0'}`}>
                {skillData[index]}
              </animated.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
