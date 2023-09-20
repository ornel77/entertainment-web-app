import IconTV from '../../assets/icon-category-tv.svg';
import IconMovie from '../../assets/icon-category-movie.svg';
import Dot from '../../assets/dot.svg';

import './TrendingCard.scss';
import { useState } from 'react';

const TrendingCard = ({ trending }) => {
  const [isBookmarked, setIsBookmarked] = useState(trending.isBookmarked)
  const handleBookmark = () => {
    setIsBookmarked(prev => !prev)
    trending.isBookmarked = isBookmarked
  }
  console.log(trending.isBookmarked);

  return (
    <article className='trend-card-container'>
      <img
        src={trending.thumbnail?.trending?.large}
        alt=''
        className='thumbnail'
      />
      <div className='bookmark-icon'>
        <button className='btn btn-book' onClick={handleBookmark}>
          {!isBookmarked ? (
            <svg width='12' height='14' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z'
                stroke='#FFF'
                stroke-width='1.5'
                fill='none'
              />
            </svg>
          ) : (
            <svg width='12' height='14' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z'
                fill='#FFF'
              />
            </svg>
          )}
        </button>
      </div>
      <div className='details'>
        <div className='row-details'>
          <span className='year'> {trending.year} </span>
          <img src={Dot} alt='' />{' '}
          <div className='category'>
            <img
              src={trending.category === 'Movie' ? IconMovie : IconTV}
              alt=''
            />
            <span>
              {' '}
              {trending.category === 'Movie' ? 'Movie' : 'TV Series'}{' '}
            </span>
          </div>
          <img src={Dot} alt='' />
          <span className='rating'> {trending.rating}</span>
        </div>
        <h3 className='title'> {trending.title} </h3>
      </div>
    </article>
  );
};

export default TrendingCard;
