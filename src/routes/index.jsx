import { Route, Routes } from "react-router-dom";
import * as page from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<page.DashboardPage />} />
      <Route path="/posts" element={<page.PostsPage />} />
      <Route path="/settings" element={<page.SettingsPage />} />
      <Route path="/dashboard/subcription" element={<page.SubciptionPage />} />
      <Route path="/dashboard/revenue" element={<page.RevenuePage />} />
    </Routes>
  );
};

export default Router;
