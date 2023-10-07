import React from 'react'
import ServiceCard from '../../../components/serviceCard'
import ServiceCardImg from '../../../images/home/service.webp'

const ExploreComponents = () => {
    return (
        <div>
            <div className="expolore_compomnents">
                <div className="page_width">
                    <div className="expolore_header">
                        <h2>
                            Explore our <span> Services </span>
                        </h2>
                    </div>
                    <div className="expolore_services">
                        <ServiceCard cardImage={ServiceCardImg} title='Ac Services' />
                        <ServiceCard cardImage={ServiceCardImg} title='Ac Repair' />
                        <ServiceCard cardImage={ServiceCardImg} title='Ac Services' />
                        <ServiceCard cardImage={ServiceCardImg} title='Ac Services' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreComponents