export default function AccordionCard({ item }) {
    return (
        <>
            <div className="row">
                    <div className="card my-5 ps-0">
                        <div className="card-body">
                            <h2>{(item === 0)?"Linguaggio selezionato":item.title}</h2>
                            <p> {(item === 0)?"Nessun linguaggio selezionato":item.description} </p>
                        </div>
                    </div>
                </div>
        </>
    )
}