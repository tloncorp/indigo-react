
const links = {
    reactNPM: 'https://www.npmjs.com/package/@tlon/indigo-react',
    reactGithub: 'https://github.com/urbit/indigo-react',
    tokensNPM: 'https://www.npmjs.com/package/@tlon/indigo-tokens',
    tokensGithub: 'https://github.com/urbit/indigo-tokens',
}

const baseurl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:1234'
    : 'https://indigo.urbit.org'

const assetUrl = process.env.NODE_ENV === 'development'
? 'http://localhost:1234'
: 'https://indigo.urbit.org'


export {
    links,
    baseurl,
    assetUrl,
}