import React from "react";

import { Navbar } from "./Navbar/NavBar";
import { ItemListContainer } from "./itemlistcontainer/ItemListContainer";

const App = () => {
  return (
    <>
      <Navbar />
      
      <ItemListContainer greeting={"Tienda Online"}/>
      
    </>
  );
};

export default App;
