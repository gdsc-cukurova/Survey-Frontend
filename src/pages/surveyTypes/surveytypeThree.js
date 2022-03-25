import React from "react";
import 'survey-react/survey.css';
import * as Survey from "survey-react";
import Json from '../surveys/questionThree'
import { BackHome } from "./BackHome";

const Survey_3 = () => {
    return(
        <>
            <Survey.Survey json={Json}/>
            <BackHome/>
        </>
    )
}
export default Survey_3;