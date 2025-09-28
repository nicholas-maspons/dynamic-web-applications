import React from "react";
import ProgressBar from "../components/ProgressBar";

const ProgressBarPage = () => {
    return (
        <>
            <h1>Welcome to the Progress Bar Page</h1>
            <ProgressBar color="green" percent="75"/>
            <ProgressBar color="blue" percent="10"/>
            <ProgressBar color="red" percent="50"/>
            <ProgressBar color="purple" percent="100"/>
        </>
    )
}

export default ProgressBarPage;
