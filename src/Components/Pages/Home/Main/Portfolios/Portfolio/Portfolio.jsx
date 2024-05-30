import { ArrowLeft } from 'iconsax-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Portfolio(props) {
  return (
    <article className='lg:w-[384px] bg-white shadow-2xl  pb-5 shadow-black/5 rounded-2xl overflow-hidden'>
        <header className='w-full h-[256px]'>
            <img src={props.cover} alt=""  className='h-[256px] object-cover w-full'/>
        </header>
        <main className='px-8  mt-5'>
    <h4 className='font-IranSans-Bold'>
    طراحی نمای برج مدرن 
    </h4>
    <p className='text-sm mt-5 text-zinc-500'>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر
    </p>
        </main>
        <footer className=" text-secondary-800 mt-4 mr-auto justify-end flex pl-8">
            <Link className='ic gap-2'>
                <span>
            مشاهده 
                </span>
                <span>
                    <ArrowLeft />
                </span>
            </Link>
        </footer>
    </article>
  )
}
