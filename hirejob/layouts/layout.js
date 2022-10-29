import React from "react";
import Navbar from "../component/Navbar";

const layout = (props) => {
    const {children} = props;
    return (
        <>
        <Navbar/>
        <main>
            {children}
        </main>
        </>
    )
}
export default layout;