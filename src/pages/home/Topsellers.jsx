import React, { useEffect, useState } from 'react';
import BookCard from '../Books/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../redux/features/cart/booksApi.js';

const Topsellers = () => {
  // const [books, setBooks] = useState([]);
  const { data } = useFetchAllBooksQuery();
  const books = data?.books || []; // Adjust based on actual key

  console.log(Array.isArray(books))
  const [selectedCategory, setSelectedCategory] = useState('choose a genre');
  const category = ['choose a genre', 'business', 'fiction', 'horror', 'adventure'];

  // Fetch books data
  // useEffect(() => {
  //   fetch('books.json')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBooks(data); // Set books state with fetched data
  //     })
  //     .catch((error) => console.error('Error fetching books:', error));
  // }, []);

  // Filter books based on selected category
  const filterBooks =
    selectedCategory === 'choose a genre'
      ? books
      : books.filter((book) => book.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="py-10 mx-12">
      <h2 className="text-3xl mb-6 font-semibold">Top Sellers</h2>

      {/* Category filtering */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {category.map((cat, index) => (
            <option key={index} value={cat.toLowerCase()}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Swiper for Top Sellers */}
      <Swiper
        spaceBetween={40}  // This will set the spacing between the slides
        slidesPerView={5}  // This ensures 5 slides are shown per view
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          // When screen width is >= 320px, show 1 slide
          320: {
            slidesPerView: 1,
          },
          // When screen width is >= 480px, show 2 slides
          480: {
            slidesPerView: 2,
          },
          // When screen width is >= 640px, show 3 slides
          640: {
            slidesPerView: 3,
          },
          // When screen width is >= 768px, show 4 slides
          768: {
            slidesPerView: 4,
          },
          // When screen width is >= 1024px, show 5 slides
          1024: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper"
      >
        {filterBooks.map((book, index) => (
          <SwiperSlide key={index}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Topsellers;


