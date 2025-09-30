import AccordionHeader from './AccordionHeader'
import AccordionCard from './AccordionCard'

export default function AppAccordion({ items }) {
    return (
        <>
            <div className="container py-5">
                <AccordionHeader items={items} />
                <AccordionCard item={items[1]} />
            </div>
        </>
    )
}