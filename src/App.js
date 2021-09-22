import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouterApp from "./Router/Router";
import { CartProvider } from "./providers/CartProvider";
import background from "./img/club_rufian_fondo.jpg";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#140e0c",
        backgroundImage: `url(${background})`,
        backgroundPosition: " -278px",
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
