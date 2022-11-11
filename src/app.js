export default function App() {
  return (
    <div className="app">
      <h1>Hello State</h1>
    </div>
  );
}

// react_connection
const rootNode = document.getElementById("reactRoot");
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);
