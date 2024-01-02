import  { useState } from "react";

import Context from "../Context/Context.jsx";


const Wrapper = ( {children} ) => {
    const [name, setName] = useState("Brian Vera");

return (
        <Context.Provider
            value={{
                
                name,
                setName
                
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Wrapper