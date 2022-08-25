import './App.css';
import Header from "./Header/Header";
import MediaContainer from "./MediaContainer/MediaContainer";

function App() {
  return (
      <>
        <Header />
          <div className="medias">
            <MediaContainer typeOfMedia={"movie"} title={"Derniers Films Populaires"} />
            <MediaContainer typeOfMedia={"tv"} title={"Dernières Séries Populaires"} />
          </div>
      </>
  );
}

export default App;
