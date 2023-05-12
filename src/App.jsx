import Home from "./pages/Home/Home.page.jsx";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader/Loader.component.jsx";
import { getCategories } from "./actions/categories.actions.js";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { data, pending } = useSelector((state) => state.categories);

  useEffect(() => {
    if (!data.length) {
      dispatch(getCategories());
    }
  }, []);

  if (pending) {
    return <Loader />;
  }

  return (
    <>
      <Home />
    </>
  );
}

export default App;
