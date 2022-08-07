//@ts-nocheck
import { add, SUPER_LONG_STRING } from "local-dep";

const App = () => {
  return (
    <div>
      {add(1, 2)}
      {SUPER_LONG_STRING}
    </div>
  );
};

export default App;
