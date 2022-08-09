//@ts-nocheck
import fullImport from "sample-library";
import { short_string } from "sample-library2";

const App = () => {
  return (
    <div>
      {short_string} - {fullImport.short_string}
    </div>
  );
};

export default App;
