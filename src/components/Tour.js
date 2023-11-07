import React from 'react'
import Title from './Title'
import { tourData } from '../data'

function Tour() {
    return (
        <section className="section" id="tours">
            <Title title='featured' subTitle='tours' />
            <div className="section-center featured-center">
                {tourData.map((dataTour) => {
                    return (
                        <article className="tour-card" key={dataTour.id}>
                            <div className="tour-img-container">
                                <img src={dataTour.img} className="tour-img" alt={dataTour.img} />
                                <p className="tour-date">{dataTour.date}</p>
                            </div>
                            <div className="tour-info">
                                <div className="tour-title">
                                    <h4>{dataTour.title}</h4>
                                </div>
                                <p>
                                    {dataTour.info}
                                </p>
                                <div className="tour-footer">
                                    <p>
                                        <span><i className="fas fa-map"></i></span>{dataTour.location}
                                    </p>
                                    <p>{dataTour.duration}</p>
                                    <p>{dataTour.location}</p>
                                </div>
                            </div>
                        </article>)
                })}

            </div>
        </section>

    )
}

export default Tour