
function Card({ data }) {
    console.log(data);
    const {url,author,title} =data;
  return (
    <div className="border p-5 m-5 border-black"> 
      <img className="h-64 w-64" src={url}></img>
      <div>{author}</div>
      <p className="text-wrap">{title}</p>
    </div>
  );
}

export default Card;
