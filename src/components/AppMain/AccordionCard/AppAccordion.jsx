import { useState } from 'react'
//Import Components
import AccordionHeader from './AccordionHeader'
import AccordionCard from './AccordionCard'

export default function AppAccordion({ items }) {
    
     const [currentLanguage, setCurrentLanguage] = useState(1)

    function handleClick(e){
        const currentlyClicked = Number(e.target.getAttribute('data-id'))
        setCurrentLanguage(currentlyClicked)
        
    }
    
    return (
        <>
            <div className="container py-5">
                <div className="row row-cols-auto">
                    {items.map(item =>
                        <div className="col ps-0" key={item.id}>
                            <button className= {`btn ${currentLanguage === item.id ? 'btn-warning' : 'btn-primary'}`} data-id= {item.id} onClick={handleClick} >
                                {item.title}
                            </button>
                        </div>
                    )}
                </div>
                <div className="row">
                    <div className="card my-5 ps-0">
                        <div className="card-body">
                            <h2>{items[currentLanguage-1].title}</h2>
                            <p> {items[currentLanguage-1].description} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}