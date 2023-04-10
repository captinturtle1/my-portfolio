import abyssLogo from '../../public/abyssLogo.png';
import jsLogo from '../../public/jsLogo.png';
import yvLogo from '../../public/yvLogo.png';
import mintyLogo from '../../public/mintyLogo.png';
import otkLogo from '../../public/otkLogo.jpg';

export const projectDetails = [
    {
        name: 'Minty',
        logo: mintyLogo,
        desc: 
        `Minty is a desktop application that helps with Ethereum wallet automation. Includes a wallet manager that lets you create wallets and consolidate/disperse funds between them easily.\n\nIncludes a task system that allows you to create a group of custom transactions to get automatically sent.\n\nHas a built-in stats tracker that will gather profit/loss of a given collection with the wallets stored in the app. \n\nBuilt with Electron, React, Tailwindcss, and Ethersjs`,
        tags: 'Front-end · Back-end',
        websiteURL: ''
    },
    {
        name: 'otk.lol',
        logo: otkLogo,
        desc: 'A non-official dashboard for the content org OTK. Pulls information about current streamer statuses from the Twitch API to display viewer count and live status on sidebar and show a main stream on the hero section of the page.\n\nAlso pulls from Youtube API to display most recent videos from each member\'s channels.\n\nDisplays various other information such as upcoming events, merch store, and member social details.',
        tags: 'Front-end · Back-end',
        websiteURL: 'https://otk.lol/'
    },
    {
        name: 'Abyss',
        logo: abyssLogo,
        desc: 'Built a single page website including information about the group. Built a user dashboard that allows users to check their subscription expiration and renew.\n\nBuilt back-end membership contract that keeps allows members to pay for membership and for funds to be withdrawn by contract owner.\n\nBuilt Back-end API calls contract to get expiration status of users and automatically change roles in Discord group.\n\nBuilt with NextJS, Tailwindcss, Solidity, and Ethersjs',
        tags: 'Front-end · Back-end',
        websiteURL: 'https://www.abyssfnf.com/'
    },
    {
        name: 'Yogurt Verse',
        logo: yvLogo,
        desc: 'Built single page website that gives information about the project\n\nBuilt user dashboard to let users view their inventory. Dashboard allows staking and un-staking via staking contract.\n\nCreated main contract and staking contract to allow users to mint and then stake through the user dashboard.\n\nBuilt custom Discord bot to check user staked time across items and add roles depending on staked time.\n\nBuilt with NextJS, Tailwindcss, Solidity and Ethersjs',
        tags: 'Front-end · Back-end',
        websiteURL: 'https://www.yogurtverse.xyz/'
    },
    {
        name: 'JPEG Squared',
        logo: jsLogo,
        desc: 'Created a single page website to display information about a group. Website pulled from OpenSea API to display an up-to-date auction. Allows pass purchase through website that talks to back-end contract.\n\nCreated contract to purchase member passes to authenticate users in a Discord group.\n\nBuilt with React, Web3js, and Solidity',
        tags: 'Front-end · Back-end',
        websiteURL: ''
    },
]