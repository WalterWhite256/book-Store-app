import React, { useEffect, useState } from 'react';
import BookCard from '../Books/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../redux/features/cart/booksApi';
const Recommended = () => {
    // const [books, setBooks] = useState([]);

    // // Fetch books data
    // useEffect(() => {
    //     fetch('books.json')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setBooks(data); // Set books state with fetched data
    //         })
    //         .catch((error) => console.error('Error fetching books:', error));
    // }, []);
    const { data } = useFetchAllBooksQuery();
      const books = data?.books || []; // Adjust based on actual key
    
      console.log("Recommended wala",Array.isArray(books))
    return (
        <div className="py-10 mx-12">
            <h2 className="text-3xl mb-6 font-semibold">Recommended</h2>

            {/* Swiper for Recommended Books */}
            <Swiper
                spaceBetween={40}  // Spacing between the slides
                slidesPerView={5}  // 5 slides per view
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }}
                className="mySwiper"
            >
                {books.length > 0 &&
                    books.slice(8, 18).map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default Recommended;
