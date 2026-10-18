function SettingSelect({ label, value, options, onChange }) {
  return (
    <label className="flex min-h-[39px] items-center justify-between gap-[10px]">
      <span className="text-base text-[#78847c]">{label}</span>
      <select className="h-[34px] min-w-0 max-w-[156px] cursor-pointer rounded-md border border-[#e8ece6] bg-[#fbfcfa] py-0 pr-[10px] pl-6 text-[13px] text-[#59675e] [direction:rtl] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8dc5b5]" value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>{optionLabel}</option>
        ))}
      </select>
    </label>
  )
}

function ToggleSetting({ label, description, checked, onChange }) {
  return (
    <label className="relative flex min-h-12 cursor-pointer items-center justify-between gap-[9px]">
      <span className="flex flex-col gap-1">
        <span className="text-base text-[#78847c]">{label}</span>
        <span className="text-sm text-[#a1aaa3]">{description}</span>
      </span>
      <input className="peer absolute h-px w-px overflow-hidden [clip:rect(0,0,0,0)] whitespace-nowrap [clip-path:inset(50%)]" type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />
      <span className="relative h-[18px] w-[31px] shrink-0 rounded-[99px] bg-[#dfe5df] transition-colors duration-200 peer-checked:bg-[#5d9979] peer-checked:[&>span]:translate-x-[-13px] peer-focus-visible:outline-3 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-[#8dc5b5]"><span className="absolute top-[3px] right-[3px] h-3 w-3 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,.15)] transition-transform duration-200" /></span>
    </label>
  )
}

function SidebarControls({ settings, updateSetting, onModeChange, copied, copySnippet }) {
  return (
    <aside className="min-w-0 self-end mt-4 rounded-[11px] border border-[#e7ebe5] bg-[rgba(255,255,255,.85)] px-5 py-[22px] shadow-[0_10px_32px_rgba(52,72,55,.045)] max-[760px]:mt-0" aria-label="إعدادات المكوّن">
      <div className="flex items-center justify-between">
        <span className="text-[13px] tracking-[.15px] text-[#829188]">مختبر المكوّنات</span>
        <span className="flex items-center gap-[6px] text-[13px] text-[#659176]"><i className="h-[5px] w-[5px] rounded-full bg-[#72ae82] shadow-[0_0_0_3px_#eff7ef]" /> مباشر</span>
      </div>
      <div className="my-5 mt-[15px] mb-5 flex items-center justify-between">
        <div><h2 className="mb-[5px] mt-0 text-lg font-[650] text-[#2e3c35]">خصّص المكوّن</h2><p className="m-0 text-sm text-[#98a19a]">غيّر الإعدادات وشاهد النتيجة فوراً.</p></div>
        <span className="grid h-[34px] w-[34px] place-items-center rounded-lg border border-[#e8eee6] bg-[#f6f8f3] text-[#6c9078]" aria-hidden="true">
          <svg className="h-[17px] w-[17px] fill-none stroke-current [stroke-width:1.5] [stroke-linecap:round]" viewBox="0 0 24 24"><path d="M4 7h9m4 0h3M4 17h3m4 0h9M13 4v6M9 14v6" /></svg>
        </span>
      </div>

      <div className="border-t border-[#edf0eb] py-[13px] pt-4">
        <h3 className="mb-3 mt-0 flex items-center gap-2 text-[15px] font-[650] text-[#506159]">المظهر</h3>
        <div className="flex flex-col gap-[14px]">
          <SettingSelect label="النمط" value={settings.variant} onChange={(value) => updateSetting('variant', value)} options={[
            ['separated', 'بطاقات منفصلة'], ['flush', 'مسطّح'],
          ]} />
          <SettingSelect label="نوع الأيقونة" value={settings.iconType} onChange={(value) => updateSetting('iconType', value)} options={[
            ['chevron', 'سهم متحرك'], ['plus-minus', 'زائد / ناقص'],
          ]} />
          <SettingSelect label="موضع الأيقونة" value={settings.iconPosition} onChange={(value) => updateSetting('iconPosition', value)} options={[
            ['start', 'البداية'], ['end', 'النهاية'],
          ]} />
        </div>
      </div>

      <div className="border-t border-[#edf0eb] py-[13px] pt-4">
        <h3 className="mb-3 mt-0 flex items-center gap-2 text-[15px] font-[650] text-[#506159]">السلوك</h3>
        <div className="flex flex-col gap-[14px]">
          <ToggleSetting
            label="فتح عدة عناصر"
            description="السماح بفتح أكثر من إجابة"
            checked={settings.mode === 'multiple'}
            onChange={onModeChange}
          />
          <ToggleSetting label="السماح بالإغلاق" description="إغلاق آخر إجابة مفتوحة" checked={settings.collapsible} onChange={(value) => updateSetting('collapsible', value)} />
          <ToggleSetting label="الحركة الناعمة" description="انتقالات عند الفتح والإغلاق" checked={settings.animated} onChange={(value) => updateSetting('animated', value)} />
        </div>
      </div>

      <div className="border-t border-[#edf0eb] py-[13px] pt-4">
        <h3 className="mb-3 mt-0 flex items-center gap-2 text-[15px] font-[650] text-[#506159]">البنية</h3>
        <SettingSelect label="مستوى العنوان" value={settings.headingLevel} onChange={(value) => updateSetting('headingLevel', value)} options={[
          ['h1', 'عنوان 1'], ['h2', 'عنوان 2'], ['h3', 'عنوان 3'], ['h4', 'عنوان 4'], ['h5', 'عنوان 5'], ['h6', 'عنوان 6'],
        ]} />
      </div>

      <div className="mt-3 overflow-hidden rounded-[11px] border border-[#293b35] bg-[#172522] shadow-[0_10px_24px_rgba(19,40,32,.14)]">
        <div className="flex h-[43px] items-center justify-between border-b border-[#2c4038] bg-[#1d2d28] px-[14px]">
          <span className="flex items-center gap-[6px] font-mono text-[11px] text-[#b0c2b5] [direction:ltr]"><i className="h-[7px] w-[7px] rounded-full bg-[#81a98c]" /> JSX</span>
          <button className="flex cursor-pointer items-center gap-[5px] border-0 bg-transparent py-[5px] text-[11px] text-[#7a9280] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8dc5b5]" type="button" onClick={copySnippet} aria-live="polite">
            {copied ? 'تم النسخ ✓' : 'نسخ الكود'}
            <svg className="h-3 w-3 fill-none stroke-current [stroke-width:1.2] [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 16 16" aria-hidden="true"><rect x="5" y="5" width="8" height="9" rx="1.5" /><path d="M10.5 5V3.5A1.5 1.5 0 0 0 9 2H4.5A1.5 1.5 0 0 0 3 3.5v7A1.5 1.5 0 0 0 4.5 12H5" /></svg>
          </button>
        </div>
        <pre className="m-0 min-h-[231px] overflow-auto px-4 py-[17px] text-left font-mono text-xs leading-[1.95] text-[#a9bbb0] [white-space:pre]" dir="ltr" aria-label="معاينة كود المكوّن"><code>
          <span className="text-[#85b99b]">&lt;</span><span className="text-[#f0c674]">Accordion</span>{'\n'}
          {'  '}<span className="text-[#9dc7d3]">variant</span>=<span className="text-[#c7a5d8]">"{settings.variant}"</span>{'\n'}
          {'  '}<span className="text-[#9dc7d3]">iconType</span>=<span className="text-[#c7a5d8]">"{settings.iconType}"</span>{'\n'}
          {'  '}<span className="text-[#9dc7d3]">iconPosition</span>=<span className="text-[#c7a5d8]">"{settings.iconPosition}"</span>{'\n'}
          {'  '}<span className="text-[#9dc7d3]">mode</span>=<span className="text-[#c7a5d8]">"{settings.mode}"</span>{'\n'}
          {'  '}<span className="text-[#9dc7d3]">collapsible</span>=<span className="text-[#85b99b]">{'{'}</span><span className="text-[#e9a77a]">{String(settings.collapsible)}</span><span className="text-[#85b99b]">{'}'}</span>{'\n'}
          {'  '}<span className="text-[#9dc7d3]">animated</span>=<span className="text-[#85b99b]">{'{'}</span><span className="text-[#e9a77a]">{String(settings.animated)}</span><span className="text-[#85b99b]">{'}'}</span>{'\n'}
          {'  '}<span className="text-[#9dc7d3]">headingLevel</span>=<span className="text-[#c7a5d8]">"{settings.headingLevel}"</span>{'\n'}
          {'  '}<span className="text-[#9dc7d3]">dir</span>=<span className="text-[#c7a5d8]">"rtl"</span>{'\n'}
          <span className="text-[#85b99b]">/&gt;</span>
        </code></pre>
      </div>
    </aside>
  )
}

export default SidebarControls
