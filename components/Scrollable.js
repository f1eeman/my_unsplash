import { useState, useEffect, useRef } from "react"
import cn from 'classnames';

const Scrollable = ({ children, _class }) => {
  const [scrollingPosition, setScrollingPosition] = useState('end');
  const ref = useRef();
  const classes = cn('search__wrapper', {
    'search__wrapper--shadow-start': scrollingPosition !== 'start',
    'search__wrapper--shadow-end': scrollingPosition !== 'end',
  })

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const el = ref.current;
    if (el) {
      const handleWheel = (e) => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 3,
          behavior: 'smooth',
        });

        if (el.scrollLeftMax <= el.scrollLeft) {
          setScrollingPosition('end');
        }

        if (el.scrollLeft <= 10) {
          setScrollingPosition('start');
        }

        if (el.scrollLeftMax > el.scrollLeft && el.scrollLeft > 10) {
          setScrollingPosition('center');
        }
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
