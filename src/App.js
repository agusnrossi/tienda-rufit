import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/navbar";
import ItemListContainer from "./components/item/itemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      {""}
      <ItemListContainer greeting="Aqui va el detalle" />
    </div>
  );
}

export default App;
