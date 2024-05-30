import { Buildings, Cup, LampCharge, Smallcaps } from 'iconsax-react'
import React from 'react'

export default function Benefits() {
  return (
    <section className='w-full md:flex-row child:w-[384px] lg:flex-row space-y-10 lg:space-y-0 flex-wrap flex-col text-center py-[88px] center  gap-[25px] mt-16 bg-[#EDEDED]'>
        <article>
            <div className="ic gap-6  justify-center md:justify-start flex-col md:flex-row">
                
                <div className='relative'>
                    <span className='w-[78px]  center rounded-t-full bg-[#62292d13] text-secondary-900 h-[55px]'>
                        <LampCharge size={64} className='mb-6' variant='Bulk'/>
                    </span>
                </div>
                <div>
                    <p className='font-IranSans-Bold text-lg text-black'>
                        متخصصان با تجربه
                    </p>
                </div>
            </div>
            <div>
                <p className='text-sm mt-5 w-[90%] mx-auto md:ml-auto'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                </p>
            </div>
        </article>
        <article>
            <div className="ic gap-6 justify-center md:justify-start flex-col md:flex-row ">
                <div className='relative'>
                    <span className='w-[78px]  center rounded-t-full bg-[#62292d13] text-secondary-900  h-[55px]'>
                        <Buildings size={64} className='mb-6' variant='Bulk'/>
                    </span>
                </div>
                <div>
                    <p className='font-IranSans-Bold text-lg text-black'>
                    نمونه کار های موفق
                    </p>
                </div>
                
            </div>
            <div>
                <p className='text-sm mt-5 w-[90%] mx-auto md:ml-auto'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                </p>
            </div>
        </article>
        <article>
            <div className="ic gap-6 justify-center md:justify-start flex-col md:flex-row ">
                <div className='relative'>
                    <span className='w-[78px]  center rounded-t-full bg-[#62292d13] text-secondary-900  h-[55px]'>
                        <Cup size={64} className='mb-6' variant='Bulk'/>
                    </span>
                </div>
                <div>
                    <p className='font-IranSans-Bold text-lg text-black'>
                    خدمات پس از فروش
                    </p>
                </div>
                
            </div>
            <div>
                <p className='text-sm mt-5 w-[90%] mx-auto md:ml-auto'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                </p>
            </div>
        </article>
    </section>
  )
}
