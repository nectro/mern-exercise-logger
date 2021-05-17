import React, { useState } from 'react';
import classes from "../createExersice/createExercise.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Cookies from 'js-cookie';


const CreateExercise = ()=>{

    const [name] = useState(Cookies.get('username'));
    const [description,setDescription] = useState();
    const [duration,setDuration] = useState();
    const [date,setDate] = useState();

    const HandleSubmit = (e)=>{
        e.preventDefault();
        const exercise = {
            "username":name,
            "description":description,
            "duration":duration,
            "date":date
        }

        console.log(exercise);

        axios.post("http://localhost:5000/exercises/add", exercise)
            .then(
                res => console.log(res.data)
            )
        window.location = '/';
    }




    return(
        <div className={classes.majorContainer}>
            <div className={classes.formContainer}>
                <form onSubmit={HandleSubmit}>
                    <ul>
                        <li>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="description" 
                                    className={classes.input}
                                    onChange={(e)=>{
                                        setDescription(e.target.value)
                                    }}                            
                                />
                            </div>
                        </li>
                        <li>
                            <div>
                                <input 
                                    type="number" 
                                    placeholder="duration" 
                                    className={classes.input}
                                    onChange={(e)=>{
                                        setDuration(e.target.value)
                                    }}                            
                                />
                            </div>
                        </li>
                        <li>
                            <div className={classes.dateContainer}>
                                <DatePicker 
                                    selected={date}
                                    onChange={date => setDate(date)}
                                    className={classes.datepicker}
                                />
                            </div>
                        </li>
                        <li>
                            <div className={classes.dateContainer}>
                                <input type="submit" className={classes.button}/>
                            </div>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default CreateExercise;