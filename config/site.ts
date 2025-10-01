export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next Pizza",
  description: "The most delicious pizza here.",
  navItems: [
    {
      label: "",
      href: "/",
    },
  ],
  navMenuItems: [
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/Bazelit",
  },
};
