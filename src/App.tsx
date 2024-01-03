import "./App.css";
import Layout from "./Layout";
import Campaigns from "./pages/Campaigns";
import CreateCampaign from "./pages/CreateCampaign";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Campaigns />} />
            <Route path="/create" element={<CreateCampaign />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Layout>
    </>
  );
}

export default App;
