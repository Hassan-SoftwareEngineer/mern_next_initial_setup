import React from 'react';
import { ButtonProps } from './types';

const Button : React.FC <ButtonProps> = ({
    title,
    onClickHandler
}) => {
  return (
    <button onClick={onClickHandler}>
        { title }
    </button>
  )
}

export default Button;
