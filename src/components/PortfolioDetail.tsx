import React from "react";

import { portfolioDatas } from "../data/data";
import { Link, useParams } from "react-router-dom";
import PrevNextNavigation from "./PrevNextNavigation";

export interface PortfolioItem {
    id: number;
    title: string;
    kategorie: string;
    imgSrc: string;
}

function PortfolioDetail() {
    const { id } = useParams();
    console.log("🚗", id);

    console.log(portfolioDatas);

    const currentItemIndex =
        id && portfolioDatas.findIndex((item, index) => item.id === Number(id));
    const currentItem =
        currentItemIndex &&
        currentItemIndex !== -1 &&
        currentItemIndex !== null &&
        portfolioDatas[currentItemIndex];

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

    return (
        <div>
            <h1>{currentItem.title}</h1>
            <PrevNextNavigation prevNextItem={prevNextItem} />
        </div>
    );
}

export default PortfolioDetail;
