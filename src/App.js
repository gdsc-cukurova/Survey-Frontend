import React from 'react';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import SurveyOne from './pages/surveyDisplay/surveyOne';
import SurveyTwo from './pages/surveyDisplay/surveyTwo';
import SurveyThree from './pages/surveyDisplay/surveyThree';
import SurveyFour from './pages/surveyDisplay/surveyFour';
import SurveyFive from './pages/surveyDisplay/surveyFive';
import SurveySix from './pages/surveyDisplay/surveySix';
import SurveySeven from './pages/surveyDisplay/surveySeven';
import SurveyEight from './pages/surveyDisplay/surveyEight';
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
