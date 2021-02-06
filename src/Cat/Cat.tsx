import React from 'react';


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
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (props: catsProps) => {

  const catCard: any = {
    display: "flex",
    flexDirection: "column",
    border: '1px solid black',
    borderRadius: '5px',
    padding: '1rem'
  };

  const catInfo: any = {
    fontWeight: "bold"
  };

  return (
    <div style={catCard}>
      <div><span style ={catInfo}>Name:</span> {props.name}</div>
      <div><span style={catInfo}>Age:</span> {props.age}</div>
      <div><span style={catInfo}>Color:</span> {props.color}</div>
      { props.children }
      <button onClick={props.onChangeTitle}>Click</button>
    </div>
  )
}
