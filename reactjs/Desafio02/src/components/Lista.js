import React from 'react';

const Lista = props => (
  <ul> {props.list.map(item => <li key={item.id.toString()}>{item.name}</li>)} </ul>
);
export default Lista;
