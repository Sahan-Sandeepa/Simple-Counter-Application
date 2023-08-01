import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Counter = () => {
    const [value, setValue] = useState(0);

    const plusCount = () => {
        setValue(value + 1);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "70vh",
            }}
        >
            <Button variant="contained" color="primary" onClick={plusCount}>
                Increment
            </Button>
            <Typography variant="h6" color="white" gutterBottom>
                Counter Value: {value}
            </Typography>
        </div>
    );
};

export default Counter;
