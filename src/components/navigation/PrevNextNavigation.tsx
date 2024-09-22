import React from "react";
import { Link } from "react-router-dom";

import { PostItem } from "../../types/post";

import { SlArrowUp, SlArrowDown } from "react-icons/sl";

function PrevNextNavigation({
    prevNextItem,
}: {
    prevNextItem: {
        prev: PostItem | null;
        next: PostItem | null;
    };
}) {
    return (
        <ul className="navigation_list">
            <li>
                {prevNextItem.prev && (
                    <Link to={`/portfolio/${prevNextItem.prev.id}`}>
                        <span>
                            <SlArrowUp />
                        </span>
                        <span>{prevNextItem.prev.title}</span>
                    </Link>
                )}
            </li>
            <li>
                {prevNextItem.next && (
                    <Link to={`/portfolio/${prevNextItem.next.id}`}>
                        <span>
                            <SlArrowDown />
                        </span>
                        <span>{prevNextItem.next.title}</span>
                    </Link>
                )}
            </li>
        </ul>
    );
}

export default PrevNextNavigation;
