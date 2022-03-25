import React from "react";
import 'survey-react/survey.css';
import * as Survey from "survey-react";
import Json from '../surveys/questionFour'
const Survey_4 = () => {
    return(
        <Survey.Survey
        json={Json}
        />
    )
}
export default Survey_4;