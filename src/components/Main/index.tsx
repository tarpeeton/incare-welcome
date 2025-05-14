import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Application from './Application'
import SocialLinks from './SocialLinks'
import Info from './Info'
import Filials from './Filials'

const Main = () => {
  return (
    <div className='px-[22px] w-full md:px-[24px] lg:w-[820px] lg:max-w-[820px] bg-[#D7E5EE] mx-auto'>
        <Header />
        <Banner />
        <Application  />
        <SocialLinks />
        <Info  />
        <Filials />
    </div>
  )
}

export default Main