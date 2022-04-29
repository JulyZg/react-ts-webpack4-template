import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function fn(a: number, b: number) {
    console.log("fn");
    console.log("a+b的和为：", a + b);
}
fn(1, 2);


ReactDOM.render(<App />, document.getElementById("root"));

// import React from 'react';
// import { render } from 'react-dom'

// const App = () => {
//     return <h1>我是标题</h1>
// }
// render(<App />, document.getElementById("root"))