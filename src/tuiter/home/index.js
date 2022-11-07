import React from "react";
import TuitList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening />
            <TuitList />
        </>
    )
}

export default HomeScreen;