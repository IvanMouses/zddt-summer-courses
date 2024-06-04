import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./components/App";
import CoursesShowMore from "./components/Courses/CoursesShowMore";
import Schedule from "./components/Schedule/Schedule";

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/zddt-summer-courses" element={<App />}>
      <Route
        path="/zddt-summer-courses/:coursTitle"
        element={<CoursesShowMore />}
      />
      <Route path="/zddt-summer-courses/schedule" element={<Schedule />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
