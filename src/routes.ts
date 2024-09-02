import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import PortfolioDetail from "./components/PortfolioDetail";

const routes = [
    {
        path: "/content/profile",
        component: Profile,
    },
    {
        path: "/portfolio",
        component: Portfolio,
    },
    {
        path: "/portfolio/:id",
        component: PortfolioDetail,
    },
];

export default routes;
