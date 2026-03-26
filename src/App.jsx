import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import router from "./router/router";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
