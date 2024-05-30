import React from 'react'
import Title from '../../../../Reusable/Title/Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Article from '../../../../Reusable/Article/Article'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'iconsax-react'

SwiperCore.use([Autoplay])

export default function Articles() {
  const articles = [
    {
      "cover": "/images/products/1.png",
      "title": "طراحی نمای برج مدرن",
      "caption": "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
    },
    {
      "cover": "/images/products/2.png",
      "title": "طراحی نمای برج مدرن",
      "caption": "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
    },
    {
      "cover": "/images/products/3.png",
      "title": "طراحی نمای برج مدرن",
      "caption": "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
    },
    {
      "cover": "/images/products/4.png",
      "title": "طراحی نمای برج مدرن",
      "caption": "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
    },
    {
      "cover": "/images/products/5.png",
      "title": "طراحی نمای برج مدرن",
      "caption": "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
    },
    {
      "cover": "/images/products/6.png",
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
    <section className='between mb-[100px] gap-5 container my-[100px]'>
      <div className='min-w-[40%]'>
        <Title title={"بلاگ"} />
        <p className="mt-4 font-IranSans-DemiBold">
          آخرین اخبار معماری و طراحی در بخش بلاگ ما
        </p>
        <p className="mt-5 font-IranSans-Light text-zinc-600">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
        <div className='mt-10 ic gap-6'>
    <Link className='ic gap-3 duration-150 hover:bg-primary-900 hover:text-white px-4 py-2 rounded-lg border-2 border-primary-900 text-primary-900'>
    <span>
    ورود به وبلاگ
    </span>
    <span>
      <ArrowLeft className='rotate--45'/>
    </span>
    </Link>

        </div>
      </div>
      <div className='min-w-[60%]'>
        <Swiper
          modules={Autoplay}
          autoplay={true}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            }
          }}
          spaceBetween={16}
          draggable={true}
        >
          {articles.map((item, index) => (
            <SwiperSlide key={index}>
              <Article {...item}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
