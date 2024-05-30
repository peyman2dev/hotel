import { ArrowLeft } from 'iconsax-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Banners() {
    return (
        <section className='container my-[100px] lg:my-[214px] flex-col space-y-[30px] w-[90%] lg:space-y-0 lg:flex-row text-white child:px-[30px] child:w-full lg:child:w-1/2 gap-8 between child:bg-gradient-to-r'>
            <div className='lg:h-[215px] py-5 w-full between child:w-1/2 relative rounded-2xl lg:rounded-r-[42px] from-primary-400 via-primary-600 to-primary-900'>
                <img src="/images/icons/box.png" className='mb-10 absolute lg:top-[-35%] -top-10 -right-[24px]' alt="" />
              
                <div></div>
                <div>
                    <p className="lg:text-3xl  font-Kalameh-Bold leading-snug">
                        بهترین استفاده از فضای کوچک خانه و اتاق خواب
                    </p>
                    <Link className='px-5 max-w-max text-xs sm:text-sm mt-4 py-2 rounded-lg  border border-white ic gap-2'>
                        <span>
                            مشاوره بگیرید
                        </span>
                        <span>
                            <ArrowLeft className='rotate-45' />
                        </span>
                    </Link>
                </div>
            </div>
            <div className='lg:h-[215px] py-5 w-full relative between child:w-1/2 rounded-2xl lg:rounded-l-[42px] from-secondary-400 via-secondary-600 to-secondary-900'>
                <div>
                    <p className="lg:text-3xl font-Kalameh-Bold leading-snug">
                    طـراحی و معماری  برج های اداری بــا نمــای شـــیشه ای
                    </p>
                    <Link className='px-5 max-w-max text-xs sm:text-sm mt-4 py-2 rounded-lg  border border-white ic gap-2'>
                        <span>
                            مشاوره بگیرید
                        </span>
                        <span>
                            <ArrowLeft className='rotate-45' />
                        </span>
                    </Link>
                </div>
                <div></div>
                <img src="/images/icons/apartment.png" className='mb-10 absolute left-2  sm:left-8 h-[358px w-[258px] bottom-[-28%] lg:bottom-[-25.5%]' alt="" />
            </div>
        </section>
    )
}
