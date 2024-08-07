import Accordion from "./Components/Accordion/UseAccordion";
import Meme from "./Components/Meme/Meme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./Components/Protected_Routes/ProtectedRoutes";
import Login from "./Components/Login/Login";
import NestedComents from "./Components/Nested_Comments/NestedComments";
import Image_Slider from "./Components/Image_Slider/Image_Slider";
import SearchBar from "./Components/Search_Bar/SearchBar";

function App() {
  return (
    <div>
      <header className="text-white bg-black text-2xl font-bold justify-start flex text-center">
        LLD
        <nav className="justify-evenly text-xl p-2 m-2 w-[800px]">
          <a className="p-1 m-1 " href="/meme">
            Memes
          </a>
          <a className=" p-1 m-1 " href="/accordion">
            Accordion
          </a>
          <a className=" p-1 m-1 " href="/login">
            Login
          </a>
          <a className=" p-1 m-1 " href="/nested-comments">
            Nested Comments
          </a>
          <a className=" p-1 m-1 " href="/image-slider">
            Image Slider
          </a>
          <a className=" p-1 m-1 " href="/search-bar">
            Search Bar
          </a>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/accordion" element={<Accordion />}></Route>
            <Route path="/meme" element={<Meme />}></Route>
            <Route path="/nested-comments" element={<NestedComents/>}></Route>
            <Route path="/image-slider" element={<Image_Slider/>}></Route>
            <Route path="/search-bar" element={<SearchBar/>}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
