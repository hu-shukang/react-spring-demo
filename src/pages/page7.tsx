import { useSpring, animated, config, useSpringRef, useTransition, useChain } from '@react-spring/web';
import styles from '@/assets/styles/page7.module.scss';
import { useCallback, useState } from 'react';
import { openStyle, closeStyle, items } from '@/data/page7.data';

const Page7 = () => {
  const [open, setOpen] = useState(false);
  const springRef = useSpringRef();
  const transitionRef = useSpringRef();

  const transition = useTransition(open ? items : [], {
    ref: transitionRef,
    trail: 400 / items.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  const style = useSpring({
    ref: springRef,
    from: closeStyle,
    to: open ? openStyle : closeStyle,
    config: config.stiff,
  });

  useChain(open ? [springRef, transitionRef] : [transitionRef, springRef], [0, open ? 0.1 : 0.6]);

  const toggle = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  return (
    <div className={styles.wrapper} onClick={toggle}>
      <animated.div className={styles.box} style={style}>
        {transition((sty, item) => (
          <animated.div key={item} className={styles.item} style={sty}></animated.div>
        ))}
      </animated.div>
    </div>
  );
};

export default Page7;
