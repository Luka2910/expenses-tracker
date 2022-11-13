import React from "react";
import "./Card.css";
const Card = (props) => {
  //3 linijom smo dobili da bilo koje ime klase moze da se preopozna u nasoj custom componenti Card
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
