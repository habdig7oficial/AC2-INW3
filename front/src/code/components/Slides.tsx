import { Carousel } from "react-bootstrap";

interface props {
  title: Array<string>;
  subtitle: Array<string>;
  images: Array<string>;
  alts: Array<string>;
}

export default function Slide({
  title = [`Lorem`],
  subtitle = [`Ipsum`],
  images = [`Not Found`],
  alts = [`Not Found`],
}: props) {
  let cards: Array<JSX.Element> = [];

  for (let i = 0; i < title.length; i++) {
    cards.push(
      <Carousel.Item key={i}>
        <img
          height={875}
          className="d-block w-100"
          src={images[i]}
          alt={alts[i]}
        />
        <Carousel.Caption
          className="d-flex flex-column justify-content-center align-items-center text-danger"
          style={{ top: 0 }}
        >
          <div className="bg-dark bg-opacity-75 border border-radius rounded p-3">
            <h3>{title[i]}</h3>
            <p>{subtitle[i]}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  return (
    <>
      <div>
        <Carousel>{cards}</Carousel>
      </div>
    </>
  );
}
