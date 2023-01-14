import { ForwardCounter } from "./components/ForwardCounter";
import { BackwardCounter } from "./components/BackwardCounter";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const App = () => {
  const [movieData, setMovieData] = useState({ movieName: "", review: "" });
  const [allMovies, setAllMovies] = useState([]);
  useEffect(() => {});

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://testing-e11be-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
        movieData
      );
      setMovieData({ movieName: "", review: "" });
    } catch {
      return [];
    }
  };

  const fetchMovieData = async () => {
    const response = await axios.get(
      "https://testing-e11be-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
    );
    const moviesArray = [];
    for (let key in response.data) {
      moviesArray.push({
        key: key,
        movieName: response.data[key].movieName,
        movieReview: response.data[key].review,
      });
    }
    setAllMovies(moviesArray);
  };

  return (
    <>
      <Form onSubmit={formSubmitHandler}>
        <FormGroup>
          <Label for="exampleEmail">Movie Name</Label>
          <Input
            type="text"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
            value={movieData.movieName}
            onChange={(e) =>
              setMovieData((prev) => {
                return { ...prev, movieName: e.target.value };
              })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">review</Label>
          <Input
            type="text"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
            value={movieData.review}
            onChange={(e) =>
              setMovieData((prev) => {
                return { ...prev, review: e.target.value };
              })
            }
          />
        </FormGroup>
        <Button>post</Button>
        {/* <ForwardCounter />
      <BackwardCounter /> */}
      </Form>
      <Button onClick={fetchMovieData}>Fetch movie data</Button>
      {allMovies.map((movie) => (
        <div key={movie.key}>
          <p>{movie.movieName}</p>
          <p>{movie.movieReview}</p>
        </div>
      ))}
    </>
  );
};

export default App;
