import React from "react";
import '../component_css/Study.css';

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
                <li>일상 단어</li>     
            </ul>
        </div>
    );
}

export default Study_sidebar;