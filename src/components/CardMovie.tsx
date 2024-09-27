import Rating from "./Rating";

import "../css/card.css";

interface MovieProps {
  image: string;
  title: string;
  year: string;
  crew: string;
  rate: string;
}

export default ({ image, title, year, crew, rate }: MovieProps) => {
  return (
    <>
      <div className="movie-card">
        <img className="movie-image" src={image} />
        <h3 className="movie-title">{title}</h3>
        <h4 className="movie-year">Ano de Lançamento: {year}</h4>
        <h4 className="movie-crew">{crew}</h4>
        <Rating rate={rate} />
      </div>
    </>
  );
};
