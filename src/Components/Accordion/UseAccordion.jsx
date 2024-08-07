import { useState } from "react";
import Accordion from "./Accordion";

const data = [
  {
    heading: "Accordion 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    heading: "Accordion 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    heading: "Accordion 3",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

function UseAccordion() {
  const [isOpen,setIsOpen] = useState(0);
  return <div className="w-[50%] m-auto">
    {data.map((data,index)=>{
      return <Accordion 
      key={index} 
      heading={data.heading}
      body={data.body}
      isOpen={index===isOpen}
      setIsOpen={()=>{
        index===isOpen ?setIsOpen(null):setIsOpen(index)
      }}
       />
    })}
  </div>;
}

export default UseAccordion;
