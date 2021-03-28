import { useEffect, useRef } from "react"

const Scrollable = ({ children, _class }) => {
  const ref = useRef();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const el = ref.current;
    if (el) {
      const handleWheel = (e) => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 40,
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', handleWheel);

      return () => el.removeEventListener('wheel', handleWheel);
    }
  })


  return (
    <ul className={_class} ref={ref}>
      {children}
    </ul>
  );
};

export default Scrollable;
