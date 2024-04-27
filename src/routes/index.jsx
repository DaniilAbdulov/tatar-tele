import { Routes, Route } from "react-router-dom";
import { Home, NoFound } from "../views/index";
//import { useEffect } from "react";
import { FirstLessonWrapper } from "../components/FirstLesson/index";

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
                <Route path="/" element={<Home />} />
                <Route path="/first" element={<FirstLessonWrapper />} />
                <Route path="*" element={<NoFound/>}/>
                {/* {isAuth && <Route path="/home" element={<Home />} />} */}
            </Routes>
        </div>
    );
};
