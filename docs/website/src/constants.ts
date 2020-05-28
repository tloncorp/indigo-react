
const links = {
    reactNPM: 'https://www.npmjs.com/package/@tlon/indigo-react',
    reactGithub: 'https://github.com/urbit/indigo-react',
    tokensNPM: 'https://www.npmjs.com/package/@tlon/indigo-tokens',
    tokensGithub: 'https://github.com/urbit/indigo-tokens',
}

const url = process.env.NODE_ENV === 'development'
    ? 'localhost:1234'
    : 'indigo.urbit.org'

console.log(process.env.NODE_ENV, url )

const baseurl = 'localhost:1234'

export {
    links,
    baseurl,
    url,
}