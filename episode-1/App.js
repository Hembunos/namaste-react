
// const heading = document.createElement('h1');
// heading.innerHTML = 'Namaste React from the javaScript';

// const root = document.getElementById('root');
// root.appendChild(heading);


 const parent = React.createElement("div", {id:"parent"}, 
 
 [React.createElement("div", {id: "child"},"Hello from nested div"),

 React.createElement("div", {id: "child"},"Hello from nested div")

]);



const heading = React.createElement("h1",{id: "heading" },"Hello from the React");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);