<<<<<<< HEAD
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    );
}

=======
import Header from "../components/Header";
// import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
    return(
        <>
            <Header/>
            {/* <Navbar/> */}
            <Outlet/>
            {/* footer */}
        </>
    );
}

>>>>>>> origin/main
export default Layout;