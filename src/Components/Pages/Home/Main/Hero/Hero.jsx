import React from 'react'
import Title from '../../../../Reusable/Title/Title'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'iconsax-react'

export default function Hero() {
    return (
        <section className='between mb-[72px] flex-col-reverse lg w-[90%] mx-auto lg:flex-row lg:child:w-1/2 gap-10 container mt-8'>
            <div>
                <Title title={"مهم ترین هدف تیم ما چیست ؟"} />
                <section className='mt-8'>
                    <h2 className='font-Kalameh-Bold md:leading-[69px] lg:leading-[74px] md:text-5xl sm:text-4xl text-3xl lg:text-6xl'>
                        در خانه ای با <span className='text-pretty text-primary-900'>طراحی</span> <br className='md:visible md:block hidden invisible'/>
                        مدرن و فضـایی دلنشین زندگی کنید !
                    </h2>
                    <p className="mt-10 text-xs sm:text-sm md:text-base  font-IranSans-Light text-zinc-600">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </p>
                    <div className="ic gap-6 mt-8 md:mt-[66px]">
                        <Link className='ic gap-1 font-IranSans-Medium px-5 py-2.5 rounded-lg bg-secondary-900 text-white' to={'/'}>
                            <span>
                                مشاوره رایگان
                            </span>
                            <span>
                                <ArrowLeft className='rotate-45'/>
                            </span>
                        </Link>
                        <Link className='text-secondary-600 text-sm'>
                        راهنمایی بیشتر
                        </Link>
                    </div>
                </section>
            </div>
            <div>
                <img src="/images/hero.png" alt="خانه" />
            </div>
        </section>
    )
}
