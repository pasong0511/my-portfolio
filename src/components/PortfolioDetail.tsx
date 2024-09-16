import React from "react";

import { portfolioDatas } from "../data/data";
import { Link, useParams } from "react-router-dom";
import PrevNextNavigation from "./PrevNextNavigation";

import postData from "../data/postData.json";

export interface PortfolioItem {
    id: string;
    title: string;
    kategorie: string;
    imgSrc: string;
}

function PortfolioDetail() {
    const { id } = useParams();
    console.log("🚗id", id);

    console.log("json 데이터로 만든데이터 전체목록", postData);

    const currentItemIndex =
        id && postData.findIndex((item, index) => item.id === id);

    console.log("인덱스", currentItemIndex);

    const currentItem =
        currentItemIndex &&
        currentItemIndex !== -1 &&
        currentItemIndex !== null &&
        postData[currentItemIndex];

    const prevNextItem =
        currentItemIndex !== -1 && currentItemIndex !== null
            ? portfolioDatas.reduce<{
                  prev: PortfolioItem | null;
                  next: PortfolioItem | null;
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

    console.log("🛩하나목록 ", currentItem);

    return (
        <div>
            <h1>{currentItem.folder_name}</h1>
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
