import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import {
  RouterProvider as Router,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./layouts/App.layout.jsx";
import ErrorBoundary from "./pages/ErrorBoundary/ErrorBoundary.page.jsx";
import Product from "./pages/Product/Product.page.jsx";
import NotFound from "./pages/NotFound/NotFound.component.jsx";
import Categories from "./pages/Categories/Categories.page.jsx";
import Cart from "./pages/Cart/Cart.page.jsx";
import SignIn from "./pages/Auth/SignIn/SigIn.page.jsx";
import SignUp from "./pages/Auth/SignUp/SignUp.page.jsx";
import { AuthProvider } from "react-auth-kit";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/product/:path",
    element: <Product />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/categories",
    element: <Categories />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:" || false}
    >
      <Router router={BrowserRouter} />
    </AuthProvider>
  </Provider>
);
