import React from 'react';
import Radium from 'radium';

import classes from './Cat.module.scss';

export interface catsProps {
  name: string;
  age: number;
  color: string;
  children?: React.ReactNode;
  onChangeTitle?: any;
  onChangeName?: any;
  onDelete?: any;
}

// eslint-disable-next-line import/no-anonymous-default-export
const Cat = (props: catsProps) => {
  const inputClasses = [classes.input];

  const style: {[k: string]: string | object} = {
    border: '1px solid #ccc',
    boxShadow: '0 4px 5px rgba(0, 0, 0, 0.14)',
    ':hover': {
      border: '1px solid #ccc',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
      cursor: 'pointer'
    }
  };

  if (props.name !== '') {
    inputClasses.push(classes.green);
  } else {
    inputClasses.push(classes.red);
  }

  if (props.name.length > 6) {
    inputClasses.push(classes.bold);
  }

  return (
    <div className={classes.catCard} style={style}>
      <div><span className={classes.catInfo}>Name:</span> {props.name}</div>
      <div><span className={classes.catInfo}>Age:</span> {props.age}</div>
      <div><span className={classes.catInfo}>Color:</span> {props.color}</div>
      {props.children}
      <input
        type="text"
        value={props.name}
        autoComplete={'true'}
        onChange={props.onChangeName}
        className={inputClasses.join(" ")}
      />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default Radium(Cat);
