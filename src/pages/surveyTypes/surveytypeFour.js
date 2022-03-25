import React from "react";
import 'survey-react/survey.css';
import * as Survey from "survey-react";
import Json from '../surveys/questionFour'
import { BackHome } from "./BackHome";

const Survey_4 = () => {
    return(
        <>
            <Survey.Survey json={Json}/>
            <BackHome/>
        </>
    )
}
export default Survey_4;