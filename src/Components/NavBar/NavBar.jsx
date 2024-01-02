import { useContext } from "react";

import Context from "../Context/Context.jsx";

const style = {
    background: "purple",
    display: "flex",
    padding: "20px",
    alignItems: "center",
    justifyContent: "flex-end",
    color: "white",
    fontWeight: "bold"
};


const Navbar = () => {
    const  {name}  = useContext(Context);

    return <div style={style}>Hi {name}!</div>;
};

export default Navbar