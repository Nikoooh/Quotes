import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from 'react-router-dom'

const Navbar: React.FC = (): React.ReactElement => {

  const navigate = useNavigate()

  return (
    <div className='navbar'>
      <div>
        <i className='bi bi-house navBtn'onClick={() => navigate('/')} />
        <i className='bi bi-star-fill navBtn'onClick={() => navigate('/favourites')} />
      </div>
    </div>
  )
}

export default Navbar