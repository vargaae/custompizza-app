import { useEffect, Suspense } from "react";

import {
  useLocation,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import { Navbar, Spinner, Footer } from "./components";

import { Start, Selector } from "./routes";

import ErrorPage from "./ErrorPage";
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Layout = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/selector",
        element: <Selector />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    />
  );
};

export default App;
