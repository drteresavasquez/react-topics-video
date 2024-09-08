'use client';

import React from 'react';
import PropTypes from 'prop-types';

function SayHello({ name, greeting = 'We hope you have a wonderful day!' }) {
  return (
    <>
      <div>Hello, {name}!</div>
      <div>{greeting}</div>
      <p>This is a paragraph</p>
    </>
  );
}

SayHello.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.string,
};
export default SayHello;
