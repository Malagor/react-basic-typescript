import React from 'react';
import './Cat.css';

// export function Cat() {
//     return (
//       <h2>Cat Component</h2>
//     )
// }

// export const Cat = () => {
//   return (
//     <div>This is Cat</div>
//   )
// };

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
export default (props: catsProps) => {

  return (
    <div className={"catCard"}>
      <div><span className={'catInfo'}>Name:</span> {props.name}</div>
      <div><span className={'catInfo'}>Age:</span> {props.age}</div>
      <div><span className={'catInfo'}>Color:</span> {props.color}</div>
      { props.children }
      <input type="text" onChange={props.onChangeName} autoComplete={'true'} value={props.name}/>
      {/*<button onClick={props.onChangeTitle}>Click</button>*/}
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}
