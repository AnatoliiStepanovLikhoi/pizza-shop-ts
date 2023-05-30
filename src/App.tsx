import React, { FC, useState } from "react";
import { AddPizzaForm } from "./components/AddPizzaform";
import { DispayPizzas } from "./components/DisplayPizzas";
import { Pizza } from "./models/Pizza";
import "./App.css";

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };

  console.log("pizzasList", pizzasList);

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Our Pizza Shop</span>
        <AddPizzaForm addPizza={addPizza} />
        <DispayPizzas pizzasList={pizzasList} />
      </div>{" "}
    </div>
  );
};

export default App;
