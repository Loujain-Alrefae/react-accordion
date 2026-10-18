import { motion } from 'framer-motion'

const headingTextStyles = {
  h1: 'text-2xl font-[650] leading-[1.5]',
  h2: 'text-[21px] font-[650] leading-[1.55]',
  h3: 'text-lg font-[620] leading-[1.6]',
  h4: 'text-base font-semibold leading-[1.65]',
  h5: 'text-[15px] font-[590] leading-[1.7]',
  h6: 'text-sm font-[580] leading-[1.7]',
}

function ChevronIcon({ expanded, animated }) {
  return (
    <motion.svg
      animate={{ rotate: expanded ? 180 : 0 }}
      transition={{ duration: animated ? 0.24 : 0, ease: 'easeInOut' }}
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4.25 w-4.25 shrink-0 text-[#7c9386]"
    >
      <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  )
}

function PlusMinusIcon({ expanded, animated }) {
  return (
    <span className="relative h-4.25 w-4.25 shrink-0 text-[#7c9386]" aria-hidden="true">
      <span className={`absolute top-1/2 right-1/2 h-[1.5px] w-3 translate-x-1/2 -translate-y-1/2 rounded-sm bg-current transition-transform duration-200 motion-reduce:transition-none ${animated ? '' : 'duration-0!'}`} />
      <span className={`absolute top-1/2 right-1/2 h-[1.5px] w-3 rounded-sm bg-current transition-transform duration-200 motion-reduce:transition-none ${expanded ? '-translate-y-1/2 translate-x-1/2 rotate-0' : '-translate-y-1/2 translate-x-1/2 rotate-90'} ${animated ? '' : 'duration-0!'}`} />
    </span>
  )
}

function AccordionItem({ item, itemId, expanded, settings, onToggle, animated }) {
  const Icon = settings.iconType === 'chevron' ? ChevronIcon : PlusMinusIcon
  const Heading = settings.headingLevel
  const panelId = `${itemId}-panel`
  const triggerId = `${itemId}-trigger`
  const icon = <Icon expanded={expanded} animated={animated} />

  return (
    <motion.article
      layout
      className={`isolate overflow-hidden transition-[background,border-color,box-shadow] duration-200 ease-in-out ${settings.variant === 'flush'
        ? 'border-b border-[#e9ede7] bg-transparent last:border-b-0'
        : `rounded-[9px] border bg-white ${expanded ? 'border-[#dce8dc] shadow-[0_4px_13px_rgba(58,91,68,.045)]' : 'border-[#e9ede7]'}`}`}
      transition={{ layout: { duration: animated ? 0.28 : 0, ease: 'easeOut' } }}
    >
      <Heading className="m-0 font-inherit">
        <button
          id={triggerId}
          type="button"
          className="flex min-h-16.25 w-full cursor-pointer items-center gap-3.5 border-0 bg-transparent px-4 py-3 text-right text-inherit focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8dc5b5] max-[480px]:gap-2.25 max-[480px]:p-2.75"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => onToggle(item.id)}
        >
          {settings.iconPosition === 'start' && icon}
          <span className="min-w-0 flex-1 flex items-center justify-between gap-3.5">
            <span className={`min-w-0 font-[570] leading-[1.8] text-[#33423c] ${headingTextStyles[settings.headingLevel]}`}>{item.question}</span>
          </span>
          {settings.iconPosition === 'end' && icon}
        </button>
      </Heading>
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        aria-hidden={!expanded}
        inert={!expanded}
        className="overflow-hidden"
        initial={false}
        animate={expanded ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{
          height: { duration: animated ? 0.3 : 0, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: animated ? 0.2 : 0 },
        }}
      >
        <div className={`pb-4.5 pl-4.75 pr-11.75 text-base leading-[1.9] text-[#7a8580] max-[480px]:pr-9.25 ${settings.variant === 'flush' ? 'pb-4.25' : ''}`}>{item.answer}</div>
      </motion.div>
    </motion.article>
  )
}

export default AccordionItem
