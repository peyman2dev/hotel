import React from 'react'
import Title from '../../../../Reusable/Title/Title'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Comment from '../../../../Reusable/Comment/Comment'

export default function Comments() {
    return (
        <section className="my-[100px] container">
            <header >
                <div className="center">
                    <Title title={"نظرات مشتریان"} />
                </div>
                <div className="center mt-4 text-xl font-IranSans-Bold">

                    <p className="mx-auto">
                        نظر مشتریان درباره خدمات ما چیست؟
                    </p>
                </div>
            </header>
            <main className='mt-10'>
                <Swiper 
                slidesPerView={1}
                breakpoints={{
                    576: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView:3
                    }
                }}
                spaceBetween={16}
                >
                    <SwiperSlide>
                        <Comment />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Comment />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Comment />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Comment />
                    </SwiperSlide>
                </Swiper>
            </main>
        </section>
    )
}
