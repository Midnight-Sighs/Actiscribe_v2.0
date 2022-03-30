import React, {useEffect, useRef, useState} from 'react'
import { Routes, Route } from 'react-router-dom';

import useDecode from '../../Tools/Hooks/useDecode';

//#region Pages
import ActivityHome from '../../Pages/Activity'
import AnonHome from '../../Pages/AnonHome';
import LoggedHome from '../../Pages/LoggedHome';
import Testing from '../../Testing'
//#endregion Pages


const Router = () => {

    const mountedRef = useRef()
    const userId = useDecode();
    const [ auth, setAuth ]=useState();
    const [ loading, setLoading ]=useState(true);

    useEffect(()=>{
        if(mountedRef.current === true){
            if(userId !== null) setAuth(true)
            else setAuth(false)
            console.log("Auth")
        }
    })

    useEffect(()=>{
        setLoading(false)
    },[auth]);

    return(
        <>
            {loading ? 
                null
                :
                <Routes>
                    <Route path="test" element={<Testing />} />
                    {auth ? 
                        <>
                            <Route path="/" element={<LoggedHome />} />
                            <Route path="activity" element={<ActivityHome />}>
                                {/* <Route path="/:activityId" element={<Activity />} /> */}
                            </Route>
                        </>
                    :
                        <Route path="/" element={<AnonHome />} />
                    }
                    <Route path="*" 
                        element={
                            <main style={{padding: "5rem"}}>
                                <p>Wrong route! (Or you aren't logged in!)</p>
                            </main>
                        }
                    />
                    
                </Routes>
            }  
        </>
    )
}

export default Router
