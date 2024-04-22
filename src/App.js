import { RouterProvider } from "react-router-dom";
import "./App.css";

import router from "./router/root";

function App() {
  // react-router-dom router는 root에 있는 router 변수 입니다.
  return <RouterProvider router={router} />;
}

export default App;
