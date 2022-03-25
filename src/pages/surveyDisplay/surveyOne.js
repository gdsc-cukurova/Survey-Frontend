import React from "react";
import Survey_1 from "../surveyTypes/surveytypeOne";
import { BackHome } from "./BackHome";

const SurveyOne = () => {
    return (
        <div className="App">
            <Survey_1/>
            <BackHome/>
        </div>
    )
}
export default SurveyOne;