import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import { BrowserRouter } from "react-router-dom";

interface MaxWidthContainerProps {
  children: ReactNode;
}

const MaxWidthContainer = ({ children }: MaxWidthContainerProps) => (
  <div className="max-w-[480px] flex flex-col mr-auto ml-auto">{children}</div>
);

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
