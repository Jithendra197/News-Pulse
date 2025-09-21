import React from "react";
    import Loader from "../assets/Loader.gif";

const Spinner = () => {
    return (
        <img src={Loader} alt="Loading..." className="mx-auto" />
    );
};

export default Spinner;
