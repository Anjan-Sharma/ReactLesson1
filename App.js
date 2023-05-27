import React from "react";
import ReactDOM from "react-dom/client";

console.log("Document Connected");
// console.log(React);
// console.log(ReactDOM);

const heading = React.createElement("h1", { id: "title" }, "Heading1");
const div = React.createElement("div", { id: "container" }, [heading]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
