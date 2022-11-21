import Navbar from "./components/Navbar/Navbar";
import ProductContextProvaider from "./contexts/ProductContext";
// import ProductContextProvaider from "./contexts/ProductContextProvaider";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <ProductContextProvaider>
        <Navbar />
        <MainRoutes />
      </ProductContextProvaider>
    </>
  );
}

export default App;
