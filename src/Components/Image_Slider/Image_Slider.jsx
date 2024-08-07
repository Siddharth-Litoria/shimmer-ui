import { useEffect, useState } from "react";

function Image_Slider() {
  const [index, setIndex] = useState(0);
  const imgs = [
    "https://plus.unsplash.com/premium_photo-1674641194949-e154719cdc02?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1535406208535-1429839cfd13?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554940563-090286540831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1673349178635-39b654f84401?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1703013131803-4f10bd248dc1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1685900464809-5edadb95da37?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const forwardImage = () => {
    setIndex((index) => (index + 1) % imgs.length);
  };
  const backwardImage = () => {
    setIndex((index) => (index - 1 < 0 ? imgs.length - 1 : index - 1));
  };

  useEffect(()=>{
    const interval=setInterval(()=>{
        forwardImage();
    },2000);

    return ()=>clearInterval(interval)
  },[])

  return (
    <div className="flex justify-center mt-2 items-center">
      <div className="cursor-pointer w-24 h-24" onClick={() => backwardImage()}>
        <img
          alt="back arrow"
          src="https://www.svgrepo.com/show/305142/arrow-ios-back.svg"
        />
      </div>
      <img
        src={imgs[index]}
        alt="premium photo"
        className="w-[600px] h-[600px]"
      ></img>
      <div className="cursor-pointer w-24 h-24" onClick={() => forwardImage()}>
        <img
          src="https://www.svgrepo.com/show/305143/arrow-ios-forward.svg"
          alt="front arrow"
        />
      </div>
    </div>
  );
}

export default Image_Slider;
