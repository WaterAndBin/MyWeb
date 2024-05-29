import Info from './components/Info';
import Project from './components/Project';
import Skill from './components/Skill';
import End from './components/End';
import { useEffect, useRef, type ReactElement } from 'react';
import './welcome.css';
import isPhone from '@/utils/isPhone';

export default function Test(): ReactElement {
  /**
   * 轮播页面索引
   */
  let scrollIndex: number = 3;
  // let timer: ReturnType<typeof setTimeout>;

  const pagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * 处理滚动事件
     */
    const handleScroll = (event: WheelEvent): void => {
      // 阻止默认的滚动行为
      event.preventDefault();
      // 判断滚动方向，这里使用 event.deltaY，但注意不同浏览器可能有差异
      if (event.deltaY < 0) {
        scrollIndex = scrollIndex - 1 < 0 ? 0 : scrollIndex - 1;
      } else {
        const childCount = pagesRef?.current ? (pagesRef.current.children as HTMLCollectionOf<HTMLElement>).length : 0;
        scrollIndex = scrollIndex + 1 > childCount - 1 ? childCount - 1 : scrollIndex + 1;
      }
      const offsetHeight = pagesRef?.current ? (pagesRef.current.children[scrollIndex] as HTMLElement).offsetHeight : 0;
      window.scrollTo({
        top: scrollIndex * offsetHeight,
        behavior: 'smooth'
      });
    };

    const INNER_BOX_CLASS = 'allow-scroller';
    let lastTime = 0;
    /**
     * 阻止鼠标滚动
     */
    const preventScroll = (event: WheelEvent): void => {
      const targetElement = (event.target as HTMLElement) || null; // 显式转换为HTMLElement或null
      /* 检查 allow-scroller 是不是在盒子里面 */
      if (targetElement && !targetElement.closest(`.${INNER_BOX_CLASS}`)) {
        event.preventDefault();
        const now = Date.now();
        /* 防止过快的滚动 */
        if (now - lastTime > 500) {
          handleScroll(event);
          lastTime = now;
        }
      }
    };

    /**
     * 处理窗口大小尺寸
     */
    const handleResize = (): void => {
      const offsetHeight = pagesRef?.current ? (pagesRef.current.children[scrollIndex] as HTMLElement).offsetHeight : 0;
      window.scrollTo({
        top: scrollIndex * offsetHeight
      });
      checkScreen();
    };

    /**
     * 检查是否是手机还是电脑端，如果是电脑端添加属性隐藏滚动条
     */
    const checkScreen = (): void => {
      if (!isPhone()) {
        document.body.classList.add('special-body');
      } else {
        document.body.classList.remove('special-body');
      }
    };

    /* 鼠标滚轮滚动事件 */
    window.addEventListener('wheel', preventScroll, { passive: false });
    /* 窗口大小变化事件 */
    window.addEventListener('resize', handleResize);
    /* 默认跳到top为0，防止刷新的时候缓存了某个高度 */
    const offsetHeight = pagesRef?.current ? (pagesRef.current.children[scrollIndex] as HTMLElement).offsetHeight : 0;
    window.scrollTo({
      top: offsetHeight * scrollIndex
    });
    checkScreen();

    return () => {
      console.log('销毁');
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={pagesRef} className="text-2xl min-h-screen scroll-smooth overflow-hidden">
      <div className="h-screen scroll-smooth">
        {/* 信息 */}
        <Info></Info>
      </div>
      <div className="h-screen scroll-smooth">
        {/* 技能点 */}
        <Skill></Skill>
      </div>
      <div className="h-screen scroll-smooth">
        {/* 项目 */}
        <Project></Project>
      </div>
      <div className="h-screen scroll-smooth">
        <End></End>
      </div>
    </div>
  );
}
