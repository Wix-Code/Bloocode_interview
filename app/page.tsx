"use client"

import React, { useState } from 'react'
import GlobalPartners from './components/GlobalPartners'
import Banner from './components/Banner'
import TechSportsBusiness from './components/TechSportsBusiness'
import OtherPodcasts from './components/OtherPodcasts'
import Adds from './components/Adds'
import Educational from './components/Educational'
import EntertainmentLifeStyle from './components/EntertainmentLifeStyle'
import NewlyAddedEpisodes from './components/NewlyAddedEpisodes'
import NewsStoryTelling from './components/NewsStoryTelling'
import TrendingThisWeek from './components/TrendingThisWeek'
import EditorsPick from './components/EditorsPick'
import { usePodcastData } from './utils/podcastQuerry'
import Spinner from './components/Spinner'

const page = () => {
  const [page, setPage] = useState(1);
  const { data: podcasts, isLoading, error } = usePodcastData(page);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <Adds />
      <EditorsPick />
      <TrendingThisWeek />
      <NewlyAddedEpisodes />
      <NewsStoryTelling />
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