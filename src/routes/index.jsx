import { Navigate, Route, Routes } from "react-router-dom";
import * as page from "../pages";
import config from "../config";

const Router = () => {
  return (
    <Routes>
      <Route path={config.routes.dashboard} element={<page.DashboardPage />} />
      <Route path={config.routes.posts} element={<page.PostsPage />} />
      <Route path={config.routes.settings} element={<page.SettingsPage />} />
      <Route path={config.routes.subcription} element={<page.SubciptionPage />} />
      <Route path={config.routes.revenue} element={<page.RevenuePage />} />
      <Route path="/" element={<Navigate to={config.routes.subcription}  />} />
    </Routes>
  );
};

export default Router;
