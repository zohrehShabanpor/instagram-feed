/** @format */

import { FeedModule } from "./modules/Feed/feedModule";
import { MOBILE_TABS } from "./model/routes/panel";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={MOBILE_TABS.feed} element={<FeedModule />} />
      <Route path="/*" element={<Navigate to={MOBILE_TABS.feed} replace />} />
    </Routes>
  );
}

export default App;
