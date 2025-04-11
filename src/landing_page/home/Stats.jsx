import React from 'react'

function Stats() {
    return ( 
        <div className="container p-10">
            <div className="row">
                <div className="col-6 p-5">
                    <h1 className="fs-2">Trust with confidence</h1>
                    <h2 className="fs-4">Customer-first always</h2>
                    <p className="text-muted">That's why 1.3+ crore customer trust Zerodha with ₹3.5+ lakh crores wort of equity investments.</p>

                   
                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className="text-muted">That's why 1.3+ crore customer trust Zerodha with ₹3.5+ lakh crores wort of equity investments.</p>

                    
                    <h2 className="fs-4">The Zerodha universe</h2>
                    <p className="text-muted">That's why 1.3+ crore customer trust Zerodha with ₹3.5+ lakh crores wort of equity investments.</p>

                  
                    <h2 className="fs-4">Do better with money</h2>
                    <p className="text-muted">That's why 1.3+ crore customer trust Zerodha with ₹3.5+ lakh crores wort of equity investments.</p>
                </div>
                <div className="col-6">
                    <img src="media/images/ecosystem.png" alt="" style={{width:"95%"}} />
                </div>
                <div className="text-center">
                    <a href="#"className="mx-5" style={{textDecoration:"none"}}>Explore our products</a>
                    <a href="#" style={{textDecoration:"none"}}>Try Kite demo</a>
                </div>
            </div>
        </div>
     );
}

export default Stats;