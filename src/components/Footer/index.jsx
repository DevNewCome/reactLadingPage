import './index.css'


export default function Footer(){
    return(
        <div>
            <section className='footerContainer'>
                <div className='footerContent'>
                    <div className='f-left'>
                         <img src="./logo2.png" alt="logo" width={100}/>
                         <p>Our vision is to make all people <br/>
                         the best place to live for them.</p>
                    </div>
                    <div className='f-right'>
                        <div className='top'>
                            <h1>Information</h1>
                            <span>145 New York, FL 5647, USA</span>
                        </div>
                        <div className='under'>
                            <ul>
                                <li>Property</li>
                                <li>Services</li>
                                <li>Product</li>
                                <li>About us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}