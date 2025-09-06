import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import ProtofiloPage from "./Pages/ProtofiloPage";
import Layout from "./Pages/Layout";
import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

let myrouter = createHashRouter([
  { path: "*", element: <HomePage /> },
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "protofilo", element: <ProtofiloPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={myrouter} />
    </>
  );
}

export default App;
