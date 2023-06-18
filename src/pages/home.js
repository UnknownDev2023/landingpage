import React from 'react'
import {Helmet} from "react-helmet";
import CountdownTimer from '../CountdownTimer';
import '../App.css';
import Timer from '../CountdownTimer';
import ConversionCalculator from './ConversionCalculator';
function Home(){
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    return (

        <div>
            <div class="rts-header-area header-inner-one header--sticky">
        <div class="container">
            <div class="row align-items-center ptb_sm--20">
                <div class="col-xl-6 col-lg-4 col-md-4 col-sm-12 ">
                    <div class="header-left">
                        <a href="index.html" class="logo">
                            <img style={{width:"200px"}} src="assets/images/logo/logo-01.png" alt="NFT_image"/>
                        </a>
                        
                    </div>
                </div>
                <div class="col-xl-6 col-lg-8 col-md-8 col-sm-12 justify-content-sm-center d-xsm-flex justify-content-sm-center d-xsm-flex">
                    <div class="header-right">
                    <ul className="social-wrapper">
                                    <li className="icon"><a href="https://t.me/cosmicx_finance"><i className="fab fa-telegram"></i></a></li>
                                    <li className="icon"><a href="https://t.ly/cosmicx"><i className="fab fa-discord"></i></a></li>
                                    <li className="icon"><a href="https://twitter.com/cosmicx_finance"><i className="fab fa-twitter"></i></a></li>
                                    <li className="icon"><a href="https://reddit.com/r/cosmicx_finance"><i className="fab fa-reddit"></i></a></li>
                                    <li className="icon"><a href="https://cosmicx.medium.com"><i className="fab fa-medium"></i></a></li>
                                    <li className="icon"><a href="https://www.youtube.com/@CosmicXFinance"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                        <a id="connect-wallet" href="wallet.html" class="rts-btn btn-primary btn-md">CONNECT</a>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div className="rts-about-area about-style-one rt_bg-secondary bg-solid-secondary  about-bg rts-section-gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 order-lg-2 order-md-1 order-sm-1">
                            <div className="about-left">
                                <div className='aboutsale'>
                                    <div className='salehead'>
                                        <p style={{paddingTop:"0px", lineHeight:"40px"}}><b>PUBLIC SALE ROUND 1 STARTS IN:</b></p>
                                        <Timer deadline="July, 15, 2023"/>
                                        <p style={{marginTop:"10px"}}><b>LISTING PRICE:</b> 0,08 BUSD</p>
                                        <p style={{margin: "0 0 2px "}}><b>SALE ALLOCATION:</b> 10,000,000 COSMIC</p>
                                    </div>
                                    <h2 className='linebreak'><span>1 COSMIC = 0,02 BUSD</span></h2>
                                    <ConversionCalculator/>
                                    
                                    <a style={{marginTop: "20px"}} href="#" className="rts-btn btn-primary btn-lg radious-0">STARTS JULY 15TH 2023</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div style={{textAlign:"left"}} className="about-inner">
                                <h3 className="title">DeFi oriented 100% towards the user</h3>
                                <p className="disc mb--25 mb_sm--10">The first fully oriented governed DeFi platform that 100% profits the user. This means 100% of taxes and fees are routed back to the community!</p>
                                <p className="disc">We firmly believe in the principle of comprehensive governance, which begins with the establishment of a meticulously designed platform and extends to maintaining full control over the future development and expansion of CosmicX.</p>


                                <a href="https://cosmicx.gitbook.io/cosmicx/overview/starter-guide" className="rts-btn btn-primary btn-md radious-0">Learn More</a>
                                <a style={{marginLeft:"30px"}} href="https://2096977683-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMmzUOiRazAQMIfMCwbBi%2Fuploads%2FNbrDkI6OvuuNVsm1CsJ2%2FWhitepaper.pdf?alt=media&token=b960fb5d-54a9-4098-a9f7-9eec4fcba012" className="rts-btn btn-primary btn-md radious-0">Whitepaper</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="rts-brand-area brand-style-one rts-gradient-one">
                <div className="container">
                    <div className="row">
                        <ul className="brand-style-one">
                            <li className="single-brand"><a href="#"><img src="assets/images/logo/brand/brand-01.png" alt="NFT_Brand" /></a></li>
                            <li className="single-brand"><a href="#"><img src="assets/images/logo/brand/brand-02.png" alt="NFT_Brand" /></a></li>
                            <li className="single-brand"><a href="#"><img src="assets/images/logo/brand/brand-03.png" alt="NFT_Brand" /></a></li>
                            <li className="single-brand"><a href="#"><img src="assets/images/logo/brand/brand-04.png" alt="NFT_Brand" /></a></li>
                            <li className="single-brand"><a href="#"><img src="assets/images/logo/brand/brand-05.png" alt="NFT_Brand" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="rts-about-area about-style-one rt_bg-secondary bg-solid-secondary  rts-section-gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="about-left">
                                <div className="thumbnail">
                                    <img src="assets/images/about/about-01.png" alt="Nft_About" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div style={{textAlign:"left"}} className="about-inner">
                                
                                <h3 className="title">About CosmicX</h3>
                                <p className="disc mb--25 mb_sm--10">At CosmicX, our commitment to governance is paramount. We have dedicated considerable effort to crafting a robust platform that embodies our vision and values. By implementing thorough planning and thoughtful execution, we ensure that our platform meets the highest standards of functionality, security, and user experience.</p>
                                
                                <p className="disc">Furthermore, our governance extends beyond the initial platform launch. We embrace the concept of ongoing governance, which empowers us to shape the future of CosmicX in line with the evolving needs and aspirations of our community. This means that as we move forward, we will actively engage our users, seeking their valuable input and insights to guide the growth and development of our platform.</p>

                                <p className="disc">Our dedication to complete governance ensures that CosmicX remains adaptable and responsive to the ever-changing landscape of the crypto and DeFi industries. By staying true to this principle, we strive to build a vibrant and sustainable ecosystem that effectively serves the interests of our users while driving innovation in the decentralized finance space.</p>


                                <a href="https://defi.cosmicx.finance" className="rts-btn btn-primary radious-0 btn-md">Preview Platform</a>
                                <a style={{marginLeft:"20px"}} href="https://cosmicx.gitbook.io/cosmicx/geek-stats/protocol-revenue" className="rts-btn btn-primary radious-0 btn-md">Protocol Revenue</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="rts-create-area-start rts-section-gap create-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-area">
                               
                                <h3 className="title">CosmicX Tokenomics</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        <img style={{width:"100%"}} src='assets/images/banner/tokenomics.png'/>
                    </div>
                </div>
            </div>
            <div className="rts-create-area-start rts-section-gap create-bg1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-area text-center">
                                <h3 className="title">CosmicX Ecosystem</h3>
                            </div>
                            <p style={{marginTop: "20px"}} className='disc mb--25 mb_sm--10'>Offering a diverse array of DeFi services that cater to the unique needs of our community, CosmicX is always open to new ideas and innovations that can bring additional value and sustainability to our platform. Currently, we provide a diverse set of tools that will jumpstart a thriving and unique ecosystem. </p>
                        </div>
                    </div>
                    <div className="row g-5 mt--50">

                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="single-create">
                        <div class="wrapper">
                            <div class="thumb-ico">
                                <img src="assets/images/collectors/8.png" alt=""/>
                            </div>
                            <h6 class="title">Swap</h6>
                            <p class="disc">CosmicX Swap empowers users to deposit their tokens into the protocol and receive a comparable value of another token in return, taking into consideration factors such as transaction fees, slippage, and price impact. </p>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="single-create">
                        <div class="wrapper">
                            <div class="thumb-ico">
                                <img src="assets/images/collectors/2.png" alt=""/>
                            </div>
                            <h6 class="title">Silent Swap</h6>
                            <p class="disc">Swap tokens with ease from one wallet to another completely anonymouse, making your details invisible from the ledger.</p>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="single-create">
                        <div class="wrapper">
                            <div class="thumb-ico">
                                <img src="assets/images/collectors/1.png" alt=""/>
                            </div>
                            <h6 class="title">Warp Drive</h6>
                            <p class="disc">Warp Drive is the CosmicX's loyality reward system. Stake COSMIC to earn BNB dividends which is generated from COSMIC taxes.</p>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="single-create">
                        <div class="wrapper">
                            <div class="thumb-ico">
                                <img src="assets/images/collectors/3.png" alt=""/>
                            </div>
                            <h6 class="title">Vault</h6>
                            <p class="disc">CosmicX Vault is a decentralized, multichain yield optimizer designed to help users earn compound interest on their crypto holdings.</p>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="single-create">
                        <div class="wrapper">
                            <div class="thumb-ico">
                                <img src="assets/images/collectors/5.png" alt=""/>
                            </div>
                            <h6 class="title">Staking Pools</h6>
                            <p class="disc">Staking Pools for individual assets provide a straightforward way to earn rewards using either COSMIC or COSMICX tokens.</p>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="single-create">
                        <div class="wrapper">
                            <div class="thumb-ico">
                                <img src="assets/images/collectors/9.png" alt=""/>
                            </div>
                            <h6 class="title">Farms</h6>
                            <p class="disc">CosmicX Yield Farms serve as an incentive-driven mechanism, rewarding users for their participation in providing liquidity and supporting the growth of various DeFi projects.</p>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="single-create">
                        <div class="wrapper">
                            <div class="thumb-ico">
                                <img src="assets/images/collectors/7.png" alt=""/>
                            </div>
                            <h6 class="title">XBridge</h6>
                            <p class="disc">Offers a versatile, advanced and secure bridge that facilitates inter-operability of all types of chains and will serve users and partners in the CosmicX ecosystem.</p>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="single-create">
                        <div class="wrapper">
                            <div class="thumb-ico">
                                <img src="assets/images/collectors/6.png" alt=""/>
                            </div>
                            <h6 class="title">Lending Protocol</h6>
                            <p class="disc">Is a lending service platform that allows anyone to borrow an asset by introducing supported tokens as collateral but in the same time can also deposit supported tokens to a pool to become a lender and earn interest.</p>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="single-create">
                        <div class="wrapper">
                            <div class="thumb-ico">
                                <img src="assets/images/collectors/13.png" alt=""/>
                            </div>
                            <h6 class="title">ICO Launchpad</h6>
                            <p class="disc">An Initial Cosmic Offering (ICO) is a fundraising mechanism utilized to introduce new tokens and provide liquidity to those tokens. Users can participate in an Official ICO using either BNB or COSMICX.</p>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="single-create">
                        <div class="wrapper">
                            <div class="thumb-ico">
                                <img src="assets/images/collectors/10.png" alt=""/>
                            </div>
                            <h6 class="title">Binary Options</h6>
                            <p class="disc">With CosmicX, traders can easily engage in speculative trading on the price movements of various cryptocurrencies within a specific time frame with two simple trading options of Call and Put.</p>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="single-create">
                        <div class="wrapper">
                            <div class="thumb-ico">
                                <img src="assets/images/collectors/11.png" alt=""/>
                            </div>
                            <h6 class="title">Certificates</h6>
                            <p class="disc">Certificates draw inspiration from a blend of traditional finance (TradFi), decentralized finance (DeFi), and non-fungible token (NFT) offerings. They provide users with the opportunity to obtain tokens at a reduced price by either utilizing their liquidity provider (LP) tokens or exchanging single assets.</p>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="single-create">
                        <div class="wrapper">
                            <div class="thumb-ico">
                                <img src="assets/images/collectors/12.png" alt=""/>
                            </div>
                            <h6 class="title">Core Stats</h6>
                            <p class="disc">Transparency is a key factor in decentralized projects. Therefore we came with a new concept that will give the community and future potential users full disclosure when it comes to investments and management in the platforms.</p>
                        </div>
                    </div>
                </div>

                    </div>
                    
                </div>
            </div>
            <div className="rts-create-area-start rts-section-gap create-bg2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-area text-center">
                                <h3 className="title">CosmicX Team</h3>
                            </div>
                            <p style={{marginTop: "20px"}} className='disc mb--25 mb_sm--10'>We conscientiously consider the message we intend to convey before speaking, distinguishing between what is essential and what is not. Our communication style is concise and articulate, dedicated to presenting information in a simple and easily comprehensible manner. We delve beyond the surface level to gain a profound understanding of every matter at hand. We possess resourcefulness, always finding ways to accomplish tasks with the available resources, yet never hesitating to seek assistance when necessary. All that and much more makes the CosmicX team thrive at what we are best at. From top notch developers, engineers, blockchain network specialists, we are here to support the future of DeFi and CosmicX.</p>
                        </div>
                    </div>
                    <div className="row g-5 mt--50">

                        <div className="col-xl-4 col-lg-6">
                            <div className="collectors-one-wrapper">
                                <div className="thumbnail badge">
                                    <a href="#"><img src="assets/images/collectors/t1.png" alt="NFt-Collectors" /></a>
                                </div>
                                <div className="details">
                                    
                                        <h5 className="title">COSMICJEDI</h5>
                                    
                                    <span className="collection">FOUNDER</span>
                                </div>
                             
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <div className="collectors-one-wrapper">
                                <div className="thumbnail badge">
                                    <a href="#"><img src="assets/images/collectors/t2.png" alt="NFt-Collectors" /></a>
                                </div>
                                <div className="details">
                                    
                                        <h5 className="title">QAMAR</h5>
                                    
                                    <span className="collection">HEAD SOLIDITY DEVELOPER</span>
                                </div>
                            
                               
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <div className="collectors-one-wrapper">
                                <div className="thumbnail badge">
                                    <a href="#"><img src="assets/images/collectors/t3.png" alt="NFt-Collectors" /></a>
                                </div>
                                <div className="details">
                                    
                                        <h5 className="title">BIGBENNY</h5>
                                    
                                    <span className="collection">BRANDING AND UX/UI LEAD</span>
                                </div>
                              
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <div className="collectors-one-wrapper">
                                <div className="thumbnail badge">
                                    <a href="#"><img src="assets/images/collectors/t4.png" alt="NFt-Collectors" /></a>
                                </div>
                                <div className="details">
                                    
                                        <h5 className="title">AKITA KOHEN</h5>
                                    
                                    <span className="collection">MARKETING</span>
                                </div>
                               
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <div className="collectors-one-wrapper">
                                <div className="thumbnail badge">
                                    <a href="#"><img src="assets/images/collectors/t5.png" alt="NFt-Collectors" /></a>
                                </div>
                                <div className="details">
                                    
                                        <h5 className="title">CALLISTO</h5>
                                
                                    <span className="collection">WEB3 ENGINEER</span>
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <div className="collectors-one-wrapper">
                                <div className="thumbnail badge">
                                    <a href="#"><img src="assets/images/collectors/t6.png" alt="NFt-Collectors" /></a>
                                </div>
                                <div className="details">
                                    
                                        <h5 className="title">OCCULUS</h5>
                                
                                    <span className="collection">LEAD TOKENOMICS ANALYST AND ENGINEER</span>
                                </div>
                               
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <div className="collectors-one-wrapper">
                                <div className="thumbnail badge">
                                    <a href="#"><img src="assets/images/collectors/t7.png" alt="NFt-Collectors" /></a>
                                </div>
                                <div className="details">
                                    
                                        <h5 className="title">KAMARIA</h5>
                                    
                                    <span className="collection">BUSINESS DEVELOPMENT MANAGER</span>
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <div className="collectors-one-wrapper">
                                <div className="thumbnail badge">
                                    <a href="#"><img src="assets/images/collectors/t8.png" alt="NFt-Collectors" /></a>
                                </div>
                                <div className="details">
                                    
                                        <h5 className="title">HOLEYMOLE</h5>
                                    
                                    <span className="collection">FULL STACK DEVELOPER</span>
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <div className="collectors-one-wrapper">
                                <div className="thumbnail badge">
                                    <a href="#"><img src="assets/images/collectors/t9.png" alt="NFt-Collectors" /></a>
                                </div>
                                <div className="details">
                                    
                                        <h5 className="title">PEREGRINT</h5>
                                    
                                    <span className="collection">LEAD BACKEND DEVELOPER</span>
                                </div>
                          
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>

            <div class="rts-call-to-action-area rt_bg-secondary rts-section-gap">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="bg-cta-image cta-inner">
                        <h1 style={{textAlign:"center"}}>COSMIC Token</h1>
                        <div className='token_text'>
                            <p>Contract Address: 0x982b50E55394641cA975a0eEc630b120b671391a</p>
                            <p>Symbol: COSMIC</p>
                            <p>Decimals: 18</p>
                            <p>Network: Binance Smart Chain</p>
                            <p>Supply: 1,000,000,000</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
            
            <div className="rts-footer-area bg-shape-footer pt--120 rt_bg-secondary">
                
                <div className="copy-right-area ptb--50">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="copy-right">
                                    <div className="copy-right-text">
                                        <p className="rts-cp">All rights reserved © 2023 CosmicX.</p>
                                    </div>
                                    <div className="copy-right-link">
                                        <a href="#">Audit</a>
                                        <a href="#">Term and Conditions</a>
                                        <a href="#">Risk Policy and Disclosure</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="cursor cursor--small"></div><canvas className="cursor cursor--canvas"></canvas><div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
            <Helmet>
            
            </Helmet>
            </div>




)}

export default Home;