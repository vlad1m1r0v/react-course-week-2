import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetail";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";

export default function Main() {
  const [state, setState] = useState({
    dishes: DISHES,
    selectedDish: null,
  });

  const onDishSelect = (dishId) => setState({ ...state, selectedDish: dishId });

  const HomePage = () => {
    return <Home />;
  };

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route
          exact
          path="/menu"
          element={<Menu dishes={state.dishes} onClick={onDishSelect} />}
        />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <DishDetail
        dish={state.dishes.find((dish) => dish.id === state.selectedDish)}
      />
      <Footer />
    </>
  );
}
