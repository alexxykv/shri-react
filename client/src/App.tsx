import React from "react";
import Layout from "./components/Layout/component";
import MainPage from "./pages/Main/component";

const App: React.FC = () => {
  return (
    <Layout>
      <MainPage />
    </Layout>
  )
}

export default App