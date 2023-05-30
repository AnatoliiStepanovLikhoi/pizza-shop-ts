import React, { FC } from "react";
import { Pizza } from "../models/Pizza";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

interface SinglePizzaProps {
  pizza: Pizza;
}

export const SinglePizza: FC<SinglePizzaProps> = ({ pizza }) => {
  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price} UAH</span>

      <div className="pizza-controls">
        <AiFillEdit />
        <AiFillDelete />
      </div>
    </div>
  );
};