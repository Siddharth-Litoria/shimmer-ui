function CommentBox({ data }) {
  console.log(data);
  return data.map((data, index) => (
    <div className="flex border-l border-black" key={index}>
      <img className="w-16 rounded-full h-16" src={data.img}></img>
      <div>
        <div className="text-lg m-2">{data.user_name}</div>
        <div className="border border-black m-2">{data.comment}</div>
        {data?.comments?.length > 0 && <CommentBox data={data?.comments} />}
      </div>
    </div>
  ));
}

export default CommentBox;
