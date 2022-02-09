import React from "react";
import ReactDOM from "react-dom";
import App from './app';
import * as calc from './Calc'
// import "./index.css";
// Render multiple elements
// ReactDOM.render(
//   [
//     <h1>Hello World!!!</h1>,
//     <p>This is new paragraph</p>,
//     <h2>Good morning</h2>,
//   ],
//   document.getElementById("root")
// );

// React Fragment
// ReactDOM.render(
//   <React.Fragment>
//     <h1>Hello</h1>
//     <h2>Hello</h2>
//     <h3>Hello</h3>
//   </React.Fragment>,
//   document.getElementById('root1')
// )

// // Challenge
// ReactDOM.render(
//   <>
//     <h1>Dipesh Netflix Packs</h1>
//     <p>List of 5 best series</p>
//     <ol>
//       <li>Dark</li>
//       <li>Extra Curricular</li>
//       <li>Mirjapur</li>
//       <li>Money Heist</li>
//       <li>Mr.Robot</li>
//     </ol>
//   </>,
//   document.getElementById('root')
// );

// // JavaScript Expression in JSX
// const name="Dipesh Sah";
// ReactDOM.render(
//     <h3>My name is {name}</h3>,
//     document.getElementById('root1')
// );

// Templete Literal in JSX
// const fname="Dipesh"
// const lname="Shah"
// ReactDOM.render(
//   <p>My first name is {`${fname}`} and my last name is {`${lname}`}</p>,
//   document.getElementById('root2')
//   );

// Challenge 2
// const fullname="Dipesh Sah";
// let date=new Date().toLocaleDateString();
// let time =new Date().toLocaleTimeString();
// ReactDOM.render(
//   <>
//     <h2>Hello, My name is  {fullname}</h2>
//     <p>Date :{date}</p>
//     <p>Time : {time}</p>
//   </>,
//   document.getElementById('root3')
// );

// Image in JSX
// const img1="https://picsum.photos/200/300";
// const img2="https://picsum.photos/300/300"
// const img3="https://picsum.photos/250/300"
// ReactDOM.render(
//   <>
//   <h1>Image in JSX</h1>
//       <img src={img1}/>
//       <img src={img2}/>
//       <img src={img3}/>
//   </>,
//       document.getElementById("root4")
// )

// CSS Styling in JSX
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/210/300";
// const img3 = "https://picsum.photos/220/300";
// ReactDOM.render(
//   <>
//     <h1 className="title">Dipesh Kumar Sah</h1>
//     <div className="image">
//     <img src={img1}/>
//     <img src={img2}/>
//     <img src={img3}/>
//     </div>
//   </>,
//   document.getElementById("root")
// );


ReactDOM.render(
  <App/>,
  document.getElementById("root")
);



// Calc
// ReactDOM.render(
//   <>
//     <ul>
//       <li>Sum : {calc.add(10,20)}</li>
//       <li>Sum : {calc.sub(10,20)}</li>
//       <li>Sum : {calc.mult(10,20)}</li>
//       <li>Sum : {calc.div(10,20)}</li>
//     </ul>
//   </>,
//   document.getElementById("root")
// )