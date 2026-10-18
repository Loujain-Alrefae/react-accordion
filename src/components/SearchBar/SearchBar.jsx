function SearchBar({ value, onChange }) {
  return (
    <div className="mb-3.5 flex min-h-12 items-center gap-2.75 rounded-[9px] border border-[#e5eae3] bg-[rgba(255,255,255,.86)] px-3.75 shadow-[0_4px_13px_rgba(42,66,53,.025)]">
      <svg className="h-4.5 w-4.5 shrink-0 fill-none stroke-[#789183] [stroke-linecap:round] stroke-[1.6]" viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="8.8" cy="8.8" r="5.8" />
        <path d="m13.2 13.2 4 4" />
      </svg>
      <label className="absolute h-px w-px overflow-hidden [clip:rect(0,0,0,0)] whitespace-nowrap [clip-path:inset(50%)]" htmlFor="faq-search">ابحث في الأسئلة الشائعة</label>
      <input
        id="faq-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="ابحث عن سؤال أو إجابة..."
        autoComplete="off"
        className="w-full min-w-0 border-0 bg-transparent text-[15px] text-[#33423c] outline-none placeholder:text-[#a0aaa2]"
      />
      {value && (
        <button className="cursor-pointer rounded-[5px] border-0 bg-[#f1f5ef] px-2 py-1.25 text-[13px] text-[#62816e] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8dc5b5]" type="button" onClick={() => onChange('')} aria-label="مسح البحث">
          مسح
        </button>
      )}
    </div>
  )
}

export default SearchBar
