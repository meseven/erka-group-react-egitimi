import PropTypes from "prop-types";
import React from "react";
import ListItem from "./ListItem";

const Paragraph = ({ text, age, user, friends, n1, n2 }) => (
  <>
    <h2>{n1 + n2}</h2>
    <p>{text}</p>
    <b>{age}</b>
    <pre>{JSON.stringify(user, null, 2)}</pre>

    <h3>Friends</h3>
    {friends.map(({ name }, i) => (
      <ListItem key={i} name={name} />
    ))}
  </>
);

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  age: PropTypes.number,
  user: PropTypes.exact({
    name: PropTypes.string,
    surname: PropTypes.string,
  }),
  n1: PropTypes.number,
  n2: PropTypes.number,
};

Paragraph.defaultProps = {
  text: "Varsayılan paragraf",
};

export default Paragraph;
