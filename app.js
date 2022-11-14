var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import photographyList from "../data.js";

function Gallery() {
  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      index = _React$useState2[0],
      setIndex = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      showMore = _React$useState4[0],
      setShowMore = _React$useState4[1];

  function handleNextimageClick() {
    index == photographyList.length - 1 ? setIndex(0) : setIndex(index + 1);
  }

  function handlePreviousImageClick() {
    index == 0 ? setIndex(photographyList.length - 1) : setIndex(index - 1);
  }

  function handleShowDetailsClick() {
    setShowMore(!showMore);
  }

  var photography = photographyList[index];

  return React.createElement(
    "div",
    { className: "gallery" },
    React.createElement(
      "div",
      { className: "buttonsFlex" },
      React.createElement(
        "button",
        { onClick: handlePreviousImageClick },
        "Previous Image"
      ),
      React.createElement(
        "button",
        { onClick: handleNextimageClick },
        "Next Image"
      )
    ),
    React.createElement(
      "h2",
      null,
      React.createElement(
        "i",
        null,
        photography.photoName,
        " "
      ),
      "by ",
      photography.photographer
    ),
    React.createElement(
      "h3",
      null,
      index + 1,
      " of ",
      photographyList.length
    ),
    React.createElement(
      "button",
      { onClick: handleShowDetailsClick, className: "btnShow" },
      !showMore ? "Show Details" : "Hide Details"
    ),
    React.createElement("img", { src: photography.photoSrc, alt: photography.photoAlt }),
    showMore && React.createElement(
      "p",
      null,
      photography.photoDescription
    )
  );
}

export default function App() {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement(Gallery, null)
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