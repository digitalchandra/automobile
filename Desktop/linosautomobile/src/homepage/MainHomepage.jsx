import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeSlider from '../components/HomeSlider'
import CarBrand from '../components/CarBrand'
import ResentPost from '../components/ResentPost'
import Whyus from '../components/Whyus'
import Recomended from '../components/Recomended'

export default function MainHomepage() {
  return (
    <>
    <Header/>
      <HomeSlider/>
      <CarBrand/>
      <ResentPost/>
      <Whyus/>
      <Recomended/>
    <Footer/>
    </>
  )
}
