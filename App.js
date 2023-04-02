import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div",{id: "parent"},
// [React.createElement("div",{id: "child"},
// [React.createElement(
//     "h1",{},"I am a h1 tag."
// ),React.createElement("h2",{},"I am a h2 tag.")]),
// React.createElement("div",{id: "child"},
// [React.createElement(
//     "h1",{},"I am a h1 tag."
// ),React.createElement("h2",{},"I am a h2 tag.")])    
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//React Element
const jsxheading = <h1 className="head" tabIndex="5">Namaste Javascript From JSX 🚀</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
const number =1000;
const elem = <span>React Element</span>
//Functional Component
//component composition
const HeadingComponent = () => (
    <div id="container">
        <Title />
        {elem}
        {jsxheading}
        {/* <h2>{900+10}</h2> */}
        <h1 className="heading">Namaste React From Functional Component</h1>
    </div>    
        
);
//return react element
const Title = () => {
    return <h1>Namaste</h1>
}
//render functional component
root.render(<HeadingComponent />);


