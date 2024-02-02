import { animated, useSpringValue } from '@react-spring/web';

const Page2 = () => {
  const x = useSpringValue(0, {
    config: {
      mass: 1,
      friction: 10,
      tension: 1000,
    },
  });

  const handleClick = () => {
    x.start(100);
  };

  const handleReset = () => {
    x.reset();
  };

  return (
    <>
      <button onClick={handleClick}>start</button>
      <button onClick={handleReset}>reset</button>
      <animated.div style={{ x: x }}>Hello World</animated.div>
    </>
  );
};

export default Page2;
