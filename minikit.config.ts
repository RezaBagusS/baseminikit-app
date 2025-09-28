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
    allowedAddresses: ["0xa7Ceb6b18920C5912F3Fe5A0882e44F0E70AF951"],
  },
  miniapp: {
    version: "1",
    name: "minikit-app",
    subtitle: "base-minikit-app",
    description: "description base-minikit-app",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "utility",
    tags: ["example"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "#minikitapp",
    ogTitle: "Base-Minikit-App",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
