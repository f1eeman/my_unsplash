import cn from 'classnames';

const ScrollUpButton  = ({ parentClass }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const buttonClasses = cn(`${parentClass}__scroll-up`, 'scroll-up', 'btn');

  return (
    <button
      className={buttonClasses}
      type="button"
      onClick={handleScrollToTop}
    >
      <svg className="scroll-up__icon" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.429652 6.19931C0.107759 6.5212 0.107759 7.04309 0.429652 7.36499C0.751545 7.68688 1.27344 7.68688 1.59533 7.36499L5.95805 3.00227L5.95805 12.552C5.95805 13.0072 6.32708 13.3762 6.78231 13.3762C7.23753 13.3762 7.60656 13.0072 7.60656 12.552L7.60656 3.00227L11.9693 7.36499C12.2912 7.68688 12.8131 7.68688 13.135 7.36499C13.4568 7.04309 13.4568 6.5212 13.135 6.19931L7.36514 0.429496C7.04325 0.107603 6.52136 0.107603 6.19946 0.429497L0.429652 6.19931Z" />
      </svg>
    </button>
  );
};

export default ScrollUpButton;
