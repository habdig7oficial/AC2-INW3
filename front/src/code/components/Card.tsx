import { Card, Button } from "react-bootstrap";

interface props {
  title: string;
  subtitle: string;
  img: string;
  preco: number
}

export default function MyCard({ title, subtitle, img, preco }: props) {
  return (
    <>
      <Card className="m-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text className="text-justify">{subtitle}</Card.Text>
          <Button variant="primary">Somente por {preco}R$</Button>
        </Card.Body>
      </Card>
    </>
  );
}
