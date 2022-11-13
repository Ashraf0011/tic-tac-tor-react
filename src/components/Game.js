import React, { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css'
import { Icons } from './Icons';
import { IconContext } from 'react-icons';
import { GiPodiumWinner } from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GiAbstract091, GiCrossedAxes } from "react-icons/gi";

let numArray = new Array(9).fill("empty")

const logic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function Game() {
    let [isCrossed, changeCross] = useState(false);
    let [message, changeMessage] = useState("");
    let [isDisabled, setDisable] = useState(false);
    let [axeC, countX] = useState(0)
    let [shildC, countO] = useState(0)



    const reStartGame = () => {
        toast.success("Game-Restarted", { autoClose: 2500, theme: 'light' })
        numArray = new Array(9).fill("empty")
        changeCross(!isCrossed)
        setDisable(!isDisabled)
        changeMessage("");

    }


    const changeCard = (index) => {

        if (numArray[index] === "empty") {
            numArray[index] = isCrossed ? "Axe" : "Shield"
            changeCross(!isCrossed);

        } else {
            return toast.warning("Tips: Try an empty box!!!", { autoclose: 1500 });
        }

        for (let i = 0; i < logic.length; i++) {
            if (
                numArray[logic[i][0]] !== "empty" &&
                numArray[logic[i][0]] === numArray[logic[i][1]] &&
                numArray[logic[i][0]] === numArray[logic[i][2]]
            ) {
                changeMessage(` ${numArray[logic[i][0]]} wins the macth`)

                console.log(numArray[logic[i][0]]);
                if (numArray[logic[i][0]] === "Axe") { countX(axeC += 1) }
                else if (numArray[logic[i][0]] === "Shield") { countO(shildC += 1) }
                else return 0;

                setDisable(!isDisabled)
            }

        }
    }


    return (
        <div className='game'>
            <h1 className='p-3  text-center'>Welcome and Enjoy Tic Tac Toe</h1>
            <h4 className="p-3 text-center ">Please click any of the arrows.
                Let your opponent click next.</h4>

            <div className='p-5'>
                <div className='vs'>
                    <h1>{axeC}{"  "}
                        <IconContext.Provider value={{ color: "#A63E26" }}>
                            <GiCrossedAxes className='icons' style={{ marginLeft: '.5rem' }} />
                        </IconContext.Provider>
                        {"  "}
                        vs
                        {"  "}
                        <IconContext.Provider value={{ color: "#888C03" }} style={{ marginRight: '.5rem' }}>
                            <GiAbstract091 className='icons' />
                        </IconContext.Provider >
                        {"  "}
                        {shildC}
                    </h1>
                </div>
                <Row>
                    <Col className="">
                        {
                            message ?
                                (
                                    <div className='mb-4 mt-2' >
                                        <h4 className='text-success'> <GiPodiumWinner /> {message} </h4>
                                    </div>


                                ) : (
                                    <>

                                        <h3> It's the turn of, <em className='text-danger'> {isCrossed ? "Axe" : "Shiled"} </em></h3>
                                    </>
                                )
                        }
                        <div className='grid'>
                            {
                                numArray.map((item, index) => (

                                    <Card key={index} className="bg-secondary" onClick={isDisabled ? () => { } : () => changeCard(index)}   >
                                        <CardBody className='box'>
                                            <Icons name={item} />
                                        </CardBody>
                                    </Card>
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </div>
            <button onClick={() => reStartGame()} className="btn"> Re-Start </button>
            <ToastContainer position="bottom-center" newestOnTop={false} autoClose={1500} />

        </div>
    )
}

export default Game