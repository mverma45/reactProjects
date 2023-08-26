import React from "react";
import styles from "./Business.module.css";

const business = {
  imageSrc: 
  "https://media.istockphoto.com/id/1472620857/photo/tasty-butter-chicken-curry-dish-from-indian-cuisine.jpg?s=1024x1024&w=is&k=20&c=zT7eGc5_NZs9hgQNzdgPeqcJFRbH8nlEzyNCtCu_K6g=",
  name: "Manny's Pizza",
  address: "1857 West Colombo Drive",
  city: "Midvale",
  state: "UT",
  zipcode: "84047",
  category: "Italian",
  rating: 4.9,
  reviewCount: 789,
};

const Business = () => {
  return (
    <div className={styles.Business}>
      <div className={styles.imageContainer}>
        <img src={business.imageSrc} alt="" />
      </div>
      <h2>{business.name}</h2>
      <div className={styles.Business.information}>
      <div className={styles.Business.BusinessAddress}>
        <p>{business.address}</p>
        <p>{business.city}</p>
        <p>{`${business.state} ${business.zipcode}`}</p>
      </div>
      </div>
      <div className={styles.BusinessReviews}>
        <h3>{business.category.toUpperCase()}</h3>
        <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
        <p>{`${business.reviewCount} reviews`}</p>
      </div>
    </div>
  )
}

export default Business;