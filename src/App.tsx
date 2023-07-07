import { RouterProvider } from "react-router-dom";
import router from "./lib/router";
import { Provider } from "react-redux";
import store from "./lib/store/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
