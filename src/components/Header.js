import React from 'react';
// import './style.css';
import '../index.css'

export default function Header(props) {
  return <h1>{props.name}</h1>;
}

Header.defaultProps= {
  name: "Melaku Alehegn"
}