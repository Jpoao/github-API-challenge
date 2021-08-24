/* eslint-disable jsx-a11y/anchor-has-content */
import axios from "axios";
import React, { useState } from "react";
import ResultCard from "../../components/ResultCard";
import "./styles.css";

type FormData = {
  user: string;
};

type Info = {
  avatar_url: string;
  html_url: string;
  followers: number;
  location: string;
  name: string;
};

const Search = () => {
  const [hasError, setHasError] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    user: "",
  });

  const [info, setInfo] = useState<Info>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setHasError(false);
        setInfo(response.data);
      })
      .catch((error) => {
        setHasError(true);
        setInfo(undefined);
      });
  };

  return (
    <div className="search_container">
      <div className="search_top_container">
        <h1>Encontre um perfil Github</h1>
        {hasError && (
            <div className="alert alert-danger">
              Perfil não encontrado ou error externo, tente novamente mais
              tarde!
            </div>
          )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user"
            className="search-input"
            placeholder="Usuário Github"
            value={formData.user}
            onChange={handleChange}
          />
          <div className="button_container">
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {info && (
        <>
          <ResultCard
            avatar_url={info.avatar_url}
            followers={info.followers}
            html_url={info.html_url}
            location={info.location}
            name={info.name}
          />
        </>
      )}
    </div>
  );
};

export default Search;
