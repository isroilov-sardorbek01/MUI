import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

function Masala1() {
    const [work, setWork] = useState("Ish");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [task, setTask] = useState([]);

    function validate() {
        if (name === "") {
            alert("Name is not valid!");
            return false;
        }
        if (!email.includes("@")) {
            alert("Email should include @ !");
            return false;
        }
        return true;
    }
    function handlePlus(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            work,
            id: Date.now(),
        };
        const isValid = validate();
        if (!isValid) {
            return;
        }
        const copied = [...task];
        copied.push(data);
        setTask(copied);

        setName("");
        setEmail("");
        setWork("Ish");
    }
    function handleDel(id) {
        const con = confirm("Are you want to delete?");
        if (con) {
            const filteredData = task.filter((item) => item.id !== id);
            setTask(filteredData);
        }
    }

    return (
        <div className="mt-[100px]">
            <div className="container">
                <div className="card w-[600px] mx-auto bg-slate-200 p-4 rounded-xl shadow-md cursor-pointer">
                    <h1 className="text-[30px] text-center">To Do List</h1>
                    <input
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        className="w-full p-3 border-gray-500 border-[1px] rounded-md mb-3 mt-6"
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="w-full p-3 border-gray-500 border-[1px] rounded-md mb-5"
                        type="email"
                        placeholder="Enter the email adress"
                    />
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Work
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={work}
                                label="Work"
                                onChange={(e) => {
                                    setWork(e.target.value);
                                }}
                            >
                                <MenuItem value={"Ish"}>Ish</MenuItem>
                                <MenuItem value={"Uy"}>Uy</MenuItem>
                                <MenuItem value={"Oqish"}>Oqish</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <div className="mt-5 text-center">
                        <Button
                            onClick={handlePlus}
                            color="success"
                            variant="contained"
                        >
                            Add the TASK
                        </Button>
                    </div>
                    <div className="wr mt-6 flex flex-col gap-3">
                        {task.length > 0 ? (
                            task.map((task, index) => {
                                return (
                                    <div
                                        className="flex justify-between items-center bg-white p-3 rounded-xl"
                                        key={task.id}
                                    >
                                        <h1>{task.name}</h1>
                                        <h1>email: {task.email}</h1>
                                        <h1>reason: {task.work}</h1>
                                        <Tooltip title="Delete">
                                            <Button
                                                onClick={() => {
                                                    handleDel(task.id);
                                                }}
                                                variant="outlined"
                                                size="small"
                                                color="warning"
                                            >
                                                remove
                                            </Button>
                                        </Tooltip>
                                    </div>
                                );
                            })
                        ) : (
                            <h1 className="text-center">No tasks YET</h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Masala1;
