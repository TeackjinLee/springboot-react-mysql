import Header from "../Header";
import Footer from "../Footer";
import {Outlet, useLocation} from "react-router-dom";
import {AUTH_PATH} from "../../constant";

//      component: layout      //
export default function Container() {

    //      state: 현재 페이지 path name 상태  //
    const { pathname } = useLocation();

    //      render: layout render      //
    return (
        <>
            <Header />
            <Outlet />
            {pathname !== AUTH_PATH() && <Footer />}
        </>
    )
}