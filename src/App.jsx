import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Enter from "./components/Enter";
import Input from "./components/input";

function App() {
  let handleclick = (i) => {
    console.log(i);
    console.log("here");
  };
  let arr = [
    { srno: 1, name: "mihir", grantetaken: "yes", grantamount: "1000" },
    { srno: 2, name: "java", grantetaken: "no", grantamount: "0" },
    { srno: 3, name: "c++", grantetaken: "yes", grantamount: "1000" },
    { srno: 4, name: "webdev", grantetaken: "yes", grantamount: "1000" },
  ];
  let category = ["city", "town-1", "town-2", "village"];
  let library = ["city", "town-1", "town-2", "village"];
  return (
    <>
      <Input category={category}></Input>
      <Enter arr={arr} handleclick={handleclick}></Enter>
    </>
  );
}

export default App;
