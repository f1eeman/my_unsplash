/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import { addToFavorite, removeFromFavorite } from '../slice';
import ScrollUpButton from './ScrollUpButton';

const PhotoCard = ({
  pictureItem,
  authorInfo,
  similarPictures,
}) => {
  const dispatch = useDispatch();
  const favoritesPicturesIdsList = useSelector((state) => state.favoriteItems.ids);

  const getIdPresenceInfoInFavoriteList = (id) => (
    favoritesPicturesIdsList.includes(Number(id)) ? 'included' : 'absent'
  );
  const mapping = {
    'included': (id) => dispatch(removeFromFavorite({ id })),
    'absent': (id) => dispatch(addToFavorite({ id })),
  };

  const { tags = null, id } = pictureItem;
  const { jpg: defaultBgPhotoCardPath } = pictureItem.path.desktopView;
  const { bgPhotoCard = defaultBgPhotoCardPath } = pictureItem.path.desktopView;

  const handleUpdateFavoritePicturesIds = (currentId) => (e) => {
    e.preventDefault();
    const IdPresenceInfoInFavoriteList = getIdPresenceInfoInFavoriteList(currentId);
    mapping[IdPresenceInfoInFavoriteList](Number(currentId));
  };

  const IdPresenceInfoInFavoriteList = getIdPresenceInfoInFavoriteList(pictureItem.id);
  const buttonUpdateFavoriteListClasses = cn(
    'picture-card__button',
    'picture-card__button--favorite',
    'btn',
    {
    'picture-card__button--included-in-favorite': IdPresenceInfoInFavoriteList === 'included',
  });

  const getClasses = (picId) => {
    const IdInfo = getIdPresenceInfoInFavoriteList(picId);
    const buttonUpdateFavoriteListClasses2 = cn(
      'user-actions__item',
      'user-actions__item--add-to-favorite',
      'btn',
      {
      'user-actions__item--included-in-favorite': IdInfo === 'included',
    });
    return buttonUpdateFavoriteListClasses2;
  }

  const renderAuthorBlock = () => (
      <div className="picture-card__author author">
        <p className="author__avatar-wrap author__avatar-wrap--card">
          <picture >
              <source media="(min-width: 1560px)" srcSet={authorInfo.avatarPath.desktopView} />
              <img className="author__avatar" src={authorInfo.avatarPath.mobileView} alt={authorInfo.alt} />
            </picture>
        </p>
        <p className="author__info">
          {authorInfo.name}
          <span className="author__email">{authorInfo.email}</span>
        </p>
      </div>
    );

  const renderActions = () => (
    <div className="picture-card__actions">
      <button
        className={buttonUpdateFavoriteListClasses}
        type="button"
        onClick={handleUpdateFavoritePicturesIds(id)}
      >
        <svg className="picture-card__icon picture-card__icon--favorite" width="27" height="21" viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0516 20.2443C12.1779 21.0597 10.8329 21.0597 9.95928 20.2325L9.83283 20.1143C3.79765 14.501 -0.145337 10.8257 0.00410514 6.24047C0.0730786 4.23147 1.07319 2.30521 2.69407 1.17072C5.7289 -0.956453 9.47646 0.0362259 11.4997 2.47065C13.5229 0.0362259 17.2705 -0.96827 20.3053 1.17072C21.9262 2.30521 22.9263 4.23147 22.9953 6.24047C23.1562 10.8257 19.2017 14.501 13.1665 20.138L13.0516 20.2443Z"/>
        </svg>
      </button>
      <button
        className="picture-card__button picture-card__button--download btn"
        type="button"
      >
        <svg className="picture-card__icon picture-card__icon--download" width="20" height="26" viewBox="0 0 20 26" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M14.25 9.45837H16.5025C17.7633 9.45837 18.3867 10.9884 17.4942 11.8809L10.9917 18.3834C10.4392 18.9359 9.54668 18.9359 8.99418 18.3834L2.49168 11.8809C1.59918 10.9884 2.23668 9.45837 3.49751 9.45837H5.75001V2.37504C5.75001 1.59587 6.38751 0.958374 7.16668 0.958374H12.8333C13.6125 0.958374 14.25 1.59587 14.25 2.37504V9.45837ZM1.50001 25.0417C0.720844 25.0417 0.0833435 24.4042 0.0833435 23.6251C0.0833435 22.8459 0.720844 22.2084 1.50001 22.2084H18.5C19.2792 22.2084 19.9167 22.8459 19.9167 23.6251C19.9167 24.4042 19.2792 25.0417 18.5 25.0417H1.50001Z" />
        </svg>
        <span className="picture-card__button-text">Download</span>
      </button>
    </div>
  );

  const renderTags = () => {
    if (tags === null) {
      return <p className="tags__alert">Теги для данной картинки не установлены</p>;;
    }

    return (
    <>
      <ul className="tags__list">
        {tags.map((tag) => <li key={tag} className="tags__item">{tag}</li>)}
      </ul>
    </>
    )
  };

  const renderSimilarPhotos = () => {
    if (tags === null) {
      return <p className="similar-pictures__alert">Похожих картинок не обнаружено</p>;;
    }

    return (
      <div className="similar-pictures__list">
        {similarPictures.map((pictureData) => {
          if (pictureData.id === pictureItem.id) {
            return null;
          }
          return (
            <div className="similar-pictures__item picture" key={pictureData.id}>
              <Link href="/photo/[id]" as={`/photo/${pictureData.id}`}>
                <a className="picture__link">
                  <div className="picture__image-box">
                    <picture >
                      <source type="image/webp" media="(min-width: 1560px)" srcSet={pictureData.path.desktopView.webp}/>
                      <source type="image/webp" srcSet={pictureData.path.mobileView.webp} />
                      <source media="(min-width: 1560px)" srcSet={pictureData.path.desktopView.jpg} />
                      <img className="picture__image" src={pictureData.path.mobileView.jpg} alt={pictureData.alt} />
                    </picture>
                  </div>
                  <div className="picture__hover-box">
                    <p className="picture__author-avatar-wrapper">
                      <picture >
                        <source media="(min-width: 1560px)" srcSet={authorInfo.avatarPath.desktopView} />
                        <img
                          className="picture__author-avatar"
                          src={authorInfo.avatarPath.mobileView}
                          alt={authorInfo.alt}
                        />
                      </picture>
                    </p>
                    <p className="picture__author-info">
                      {authorInfo.name}
                      <span className="picture__author-email">{authorInfo.email}</span>
                    </p>
                    <p className="picture__user-actions user-actions">
                      <button
                        type="button"
                        className={getClasses(pictureData.id)}
                        onClick={handleUpdateFavoritePicturesIds(pictureData.id)}
                      >
                        <svg className="user-actions__icon" width="23" height="21" viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.0516 20.2443C12.1779 21.0597 10.8329 21.0597 9.95928 20.2325L9.83283 20.1143C3.79765 14.501 -0.145337 10.8257 0.00410514 6.24047C0.0730786 4.23147 1.07319 2.30521 2.69407 1.17072C5.7289 -0.956453 9.47646 0.0362259 11.4997 2.47065C13.5229 0.0362259 17.2705 -0.96827 20.3053 1.17072C21.9262 2.30521 22.9263 4.23147 22.9953 6.24047C23.1562 10.8257 19.2017 14.501 13.1665 20.138L13.0516 20.2443Z"/>
                        </svg>
                      </button>
                      <button className="user-actions__item user-actions__item--maximize btn" type="button">
                        <svg className="user-actions__icon" width="37" height="36" viewBox="0 0 37 36" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M21.5833 4.5C21.5833 3.67157 22.2736 3 23.125 3H32.375C33.2264 3 33.9167 3.67157 33.9167 4.5V13.5C33.9167 14.3284 33.2264 15 32.375 15C31.5236 15 30.8333 14.3284 30.8333 13.5V6H23.125C22.2736 6 21.5833 5.32843 21.5833 4.5Z" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M4.62499 21C5.47643 21 6.16666 21.6716 6.16666 22.5V30H13.875C14.7264 30 15.4167 30.6716 15.4167 31.5C15.4167 32.3284 14.7264 33 13.875 33H4.62499C3.77356 33 3.08333 32.3284 3.08333 31.5V22.5C3.08333 21.6716 3.77356 21 4.62499 21Z" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M33.4651 3.43934C34.0672 4.02513 34.0672 4.97487 33.4651 5.56066L22.6735 16.0607C22.0714 16.6464 21.0953 16.6464 20.4932 16.0607C19.8912 15.4749 19.8912 14.5251 20.4932 13.9393L31.2849 3.43934C31.8869 2.85355 32.8631 2.85355 33.4651 3.43934Z" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.5068 19.9393C17.1088 20.5251 17.1088 21.4749 16.5068 22.0607L5.71512 32.5607C5.11306 33.1464 4.13693 33.1464 3.53487 32.5607C2.93281 31.9749 2.93281 31.0251 3.53487 30.4393L14.3265 19.9393C14.9286 19.3536 15.9047 19.3536 16.5068 19.9393Z" />
                        </svg>
                      </button>
                      <button className="user-actions__item user-actions__item--download btn" type="button">
                        <svg className="user-actions__icon" width="20" height="26" viewBox="0 0 20 26" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M14.25 9.45837H16.5025C17.7633 9.45837 18.3867 10.9884 17.4942 11.8809L10.9917 18.3834C10.4392 18.9359 9.54668 18.9359 8.99418 18.3834L2.49168 11.8809C1.59918 10.9884 2.23668 9.45837 3.49751 9.45837H5.75001V2.37504C5.75001 1.59587 6.38751 0.958374 7.16668 0.958374H12.8333C13.6125 0.958374 14.25 1.59587 14.25 2.37504V9.45837ZM1.50001 25.0417C0.720844 25.0417 0.0833435 24.4042 0.0833435 23.6251C0.0833435 22.8459 0.720844 22.2084 1.50001 22.2084H18.5C19.2792 22.2084 19.9167 22.8459 19.9167 23.6251C19.9167 24.4042 19.2792 25.0417 18.5 25.0417H1.50001Z" />
                        </svg>
                      </button>
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    )
  };

  const renderPictureItem = () => {
    const { desktopView: defaultImgPhotoCardPaths } = pictureItem.path;
    const { imgPhotoCard = defaultImgPhotoCardPaths } = pictureItem.path.desktopView;
    return (
      <p className="picture-card__image-wrap">
        <picture >
          <source type="image/webp" media="(min-width: 1560px)" srcSet={imgPhotoCard.webp}/>
          <source type="image/webp" srcSet={pictureItem.path.mobileView.webp} />
          <source media="(min-width: 1560px)" srcSet={imgPhotoCard.jpg} />
          <img className="picture-card__image" src={pictureItem.path.mobileView.jpg} alt={pictureItem.alt} />
        </picture>
        <button className="picture-card__button picture-card__button--fullscreen btn" type="button">
          <svg className="picture-card__icon picture-card__icon--fullscreen" width="20" height="20" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.59835 1.59835C2.30161 0.895088 3.25544 0.5 4.25 0.5H8C8.69036 0.5 9.25 1.05964 9.25 1.75C9.25 2.44036 8.69036 3 8 3H4.25C3.91848 3 3.60054 3.1317 3.36612 3.36612C3.1317 3.60054 3 3.91848 3 4.25V8C3 8.69036 2.44036 9.25 1.75 9.25C1.05964 9.25 0.5 8.69036 0.5 8V4.25C0.5 3.25544 0.895088 2.30161 1.59835 1.59835ZM16.75 1.75C16.75 1.05964 17.3096 0.5 18 0.5H21.75C22.7446 0.5 23.6984 0.895088 24.4017 1.59835C25.1049 2.30161 25.5 3.25544 25.5 4.25V8C25.5 8.69036 24.9404 9.25 24.25 9.25C23.5596 9.25 23 8.69036 23 8V4.25C23 3.91848 22.8683 3.60054 22.6339 3.36612C22.3995 3.1317 22.0815 3 21.75 3H18C17.3096 3 16.75 2.44036 16.75 1.75ZM1.75 16.75C2.44036 16.75 3 17.3096 3 18V21.75C3 22.0815 3.1317 22.3995 3.36612 22.6339C3.60054 22.8683 3.91848 23 4.25 23H8C8.69036 23 9.25 23.5596 9.25 24.25C9.25 24.9404 8.69036 25.5 8 25.5H4.25C3.25544 25.5 2.30161 25.1049 1.59835 24.4017C0.895088 23.6984 0.5 22.7446 0.5 21.75V18C0.5 17.3096 1.05964 16.75 1.75 16.75ZM24.25 16.75C24.9404 16.75 25.5 17.3096 25.5 18V21.75C25.5 22.7446 25.1049 23.6984 24.4017 24.4017C23.6984 25.1049 22.7446 25.5 21.75 25.5H18C17.3096 25.5 16.75 24.9404 16.75 24.25C16.75 23.5596 17.3096 23 18 23H21.75C22.0815 23 22.3995 22.8683 22.6339 22.6339C22.8683 22.3995 23 22.0815 23 21.75V18C23 17.3096 23.5596 16.75 24.25 16.75Z" />
          </svg>
        </button>
      </p>
    );
  };

  return (
    <>
      <section className="page-main__picture-card picture-card">
        <div className="container container--fix">
          <h2 className="picture-card__title visually-hidden">Карточка картинки</h2>
            <div className="picture-card__wrap">
              {renderAuthorBlock()}
              {renderActions()}
            </div>
            {renderPictureItem()}
        </div>
        <style jsx>{`
          @media (min-width: 1560px) {
            .picture-card {
              min-height: 1070px;
              padding-bottom: 186px;

              background-image:
                linear-gradient(0deg, rgba(40, 36, 22, 0.6), rgba(40, 36, 22, 0.6)),
                url(${bgPhotoCard});
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
            }
          }
        `}</style>
      </section>
      <section className="page-main__tags tags">
        <div className="container container--fix">
          <h2 className="tags__title">Похожие теги</h2>
          {renderTags(tags)}
        </div>
      </section>

      <section className="page-main__similar-pictures similar-pictures">
        <div className="container container--fix">
          <h2 className="similar-pictures__title">Похожие фотографии</h2>
          {renderSimilarPhotos(tags)}
          <ScrollUpButton parentClass="similar-pictures"/>
        </div>
      </section>
    </>
  );
};

export default PhotoCard;
