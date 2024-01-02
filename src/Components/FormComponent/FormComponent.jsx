

import  { useContext } from "react";

import Context from "../Context/Context.jsx";

const inputStyle = {
    padding: "8px 10px",
    fontSize: "1em"
};

const FormComponent = () => {
    const { name, setName } = useContext(Context);

    return (
        <div style={{ padding: "20px" }}>
            <div>
                <label>Name:</label>{" "}
                <input
                    style={inputStyle}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
        </div>
    );
};

export default FormComponent