import { useState, useEffect } from "react";

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [isResultvisisble,setIsResultVisible] = useState(false);
  const [cache, setCache] = useState({});
  console.log(cache);
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(timer);
  }, [searchText]);

  const fetchData = async () => {
    if (cache[searchText]) {
      setSearchData(cache[searchText]);
    } else {
      const data = await fetch(
        "https://dummyjson.com/recipes/search?q=" + searchText
      );
      const jsonData = await data.json();
      // console.log(jsonData?.recipes);
      cache[searchText] = jsonData?.recipes;
      setSearchData(jsonData?.recipes);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mt-7">
      <input
        className="border border-black m-2 w-96"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onBlur={() => setIsResultVisible(false)}
        onFocus={()=>setIsResultVisible(true)}
        placeholder="Search the text here"
      />
      {searchData.length > 0 && isResultvisisble && (
        <div className="border border-black m-2 w-96">
          <ol>
            {searchData.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })}
          </ol>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
