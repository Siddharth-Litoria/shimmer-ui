import  { useEffect, useState } from 'react'
import Card from './Card';
import Shimmer from './Shimmer';

function Meme() {
    const [meme,setMeme] = useState([]);

    useEffect(()=>{
        fetchMemes();
    },[])

    async function fetchMemes(){
        const data= await fetch("https://meme-api.com/gimme/45");
        const jsonData= await data.json();
        console.log(jsonData);
        setMeme(jsonData?.memes);
    }
  return (
    <div className='flex flex-wrap'>{
      meme.length>0 ? meme.map((i,k)=><Card key={k} data={i}/>):<Shimmer/>}</div>
  )
}

export default Meme