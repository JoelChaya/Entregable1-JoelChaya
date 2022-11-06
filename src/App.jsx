import React from "react";

import { Navbar } from "./components/Navbar/NavBar";
import { ItemListContainer } from "./components/itemlistcontainer/ItemListContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Tienda Online"} />
    </>
  );
};

export default App;

//* EL ARCHIVO APP SIEMPRE VA EN LA RAIZ DE src/ !!!!
