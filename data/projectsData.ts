interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'LuLuCoin',
    description: `This is a simple demo of a web application built with Next.js 15 
    and Foundry framework for ERC20 smart contracts.`,
    imgSrc: '/static/images/lulucoin.png',
    href: 'https://lulu-coin-frontend-azj1wzom3-wushengyouhans-projects.vercel.app/',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
