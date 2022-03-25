import React from "react";
import 'survey-react/survey.css';
import * as Survey from "survey-react";
import Json from '../surveys/questionFive'
const Survey_5 = () => {
    return(
        <Survey.Survey
        json={Json}
        />
    )
}
export default Survey_5;