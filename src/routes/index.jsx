import { Routes, Route, useNavigate } from "react-router-dom";
import { Auth, Home } from "../views/index";
import { useEffect } from "react";

export const Router = () => {
    const isAuth = true;
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate("/home");
        } else {
            navigate("/");
        }
    }, [navigate, isAuth]);
    return (
        <div>
            <Routes>
                <Route path="/" element={<Auth />} />
                {isAuth && <Route path="/home" element={<Home />} />}
            </Routes>
        </div>
    );
};
