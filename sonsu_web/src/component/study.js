import React from 'react';
import '../component_css/Study.css';
import Study_play from './Study_play';

function Study(){   
        return (
            <div className='study'>
                {/* <Study_sidebar />
                <Study_study /> */}
                <Study_play/>
            </div>
        );    
}

function Study_sidebar(){
    // const menus=[
    //     {name:'초급',path:'/'},
    //     {name:'자음',path:'/'},
    //     {name:'모음',path:'/'},

    //     {name:'중급',path:'/'},
    //     {name:'인삿말',path:'/'},

    //     {name:'고급',path:'/'},
    //     {name:'일상생활 단어',path:'/'}
    // ];

    // const menulist = menus.map((menu, index) => (<li key={index}>{menu.name}</li>));

    return(
        <div className="sidebar">
            <h3>초급</h3>
            <ul>                
                <li>자음</li>
                <li>모음</li>       
            </ul>

            <h3>중급</h3>
            <ul>                
                <li>인삿말</li>     
            </ul>

            <h3>고급</h3>
            <ul>                
                <li>일상 생활 단어</li>     
            </ul>
        </div>
    );
}

function Study_study(){
    return(
        <div className="study_study">
            <div className="level">
                <h3>초급</h3>
                

                <div className="flex_container">
                    <div className="level_component">자음</div>
                    <div className="level_component">모음</div>
                </div>
                
            </div>

            <div className="level">
                <h3>중급</h3>

                <div className="flex_container">
                    <div className="level_component">인삿말</div>
                </div>
            </div>

            <div className="level">
                <h3>고급</h3>

                <div className="flex_container">
                    <div className="level_component">일상 생활 단어</div>
                </div>
            </div>
        
        </div>
    );
}

export default Study;