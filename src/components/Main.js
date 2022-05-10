import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetail";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

export default function Main() {
  const [state, setState] = useState({
    dishes: DISHES,
    selectedDish: null,
  });

  const onDishSelect = (dishId) => setState({ ...state, selectedDish: dishId });

  return (
    <>
      <Header />
      <Menu dishes={state.dishes} onClick={onDishSelect} />
      <DishDetail
        dish={state.dishes.find((dish) => dish.id === state.selectedDish)}
      />
      <Footer />
    </>
  );
}
