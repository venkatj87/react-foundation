import React from 'react';
import ReactDOM from 'react-dom/client';

const jsxElement = (
    <h1>World of React.</h1>
)

const HeadingComponent = () => <h1>Heading Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);