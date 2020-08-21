export const links = {
  reactNPM: "https://www.npmjs.com/package/@tlon/indigo-react",
  reactGithub: "https://github.com/urbit/indigo-react",
  tokensNPM: "https://www.npmjs.com/package/@tlon/indigo-light",
  tokensGithub: "https://github.com/urbit/indigo-tokens",
  figma: "https://www.figma.com/file/H1RAHV4KscSTnvrIiL0z8C/Indigo",
};

// @ts-ignore
export const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1234"
    : "https://indigo.urbit.org";

// @ts-ignore
// export const assetUrl = process.env.NODE_ENV === 'development'
//     ? 'http://localhost:1234'
//     : 'https://indigo.urbit.org'
