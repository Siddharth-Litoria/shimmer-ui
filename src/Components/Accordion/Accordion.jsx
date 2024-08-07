import React from 'react'

function Accordion({heading,body,isOpen,setIsOpen}) {
   
  return (
    <div className="border border-black">
    <div className="flex justify-between bg-slate-300" onClick={()=>setIsOpen()}>
        <div>{heading}</div>
        <div>down</div>
        </div>
    {isOpen && <p>{body}</p>}
  </div>
  )
}

export default Accordion