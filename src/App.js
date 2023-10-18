import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeaderBottom from "./components/header/HeaderBottom";
import Banner from "./components/home/Banner";
import Home from "./pages/Home";
const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <Outlet />
      <Footer />
    </div>
  );
};
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
