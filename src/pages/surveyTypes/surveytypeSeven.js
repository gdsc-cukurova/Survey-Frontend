import React from "react";
import 'survey-react/survey.css';
import * as Survey from "survey-react";
import Json from '../surveys/questionSeven'
import { BackHome } from "./BackHome";

const Survey_7 = () => {
    return(
        <>
            <Survey.Survey json={Json}/>
            <BackHome/>
        </>
    )
}
export default Survey_7;