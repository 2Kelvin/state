import photographyList from "../data.js";

function Gallery() {
  const [index, setIndex] = React.useState(0);
  const [showMore, setShowMore] = React.useState(false);

  let okNext = index < photographyList.length - 1;
  let okPrevious = index > 0;

  function handleNextimageClick() {
    okNext && setIndex(index + 1);
  }

  function handlePreviousImageClick() {
    okPrevious && setIndex(index - 1);
  }

  function handleShowDetailsClick() {
    setShowMore(!showMore);
  }

  let photography = photographyList[index];

  return (
    <div className="gallery">
      <div className="buttonsFlex">
        <button onClick={handlePreviousImageClick} disabled={!okPrevious}>
          Previous Image
        </button>
        <button onClick={handleNextimageClick} disabled={!okNext}>
          Next Image
        </button>
      </div>
      <h2>
        <i>{photography.photoName} </i>by {photography.photographer}
      </h2>
      <h3>
        {index + 1} of {photographyList.length}
      </h3>
      <button onClick={handleShowDetailsClick} className="btnShow">
        {!showMore ? "Show Details" : "Hide Details"}
      </button>
      <img src={photography.photoSrc} alt={photography.photoAlt} />
      {showMore && <p>{photography.photoDescription}</p>}
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <Gallery />
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
// useState's [ ] syntax is called 'array destructuring', it lets you read values from an array
// The array returned by useState always has exactly two items: a state variable & a setter function
// all hooks in react start with 'use'
// hooks are special functions available when react is rendering
// they let you hook into different react features e.g. state
// hooks can only be called at the top level of your components / your own hooks
// You can’t call Hooks inside conditions, loops, or other nested functions
// hooks are unconditional declarations about your component’s needs

// calling useState means your telling react that your component needs to remember something
// the only argument you pass to useState is the initializing value of the state variable
// ...in our case, we initialize state variable index with value 0
// a component can have as many state variable types & state as you want
// It is a good idea to have multiple state variables if their state is unrelated
// state is private & local to a component
// ... i.e. each component stores & updates its state independently/ separately
// changing one's component state doesn't affect the other component's state
// a parent component can't change the state of its children component
// this phenomenon allows you to add or remove state from a component without affecting the other components

// to share state between components, add the state to the components' nearest sharing parent
