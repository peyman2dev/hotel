import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import isActived from '../../../../Logic/Functions/isActived'
import { ArrowLeft, User } from 'iconsax-react'

export default function Win() {
    return (
        <nav className='bg-white  ic rounded-2xl px-8 py-8 shadow-xl  container between'>
            <div>
                <Link to={'/'} className='ic gap-2'>
                    <div className="w-12 center h-12 my-auto text-white whitespace-pre- flex-wrap bg-primary-900 rounded-md">
                        <span className='pr-6 font-IranSans-DemiBold'>
                            صــــــــ
                        </span>
                    </div>
                    <div>
                        <p className='text-sm font-IranSans-Bold text-secondary-900'>
                            گروه صاد
                        </p>
                        <p className='text-secondary-500 text-xs'>
                            معماری و طراحی
                        </p>
                    </div>
                </Link>

            </div>

            <div className='ic gap-8'>
                <NavLink to={'/'} className={isActived("relative before:absolute before:w-2 before:h-2 before:rounded-full before:content-[''] center before:top-[100%] before:bg-primary-800 text-primary-900")}>
                    خانه
                </NavLink>

                <NavLink to={'/services'} className={isActived("relative before:absolute before:w-2 before:h-2 before:rounded-full before:content-[''] center before:top-[100%] before:bg-primary-800 text-primary-900")}>
                    خدمات
                </NavLink>

                <NavLink to={'/projects'} className={isActived("relative before:absolute before:w-2 before:h-2 before:rounded-full before:content-[''] center before:top-[100%] before:bg-primary-800 text-primary-900")}>
                    پروژه ها
                </NavLink>

                <NavLink to={'/blogs'} className={isActived("relative before:absolute before:w-2 before:h-2 before:rounded-full before:content-[''] center before:top-[100%] before:bg-primary-800 text-primary-900")}>
                    بلاگ
                </NavLink>

                <NavLink to={'/contact'} className={isActived("relative before:absolute before:w-2 before:h-2 before:rounded-full before:content-[''] center before:top-[100%] before:bg-primary-800 text-primary-900")}>
                    تماس با ما
                </NavLink>

            </div>

<div className='ic gap-4'>
    <Link className='px-6 py-2.5 ic gap-2 text-primary-900 font-IranSans-DemiBold duration-150 hover:bg-primary-900 hover:text-white text-sm rounded-lg border-2 border-primary-900'>
        <User size={16} variant='Bold' />
        ورود یا عضویت
    </Link>
    <Link className='ic text-sm px-4 py-2.5 rounded-lg bg-secondary-900 text-white  gap-2'>
        <span>
            مشاوره رایگان
        </span>
        <span>
            <ArrowLeft className='rotate-45'/>
        </span>
    </Link>
</div>
        </nav>
    )
}
