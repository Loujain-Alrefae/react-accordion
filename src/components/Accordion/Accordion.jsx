import { useId } from 'react'
import AccordionItem from '../AccordionItem/AccordionItem.jsx'

function Accordion({ items, settings, openIds, onToggle, animated }) {
  const generatedId = useId().replace(/:/g, '')

  return (
    <div className={`flex flex-col p-[15px_18px_12px] max-[480px]:gap-2 max-[480px]:p-[11px_10px] ${settings.variant === 'flush' ? 'gap-0 pt-1.25 pb-1.25' : 'gap-2.5'}`}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          itemId={`${generatedId}-${item.id}`}
          settings={settings}
          expanded={openIds.includes(item.id)}
          onToggle={onToggle}
          animated={animated}
        />
      ))}
    </div>
  )
}

export default Accordion
