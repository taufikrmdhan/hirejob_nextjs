import React from "react";
import Navbar2 from "../component/Navbar2";

const layout2 = (props) => {
    const {children} = props;
    return (
        <>
        <Navbar2/>
        <main>
            {children}
        </main>
        </>
    )
}
export default layout2;