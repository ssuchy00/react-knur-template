import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/*
nie używamy tutaj strict mode, ale jakby ktoś chciał poczytać to:

https://react.dev/reference/react/StrictMode

<React.StrictMode>
<App />,
</React.StrictMode>,
*/
