import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const VodOnePage = lazy(() => import("../pages/vod/VodOnePage"));
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
  ];
};
export default vodRouter;
