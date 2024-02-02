import { useTransition, animated } from '@react-spring/web';
import { useCallback, useState } from 'react';

function MyComponent({ data }: { data: number[] }) {
  const transitions = useTransition(data, {
    keys: item => item,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transitions((style, item) => <animated.div style={style}>{item}</animated.div>);
}

const Page3 = () => {
  const [data, setData] = useState([1, 2, 3]);
  const push = useCallback(() => {
    setData(prev => [...prev, prev.length + 1]);
  }, []);

  const pop = useCallback(() => {
    setData(prev => {
      const newArr = [...prev];
      newArr.pop();
      return newArr;
    });
  }, []);
  return (
    <>
      <button onClick={push}>push</button>
      <button onClick={pop}>pop</button>
      <MyComponent data={data} />
    </>
  );
};

export default Page3;
