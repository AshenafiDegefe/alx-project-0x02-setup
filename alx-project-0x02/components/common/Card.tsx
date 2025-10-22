import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({title, content}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Card;