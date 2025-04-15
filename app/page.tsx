import React from 'react'
import GlobalPartners from './components/GlobalPartners'
import Banner from './components/Banner'
import TechSportsBusiness from './components/TechSportsBusiness'
import OtherPodcasts from './components/OtherPodcasts'
import Adds from './components/Adds'
import Educational from './components/Educational'
import EntertainmentLifeStyle from './components/EntertainmentLifeStyle'

const page = () => {
  return (
    <div>
      <Adds />
      <Educational />
      <EntertainmentLifeStyle />
      <TechSportsBusiness />
      <OtherPodcasts />
      <Banner />
      <GlobalPartners />
    </div>
  )
}

export default page