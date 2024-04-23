import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/index";

export const App = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};
