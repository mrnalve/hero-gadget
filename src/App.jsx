import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
export const productContext = createContext([]);
export const cartContext = createContext([]);

const App = () => {
  const { cartArray, products } = useLoaderData();
  const [cart, setCart] = useState(cartArray)
  return (
    <productContext.Provider value={products}>
      <cartContext.Provider value={[cart, setCart]}>
      <Header></Header>
      <div className="min-h-[calc(100vh-137px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      </cartContext.Provider>
    </productContext.Provider>
  );
};

export default App;
