import React from "react";
import PropTypes from "prop-types";
// const newMessage = {
//   message: "Hola mundo",
//   title: "juan",
// };

// const getResult = (a, b) => {
//   return a + b;
// };

export const FirstApp = ({ title, subtitle }) => {
  return (
    <>
      {/* <h1>{JSON.stringify(newMessage)}</h1> */}
      <h1>Holii juanma</h1>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>Que subtitulo tan gva</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  subtitle: "No hay subtitulo",
  title: "No hay titulo",
};
