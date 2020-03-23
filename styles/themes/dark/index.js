import Github from "public/static/icons/social-gh-2.svg";
import Twitter from "public/static/icons/social-tw-2.svg";
import Linkedin from "public/static/icons/social-in-2.svg";
import StackOverflow from "public/static/icons/social-so-2.svg";
import Menu from "public/static/icons/menu-2.svg";

const Dark = {
  id: 2,
  style: "dark",
  colors: {
    background: "#202124",
    inner_background: "#282C2F",
    primary: "#FFFFFF",
    inner_primary: "#E2E2E2",
    selected: "#F7BC31",
    highlighted: "#FBD73F",
  },
  icons: {
    menu: <Menu />,
  },
  social_icons: {
    github: <Github />,
    twitter: <Twitter />,
    linkedin: <Linkedin />,
    stackoverflow: <StackOverflow />,
  },
  fonts: {
    title: "Merriweather",
    body: "Open Sans",
    mono: "Inconsolata, monospace",
  },
};

export default Dark;
