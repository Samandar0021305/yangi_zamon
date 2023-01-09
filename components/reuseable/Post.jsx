import Image from "next/image";
import React from "react";

const Post = ({ post }) => {
  return (
    <div className="single-post">
      <div className="image">
        <Image src={post.img} alt="post image" />
      </div>
      <div className="content">
        <h5>
          <a href="#">{post.title}</a>
        </h5>
        <ul className="comment">
          <li>
            <i className="fa fa-calendar" aria-hidden="true"></i>
            {post.time}
          </li>
          <li>
            <i className="fa fa-commenting-o" aria-hidden="true"></i>
            {post.comment}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
