const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

/**
 * MiniApp configuration object. Must follow the mini app manifest specification.
 *
 * @see {@link https://docs.base.org/mini-apps/features/manifest}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjEzNTYwOTUsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg4OTkyOWVDRmUxMDhhQTQ1MTFDODlBZTEzNTFiQTVmODQyMmU5MTBiIn0",
    payload: "eyJkb21haW4iOiJiYXNlbWluaWtpdC1hcHAudmVyY2VsLmFwcCJ9",
    signature: "MHhmNTI0MzczYzU1ZTY4MTg5NDI1ZTExNjUwYjYxMDlmY2M4OTViOTY1OGMyMjczMzA1NzdlYzU3MDZkMjA5N2E3NDgxNTI0YzA2ZjI5YjBjMDg1Y2U3Yjk5MzFhOGQxYjZmZjk4ZmU2MWNmYmU3OTJiYjM4MGExNzE4MDNjNGRhMDFi",
  },
  baseBuilder: {
    allowedAddresses: [],
  },
  miniapp: {
    version: "1",
    name: "minikit-app",
    subtitle: "",
    description: "",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "utility",
    tags: ["example"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
