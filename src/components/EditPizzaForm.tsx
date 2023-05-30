import { FC, useState, ChangeEvent, FormEvent } from "react";
import "./styles.css";
import { Pizza } from "../models/Pizza";

interface EditPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleToggleEdit: () => void;
}

export const EditPizzaForm: FC<EditPizzaFormProps> = ({
  data,
  updatePizza,
  handleToggleEdit,
}) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setEditPizza({ ...editPizza, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { title, price, img } = editPizza;

    if (title && price && img) {
      updatePizza(editPizza);
      handleToggleEdit();
    }
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Pizza title"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        type="text"
        name="price"
        placeholder="Pizza price"
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        type="text"
        name="img"
        placeholder="Pizza image"
        onChange={handleChange}
        value={editPizza.img}
      />
      <button type="submit">Confirm</button>
    </form>
  );
};
