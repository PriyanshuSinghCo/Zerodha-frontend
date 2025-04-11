import React from 'react'

function Education() {
    return ( 
       <div className="container mt-5">
        <div className="row">
            <div className="col-6">
                <img src="media/images/education.svg" style={{width:"70%"}} />
            </div>
            <div className="col-6">
                <h2 className="mb-3 fs-2">Free and open market education</h2>
                <p>Varsity, the largest online stock market Education book in the world <br /> covering everything from the basics to advanced trading</p>
                <a href="" style={{textDecoration:"none"}}>Vesity→</a>

                <p className="mt-5">Trading Q&A, the most active trading and investment community in <br/> India for all your market related queries.</p>
                <a href="" style={{textDecoration:"none"}}>TradingQ&A→</a>
            </div>
        </div>
       </div>
     );
}

export default Education;