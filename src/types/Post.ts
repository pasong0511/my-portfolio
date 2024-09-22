export interface FileItem {
    id: number;
    type: "image" | "video" | "video_link";
    imgSrc?: string;
    link?: string;
}
export interface Thumbnail {
    id: number;
    imgSrc: string;
}

export interface PostItem {
    title: string;
    subTitle: string;
    date: string;
    id: string;
    files: FileItem[];
    thumbnail: Thumbnail;
    kategorie: string[];
}

export type PostData = PostItem[];
