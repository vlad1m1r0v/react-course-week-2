import { Card } from "react-bootstrap";

export default function Menu({ dishes, onClick }) {
  const menu = dishes.map((dish) => (
    <div className="col-12 col-md-5 m-1">
      <Card key={dish.id} onClick={() => onClick(dish.id)}>
        <Card.Img src={dish.image} alt={dish.name} />
        <Card.ImgOverlay>
          <Card.Title>{dish.name}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
}
