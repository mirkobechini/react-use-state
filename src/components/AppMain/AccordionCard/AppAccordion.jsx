import { useState } from 'react'
//Import Components
import AccordionHeader from './AccordionHeader'
import AccordionCard from './AccordionCard'

export default function AppAccordion({ items }) {
    
    const [currentLanguage, setCurrentLanguage] = useState(0)
    
    return (
        <>
            <div className="container py-5">
                <AccordionHeader items = {items} language = {currentLanguage} setCurrentLanguage = {setCurrentLanguage}/>
                <AccordionCard item = {(currentLanguage == 0)?0:items[currentLanguage-1]} />
            </div>
        </>
    )
}