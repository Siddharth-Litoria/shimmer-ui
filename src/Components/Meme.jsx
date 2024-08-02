import  { useEffect, useState } from 'react'
import Card from './Card';
import Shimmer from './Shimmer';

function Meme() {
    const [meme,setMeme] = useState([]);
    const [shimmer,setShimmer] = useState(false);

    useEffect(()=>{
      fetchMemes();
       window.addEventListener("scroll",handleScroll);
       return ()=>removeEventListener("scroll",handleScroll);
    },[])

    const handleScroll = ()=>{
      //scrollY :- How much i have scrolled
      //window.innerHeight :- Hieght of window visible section
      //document.body.scrollHeight :- Total height of web page
      if(window.scrollY + window.innerHeight>=document.body.scrollHeight){
        fetchMemes();
        console.log(true);
      }
    }

    async function fetchMemes(){
      console.log("here in async function")
      setShimmer(true)
        const data= await fetch("https://meme-api.com/gimme/20");
        const jsonData= await data.json();
        console.log(jsonData);
        setShimmer(false);
        setMeme((meme)=>[...meme,...jsonData.memes]);
    }
  return (
    <div className='flex flex-wrap'> {
       meme.map((i,k)=><Card key={k} data={i}/>)}
       {shimmer && <Shimmer/>}
       </div>
  )
}

export default Meme