import { Routes, Route } from "react-router-dom";
import { Home } from "../views/index";
//import { useEffect } from "react";
import { FirstLesson } from "../components/FirstLesson";

export const Router = () => {
    //const isAuth = true;
    //const navigate = useNavigate();

    // useEffect(() => {
    //     if (isAuth) {
    //         navigate("/home");
    //     } else {
    //         navigate("/");
    //     }
    // }, [navigate, isAuth]);
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/first" element={<FirstLesson />} />
                {/* {isAuth && <Route path="/home" element={<Home />} />} */}
            </Routes>
        </div>
    );
};
