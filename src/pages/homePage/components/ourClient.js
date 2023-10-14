import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import ReviewImg from '../../../images/home/review_img.png'

const OurClient = () => {
    return (
        <div>
            <div className="page_width">
                <div className="our_clinet">
                    <div className="header_part">
                        <div className="title">
                            <h2>
                                Our <span> Clients</span>
                            </h2>
                        </div>
                        <p>
                            We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction. Our goal is to become the largest and most famous online home services platform and provide our customers with the best of services and experience.
                        </p>
                    </div>
                    <div className="our_client_reviews">
                        <div className="review_card">
                            <div className="top_section">
                                <div className="img_section">
                                    <img src={ReviewImg} alt="" />
                                </div>
                                <div className="text_section">
                                    <h2>
                                        Alena Herwitz
                                    </h2>
                                    <div className="star_rating">
                                        <p>3 Months ago</p>
                                        <div className="icons">
                                            <AiFillStar color='#FFB800' />
                                            <AiFillStar color='#FFB800' />
                                            <AiFillStar color='#FFB800' />
                                            <AiFillStar color='#FFB800' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text_section">
                                <p>
                                    We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.
                                </p>
                            </div>
                        </div>
                        <div className="review_card">
                            <div className="top_section">
                                <div className="img_section">
                                    <img src={ReviewImg} alt="" />
                                </div>
                                <div className="text_section">
                                    <h2>
                                        Alena Herwitz
                                    </h2>
                                    <div className="star_rating">
                                        <p>3 Months ago</p>
                                        <div className="icons">
                                            <AiFillStar color='#FFB800' />
                                            <AiFillStar color='#FFB800' />
                                            <AiFillStar color='#FFB800' />
                                            <AiFillStar color='#FFB800' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text_section">
                                <p>
                                    We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.
                                </p>
                            </div>
                        </div>
                        <div className="review_card">
                            <div className="top_section">
                                <div className="img_section">
                                    <img src={ReviewImg} alt="" />
                                </div>
                                <div className="text_section">
                                    <h2>
                                        Alena Herwitz
                                    </h2>
                                    <div className="star_rating">
                                        <p>3 Months ago</p>
                                        <div className="icons">
                                            <AiFillStar color='#FFB800' />
                                            <AiFillStar color='#FFB800' />
                                            <AiFillStar color='#FFB800' />
                                            <AiFillStar color='#FFB800' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text_section">
                                <p>
                                    We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClient