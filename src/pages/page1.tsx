import { animated, useSpring } from '@react-spring/web';

const Page1 = () => {
  const [style, api] = useSpring(() => ({
    from: { x: 0, background: '#ff6d6d', width: 80, height: 80, borderRadius: 8 },
  }));

  const handleClick = () => {
    api.start({
      from: { x: 0, background: '#ff6d6d' },
      to: { x: 200, background: '#0094ff' },
    });
  };

  return (
    <>
      <animated.div onClick={handleClick} style={style} />
    </>
  );
};

export default Page1;
