import React from 'react'
import {Link} from 'react-router-dom'
import Brand from '../components/Brand'
import  {AiOutlineUser} from 'react-icons/ai'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { IoMdAdd} from 'react-icons/io'
import { CardPreview } from '../components/CardPreview';

function Home() {
  return (
    <div className='home' >
        <header flex>
          <Brand/>
          <div className="right-part flex">
            <div className="create-survey-btn">
              <Button size='small' color="primary" variant="contained">Create New Survey
              <div className="add-icon mt-5 ml-10">
               <IoMdAdd style={{fontSize:'20px'}} />
              </div>
              </Button>
            </div>
            <Link to="/signup" >
              <Button size='small' color="primary" variant="contained" >SIGN UP
                <div className="user-icon mt-5 ml-10">
                  <AiOutlineUser style={{fontSize:"20px", marginTop:""}} />
                </div>
              </Button>
            </Link>
          </div>
        </header>
        <div className="survey-container">
          <div className="btn-group flex">
            <div className="filter-btn">
              <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button>ALL</Button>
                <Button>ACTIVE</Button>
                <Button>CLOSED</Button>
              </ButtonGroup>
            </div>
          </div>
          <div className="survey-cards">
            <CardPreview url='survey-1' cardTitle='Personal Info Survey'
            readingDuration='4 questions(1 minutes)'
             />
            <CardPreview url='survey-2' cardTitle='Software Developer Survey'
            readingDuration='2 questions(0.5 minutes)'
            />
            <CardPreview url='survey-3' cardTitle='COVID-19 Survey'
            readingDuration='30 questions(8 minutes)'
            />
            <CardPreview url='survey-4' cardTitle='Favourite Food Survey'
            readingDuration='1 questions(0.25 minutes)'
            />
            <CardPreview url='survey-5' cardTitle='Product Feedback Survey'
            readingDuration='8 questions(2 minutes)'
            />
            <CardPreview url='survey-6' cardTitle='Animal Survey'
            readingDuration='1 question(0.25 minutes)'
            />
            <CardPreview url='survey-7' cardTitle='Age Survey'
            readingDuration='1 - 4 questions(0.25 - 1 minutes)'
            />
            <CardPreview url='survey-8' cardTitle='Income Survey'
            readingDuration='3 - 5 questions(0.75 - 1.25 minutes)'
            />
          </div>
        </div>
    </div>
  )
}

export default Home