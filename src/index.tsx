import * as React from "react";
import { render } from "react-dom";

import "./styles.css";
import "antd/dist/antd.css";

import { Layout } from "antd";
import HomePage from "./Containers/index";
const { Footer } = Layout;

const renderContent = () => (
  <Layout>
    <HomePage />
    <Footer style={{ textAlign: "center" }}>This is the footer</Footer>
  </Layout>
);

function App() {
  return <div className="App">{renderContent()}</div>;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
