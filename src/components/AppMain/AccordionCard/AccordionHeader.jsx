export default function AccordionHeader({ items }) {
    return (
        <>
            <div className="row row-cols-auto">
                {items.map(item =>
                    <div className="col" key={item.id}>
                        <button className="btn btn-primary" >
                            {item.title}
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}