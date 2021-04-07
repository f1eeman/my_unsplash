import { useState, useEffect, useRef } from "react"
import cn from 'classnames';

const Scrollable = ({ children, _class }) => {
  const [scrollingPosition, setScrollingPosition] = useState('end');
  const ref = useRef();
  const classes = cn('search__wrapper', {
    'search__wrapper--shadow-start': scrollingPosition === 'end' || scrollingPosition === 'center',
    'search__wrapper--shadow-end': scrollingPosition === 'start' || scrollingPosition === 'center',
  })

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
        // console.log('e.deltaY', e.deltaY);
        console.log('el.scrollLeft', el.scrollLeft);
        // console.log('el', el);
        if (el.scrollLeftMax <= el.scrollLeft) {
          setScrollingPosition('end');
          // console.log('end');
          return;
        }
        if (el.scrollLeft <= 10) {
          setScrollingPosition('start');
          // console.log('start');
          return;
        }
        setScrollingPosition('center');
        // console.log('scrollingPosition', scrollingPosition);
      };
      el.addEventListener('wheel', handleWheel);

      return () => el.removeEventListener('wheel', handleWheel);
    }
  })


  return (
    <div className={classes}>
      <ul className={_class} ref={ref}>
        {children}
      </ul>
    </div>
  );
};

export default Scrollable;
