import { createBrowserRouter } from "react-router";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Page1,
  },
  {
    path: "/page2",
    Component: Page2,
  },
  {
    path: "/page3",
    Component: Page3,
  },
  {
    path: "/page4",
    Component: Page4,
  },
  {
    path: "/page5",
    Component: Page5,
  },
]);
