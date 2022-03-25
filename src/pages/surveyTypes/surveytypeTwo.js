import React from "react";
import 'survey-react/survey.css';
import * as Survey from "survey-react";
import Json from '../surveys/questionTwo'
const Survey_2 = () => {
    return(
        <Survey.Survey
        json={Json}
        />
    )
}
export default Survey_2;