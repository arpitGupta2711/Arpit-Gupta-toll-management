import "./App.css";
import Divider from "./components/HorizontalDivider/HorizontalDivider";
import Header from "./components/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TollEntries from "./components/TollEntries/TollEntries.jsx";
import TollList from "./components/TollLists/TollList.jsx";
import { useEffect, useState } from "react";
import TollForm from "./components/TollForm/TollForm.jsx";
import VehicleEntryForm from "./components/VehicleEntryForm/VehicleEntryForm.jsx";

function App() {
  const [tollFlag, setTollFlag] = useState(false);
  const [logsFlag, setLogsFlag] = useState(false);
  const [tollList, setTollList] = useState([]);
  const [entries,setEntries]=useState([]);
  // const [newToll, setNewToll] = useState({});
  console.log("tolls are ", tollList);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <TollEntries tollList={tollList} entries={entries} setTollFlag={setTollFlag} setLogsFlag={setLogsFlag} />
      ),
    },
    {
      path: "/tollList",
      element: (
        <TollList
          tollList={tollList}
          setTollFlag={setTollFlag}
          setLogsFlag={setLogsFlag}
        />
      ),
    },
  ]);

  console.log('entries are ',entries)

  return (
    <div className="App">
      <Header />
      <Divider />
      {tollFlag && (
        <TollForm setTollFlag={setTollFlag} setTollList={setTollList} />
      )}
      {logsFlag&&(
        <VehicleEntryForm entries={entries} setEntries={setEntries} tollList={tollList} setLogsFlag={setLogsFlag}/>
      )}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
