import "./styles.css";

type Props = {
    avatar_url: string;
    html_url: string;
    followers: number;
    location: string;
    name: string;
};

const ResultCard = ({ avatar_url, html_url, followers, location, name }: Props) => {
  return (
    <div className="search_bottom_container">
      <div className="result_container">
        <div className="img_container">
          <img src={avatar_url} alt="user" />
        </div>
        <div className="info_container">
          <h5>Informações</h5>
          <p>
            Perfil:<a> </a>
            <a className="href" href= {html_url}>
              {html_url}
            </a>
          </p>
          <p>
            Seguidores: <a>{followers}</a>
          </p>
          <p>
            Localidade: <a>{location}</a>
          </p>
          <p>
            Nome: <a>{name}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
