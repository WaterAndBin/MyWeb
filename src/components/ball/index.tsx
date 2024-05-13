import { useRef, useEffect, useState, type ReactElement } from 'react';

interface BallStyle {
  color?: string;
}

export default function Ball(props: BallStyle): ReactElement {
  const ballRef = useRef<HTMLElement>(null);
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
  const direction = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 }; // 随机方向
  const speed = 2; // 缓慢速度

  // 在组件渲染时生成新的初始位置
  useEffect(() => {
    const randomX = Math.random() * (window.innerWidth - 145); // 假设小球宽度为100px
    const randomY = Math.random() * (window.innerHeight - 145); // 假设小球高度为100px
    setBallPosition({ x: randomX, y: randomY });
  }, []); // 空依赖数组表示此effect只会在首次渲染后运行

  useEffect(() => {
    const animate = (): void => {
      if (ballRef.current) {
        ballPosition.x += direction.x * speed;
        ballPosition.y += direction.y * speed;

        // 边界处理，防止小球移出视口
        if (ballPosition.x < 0 || ballPosition.x > window.innerWidth - 145) {
          direction.x *= -1;
        }
        if (ballPosition.y < 0 || ballPosition.y > window.innerHeight - 145) {
          direction.y *= -1;
        }

        ballRef.current.style.transform = `translate(${ballPosition.x}px, ${ballPosition.y}px)`;

        requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      // 清除动画，如果需要的话
    };
  }, [ballPosition]);

  return <span ref={ballRef} className={`welcome-ball blur-xl absolute ${props?.color ?? 'bg-black'}`}></span>;
}
