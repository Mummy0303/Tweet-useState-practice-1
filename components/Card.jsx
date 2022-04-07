import React, { useState } from "react";

function Card(props) {
  const [countLike, setCountLike] = useState(0);
  const [countDislike, setCountDislike] = useState(0);

  function increaseLike() {
    setCountLike(countLike + 1);
  }
  function increaseDislike() {
    setCountDislike(countDislike + 1);
  }

  return (
    <div className="card">
      <div className="top">
        <img src={props.imgURL} alt="avatar_img" />
        <h2>{props.name}</h2>
      </div>
      <div className="bottom">
        <p>{props.tweet}</p>
        <div className="comment">
          <button className="likeButton" onClick={increaseLike}>
            <i id="like" className="bi bi-hand-thumbs-up"></i>
            Like
            <span className="counter">{countLike}</span>
          </button>
          <button className="dislikeButton" onClick={increaseDislike}>
            <i id="disLike" className="bi bi-hand-thumbs-down"></i>Dislike
            <span className="counter">{countDislike}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
