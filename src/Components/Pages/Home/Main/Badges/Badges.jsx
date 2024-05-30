import { CalendarTick, Profile2User, ShoppingCart } from 'iconsax-react'
import React from 'react'

export default function Badges() {
    return (
        <div className='center child-ic flex-col md:flex-row w-[90%]  child:gap-6 my-8 mx-auto gap-[64px]'>
            <div>
                <span className='text-primary-900'>
                    <Profile2User size={48} />
                </span>
                <div>
                    <p className='font-IranSans-Bold text-3xl'>
                        +450
                    </p>
                    <p className='text-zinc-600 text-sm'>
                        مشتری وفادار
                    </p>
                </div>
            </div>
            <div>
                <span className='text-primary-900'>
                    <ShoppingCart size={48} />
                </span>
                <div>
                    <p className='font-IranSans-Bold text-3xl'>
                        +2000
                    </p>
                    <p className='text-zinc-600 text-sm'>
                    محصولات ارسالی موفق
                    </p>
                </div>
            </div>
            <div>
                <span className='text-primary-900'>
                    <CalendarTick size={48} />
                </span>
                <div>
                    <p className='font-IranSans-Bold text-3xl'>
                        +850
                    </p>
                    <p className='text-zinc-600 text-sm'>
                      مشاوره موفق
                    </p>
                </div>
            </div>
        </div>
    )
}
