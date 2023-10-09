import React from 'react'
import ServiceCard from '../../../components/serviceCard'
import ServiceCardImg from '../../../images/home/service.webp'
import ServiceCardImgOne from '../../../images/home/service_card_oe.jpg'
import ServiceCardImgTwo from '../../../images/home/service_card_two.jpg'


const ExploreComponents = () => {
    return (
        <div>
            <div className="expolore_compomnents">
                <div className="page_width">
                    <div className="title">
                        <h2>
                            Explore our <span> Services </span>
                        </h2>
                    </div>

                    <div className="expolore_services">

                        <ServiceCard cardImage={ServiceCardImg} title='Ac Services' />
                        <ServiceCard cardImage={ServiceCardImgOne} title='Duct Cleaning' />
                        <ServiceCard cardImage={ServiceCardImgTwo} title='Hany Man' />
                        <ServiceCard cardImage={ServiceCardImgOne} title='Duct Cleaning' />
                        <ServiceCard cardImage={ServiceCardImg} title='Plumbing' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreComponents