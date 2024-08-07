

function Shimmer() {
  return Array(20).fill(0).map((i,k)=>{
    return (
        <div key={k} className="border p-5 m-5 border-black"> 
        <div className="h-64 w-64 bg-slate-400"></div>
        <div className="h-2 w-32 my-1 bg-slate-400"></div>
        <p className="h-2 w-64 my-1 bg-slate-400"></p>
      </div>
      )
  })
}

export default Shimmer