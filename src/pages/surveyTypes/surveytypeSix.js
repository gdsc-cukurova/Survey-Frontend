import React from "react";
import 'survey-react/survey.css';
import * as Survey from "survey-react";
import Json from '../surveys/questionSix'
const Survey_6 = () => {
    return(
        <Survey.Survey
        json={Json}
        />
    )
}
export default Survey_6;