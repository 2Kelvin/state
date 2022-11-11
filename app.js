import photographyList from "../data.js";

export default function App() {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement(
      "h1",
      null,
      "Hello ",
      photographyList[0].photographer
    )
  );
}

// react_connection
var rootNode = document.getElementById("reactRoot");
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));

// NOTES
// State is a component's specific memory of the current value after UI interaction change
// component's have the ability to remember things -> the current value to hold -> this is called state
// local variables DO NOT retain data between renders in react:
// ... all changes made to the local variable are lost when react rerenders
// changes to local variables DO NOT trigger react rerender process
// "usestate" hook provides these 2 things local variables lack
// ... useState => retains data between renders & when data changes, triggers React to rerender component with new data
// the "useState" variable -> retains the data between renders &
// the "useState setter function" -> updates the useState variable during changes & triggers rerendering of the component with the new data

// to use useState, import it at the top