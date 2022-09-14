import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

// testIdx : (testIdx)

function TestResult() {

    const levelIdx=useLocation().state.level;
    var testIdx = useLocation().state.testIdx;

    // axios.get(`/test/${levelIdx}/result`,{
    //     testIdx : 1
   
    // })

    axios.get('/test/1/result',{
        testIdx : 1   
    })
    .then((res)=>{
        console.log(res);
    })

    return(
            <>
                hi
            </>
    )
}

export default TestResult;
