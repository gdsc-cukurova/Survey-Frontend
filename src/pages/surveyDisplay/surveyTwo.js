import React from "react";
import Survey_2 from "../surveyTypes/surveytypeTwo";
import '../../App.css'
import { BackHome } from "./BackHome";
const SurveyTwo = () => {
    return (
        <div className="App">
            <Survey_2/>
            <BackHome/>
        </div>
    )
}
export default SurveyTwo;