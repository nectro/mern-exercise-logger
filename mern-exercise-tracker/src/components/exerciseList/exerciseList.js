import axios from 'axios';
import React, { useEffect, useState } from 'react';
import classes from './exerciseList.module.css';
import Cookies from 'js-cookie'

const ExerciseList = ()=>{

    const [exer,setExer] = useState([]);

    useEffect(
        ()=>{

            var user = { username : Cookies.get('username') }

            axios.post("http://localhost:5000/exercises", user)
            .then(
                res =>{
                    var a = res.data;
                    var ex = [];
                    a.map(exers => ex.push(exers))
                    setExer(ex);
                }
            )
        },
        []
    )

    return(
        <div className={classes.majorContainer}>
            <div className={classes.exerciseContainer}>
                <center>
                {
                    exer.length > 0?
                    exer.map((exercise,index) => 
                        <div  className={classes.exercises} key={index}>
                            <table>
                                <tbody>
                                <tr>
                                    <td>username</td><td>:</td><td>{exercise.username}</td> 
                                </tr>
                                <tr>
                                    <td>description</td><td>:</td><td>{exercise.description}</td>
                                </tr>
                                <tr>
                                    <td>duration</td><td>:</td><td>{exercise.duration}</td>
                                </tr>
                                <tr>
                                    <td>date</td><td>:</td><td>{exercise.date}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    ) :
                    <h1>there is no exercises</h1>
                }
                </center>
            </div>
        </div>
    )
}

export default ExerciseList;