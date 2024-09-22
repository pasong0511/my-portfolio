import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import PrevNextNavigation from "../navigation/PrevNextNavigation";

import postData from "../../data/postData.json";

import { PostItem } from "../../types/post";

interface PrevNextItem {
    prev: PostItem | null;
    next: PostItem | null;
}

function PortfolioDetail() {
    const { id } = useParams();

    const currentItemIndex = id
        ? postData.findIndex((item, index) => item.id === id)
        : -1;

    const currentItem =
        currentItemIndex !== null && currentItemIndex !== -1
            ? postData[currentItemIndex]
            : null;

    const prevNextItem: PrevNextItem =
        currentItemIndex !== -1 && currentItemIndex !== null
            ? postData.reduce<any>(
                  (acc, item, index, arr) => {
                      if (index === currentItemIndex) {
                          acc.prev = arr[index - 1] || null;
                          acc.next = arr[index + 1] || null;
                      }
                      return acc;
                  },
                  { prev: null, next: null }
              )
            : { prev: null, next: null };

    // 유튜브 링크를 임베드용 링크로 변환하는 함수
    const getYouTubeEmbedUrl = (url: string) => {
        let videoId = "";
        if (url.includes("youtube.com")) {
            const urlParams = new URLSearchParams(new URL(url).search);
            videoId = urlParams.get("v") || "";
        } else if (url.includes("youtu.be")) {
            videoId = url.split("/").pop() || "";
        }
        return `https://www.youtube.com/embed/${videoId}`;
    };

    useEffect(() => {
        // 컴포넌트가 렌더링될 때마다 스크롤을 맨 위로 올림
        window.scrollTo(0, 0);
    }, [id]);

    if (!currentItem) return <div>존재하지 않는 게시글 입니다.</div>;

    return (
        <div>
            <h1>{currentItem.title}</h1>
            <h2>{currentItem?.subTitle}</h2>
            <h2>{currentItem?.date}</h2>
            <div>
                <ul>
                    {currentItem.files.map((item) => (
                        <li key={item.id}>
                            {item.type === "image" && (
                                <img src={item.imgSrc} alt="" />
                            )}
                            {item.type === "video" && (
                                <video controls>
                                    <source
                                        src={item.imgSrc}
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                            {item.type === "video_link" && item.link && (
                                <iframe
                                    width="560"
                                    height="315"
                                    src={getYouTubeEmbedUrl(item.link)}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <PrevNextNavigation prevNextItem={prevNextItem} />
        </div>
    );
}

export default PortfolioDetail;
