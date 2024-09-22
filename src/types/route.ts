export interface RouteConfig {
    path: string;
    component: React.ComponentType<any>;
    name?: string;
    externalLink?: string;
    children?: {
        name?: string;
        externalLink?: string;
    }[];
}
