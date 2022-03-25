import React from "react";
import 'survey-react/survey.css';
import * as Survey from "survey-react";
import Json from '../surveys/questionThree'
const Survey_3 = () => {
    return(
        <Survey.Survey
        json={Json}
        />
    )
}
export default Survey_3;