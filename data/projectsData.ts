interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Tarot Cat',
    description: `An AI-powered tarot divination app. Draw a card and get an AI-generated 
    interpretation of your fortune, love, career, and more.`,
    imgSrc: '/static/images/tarot-cat.png',
    href: 'http://139.196.30.138:3001/',
  },
  {
    title: 'Voice Clone',
    description: `An AI voice cloning demo. Upload a voice sample, type any text, 
    and hear it spoken in the cloned voice with realistic intonation.`,
    imgSrc: '/static/images/voice-clone.png',
    href: 'http://139.196.30.138:8080/',
  },
  {
    title: 'WeighIn',
    description: `A weekly weight loss tracker with leaderboard. Log your weekly 
    progress and compete with others on the leaderboard.`,
    imgSrc: '/static/images/weighIn.png',
    href: 'http://139.196.30.138:3000/',
  },
  {
    title: 'LuLuCoin',
    description: `This is a simple demo of a web application built with Next.js 15 
    and Foundry framework for ERC20 smart contracts.`,
    imgSrc: '/static/images/lulucoin.png',
    href: 'https://lulu-coin-frontend-azj1wzom3-wushengyouhans-projects.vercel.app/',
  },
  {
    title: 'Pixel Grid',
    description: `This is a pixel grid Dapp deployed on the Monad testnet, 
    where you can claim a grid by choosing your favorite color or avatar!`,
    imgSrc: '/static/images/pixelgrid.png',
    href: 'https://pixel-grid-chain-topaz.vercel.app/',
  },
  {
    title: 'Donate Blink',
    description: `This is a donation page based on Blockchain Links, where users can donate monad test coins.`,
    imgSrc: '/static/images/donateblink.png',
    href: 'https://donate-blink-monad.vercel.app/',
  },
]

export default projectsData
