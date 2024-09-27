import axios from "axios";
import { useEffect, useState } from "react";
import CardMovie from "./CardMovie";

import "../css/filtro.css";
import "../css/movies.css";

export default () => {
  let [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(true);
  var [page, setPage] = useState(1);
  var [atualizarFilmes, setAtualizar] = useState(1);

  let [filtroTitulo, setFiltroTitulo] = useState("");
  let [filtroAnoInicial, setFiltroAnoInicial] = useState("");
  let [filtroAnoFinal, setFiltroAnoFinal] = useState("");
  let [filtroRating, setFiltroRating] = useState("");

  // Função de requisição com axios
  const buscarFilmes = async () => {
    try {
      const response = await axios.get(
        `https://movies.slideworks.cc/movies?limit=12&page=${page}`
      );

      setMovies(response.data.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarFilmes();
  }, [atualizarFilmes]);

  const mudarParametro = (page: number) => {
    setPage(page);
    setAtualizar(page);
  };

  // Filtro
  //
  //O filtro faz a filtragem nos elementos da página buscada, caso houvesse mais tempo, faria com que o retorno do API já viesse filtrado,
  // também caso mude de página com o filtro, ele se perde devido a nova requisição
  //

  let [filtroStatus, setFiltroStatus] = useState(false);

  const handleFiltroTitulo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltroTitulo(event.target.value);
  };

  const handleFiltroAnoInicial = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFiltroAnoInicial(event.target.value);
  };

  const handleFiltroAnoFinal = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltroAnoFinal(event.target.value);
  };

  const handleFiltroRating = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltroRating(event.target.value);
  };

  const filtrarMovies = () => {
    if (filtroTitulo || filtroAnoInicial || filtroAnoFinal || filtroRating) {
      const filmesFiltrados = movies.filter(
        (item: any) =>
          (filtroTitulo
            ? item.title.toLowerCase().includes(filtroTitulo.toLowerCase())
            : true) &&
          (filtroAnoInicial ? item.year >= filtroAnoInicial : true) &&
          (filtroAnoFinal ? item.year <= filtroAnoFinal : true) &&
          (filtroRating ? item.rating >= filtroRating : true)
      );
      setMovies(filmesFiltrados);
    } else {
      buscarFilmes();
    }
  };

  //Fim do Filtro

  if (loading)
    return (
      <p style={{ textAlign: "center", padding: "15px" }}>Carregando...</p>
    );

  return (
    <>
      <div className="container filtro-wrapper">
        <div onClick={() => setFiltroStatus(!filtroStatus)}>
          <h3>Filtro</h3>
        </div>
        <div
          className={
            filtroStatus ? "filtro-fields filtro-open" : "filtro-fields"
          }
        >
          <p className="filtro-label">Título</p>
          <input
            type="text"
            placeholder="Procure por um Título"
            value={filtroTitulo}
            onChange={handleFiltroTitulo}
          />
          <div>
            <p className="filtro-label">Lançamento</p>
            <div>
              <input
                className="filtro-small-input"
                type="text"
                placeholder="Ano Inicial"
                value={filtroAnoInicial}
                onChange={handleFiltroAnoInicial}
              />
            </div>
            <label>até</label>
            <div>
              <input
                className="filtro-small-input"
                type="text"
                placeholder="Ano Limite"
                value={filtroAnoFinal}
                onChange={handleFiltroAnoFinal}
              />
            </div>
          </div>
          <p className="filtro-label">Rating</p>
          <input
            className="filtro-small-input"
            type="text"
            placeholder="Rating"
            value={filtroRating}
            onChange={handleFiltroRating}
          />
          <div>
            <button
              className="filtrar"
              onClick={() => {
                filtrarMovies();
              }}
            >
              Filtrar
            </button>
            <button
              className=""
              onClick={() => {
                setFiltroTitulo("");
                setFiltroAnoInicial("");
                setFiltroAnoFinal("");
                setFiltroRating("");
                buscarFilmes();
              }}
            >
              Limpar
            </button>
          </div>
        </div>
      </div>

      <div className="container movies-wrapper">
        {movies.map((item: any, index) => (
          <CardMovie
            key={index}
            image={item.image_url}
            title={item.title}
            year={item.year}
            crew={item.crew}
            rate={item.rating}
          />
        ))}
      </div>
      <div className="container movies-pagination">
        <button
          className="movies-pagination-button"
          onClick={() => {
            if (page > 1) mudarParametro(page - 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
          >
            <path
              d="M9.25 16.2024L1.75 8.70239L9.25 1.20239"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="movies-pagination-button active"
          onClick={() => {
            mudarParametro(page);
          }}
        >
          {page}
        </button>
        <button
          className="movies-pagination-button"
          onClick={() => {
            mudarParametro(page + 1);
          }}
        >
          {page + 1}
        </button>
        <button
          className="movies-pagination-button"
          onClick={() => {
            mudarParametro(page + 2);
          }}
        >
          {page + 2}
        </button>
        <button
          className="movies-pagination-button"
          onClick={() => mudarParametro(page + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
          >
            <path
              d="M1.75 1.20239L9.25 8.70239L1.75 16.2024"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
