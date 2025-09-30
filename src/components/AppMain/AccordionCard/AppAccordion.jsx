import AccordionHeader from './AccordionHeader'
import AccordionCard from './AccordionCard'

export default function AppAccordion({ items }) {
    return (
        <>
            <div className="container py-5">
                <div className="row row-cols-auto">
                    {items.map(item =>
                        <div className="col ps-0" key={item.id}>
                            <button className="btn btn-primary" >
                                {item.title}
                            </button>
                        </div>
                    )}
                </div>
                <div className="row">
                    <div className="card my-5">
                        <div className="card-body">
                            <h2>{items[0].title}</h2>
                            <p> {items[0].description} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}