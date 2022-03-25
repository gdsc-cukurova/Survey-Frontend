import React from 'react'
import { Link } from 'react-router-dom'

function Brand() {
  return (
    <div flex>
      <Link to="/" >
        <button className='brand'>survey.com</button>
        </Link>
    </div>
  )
}
export default Brand