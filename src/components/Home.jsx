import React from 'react'
import {Link} from 'react-router-dom'
import Brand from './Brand'
import  {AiOutlineUser} from 'react-icons/ai'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { IoMdAdd} from 'react-icons/io'

function Home() {
  return (
    <div>
        <header flex>
          <Brand/>
          <div className="right-part flex">
            <div className="create-survey-btn">
              <Button color="primary" variant="contained">Create New Survey
              <div className="add-icon mt-5 ml-10">
               <IoMdAdd style={{fontSize:'20px'}} />
              </div>
              </Button>
            </div>
            <Link to="/signup" >
              <Button color="primary" variant="contained" >SIGN UP
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
        </div>
    </div>
  )
}

export default Home