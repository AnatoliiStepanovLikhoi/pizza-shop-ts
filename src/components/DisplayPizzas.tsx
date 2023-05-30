import React, { FC } from "react";
import { Pizza } from "../models/Pizza";
import { SinglePizza } from "./SingePizza";

interface DispayPizzasProps {
  pizzasList: Pizza[];
}

export const DispayPizzas: FC<DispayPizzasProps> = ({ pizzasList }) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return <SinglePizza pizza={pizza} key={pizza.id} />;
      })}
    </div>
  );
};
