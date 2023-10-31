import CountUp from 'react-countup'
import './index.css'


export default function Hero(){
    return (
       <section className='sectionHero'>
            <div className='heroContainer'>
                <div className='hero-left'>
                    <div className='hero-left-content'>
                    <div className='orange-circle'/>
                        <p>Discover</p>
                        <p>Most suitable</p>
                        <p>Property</p>
                    </div>
                    <div className='hero-left-contentMiniText'>
                        <p>Find a variety of properties that suit you very easilty
                            Forget all difficulties in
                            finding a residence for you</p>
                    </div>
                    <div className='HeroInput'>
                        <input type="text"/>
                        <button>Search</button>
                    </div>
                    <div className='HeroNumbers'>
                        <div className='spans'>
                            <span><CountUp start={8500} end={9000} duration={4}/><p>+</p></span>
                            <p>Premium Product</p>
                        </div>
                        <div className='spans'>
                        <span><CountUp start={4500} end={5000} duration={4}/><p>+</p></span>
                            <p>Premium Product</p>
                        </div>
                        <div className='spans'>
                        <span><CountUp start={1800} end={2000} duration={4}/><p>+</p></span>
                            <p>Premium Product</p>
                        </div>
                    </div>
                </div>
                <div className='hero-right'>
                    <div className='image'>
                        <img src="./hero-image.png" alt="" />
                    </div>
                </div>
            </div>
       </section>
    )
}

