import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouterApp from "./Router/Router";
import { CartProvider } from "./providers/CartProvider";

function App() {
  return (
    <div className="App">
      <RouterApp />
      <CartProvider>
        <RouterApp />
      </CartProvider>
    </div>
  );
}

export default App;
