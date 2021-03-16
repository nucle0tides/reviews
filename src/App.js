import React, { useState, useEffect } from 'react';
import Reviews from './Reviews';
import './App.css';

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const facilities = [
    {
      id: 1,
      name: 'Valentine Self Storage',
      address: {
        address1: '3607 Pennsylvania Ave',
        address2: '',
        city: 'Kansas City',
        state: 'MO',
        postal: '64111'
      }
    },
    {
      id: 2,
      name: 'Penn Valley Storage',
      address: {
        address1: '3051 Penn Valley Dr',
        address2: '',
        city: 'Kansas City',
        state: 'MO',
        postal: '64111'
      },
    },
    {
      id: 3,
      name: 'Westport Self Storage',
      address: {
        address1: '609 W 39th Terrace',
        address2: '',
        city: 'Kansas City',
        state: 'MO',
        postal: '64111'
      },
    },
  ];

  useEffect(() => {
    let timeout;
    if (review !== undefined && Object.keys(review) && Object.keys(review).length !== 0 && !isLoading) {
      const facility = facilities.find(fac => fac.id === review.id);
      if (facility) {
        setIsLoading(true);
        timeout = setTimeout(() => {
          setIsLoading(false);
          setReviews((prevReviews) => [
            {
              ...review,
              facility,
            },
            ...prevReviews,
          ]);
          setReview(undefined);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [review]);

  /*
     Hi! Start your exercise in the Reviews.js component.
   */
  return (
    <div className="App">
      <Reviews
        facilities={facilities}
        reviews={reviews}
        onSubmit={setReview}
        loading={isLoading}
      />
    </div>
  );
};

export default App;
