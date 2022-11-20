import React from 'react';
import './AttributeRow.css';

export default function AttributeRow({ attrName, attrValue }) {
  return <li className='skills-row'>{`${attrName}: ${attrValue}`}</li>;
}
