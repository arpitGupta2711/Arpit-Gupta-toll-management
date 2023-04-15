import "./App.css";
import Divider from "./components/HorizontalDivider/HorizontalDivider";
import Header from "./components/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TollEntries from "./components/TollEntries/TollEntries.jsx";
import TollList from "./components/TollLists/TollList.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <TollEntries/>,
  },
  {
    path: "/tollList",
    element: <TollList/>,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <Divider />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
