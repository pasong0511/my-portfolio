export interface RouteConfig {
    path: string;
    component: React.ComponentType<any>;
    name?: string;
    externalLink?: string;
    submenu_display?: boolean;
    children?: {
        name?: string;
        externalLink?: string;
        icon?: React.ReactNode;
    }[];
}
