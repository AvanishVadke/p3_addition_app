import { useState, useRef } from "react";


function Addition() {
    const rNum1 = useRef();
    const rNum2 = useRef();
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [msg, setMsg] = useState("");

    const hNum1 = (event) => {setNum1(event.target.value);}
    const hNum2 = (event) => {setNum2(event.target.value);}

    const add = (event) => {
        event.preventDefault();

        if (num1 === "") {
            alert("Please enter the first number");
            setMsg("");
            rNum1.current.focus();
            return;
        }
        if (num2 === "") {
            alert("Please enter the Second number");
            setMsg("");
            rNum2.current.focus();
            return;
        }

        let n1 = parseFloat(num1);
        let n2 = parseFloat(num2);
        let r = n1 + n2;
        let ans = "Result of addition = " + r.toFixed(2);
        setMsg(ans);
    }
    
    return(
        <>
            <center>
                <h1>Addition App</h1>

                <form onSubmit= {add}>
                    <input type="number" placeholder="Enter a number" onChange={hNum1} ref={rNum1} />
                    <br />
                    <br />
                    <input type="number" placeholder="Enter a number" onChange={hNum2} ref={rNum2} />
                    <br />
                    <br />
                    <input type="submit" value="Add" />
                    </form>
                    <h2> {msg} </h2>
            </center>
        </>
    );
}

export default Addition;