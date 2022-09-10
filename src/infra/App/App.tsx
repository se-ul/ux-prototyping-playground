import { Playground } from "components";
import { Examples, Header, Settings } from "infra";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app__content-container">
          <Routes>
            <Route path="/" element={<Playground />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/examples/:id" element={<Examples />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
