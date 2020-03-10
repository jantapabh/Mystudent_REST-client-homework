import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//Redux 

// import { createStore } from 'redux';
// import redux from 'react';

// const reducer = (state, action) => {

//     switch (action.type) {

//         case "ADD":

//         state+= action.payload;

//             break;

//         case "SUBTRACT":

//             state-= action.payload;

//             break;

//         default:
//     }

//     return state;
// }

// const store = createStore(reducer, 1);

// //dispatch จะเป็นการตรวจสอบ action

// // คำสั่ง subscribe เป็นการอัพเดพค่าให้กับ state

// store.subscribe( () => {

//     console.log("Update State", store.getState());

// })
// store.dispatch({

//     type: "ADD",
//     payload: 500

// })