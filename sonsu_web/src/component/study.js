import React from 'react';
import Study_sidebar from './Study_sidebar';
import Study_study from './Study_study';

import '../component_css/Study.css';

function Study(){   
        return (
            <div className='study'>
                <Study_sidebar />
                <Study_study />
            </div>
        );    
}

export default Study;