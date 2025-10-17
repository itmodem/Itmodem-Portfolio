import React from 'react';

const Greetingcards = (props) => {
  return (
    <h1>Hello, {props.name}! Have a great day!</h1>
  );
};

// 🟢 Correct spelling: defaultProps
Greetingcards.defaultProps = {
  name: "Guest",
};

export default Greetingcards;
