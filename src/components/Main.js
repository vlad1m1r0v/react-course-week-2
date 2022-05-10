import { DISHES } from "../shared/dishes";
import { Navbar, NavbarBrand } from "react-bootstrap";
import DishDetail from "./DishDetail";
import Menu from "./Menu";
import { useState } from "react";

export default function Main() {
  const [state, setState] = useState({
    dishes: DISHES,
    selectedDish: null,
  });

  const onDishSelect = (dishId) => setState({ ...state, selectedDish: dishId });

  return (
    <>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={state.dishes} onClick={onDishSelect} />
      <DishDetail
        dish={state.dishes.find((dish) => dish.id === state.selectedDish)}
      />
    </>
  );
}
