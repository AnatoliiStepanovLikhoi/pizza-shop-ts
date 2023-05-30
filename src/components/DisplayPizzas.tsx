import React, { FC } from "react";
import { Pizza } from "../models/Pizza";
import { SinglePizza } from "./SingePizza";

interface DispayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

export const DispayPizzas: FC<DispayPizzasProps> = ({
  pizzasList,
  updatePizza,
  deletePizza,
}) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return (
          <SinglePizza
            pizza={pizza}
            key={pizza.id}
            deletePizza={deletePizza}
            updatePizza={updatePizza}
          />
        );
      })}
    </div>
  );
};
