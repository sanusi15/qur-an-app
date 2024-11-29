import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Dashboard'
import Quran from "./page/quran";
import Surah from './page/surah'

const router = createBrowserRouter([
    {
    path: "/",
    element: <Dashboard />,
    },
    {
    path: "/quran",
    element: <Quran />,
    },
    {
    path: "/surah/:number",
    element: <Surah />,
    },
]);

const App = () => {
  return (
    <RouterProvider
      router={router}
    />
  );
}

export default App