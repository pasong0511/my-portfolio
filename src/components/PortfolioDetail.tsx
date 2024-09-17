import React from "react";

import { useParams } from "react-router-dom";
import PrevNextNavigation from "./PrevNextNavigation";

import postData from "../data/postData.json";

export interface PortfolioItem {
    id: string;
    title: string;
    kategorie: string[];
    files: {
        id: string;
        imgSrc: string;
    }[];
    thumbnail: {
        id: string;
        imgSrc: string;
    };
}

function PortfolioDetail() {
    const { id } = useParams();

    console.log("내가 클릭한 데이터의 id", id);
    console.log("json 데이터로 만든데이터 전체목록", postData);

    const currentItemIndex = id
        ? postData.findIndex((item, index) => item.id === id)
        : -1;

    console.log("인덱스", currentItemIndex);

    const currentItem =
        currentItemIndex !== null && currentItemIndex !== -1
            ? postData[currentItemIndex]
            : null;

    console.log("🛩 아이템 목록 한개 ", currentItem);

    const prevNextItem =
        currentItemIndex !== -1 && currentItemIndex !== null
            ? postData.reduce<{
                  prev: any | null;
                  next: any | null;
              }>(
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

    if (!currentItem) return <div>존재하지 않는 게시글 입니다.</div>;

    return (
        <div>
            <h1>{currentItem.title}</h1>
            <div>
                <ul>
                    {currentItem.files.map((item) => (
                        <li key={item.id}>
                            <img src={item.imgSrc} alt="" />
                        </li>
                    ))}
                </ul>
            </div>
            <PrevNextNavigation prevNextItem={prevNextItem} />
        </div>
    );
}

export default PortfolioDetail;
