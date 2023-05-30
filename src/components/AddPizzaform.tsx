import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import "./styles.css";
import { Pizza } from "../models/Pizza";

interface AddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

const initState = {
  title: "",
  price: "",
  img: "",
};

export const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewPizza({ ...newPizza, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { title, price, img } = newPizza;

    if (title && price && img) {
      addPizza({
        title,
        img,
        price: +price,
        id: Date.now(),
      });

      setNewPizza(initState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Pizza title"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        type="text"
        name="price"
        placeholder="Pizza price"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        type="text"
        name="img"
        placeholder="Pizza image"
        onChange={handleChange}
        value={newPizza.img}
      />
      <button type="submit">Add to menu</button>
    </form>
  );
};
