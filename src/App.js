import React from "react";
import Unsplash from "./api";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

const App = () => {
  // these are local states used to control the application...
  const [images, setImages] = React.useState([]);
  const [incorrectResult, setIncorrectResult] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    setIsLoading(true);
    const getImages = async () => {
      try {
        const {
          data: { results },
        } = await Unsplash.get("/search/photos", {
          params: {
            query: searchTerm,
          },
        });
        if (results.length === 0 && searchTerm.length === 0) {
          console.log(results.length, "i am inside if block");
          setIncorrectResult(false);
        } else if (results.length === 0) {
          console.log(results.length, "i am inside else if block");
          setIncorrectResult(true);
          setIsLoading(false);
          setImages(results);
        } else {
          console.log(results.length, "i am inside else block");
          setImages(results);
          setIsLoading(false);
          setIncorrectResult(false);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    getImages();
  }, [searchTerm]);
  return (
    <div className="App">
      <h1>Unsplash Image Search Engine</h1>
      <SearchBox
        placeholder="search images"
        setSearchTerm={setSearchTerm}
        setIncorrectResult={setIncorrectResult}
      />
      {error && (
        <div className="alert alert-warning container" role="alert">
          {error}
        </div>
      )}
      {incorrectResult && (
        <div className="alert alert-warning container" role="alert">
          <h1>Oops! incorrect search term, try a correct search term.</h1>
        </div>
      )}
      {searchTerm.length !== 0 && isLoading && <h1>Loading...</h1>}
      <CardList images={images} />
    </div>
  );
};

export default App;
