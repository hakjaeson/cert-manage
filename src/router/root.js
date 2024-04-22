import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import vodRouter from "./vodRouter";

// 대분류를 적으시면 됩니다. 대분류 => 대분류의 경로
const MainPage = lazy(() => import("../pages/main/MainPage"));
const VodPage = lazy(() => import("../pages/vod/VodPage"));
// 여기까지는 고정으로 두는게 편합니다.
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <MainPage />
      </Suspense>
    ),
  },
  {
    path: "/vod/",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <VodPage />
      </Suspense>
    ),
    children: vodRouter(),
  },
]);
export default router;
