import Profile from "./components/pages/Profile";
import Portfolio from "./components/pages/Portfolio";
import PortfolioDetail from "./components/pages/PortfolioDetail";

import { FaInstagram, FaFacebookF } from "react-icons/fa";

import { RouteConfig } from "./types/route";

const routes: RouteConfig[] = [
    {
        path: "/content/profile",
        component: Profile,
        name: "Profile",
    },
    {
        path: "/portfolio",
        component: Portfolio,
        name: "Portfolio",
    },
    {
        path: "/portfolio/:id",
        component: PortfolioDetail,
    },
    {
        path: "/SNS",
        component: PortfolioDetail,
        name: "SNS",
        submenu_display: false,
        children: [
            {
                name: "Instagram",
                externalLink: "https://www.instagram.com",
                icon: <FaInstagram />,
            },
            {
                name: "Facebook",
                externalLink: "https://www.facebook.com",
                icon: <FaFacebookF />,
            },
        ],
    },
];

export default routes;
