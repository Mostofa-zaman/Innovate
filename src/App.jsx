import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./rootLayout/RootLayout";
import Home from "./page/Home";

const App = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default App;
