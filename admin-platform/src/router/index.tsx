import AuthLauyout from "@/layouts/AuthLauyout";
import Login from "@/pages/auth/Login";
import { Route, Routes } from "react-router";


export default function Routers() {

    return (
        <Routes>

            {/* Seccion auth */}
            <Route path="auth" element={<AuthLauyout />}>
                <Route path="login" element={<Login />} />
            </Route>

            {/* Dashboard */}
        </Routes>
    );
}