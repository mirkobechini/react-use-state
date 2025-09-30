export default function AccordionCard({ item }) {
    return (
        <>
            <div className="row">
                <div className="card my-5">
                    <div className="card-body">
                        <h2>{item.title}</h2>
                        <p> {item.description} </p>
                    </div>
                </div>
            </div>
        </>
    )
}