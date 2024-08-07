import CommentBox from "./CommentBox";

const NestedComents = () => {
  const data = [
    {
      user_name: "Sidddharh Litoria",
      img: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png",
      comment: "This is a comment",
      comments: [
        {
          user_name: "Ansh Litoria",
          img: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png",
          comment: "This is a comment by ansh",
          comments: [
            {
              user_name: "Mahima Litoria",
              img: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png",
              comment: "This is a comment by mahima",
              comments: [
                {
                  user_name: "Hari Litoria",
                  img: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png",
                  comment: "This is a comment by hari",
                  comments: [
                    {
                      user_name: "Shilpi Litoria",
                      img: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png",
                      comment: "This is a comment by Shilpi",
                      comments: [
                        {
                          user_name: "Zappi Litoria",
                          img: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png",
                          comment: "This is a comment by Zappi",
                          comments: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      user_name: "Devanshu Litoria",
      img: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png",
      comment: "This is a comment by Devanshu",
      comments: [
        {
          user_name: "Ansh Litoria",
          img: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png",
          comment: "This is a comment by ansh",
          comments: [
            {
              user_name: "Mahima Litoria",
              img: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png",
              comment: "This is a comment by mahima",
              comments: [],
            },
          ],
        },
      ],
    },
    {
      user_name: "Alpana Litoria",
      img: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png",
      comment: "This is a comment by Alpana",
      comments: [],
    },
  ];
  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
};

export default NestedComents;
