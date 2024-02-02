import { useSpring, animated, config } from '@react-spring/web';
import styles from '@/assets/styles/page6.module.scss';
import { useCallback, useState } from 'react';
import { openStyle, closeStyle } from '@/data/page6.data';

const Page6 = () => {
  const [open, setOpen] = useState(false);
  const style = useSpring({
    from: closeStyle,
    to: open ? openStyle : closeStyle,
    config: config.stiff,
  });

  const clickHandler = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  return (
    <div className={styles.wrapper} onClick={clickHandler}>
      <animated.div className={styles.box} style={style}></animated.div>
    </div>
  );
};

export default Page6;
