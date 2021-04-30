/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import { addToFavorite, removeFromFavorite } from '../slice';
import ScrollUpButton from './ScrollUpButton';

const Photos = ({ picturesData, favoritePage = null, mainPage = null }) => {
  const dispatch = useDispatch();
  const favoritesPicturesIdsList = useSelector((state) => state.favoriteItems.ids);
  const [picturesView, setPicturesView] = useState('list');

  const getIdPresenceInfoInFavoriteList = (id) => (
    favoritesPicturesIdsList.includes(Number(id)) ? 'included' : 'absent'
  );

  const mapping = {
    'included': (id) => dispatch(removeFromFavorite({ id })),
    'absent': (id) => dispatch(addToFavorite({ id })),
  };

  const handleToggleViewToList = () => {
    setPicturesView('list');
  };
  const handleToggleViewToGallery = () => {
    setPicturesView('gallery');
  };
  const handleUpdateFavoritePicturesIds = (currentId) => (e) => {
    e.preventDefault();
    const IdPresenceInfoInFavoriteList = getIdPresenceInfoInFavoriteList(currentId);
    mapping[IdPresenceInfoInFavoriteList](Number(currentId));
  };

  const picturesListClasses = cn('pictures__wrapper', {
    'pictures__wrapper--gallery': picturesView === 'gallery',
    'pictures__wrapper--list': picturesView === 'list',
    'pictures__wrapper--favorite': favoritePage === true && picturesView === 'gallery',
  });

  const buttonToggleViewListClasses = cn('pictures__toggle-view', 'pictures__toggle-view--list', {
    'pictures__toggle-view--active': picturesView === 'list',
  });

  const buttonToggleViewGalleryClasses = cn('pictures__toggle-view', 'pictures__toggle-view--gallery', {
    'pictures__toggle-view--active': picturesView === 'gallery',
  });

  const renderPictures = () => (
    picturesData.map((pictureData) => {
      const IdPresenceInfoInFavoriteList = getIdPresenceInfoInFavoriteList(pictureData.id);
      const buttonUpdateFavoriteListClasses = cn ('user-actions__item', 'user-actions__item--favorite', 'btn', {
        'user-actions__item--included-in-favorite': IdPresenceInfoInFavoriteList === 'included',
      });
      return (
        <div className="pictures__item picture" key={pictureData.id}>
          <div className="picture__box">
            <picture >
              <source type="image/webp" media="(min-width: 1560px)" srcSet={pictureData.path.desktopView.webp}/>
              <source type="image/webp" srcSet={pictureData.path.mobileView.webp} />
              <source media="(min-width: 1560px)" srcSet={pictureData.path.desktopView.jpg} />
              <img className="picture__image" src={pictureData.path.mobileView.jpg} alt={pictureData.alt} />
            </picture>
          </div>
          <div className="picture__hover-box">
            <Link href="/photo/[id]" as={`/photo/${pictureData.id}`}>
              <a className="picture__link">
                <p className="picture__author-avatar-wrapper">
                  <picture >
                    <source media="(min-width: 1560px)" srcSet='images/avatar-desktop.jpg' />
                    <img
                      className="picture__author-avatar"
                      src='images/avatar-mobile.jpg'
                      alt='Автор изображения: Вадим Садовский'
                    />
                  </picture>
                </p>
                <p className="picture__author-info">
                  Vadim Sadovski
                  <span className="picture__author-email">@vadimsadovski</span>
                </p>
                <p className="picture__user-actions user-actions">
                  <button
                    type="button"
                    className={buttonUpdateFavoriteListClasses}
                    onClick={handleUpdateFavoritePicturesIds(pictureData.id)}
                  >
                    <svg className="user-actions__icon user-actions__icon--favorite" width="27" height="21" viewBox="0 0 23 21"  xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.0516 20.2443C12.1779 21.0597 10.8329 21.0597 9.95928 20.2325L9.83283 20.1143C3.79765 14.501 -0.145337 10.8257 0.00410514 6.24047C0.0730786 4.23147 1.07319 2.30521 2.69407 1.17072C5.7289 -0.956453 9.47646 0.0362259 11.4997 2.47065C13.5229 0.0362259 17.2705 -0.96827 20.3053 1.17072C21.9262 2.30521 22.9263 4.23147 22.9953 6.24047C23.1562 10.8257 19.2017 14.501 13.1665 20.138L13.0516 20.2443Z"/>
                    </svg>
                  </button>
                  <button className="user-actions__item user-actions__item--maximize btn" type="button">
                    <svg className="user-actions__icon user-actions__icon--maximize" width="37" height="36" viewBox="0 0 37 36"  xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M21.5833 4.5C21.5833 3.67157 22.2736 3 23.125 3H32.375C33.2264 3 33.9167 3.67157 33.9167 4.5V13.5C33.9167 14.3284 33.2264 15 32.375 15C31.5236 15 30.8333 14.3284 30.8333 13.5V6H23.125C22.2736 6 21.5833 5.32843 21.5833 4.5Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.62499 21C5.47643 21 6.16666 21.6716 6.16666 22.5V30H13.875C14.7264 30 15.4167 30.6716 15.4167 31.5C15.4167 32.3284 14.7264 33 13.875 33H4.62499C3.77356 33 3.08333 32.3284 3.08333 31.5V22.5C3.08333 21.6716 3.77356 21 4.62499 21Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M33.4651 3.43934C34.0672 4.02513 34.0672 4.97487 33.4651 5.56066L22.6735 16.0607C22.0714 16.6464 21.0953 16.6464 20.4932 16.0607C19.8912 15.4749 19.8912 14.5251 20.4932 13.9393L31.2849 3.43934C31.8869 2.85355 32.8631 2.85355 33.4651 3.43934Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.5068 19.9393C17.1088 20.5251 17.1088 21.4749 16.5068 22.0607L5.71512 32.5607C5.11306 33.1464 4.13693 33.1464 3.53487 32.5607C2.93281 31.9749 2.93281 31.0251 3.53487 30.4393L14.3265 19.9393C14.9286 19.3536 15.9047 19.3536 16.5068 19.9393Z" />
                    </svg>
                  </button>
                  <button className="user-actions__item user-actions__item--download btn" type="button">
                    <svg className="user-actions__icon user-actions__icon--downlaod" width="20" height="26" viewBox="0 0 20 26"  xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.25 9.45837H16.5025C17.7633 9.45837 18.3867 10.9884 17.4942 11.8809L10.9917 18.3834C10.4392 18.9359 9.54668 18.9359 8.99418 18.3834L2.49168 11.8809C1.59918 10.9884 2.23668 9.45837 3.49751 9.45837H5.75001V2.37504C5.75001 1.59587 6.38751 0.958374 7.16668 0.958374H12.8333C13.6125 0.958374 14.25 1.59587 14.25 2.37504V9.45837ZM1.50001 25.0417C0.720844 25.0417 0.0833435 24.4042 0.0833435 23.6251C0.0833435 22.8459 0.720844 22.2084 1.50001 22.2084H18.5C19.2792 22.2084 19.9167 22.8459 19.9167 23.6251C19.9167 24.4042 19.2792 25.0417 18.5 25.0417H1.50001Z" />
                    </svg>
                    </button>
                </p>
              </a>
            </Link>
          </div>
        </div>
      );
      }));

  const renderLoader = () => (
    <p className="pictures__loader-wrap">
      <svg className="pictures__loader" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11 0C11.5523 0 12 0.447715 12 1V5C12 5.55228 11.5523 6 11 6C10.4477 6 10 5.55228 10 5V1C10 0.447715 10.4477 0 11 0Z" fill="black"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M11 16C11.5523 16 12 16.4477 12 17V21C12 21.5523 11.5523 22 11 22C10.4477 22 10 21.5523 10 21V17C10 16.4477 10.4477 16 11 16Z" fill="black"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.22289 3.22307C3.61341 2.83254 4.24658 2.83254 4.6371 3.22307L7.4671 6.05307C7.85762 6.44359 7.85762 7.07676 7.4671 7.46728C7.07658 7.85781 6.44341 7.85781 6.05289 7.46728L3.22289 4.63728C2.83236 4.24676 2.83236 3.61359 3.22289 3.22307Z" fill="black"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M14.5329 14.5331C14.9234 14.1426 15.5566 14.1426 15.9471 14.5331L18.7771 17.3631C19.1676 17.7537 19.1676 18.3868 18.7771 18.7773C18.3866 19.1679 17.7534 19.1679 17.3629 18.7773L14.5329 15.9473C14.1424 15.5568 14.1424 14.9237 14.5329 14.5331Z" fill="black"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 11C0 10.4477 0.447715 10 1 10H5C5.55228 10 6 10.4477 6 11C6 11.5523 5.55228 12 5 12H1C0.447715 12 0 11.5523 0 11Z" fill="black"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M16 11C16 10.4477 16.4477 10 17 10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H17C16.4477 12 16 11.5523 16 11Z" fill="black"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M7.4671 14.5331C7.85762 14.9237 7.85762 15.5568 7.4671 15.9473L4.6371 18.7773C4.24658 19.1679 3.61341 19.1679 3.22289 18.7773C2.83236 18.3868 2.83236 17.7537 3.22289 17.3631L6.05289 14.5331C6.44341 14.1426 7.07658 14.1426 7.4671 14.5331Z" fill="black"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M18.7771 3.22307C19.1676 3.61359 19.1676 4.24676 18.7771 4.63728L15.9471 7.46728C15.5566 7.85781 14.9234 7.85781 14.5329 7.46728C14.1424 7.07676 14.1424 6.44359 14.5329 6.05307L17.3629 3.22307C17.7534 2.83254 18.3866 2.83254 18.7771 3.22307Z" fill="black"/>
      </svg>
    </p>
  );

  return (
    <section className="pictures">
      <div className="container">
        <h2 className="visually-hidden">Список картинок</h2>
        <div className="pictures__toggle-view-box">
          <button
            className={buttonToggleViewListClasses}
            type="button"
            onClick={handleToggleViewToList}
          >
            <span className="visually-hidden">Включить отображение списоком</span>
          </button>
          <button
            className={buttonToggleViewGalleryClasses}
            type="button"
            onClick={handleToggleViewToGallery}
          >
            <span className="visually-hidden">Включить отображение плиткой</span>
          </button>
        </div>
        <div className={picturesListClasses}>
          {renderPictures()}
        </div>
        {mainPage ? null : <ScrollUpButton parentClass="pictures"/>}
        {mainPage ? renderLoader() : null}
      </div>
    </section>
  );
};

export default Photos;
