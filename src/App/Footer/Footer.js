import React from 'react'
import './footer.css'
import scroll from './footer-img/scroll.png'
const Footer = ()=>
{


    return(
        <>
            <footer>
        <div className="container">
            <div className="row  footer-item">
                <div  className="scroll-start"><a href="/"><img src={scroll} alt="" className="scroll-start"/></a></div>
                <div className="col-xl-4 col-lg-3 col-md-4 col-sm-12 col-xs-12">
                    <div className="about-me-block">
                        <div className="footer-title">
                            <p>about me</p>
                            <div className="title-underline">
                                <hr className="title-underline-1"></hr>
                                <hr className="title-underline-2"></hr>
                            </div>
                        </div>
                        <div className="footer-description">
                            <p>Hi ,i am Nathaliya Jhione m massa have been a great idea of iSuspendisse time have great idea in orci enim.</p>
                        </div>
                        <div className="footer-img">
                            <img src="" alt=""/>
                        </div>
                        <input type="button" value="READ MORE ABOUT ME" className="footer-btn"/>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md-4 col-sm-12 col-xs-12">
                    <div className="latest-tweet-block">
                        <div className="footer-title">
                            <p>latest tweet</p>
                            <div className="title-underline">
                                <hr className="title-underline-1"></hr>
                                <hr className="title-underline-2"></hr>
                            </div>
                        </div>
                        <div className="tweet-item">
                            <div className="tweet-title">
                                Scott Manson
                            </div>
                            <div className="tweet-message">
                                Developer Advocate @heyval isaiyou know the very well is excited to be talking about things because you are very best ever and evry blog this is blog awesome really .
                            </div>
                            <div className="tweet-tag">
                                @Twitter@magicalrebekah
                            </div>
                        </div>
                        <div className="tweet-item">
                            <div className="tweet-title">
                                Zakar Jhon
                            </div>
                            <div className="tweet-message">
                                Developer Advocate @heyval isaiyou know the very well is excited to be talking about things because you are very best ever and evry blog this is blog awesome really .
                            </div>
                            <div className="tweet-tag">
                                @Twitter@magicalrebekah
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md-4 col-sm-12 col-xs-12">
                    <div className="subscription-block">
                        <div className="footer-title">
                            <p>subscribed & newslatter</p>
                            <div className="title-underline">
                                <hr className="title-underline-1"></hr>
                                <hr className="title-underline-2"></hr>
                            </div>
                        </div>
                        <div className="footer-description">
                            <p>On the other hand, we denounce with righteous nation and have a great dislike men .</p>
                        </div>
                        <form action="send" className="footer-form">
                            <input type="text" className="form-name" placeholder="YOUR NAME"/>
                            <input type="email" name="" id="" className="form-email" placeholder="YOUR EMAIL ADDRESS"/>
                            <input type="button" value="SUBSCRIBED NOW" className="footer-btn"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}
export default Footer