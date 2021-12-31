import React from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import LandingPage from "./pages/landing";
import NotFoundPage from "./pages/notFound";
export const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;