import React from 'react'

const Menucard = ({ menudatalist }) => {
    return (
        <>
            <section className='main-card--cointainer'>
                {menudatalist.map((curElem) => {
                    const { id, name, description, image, catagory } = curElem
                    return (
                        <>
                            <div>
                                <div className='card-container' key={id}>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <span className='card-number card-circle subtle'>{id}</span>
                                            <span className='card-author subtle'>{name}</span>
                                            <h2 className='card-title'>{name}</h2>
                                            <span className='card-description subtle'>
                                                {description}
                                            </span>
                                            <div className='card-read'>
                                                Read
                                            </div>
                                        </div>
                                        <img src={image} alt='images' className='card-media'></img>
                                        <div className='card-tag subtle'>Order Now</div>
                                    </div>
                                </div>

                            </div>

                        </>
                    )
                })}
            </section >
        </>
    )
}

export default Menucard
