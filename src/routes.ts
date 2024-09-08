import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import PortfolioDetail from "./components/PortfolioDetail";

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
