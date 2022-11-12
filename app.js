var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import photographyList from "../data.js";

function Gallery() {
  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      index = _React$useState2[0],
      setIndex = _React$useState2[1];

  function handleNextimageClick() {
    setIndex(index + 1);
  }

  var photography = photographyList[index];

  return React.createElement(
    "div",
    { className: "gallery" },
    React.createElement(
      "button",
      { onClick: handleNextimageClick },
      "Next"
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
    React.createElement("img", { src: photography.photoSrc, alt: photography.photoAlt }),
    React.createElement(
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