import React from "react";
import { Link } from "react-router-dom";

import { PostData, PostItem } from "../../types/post";

interface CardListProps {
    filteredItems: PostData;
}

interface CardItemProps {
    item: PostItem;
}

function CardList({ filteredItems }: CardListProps) {
    return (
        <ul className="card_list">
            {filteredItems.map((item) => (
                <li key={item.id}>
                    <CardItem item={item} />
                </li>
            ))}
        </ul>
    );
}

function CardItem({ item }: CardItemProps) {
    return (
        <div className="card_item">
            <Link to={`/portfolio/${item.id}`}>
                <img
                    src={item.thumbnail.imgSrc}
                    alt={item.title}
                    className="card_image"
                />
                <div className="card_overlay">
                    <h3>{item.title}</h3>
                </div>
            </Link>
        </div>
    );
}

export default CardList;
