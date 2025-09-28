import React from "react";
import Toggle from "../components/Toggle";

const TogglePage = () => {
    return (
        <>
            <h1>Welcome to the Toggle Page</h1>
            <Toggle color="green"/>
            <Toggle color="blue"/>
            <Toggle color="red"/>
            <Toggle color="purple"/>
        </>
    )
}

export default TogglePage;
