import { createHashRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home"
import SetDetail from "../pages/SetDetail"
import AllSets from "../pages/AllSets"

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>an error occured</h1>,
    children: [
      {index: true, element: <Home/> },
      {path: "set/:setId", element: <SetDetail/>},
      {path: "sets", element: <AllSets/>}
    ],
    
  }
])

export {router};