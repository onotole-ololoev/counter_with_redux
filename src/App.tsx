import React from 'react';
import './App.css';
import Button from "./components/Button";
import Table from "./components/Table";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./store/store";
import {addCountAC, resetCountAC, subCountAC} from "./store/counterReducer";

function App() {

    let counter = useSelector<RootStateType, number>(s => s.counter)
    let dispatch = useDispatch();

    const addCount = () => {
        console.log('+')
        dispatch(addCountAC())
    }
    const subCount = () => {
        dispatch(subCountAC())
    }
    const resetCount = () => {
        dispatch(resetCountAC())
    }

    return (
        <div className="App">
            <h1>Counter with Redux</h1>
            <Table title={counter}/>
            <div className={"buttons-block"}>
                <Button title={"+"} callBack={addCount}/>
                <Button title={"-"} callBack={subCount}/>
            </div>
            <div className={"buttons-block"}>
                <Button title={"reset"} callBack={resetCount}/>
            </div>
        </div>
    );
}

export default App;
