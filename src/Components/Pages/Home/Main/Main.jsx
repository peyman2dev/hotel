import React from 'react'
import Hero from './Hero/Hero'
import Badges from './Badges/Badges'
import Benefits from './Benefits/Benefits'
import Portfolios from './Portfolios/Portfolios'
import Banners from './Banners/Banners'
import Comments from './Comments/Comments'
import Articles from './Articles/Articles'

export default function Main() {
  return (
    <main>
      <Hero />
      <Badges />
      <Benefits />
      <Portfolios />
      <Banners />
      <Comments />
      <Articles />
    </main>
  )
}
