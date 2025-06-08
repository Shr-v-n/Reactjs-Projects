// import React, { useEffect } from 'react'
// import styles from './FoodCard.module.css'
// const FoodCard = props => {
    

//   return (
//     <div className={styles.foodCard}>
        
//         <img src={props.image} className={styles.imageContainer}/>

//         <div className={styles.infoContainer}>
//             <h1>{props.name}</h1>
//             <p>{props.description}</p>

//         </div>

//     </div>
//   )
// }

// export default FoodCard

import React from 'react';
import styles from './FoodCard.module.css';

const FoodCard = props => {
  const rating = props.rating;
  const fullStars = Math.floor(rating);
  const partial = rating - fullStars;

  const renderStars = () => {
    return [...Array(5)].map((_, i) => {
      if (i < fullStars) {
        return <span key={i} className={styles.star}>&#9733;</span>; // full yellow
      } else if (i === fullStars && partial > 0) {
        return (
          <span key={i} className={styles.star}>
            <span className={styles.partialStar} style={{ width: `${partial * 100}%` }}>&#9733;</span>
            <span className={styles.emptyStar}>&#9733;</span>
          </span>
        );
      } else {
        return <span key={i} className={styles.emptyStar}>&#9733;</span>; // white
      }
    });
  };

  return (
    <div className={styles.foodCard}>
      <img src={props.image} className={styles.imageContainer} />
      <div className={styles.infoContainer}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p className={styles.price}>{props.price}</p>
        <div className={styles.ratingContainer}>
            
          {renderStars()}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
