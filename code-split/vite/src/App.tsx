import { lazy, Suspense, useState } from "react";

const RouteA = lazy(() => import("./RouteA"));
const RouteB = lazy(() => import("./RouteB"));

const App = () => {
  const [renderA, setRenderA] = useState(false);
  const [renderB, setRenderB] = useState(false);

  return (
    <div>
      <button onClick={() => setRenderA((prev) => !prev)}>{renderA ? "Unmount Route A" : "Render Route A"}</button>

      {renderA && (
        <Suspense fallback={<div>Loading...</div>}>
          <RouteA />
        </Suspense>
      )}

      <button onClick={() => setRenderB((prev) => !prev)}>{renderB ? "Unmount Route B" : "Render Route B"}</button>

      {renderB && (
        <Suspense fallback={<div>Loading...</div>}>
          <RouteB />
        </Suspense>
      )}
    </div>
  );
};

export default App;
