import React from 'react'
import './BlogsStyles.scss'

const Blogs = () => {
    return (
        <div className="performance-wrap container">
            <div className="performance-innerwrp">
                <h3 className="sub-heading text-center mb-5">Latest Blog Posts</h3>
                <div className="row performancelist-wrp">
                    <div className="col-md-3 col-sm-6 perform-item p-0">
                        <img
                            src="https://www.nihilent.com/wp-content/uploads/2023/02/human_intelligence_home.jpg"
                            className="img-fluid"
                            alt=""
                        />
                        <div className="perform-content">
                            <h5 className="perform-head">Industry 5.0 and Human Intelligence</h5>
                            <div className="arrowbtn-wrap perform-btnwrp">
                                <button className='btn btn-outline-dark'>
                                    <i className='fa-solid fa-arrow-right border-0'/>
                                </button>
                            </div>
                        </div>
                        <div className="perform-overlay" />
                    </div>
                    <div className="col-md-3 col-sm-6 perform-item p-0">
                        <img
                            src="https://www.nihilent.com/wp-content/uploads/2022/09/1digita_-transformation.jpg"
                            className="img-fluid"
                            alt=""
                        />
                        <div className="perform-content">
                            <h5 className="perform-head">Right timing is a matter of Perception</h5>
                            <div className="arrowbtn-wrap perform-btnwrp">
                                <button className='btn btn-outline-dark'>
                                <i className='fa-solid fa-arrow-right border-0'/>
                                </button>
                            </div>
                        </div>
                        <div className="perform-overlay" />
                    </div>
                    <div className="col-md-3 col-sm-6 perform-item p-0">
                        <img src="https://www.nihilent.com/wp-content/uploads/2022/07/1supply_chain.jpg" className="img-fluid" alt="" />
                        <div className="perform-content">
                            <h5 className="perform-head">Time to Shift to Demand-Driven Supply Chain</h5>
                            <div className="arrowbtn-wrap perform-btnwrp">
                                <button className='btn btn-outline-dark'>
                                <i className='fa-solid fa-arrow-right border-0'/>
                                </button>
                            </div>
                        </div>
                        <div className="perform-overlay" />
                    </div>
                    <div className="col-md-3 col-sm-6 perform-item p-0">
                        <img src="https://www.nihilent.com/wp-content/uploads/2022/05/1sap_analytics.jpg" className="img-fluid" alt="" />
                        <div className="perform-content">
                            <h5 className="perform-head">Boost Your Business by Data Analytics Using SAP Analytics Cloud</h5>
                            <div className="arrowbtn-wrap perform-btnwrp">
                                <button className='btn btn-outline-dark'>
                                <i className='fa-solid fa-arrow-right border-0'/>
                                </button>
                            </div>
                        </div>
                        <div className="perform-overlay" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Blogs

