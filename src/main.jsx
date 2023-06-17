import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/routes.jsx";
import "./index.scss";

// if (process.env.NODE_ENV === "development") {
import("./mocks/browser");
// }

ReactDOM.createRoot(document.getElementById("root")).render(<AppRoutes />);
