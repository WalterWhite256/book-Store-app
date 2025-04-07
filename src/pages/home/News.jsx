import React from 'react';
import new1 from '../../assets/news/news-1.png'
import new2 from '../../assets/news/news-2.png'
import new3 from '../../assets/news/news-3.png'
import new4 from '../../assets/news/news-4.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Navigation} from 'swiper/modules';
import { Link } from 'react-router-dom';
const News = () => {
    // JSON data for news
    const newsData = [
        {
            id: 1,
            title: "New Book Releases for Spring 2025",
            description: "Discover the latest book releases coming to your shelves this Spring. From thrilling mysteries to captivating romances, this season has something for every reader!",
            author: "Jane Doe",
            publishedDate: "2025-03-20",
            imageUrl: new1,  // Image path is relative to public folder
            url: "/news/new-book-releases-for-spring-2025"
        },
        {
            id: 2,
            title: "Top 10 Bestsellers of 2025 So Far",
            description: "Check out the books that are making waves in the literary world this year! These top 10 bestsellers have been flying off the shelves and are dominating the charts.",
            author: "John Smith",
            publishedDate: "2025-03-18",
            imageUrl: new2,  // Image path is relative to public folder
            url: "/news/top-10-bestsellers-of-2025-so-far"
        },
        {
            id: 3,
            title: "Author Spotlight: Meet Emma Roberts",
            description: "In this month's Author Spotlight, we interview Emma Roberts, the best-selling author of 'Whispers in the Dark'. Get a behind-the-scenes look at her writing process and upcoming projects.",
            author: "Emily White",
            publishedDate: "2025-03-15",
            imageUrl: new3,  // Image path is relative to public folder
            url: "/news/author-spotlight-meet-emma-roberts"
        },
        {
            id: 4,
            title: "How to Build Your Reading Habit",
            description: "Struggling to read more books? We have expert tips on how to develop and maintain a reading habit. Start your journey to becoming a more consistent reader today!",
            author: "Sarah Johnson",
            publishedDate: "2025-03-10",
            imageUrl: new4,  // Image path is relative to public folder
            url: "/news/how-to-build-your-reading-habit"
        },
    ];

    return (
        <div className="news-container py-10">
            <h2 className='text-2xl font-semibold mb-6'>News</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                freeMode={true}
                navigation={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    newsData.map((item, index)=>
                         <SwiperSlide key={index}>
                            <div className='flex flex-col sm:flex-row-reverse gap-12 container items-center'>
                                <div className='py-4'>
                                    <Link>
                                        <h3 className='text-lg font-semibold mb-6 hover:text-blue-500'>{item.title}</h3>
                                    </Link>
                                    <div className='w-12 h-[4px] bg-yellow-400 mb-6'></div>
                                    <p>{item.description}</p>
                                </div>
                                {/* image */}
                                <div className='flex-shrink-0'>
                                    <img src={item.imageUrl} alt="" className='w-full object-cover'/>
                                </div>
                            </div>
                         </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default News;
