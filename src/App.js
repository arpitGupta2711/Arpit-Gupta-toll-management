import "./App.css";
import Divider from "./components/HorizontalDivider/HorizontalDivider";
import Header from "./components/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TollEntries from "./components/TollEntries/TollEntries.jsx";
import TollList from "./components/TollLists/TollList.jsx";
import { useState } from "react";
import TollForm from "./components/TollForm/TollForm.jsx";

function App() {

  const [tollFlag,setTollFlag]=useState(false);
  const [logsFlag,setLogsFlag]=useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TollEntries setTollFlag={setTollFlag} setLogsFlag={setLogsFlag}/>,
    },
    {
      path: "/tollList",
      element: <TollList setTollFlag={setTollFlag} setLogsFlag={setLogsFlag}/>,
    },
  ]);
  return (
    <div className="App">
      <Header />
      <Divider />
      {tollFlag&&<TollForm setTollFlag={setTollFlag} />}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
