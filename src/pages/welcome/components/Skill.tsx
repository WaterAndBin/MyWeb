import { type ReactElement } from 'react';
import { useTrail, animated, config, useInView } from '@react-spring/web';
import '../welcome.css';

export default function Skill(): ReactElement {
  const skillData: string[] = ['HTML', 'JavaScript/TypeScript', 'CSS/Tailwand/Unocss', 'Vue2/Vue3/Nuxt3/Pinia/Vuex', 'React18/Next.js', '微信小程序', 'Node.js/Knex/Multer/..', 'Git/算法/Diff/AST'];
  const experiencedData: string[] = [
    '工作已超过1年+',
    '开发与上线过 10+ 个项目',
    '同程实习半年以上',
    '与多个前端、后端、产品合作沟通',
    '搭建属于自己的组件库',
    '搭建富文本编辑器',
    '蓝桥杯Java省二，web省三',
    '优秀学生三等奖'
  ];

  const [ref, inView] = useInView({
    once: true
  });

  const trail = useTrail(skillData.length, {
    from: { transform: 'translate3d(200px,0,0)', opacity: 0 },
    to: inView ? { transform: 'translate3d(0,0,0)', opacity: 1 } : { transform: 'translate3d(200px,0,0)', opacity: 0 },
    config: config.stiff
  });

  return (
    <div className="h-full skill-bg">
      <div className="flex justify-around items-center flex-col md:flex-row h-full text-xl md:text-2xl text-center">
        <div className="h-100">
          <div className="h-full flex-col">
            <animated.div ref={ref} className="transition-all text-2xl">
              经历
            </animated.div>
            <ul>
              {trail.map((props, index) => (
                <animated.li key={index} style={props} className={`transition-all ${inView ? 'duration-0' : 'duration-0'}`}>
                  {experiencedData[index]}
                </animated.li>
              ))}
            </ul>
          </div>
        </div>
        <div className="h-100">
          <div className="h-full flex-col">
            <animated.div ref={ref} className="transition-all text-2xl">
              技术栈
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
    </div>
  );
}
