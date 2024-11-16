import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <h3 className="text-3xl font-bold text-red-900">This is outlet</h3>
        </div>
    );
};

export default Root;