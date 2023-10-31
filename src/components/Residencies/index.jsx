import './res.css'
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

export default function Residencies(){
    return(
          <section className='residenciesSection'>
                <div className='containerResidencie'>
                    <div className='spans2'>
                        <span className='orangeText'>Best choices</span>
                        <span className='grayText'>Best choices</span>
                    </div>
                   
                    <Swiper className='swiper' {...sliderSettings}>
                    <SliderButtons/>
                        {  
                            data.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className='r-card'>
                                        <img src={item.image} alt='home'/>
                                       <span className='description'>
                                           <span>${item.price}</span>
                                       </span>
                                       <span style={{color: 'blue'}}>{item.name}</span>
                                       <span style={{color: 'orange'}}>{item.detail}</span>
                                    </div>
                                </SwiperSlide>
                            ))
                            
                        }
                   
                    </Swiper>
                </div>
          </section>   
    )
}

const SliderButtons = () => {
    const swiper = useSwiper()
    return(
        <div className='r-button'>
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}