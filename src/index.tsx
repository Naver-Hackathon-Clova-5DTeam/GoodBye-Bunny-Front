import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import MaxWidthContainer from "./components/common/MaxWidthContainer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <MaxWidthContainer>
      <App />
    </MaxWidthContainer>
  </BrowserRouter>
);
