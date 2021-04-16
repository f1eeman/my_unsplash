/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';

const MainLayout = ({
  children,
  headTitle='headTitle',
  mainTitle='mainTitle',
  innerPage = false,
  searchPage = false,
}) => (
  <>
    <Head>
      <title>{headTitle}</title>
    </Head>
    <header className="page-header">
      <div className="container">
        <nav className="page-header__main-nav main-nav">
          <Link href="/">
            <a className="main-nav__logo">
              <p className="main-nav__icon-wrapper">
                <img
                  className="main-nav__logo-icon"
                  src={innerPage ? "../images/logo-icon.svg" : "images/logo-icon.svg"}
                  width="29"
                  height="29"
                  alt="Логотип сервиса ImageStock"
                />
              </p>
              <p className="main-nav__text-wrapper">
                <img
                  className="main-nav__logo-text"
                  src={innerPage ? "../images/logo-text.png" : "images/logo-text.png"}
                  width="133"
                  height="23"
                  alt="Логотип сервиса ImageStock"
                />
              </p>
            </a>
          </Link>
          <ul className="main-nav__list site-list">
            {searchPage ? null : (
              <li className="site-list__item">
                <p className="site-list__link-wrapper">
                  <Link href="/">
                    <a className="site-list__link">
                      <svg className="site-list__link-icon" width="23" height="23" viewBox="0 0 23 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.616 14.6924H16.6364L22.1131 20.1949C22.6426 20.7245 22.6426 21.5899 22.1131 22.1195C21.5835 22.6491 20.7181 22.6491 20.1885 22.1195L14.6989 16.6299V15.6095L14.3501 15.2479C12.5418 16.7979 10.0747 17.5987 7.45264 17.1595C3.8618 16.5524 0.994304 13.5558 0.555137 9.9391C-0.116529 4.47535 4.4818 -0.122984 9.94555 0.548683C13.5622 0.98785 16.5589 3.85535 17.166 7.44618C17.6051 10.0683 16.8043 12.5353 15.2543 14.3437L15.616 14.6924ZM3.07392 8.87993C3.07392 12.0962 5.67017 14.6924 8.88642 14.6924C12.1027 14.6924 14.6989 12.0962 14.6989 8.87993C14.6989 5.66368 12.1027 3.06743 8.88642 3.06743C5.67017 3.06743 3.07392 5.66368 3.07392 8.87993Z" />
                      </svg>
                      <span className="site-list__link-text">Поиск</span>
                    </a>
                  </Link>
                </p>
              </li>
            )}
            <li className="site-list__item">
              <p className="site-list__link-wrapper">
                <Link href="/favourites">
                  <a className="site-list__link">
                    <svg className="site-list__link-icon" width="23" height="21" viewBox="0 0 23 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.0516 20.2443C12.1779 21.0597 10.8329 21.0597 9.95928 20.2325L9.83283 20.1143C3.79765 14.501 -0.145337 10.8257 0.00410514 6.24047C0.0730786 4.23147 1.07319 2.30521 2.69407 1.17072C5.7289 -0.956453 9.47646 0.0362259 11.4997 2.47065C13.5229 0.0362259 17.2705 -0.96827 20.3053 1.17072C21.9262 2.30521 22.9263 4.23147 22.9953 6.24047C23.1562 10.8257 19.2017 14.501 13.1665 20.138L13.0516 20.2443Z"/>
                    </svg>
                    <span className="site-list__link-text">Избранное</span>
                  </a>
                </Link>
              </p>
            </li>
            <li className="site-list__item">
              <p className="site-list__link-wrapper">
                <Link href="/history">
                  <a className="site-list__link">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.48933 10.0019C2.48933 4.53106 7.00683 0.100222 12.521 0.251889C17.6018 0.392722 21.8485 4.63939 21.9893 9.72022C22.141 15.2344 17.7102 19.7519 12.2393 19.7519C9.97516 19.7519 7.906 18.9827 6.25933 17.6827C5.75016 17.2927 5.71766 16.5236 6.17266 16.0686C6.56266 15.6786 7.16933 15.6461 7.60266 15.9819C8.881 16.9894 10.4952 17.5852 12.2393 17.5852C16.4643 17.5852 19.8768 14.1294 19.8227 9.89355C19.7685 5.86355 16.3777 2.47272 12.3477 2.41856C8.101 2.36439 4.656 5.77689 4.656 10.0019H6.59516C7.08266 10.0019 7.321 10.5869 6.98516 10.9227L3.96266 13.9561C3.746 14.1727 3.41016 14.1727 3.1935 13.9561L0.170998 10.9227C-0.175668 10.5869 0.0626649 10.0019 0.550165 10.0019H2.48933ZM11.156 6.48105C11.156 6.03689 11.5243 5.66855 11.9685 5.66855C12.4127 5.66855 12.781 6.03689 12.781 6.47022V10.1536L15.901 12.0061C16.2802 12.2336 16.4102 12.7319 16.1827 13.1219C15.9552 13.5011 15.4568 13.6311 15.0668 13.4036L11.6868 11.3994C11.3618 11.2044 11.156 10.8469 11.156 10.4677V6.48105Z"/>
                    </svg>
                    <span className="site-list__link-text">История поиска</span>
                  </a>
                </Link>
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main className="page-main">
      <h1 className="visually-hidden">{mainTitle}</h1>
      {children}
    </main>
  </>
);

export default MainLayout;
