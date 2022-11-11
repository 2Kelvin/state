import photographyList from "../data.js";

export default function App() {
  return (
    <div className="app">
      <h1>Hello {photographyList[0].photographer}</h1>
    </div>
  );
}

// react_connection
const rootNode = document.getElementById("reactRoot");
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

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
