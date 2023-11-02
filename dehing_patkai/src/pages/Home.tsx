import React, { useState, useEffect } from 'react';
import AdditionalImages from './page_partials/AdditionalImages';
import Categories from './page_partials/Categories';
import CoverImage from './page_partials/CoverImage';
import Description from './page_partials/Description';
import Discount from './page_partials/Discount';
import Id from './page_partials/Id';
import Name from './page_partials/Name';
import Price from './page_partials/Price';
import RatingTotal from './page_partials/RatingTotal';
import Reviews from './page_partials/Reviews';
import StarRatings from './page_partials/StarRatings';

function Home() {
  let [data, setData] = useState(`Data Loading ...`);
  let [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/booksdata")
    .then(response => response.json())
    .then(data => setBooks(data))
    setData('');
  }, []);

  return (
    <><div>{data}</div>
    <div>
      <ul>
        {books.map((book)=>{
          return <li key={book._id}>
            <Id id={book.id} />
            <Name name={book.name} />
            <Price price={book.price} />
            <Discount discount={book.discount} />
            <AdditionalImages images={book.additional_images}/>
            <Categories categories={book.categories} category_details={book.categories_details} />
            <CoverImage cover_image={book.cover_image_index} />
            <Description description={book.description} />
            <RatingTotal rating_total={book.rating_total} />
            <Reviews reviews={book.reviews} />
            <StarRatings star_ratings={book.star_ratings} />
          </li>
        })}
      </ul>
    </div>
    </>
  );
}

export default Home;