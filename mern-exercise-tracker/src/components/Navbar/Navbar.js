import React, { useEffect } from 'react';
import classes from '../Navbar/Navbar.module.css';
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie';

const Navbar = (props)=>{

    const {auth, setAuth} = props;

    useEffect(()=>{
        if(Cookies.get('username')){
            setAuth(true);
        }
    })

    return(
        <div className={classes.majorContainer}>
            <center>
                <div className={classes.headerContainer}>
                    <div className={classes.nameContainer}>
                        <p>
                            Exercise Tracker
                        </p>
                    </div>
                    <div className={classes.navMenu}>
                        <ul>
                            {
                                auth &&
                                    <li>
                                        <Link to="/" className={classes.lnk}>
                                            Exercise list
                                        </Link>
                                    </li>
                            }
                            {
                                auth &&
                                    <li>
                                        <Link to="/create" className={classes.lnk}>
                                            Create Exercise
                                        </Link>
                                    </li>
                            }
                            <li>
                                {
                                    auth? 
                                    <button    
                                        style={{border:"none", backgroundColor: "transparent", outline: "none"}}
                                        className={classes.lnk}
                                        onClick={()=>{
                                            Cookies.remove('username')
                                            setAuth(false)
                                            window.location = '/user'
                                        }}
                                        > 
                                        Logout User
                                    </button> :
                                    <Link to="/user" className={classes.lnk}> 
                                        Create User
                                    </Link>
                                }
                            </li>
                        </ul>
                    </div>                    
                </div>
            </center>
        </div>
    )
}

export default Navbar;