import React from "react";

function Card(props) {
  return (
    //img,name,email
    <div className="bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="friend" src={`https://robohash.org/set_set5/${props.id}?size=200x200`} />
      <div className="tc">
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
