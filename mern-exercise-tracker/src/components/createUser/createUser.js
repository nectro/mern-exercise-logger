import React, {  useState } from 'react';
import classes from './createUser.module.css'
import axios from 'axios'
import Cookies from 'js-cookie'

const CreateExercise = (props)=>{

    const [name,setUsername] = useState();

    const {
        setAuth
    } = props;


    const handleSubmit = (e)=>{
        e.preventDefault();
        var user = {
            "username":name,
        }

        axios.post("http://localhost:5000/users/add", user)
        .then(
            res => {
                console.log(res.data.username)
                Cookies.set('username', res.data.username)
                if(Cookies.get('username')){
                    setAuth(true);
                }

                window.location = '/';
            }
        ).catch(
            err =>{
                console.log(err)
            }
        )



    }


    return(
        <div className={classes.majorContainer}>
            <div className={classes.formContainer}>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="name" 
                                    className={classes.input}
                                    onChange={(e)=>{
                                        setUsername(e.target.value)
                                    }}                            
                                />
                            </div>
                        </li>
                        <li>
                            <div>
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