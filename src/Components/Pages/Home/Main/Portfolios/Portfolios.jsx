import React from 'react'
import Title from '../../../../Reusable/Title/Title'
import { Swiper, SwiperSlide} from 'swiper/react'
import Portfolio from './Portfolio/Portfolio'
import 'swiper/css'


  
export default function Portfolios() {
  const portfolios = [
    {
      "cover": "/public/images/products/1.png",
      "title": "طراحی نمای برج مدرن",
      "caption": "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
    },
    {
      "cover": "/public/images/products/2.png",
      "title": "طراحی نمای برج مدرن",
      "caption": "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
    },
    {
      "cover": "/public/images/products/3.png",
      "title": "طراحی نمای برج مدرن",
      "caption": "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
    },
    {
      "cover": "/public/images/products/4.png",
      "title": "طراحی نمای برج مدرن",
      "caption": "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
    },
    {
      "cover": "/public/images/products/5.png",
      "title": "طراحی نمای برج مدرن",
      "caption": "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
    },
    {
      "cover": "/public/images/products/6.png",
      "title": "طراحی نمای برج مدرن",
      "caption": "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
    },
    {
      "cover": "/public/images/products/7.png",
      "title": "طراحی نمای برج مدرن",
      "caption": "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
    },

  ]
  return (
    <div>
      <header className=" my-16">
        <div className="center">

          <Title title={"نمونه کار ها"} />
        </div>
        <div className="mt-4 center  font-IranSans-Bold ic gap-6 text-lg">

          <div className="relative center ">
            <div className="absolute -right-[35%] -top-3">
              <img src="/public/images/icons/arrowleft.png" alt="" />
            </div>
            <p>
              پروژه های انجام شده توسط تیم ما
            </p>
          </div>
        </div>
      </header>
      <main className='container w-[90%] child:rounded-2xl'>
        <Swiper 
          className='my-10 flex'
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },

          }}
          slidesPerView={1}
        >
          {
            portfolios.map((item, index) => (
              <SwiperSlide >
                <Portfolio {...item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </main>
    </div>
  )
}
