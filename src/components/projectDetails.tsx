import abyssLogo from '../../public/abyssLogo.png';
import whoisliveLogo from '../../public/whoisliveLogo.png';
import yvLogo from '../../public/yvLogo.png';
import mintyLogo from '../../public/mintyLogo.png';
import otkLogo from '../../public/otkLogo.jpg';

export const projectDetails = [
    {
        name: 'Is Anyone Live',
        logo: whoisliveLogo,
        desc: 'Is Anyone Live is a website that allows users to create lists of streamers across Twitch, Youtube, and Kick. Users have a dashboard to see which of their favorite streamers are currently live and various other details such as view count, current title, and a link to the stream. \n\nThe website uses an AWS Lambda API that uses Puppeteer to scrape needed data from various pages to display on the dashboard.',
        tags: 'Javascript · React · Puppeteer · AWS Lambda',
        websiteURL: 'https://isanyone.live/',
        repoURL: 'https://github.com/captinturtle1/who_is_live_app'
    },
    {
        name: 'Minty',
        logo: mintyLogo,
        desc: 'Minty is a desktop application that helps with Ethereum wallet automation. Includes a wallet manager that lets you create wallets and consolidate/disperse funds between them easily.\n\nIncludes a task system that allows you to create a batch of transactions to get automatically sent.\n\nHas a built-in profit/loss tracker that will gather information of a given collection with the wallets stored in the app.',
        tags: 'Typescript · Solidity · React · Electron · EthersJS',
        websiteURL: '',
        repoURL: ''
    },
    {
        name: 'otk.lol',
        logo: otkLogo,
        desc: 'A non-official dashboard for the content org OTK. Pulls information for each creator from Twitch and displays viewer count and live status on the sidebar.\n\nThe videos section pulls from Youtube to display the most recent video from each creator.\n\nDisplays various other information such as upcoming events, merch store, and each member\'s social links.',
        tags: 'Javascript · React · NextJS · AWS Amplify',
        websiteURL: 'https://otk.lol/',
        repoURL: 'https://github.com/captinturtle1/otk-website'
    },
    {
        name: 'Abyss',
        logo: abyssLogo,
        desc: 'Abyss is a paid exclusive community that provides information on upcoming NFT and	Crypto projects.\n\nCreated a membership system in which users would pay monthly to have access to a discord group using an Ethereum wallet\n\nBuilt a website and user dashboard that allows members to check their subscription status and pay for their membership.',
        tags: 'Typescript · Solidity · React · NextJS · EthersJS · AWS Amplify',
        websiteURL: 'https://www.abyssfnf.com/',
        repoURL: 'https://github.com/captinturtle1/jpeg-site-3'
    },
    {
        name: 'Yogurt Verse',
        logo: yvLogo,
        desc: 'Yogurt Verse is an NFT project in which people could buy a generative picture and lock their asset in order to gain access to an exclusive group or keep it unlocked to have it listed on a marketplace.\n\nCreated contracts to allow users to buy and then stake their tokens via a user dashboard on the project webpage.\n\nBuilt custom Discord bot to check users total staked time across tokens and add Discord roles depending on staked time.',
        tags: 'Typescript · Solidity · React · NextJS · DiscordJS · AWS Amplify · AWS DynamoDB',
        websiteURL: 'https://main.d2vm3linp7dux4.amplifyapp.com/',
        repoURL: 'https://github.com/captinturtle1/yogurt-land'
    },
]