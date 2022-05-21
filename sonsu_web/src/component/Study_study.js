import React from "react";
import '../component_css/Study.css';

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

export default Study_study;