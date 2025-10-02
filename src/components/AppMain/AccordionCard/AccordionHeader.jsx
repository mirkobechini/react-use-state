export default function AccordionHeader({items, language, setCurrentLanguage}) {

    function handleClick(e){
        const currentlyClicked = Number(e.target.getAttribute('data-id'))
        setCurrentLanguage(currentlyClicked)
        
    }

    return (
        <>
            <div className="row row-cols-auto">
                    {items.map(item =>
                        <div className="col ps-0" key = {item.id}>
                            <button className= {`btn ${language === item.id ? 'btn-warning' : 'btn-primary'}`} data-id= {item.id} onClick={handleClick} >
                                {item.title}
                            </button>
                        </div>
                    )}
                </div>
        </>
    )
}