export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "xryuseix's website",
  description: "I'm xryuseix, a software engineer and security researcher.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Me",
      href: "/about",
      disabled: true,
    },
    {
      label: "Accounts",
      href: "/accounts",
    },
    // {
    //   label: "Apps",
    //   href: "/apps",
    //   disabled: true,
    // },
  ],
  navMenuItems: [
    {
      label: "About Me",
      href: "/about",
      disabled: true,
    },
    {
      label: "Accounts",
      href: "/accounts",
    },
    // {
    //   label: "Apps",
    //   href: "/apps",
    //   disabled: true,
    // },
  ],
  links: {
    github: "https://github.com/xryuseix",
    twitter: "https://x.com/ryusei_ishika",
    discord: "https://discordapp.com/users/425905959723073536",
  },
};
