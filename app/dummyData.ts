interface Link {
  id: number;
  name: string;
  url: string;
}

interface Category { 
  id: number;
  name: string;
  img: string;
}

interface Podcasts { 
  id: number;
  name: string;
  img: string;
  desc: string;
  part: string;
}

interface ExploreCategory { 
  id: number;
  name: string;
  img: string;
}

export const Links: Link[]  = [
  {
    id: 1,
    name: 'Home',
    url: '/',
  },
  {
    id: 2,
    name: 'Categories',
    url: '/categories',
  },
  {
    id: 3,
    name: 'Podcasts',
    url: '/podcast',
  },
  {
    id: 4,
    name: 'About Us',
    url: '/about',
  },
]

export const categories: Category[] = [
  {
    id: 1,
    name: 'Fitness Focus',
    img: '/files/im.png',
  },
  {
    id: 2,
    name: 'Fitness Focus',
    img: '/files/im.png',
  },
  {
    id: 3,
    name: 'Fitness Focus',
    img: '/files/im.png',
  },
  {
    id: 4,
    name: 'Fitness Focus',
    img: '/files/im.png',
  },
  {
    id: 5,
    name: 'Fitness Focus',
    img: '/files/im.png',
  },
  {
    id: 6,
    name: 'Fitness Focus',
    img: '/files/im.png',
  },
  {
    id: 7,
    name: 'Fitness Focus',
    img: '/files/im.png',
  },
]

export const podcasts: Podcasts[] = [
  {
    id: 1,
    name: 'Fitness Focus',
    img: '/files/im.png',
    desc: "Cardio Vascular Exercise Part 3",
    part: "Part 3",
  },
  {
    id: 2,
    name: 'Fitness Focus',
    img: '/files/im.png',
    desc: "Cardio Vascular Exercise Part 3",
    part: "Part 3",
  },
  {
    id: 3,
    name: 'Fitness Focus',
    img: '/files/im.png',
    desc: "Cardio Vascular Exercise Part 3",
    part: "Part 3",
  },
  {
    id: 4,
    name: 'Fitness Focus',
    img: '/files/im.png',
    desc: "Cardio Vascular Exercise Part 3",
    part: "Part 3",
  },{
  id: 5,
  name: 'Fitness Focus',
  img: '/files/im.png',
  desc: "Cardio Vascular Exercise Part 3",
  part: "Part 3",
},
{
  id: 6,
  name: 'Fitness Focus',
  img: '/files/im.png',
  desc: "Cardio Vascular Exercise Part 3",
  part: "Part 3",
},
{
  id: 7,
  name: 'Fitness Focus',
  img: '/files/im.png',
  desc: "Cardio Vascular Exercise Part 3",
  part: "Part 3",
},
{
  id: 8,
  name: 'Fitness Focus',
  img: '/files/im.png',
  desc: "Cardio Vascular Exercise Part 3",
  part: "Part 3",
},
]

export const exploreCategory: ExploreCategory[] = [
  {
    id: 1,
    name: 'News & Storytelling',
    img: '/files/cat.png',
  },
  {
    id: 2,
    name: 'Entertainment & Lifestyle',
    img: '/files/im.png',
  },
  {
    id: 3,
    name: 'Tech, Sport & Business',
    img: '/files/cat1.png',
  },
  {
    id: 4,
    name: 'Other podcasts',
    img: '/files/cat3.png',
  }
]