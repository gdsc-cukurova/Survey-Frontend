import React from 'react';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import SurveyOne from './pages/surveyTypes/surveytypeOne';
import SurveyTwo from './pages/surveyTypes/surveytypeTwo';
import SurveyThree from './pages/surveyTypes/surveytypeThree';
import SurveyFour from './pages/surveyTypes/surveytypeFour';
import SurveyFive from './pages/surveyTypes/surveytypeFive';
import SurveySix from './pages/surveyTypes/surveytypeSix';
import SurveySeven from './pages/surveyTypes/surveytypeSeven';
import SurveyEight from './pages/surveyTypes/surveytypeEight';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} exact></Route>
      <Route path='/signup' element = {<Register/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/survey-1' element = {<SurveyOne/>}/>
      <Route path='/survey-2' element = {<SurveyTwo/>}/>
      <Route path='/survey-3' element = {<SurveyThree/>}/>
      <Route path='/survey-4' element = {<SurveyFour/>}/>
      <Route path='/survey-5' element = {<SurveyFive/>}/>
      <Route path='/survey-6' element = {<SurveySix/>}/>
      <Route path='/survey-7' element = {<SurveySeven/>}/>
      <Route path='/survey-8' element = {<SurveyEight/>}/>
    </Routes>
    </>
  );
}

export default App;
