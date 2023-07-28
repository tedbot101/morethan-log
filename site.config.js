const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Lyan Moe Kyaw / Ted",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "CyberSecurity Student",
    bio: "I develop everything using node.",
    email: "lyanmoekyaw@gmail.com",
    linkedin: "lyan-moe-kyaw-bb2982157",
    github: "tedbot101",
    instagram: "",
  },
  projects: [
    {
      name: `OSCP`,
      href: "https://www.credential.net/2bd5f414-7d54-438b-8439-ccf348494222",
    },
  ],
  // blog setting (required)
  blog: {
    title: "ted-dump",
    description: "welcome to ted-dump!",
  },

  // CONFIG configration (required)
  link: "https://morethan-log-eight-xi.vercel.app",
  since: "", // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
