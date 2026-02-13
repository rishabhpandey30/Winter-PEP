import React from 'react'
import { useNavigate } from 'react-router-dom';

function LandingPage() {

    const navigate = useNavigate();   // to navigate
    function pageNavigate(){
        alert("Navigated to about")
        navigate('/about')
    }
  return (
    <>
    <div>LandingPage</div>
    <div>
    <button onClick={pageNavigate}>Go-To</button>
    </div>
    </>
  )
}

export default LandingPage