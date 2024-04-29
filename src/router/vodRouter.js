import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const VodOnePage = lazy(() => import("../pages/vod/VodOnePage"));
const VodCreatePage = lazy(() => import("../pages/vod/VodCreatePage"));
const vodRouter = () => {
  return [
    { path: "", element: <Navigate to="one" /> },
    {
      path: "one",
      element: (
        <Suspense fallback={<div>Loading</div>}>
          <VodOnePage />
        </Suspense>
      ),
    },
    // Create 추가
    {
      path: "create",
      element: (
        <Suspense fallback={<div>Loading</div>}>
          <VodCreatePage />
        </Suspense>
      ),
    },
  ];
};
export default vodRouter;
