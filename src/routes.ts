import Profile from "./components/pages/Profile";
import Portfolio from "./components/pages/Portfolio";
import PortfolioDetail from "./components/pages/PortfolioDetail";

const routes = [
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
        //name: "Portfolio Detail",
    },
    {
        path: "/SNS",
        component: PortfolioDetail,
        name: "SNS",
        children: [
            {
                name: "Instagram",
                externalLink: "https://www.instagram.com",
            },
            {
                name: "Facebook",
                externalLink: "https://www.facebook.com",
            },
        ],
    },
];
export default routes;
