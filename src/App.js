import './App.css';
import Divider from './components/Divider/Divider';
import Header from './components/Header/Header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Vehicle List!</div>,
  },
  {
    path:"/tollList",
    element: <div>tollListPage</div>,

  }
]);



function App() {
  return (
    <div className="App">
    <Header/>
    <Divider/>
    <RouterProvider router={router} />
    </div>
  );
}


export default App;
