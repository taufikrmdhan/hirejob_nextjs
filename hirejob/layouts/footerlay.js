import React from "react";
import Footer from "../component/Footer";

const layout = (props) => {
    const {children} = props;
    return (
        <>
        <main>
            {children}
        </main>
        <Footer/>
        </>
    )
}
export default layout;