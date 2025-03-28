import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"
import { Header } from "./components/Header.jsx";
import { BodyComponent } from "./components/BodyComponent.jsx";
import { FooterComponent } from "./components/FooterComponent.jsx";
import { Contact } from "./components/Contact.jsx";
import { Cart } from "./components/Cart.jsx";
import { Error } from "./components/Error.jsx";
import { Menu } from "./components/Menu.jsx";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const Grocery = lazy(() => import("./components/Grocery.jsx"))

const About =  lazy(()=> import("./components/About.jsx"))

const AppLayout = () => {

  return (
  <Provider store={appStore} >
    <div className="">
      <Header></Header>
      <Outlet></Outlet>
      <FooterComponent></FooterComponent>
    </div>
  </Provider>
  );
};

const appRouter = createBrowserRouter([
  //list of paths
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <BodyComponent></BodyComponent>,
      },
      {
        path: "/about",
        element: <Suspense><About></About></Suspense> ,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,

      },
      {
        path: "/grocery",
        element:<Suspense fallback={<h1>Loading.......</h1>}><Grocery></Grocery></Suspense> ,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/restaurants/:resId",
        element: <Menu></Menu>,
      },
    ],

    errorElement: <Error></Error>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
