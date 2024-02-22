const element = React.createElement("h2", {
    id: "heading"
}, React.createElement("span", {}, [
    React.createElement("h1", {}, "Some h1 tag inside span"),
    React.createElement("h2", {}, "Some h2 tag inside span")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
console.log(element);

//# sourceMappingURL=index.6bd02f5a.js.map
