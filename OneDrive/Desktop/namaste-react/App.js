let parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"Heading 1"),
        React.createElement("h2",{},"Heading 2")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Heading 1"),
        React.createElement("h2",{},"Heading 2")
    ])
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)