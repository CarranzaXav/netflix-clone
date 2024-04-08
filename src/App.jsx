import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ----- Routes ---------- //
import Login from "./pages/Login";
import MoviePage from "./pages/Movies";
import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import TVShows from "./pages/TVShows";
import Favorites from "./pages/Favorites";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route exact path="/new" element={<Player />} />
        <Route exact path ="/favorites" element={<Favorites/>}/>
        <Route exact path="/" element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  );
}
