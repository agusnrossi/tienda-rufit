import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouterApp from "./Router/Router";
import { CartProvider } from "./providers/CartProvider";

function App() {
  return (
    <div
      className="App "
      style={{
        backgroundImage: 'url("//img/club_rufian_fondo.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <CartProvider>
        <RouterApp />
      </CartProvider>
    </div>
  );
}

export default App;
