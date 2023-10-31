import './index.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

export default function Contacts(){
    return(
        <section className='contactsSection'>
                <div className='contactContainer'>
                    <div className="c-left">
                        <div className='c-spans'>
                            <span style={{color: '#FBB64F'}}>Our Contact Us</span>
                            <span style={{color: '#254072'}}>Easy to contact us</span>
                            <span style={{color: '#A6A4A6'}}>We always ready to help by providing the best services for you.
                                  We beleive a good blace to live can make your life better
                            </span>
                        </div>
                            <div className='grid'>
                                 <div className='grids'>
                                    <div className='c-descriptions'>
                                    <div className='c-icon'><BsFillChatDotsFill/></div>
                                        <div className='call'>
                                            <span>Call</span>
                                            <span>0125145454</span>
                                        </div>
                                    </div>
                                        <button>Call now</button>
                                </div>
                                 <div className='grids'>
                                 <div className='c-descriptions'>
                                    <div className='c-icon'>
                                        <MdCall size={25}/>
                                    </div>
                                        <div className='call'>
                                            <span>Chat</span>
                                            <span>0125145454</span>
                                        </div>
                                    </div>
                                        <button>Call now</button>
                                </div>
                                <div className='grids'>
                                <div className='c-descriptions'>
                                    <div className='c-icon'><HiChatBubbleBottomCenter/></div>
                                        <div className='call'>
                                            <span>E-mail</span>
                                            <span>0125145454</span>
                                        </div>
                                    </div>
                                        <button>Call now</button>
                                </div>
                                <div className='grids'>
                                <div className='c-descriptions'>
                                    <div className='c-icon'><HiChatBubbleBottomCenter/></div>
                                        <div className='call'>
                                            <span>Video Call</span>
                                            <span>0125145454</span>
                                        </div>
                                    </div>
                                        <button>Call now</button>
                                </div>
                            </div>        
                    </div>
                    <div className="c-right">
                        <img src='./contact.jpg'></img>
                    </div>
                </div>
        </section>
    )
}