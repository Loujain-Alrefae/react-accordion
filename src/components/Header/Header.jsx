import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="relative z-[5] flex h-[76px] items-center justify-between border-b border-[rgba(220,226,219,.8)] bg-[rgba(250,251,248,.94)] px-[max(5.55vw,calc((100vw-1440px)/2))] max-[1050px]:px-8 max-[760px]:h-[65px] max-[760px]:px-[22px]">
      <a className="inline-flex items-center gap-[10px] text-[22px] font-extrabold tracking-[-.8px] text-[#243733] no-underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8dc5b5]" href="#main-content" aria-label="سَنا، الانتقال إلى المحتوى" onClick={closeMenu}>
        <span className="grid h-7 w-7 rotate-[-7deg] place-items-center rounded-[9px_9px_9px_3px] bg-[#287767]"><span className="h-[10px] w-[10px] rounded-full border-[1.8px] border-[#f4faf5]" /></span>
        <span>سَنا<span className="text-[#72ae92]">.</span></span>
      </a>
      <nav className="flex h-full items-center gap-9 max-[1050px]:gap-[21px] max-[760px]:hidden" aria-label="التنقل الرئيسي">
        <a href="#main-content" className="relative inline-flex h-full items-center text-lg text-[#285e51] no-underline after:absolute after:inset-x-0 after:bottom-[-1px] after:h-0.5 after:bg-[#418a70] after:content-[''] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8dc5b5]">المكوّنات</a>
        <a href="#playground" className="inline-flex h-full items-center text-lg text-[#78817d] no-underline transition-colors duration-200 hover:text-[#285e51] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8dc5b5]">ساحة التجربة</a>
        <a href="#about" className="inline-flex h-full items-center text-lg text-[#78817d] no-underline transition-colors duration-200 hover:text-[#285e51] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8dc5b5]">عن سَنا</a>
      </nav>
      <a className="inline-flex items-center gap-[9px] rounded-lg border border-[#dfe7df] px-[14px] py-[10px] text-sm text-[#37584e] no-underline transition-[border-color,background] duration-200 hover:border-[#bad1c3] hover:bg-[#f1f6f0] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8dc5b5] max-[760px]:hidden" href="#playground">
        <span>استكشف المكتبة</span>
        <svg className="h-[15px] w-[15px] fill-none stroke-current [stroke-width:1.5]" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" /></svg>
      </a>
      <button
        className="hidden h-[42px] w-[42px] cursor-pointer place-items-center rounded-lg border border-[#dfe7df] bg-white text-[#37584e] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8dc5b5] max-[760px]:grid"
        type="button"
        aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg className="h-[22px] w-[22px] fill-none stroke-current [stroke-linecap:round] [stroke-width:1.8]" viewBox="0 0 24 24" aria-hidden="true">
          {menuOpen
            ? <path d="m6 6 12 12M18 6 6 18" />
            : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      <nav
        className={`absolute top-[calc(100%+1px)] right-0 left-0 hidden flex-col gap-1 border-b border-[#e5ebe4] bg-[#fafbf8] px-[22px] pt-[10px] pb-4 shadow-[0_12px_20px_rgba(34,55,43,.08)] transition-[opacity,transform,visibility] duration-[180ms] ease-in-out motion-reduce:transition-none max-[760px]:flex ${menuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}
        id="mobile-navigation"
        aria-label="التنقل للأجهزة الصغيرة"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <a href="#main-content" className="rounded-md px-[10px] py-3 text-base text-[#52645a] no-underline hover:bg-[#f1f6f0] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8dc5b5]" onClick={closeMenu}>المكوّنات</a>
        <a href="#playground" className="rounded-md px-[10px] py-3 text-base text-[#52645a] no-underline hover:bg-[#f1f6f0] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8dc5b5]" onClick={closeMenu}>ساحة التجربة</a>
        <a href="#about" className="rounded-md px-[10px] py-3 text-base text-[#52645a] no-underline hover:bg-[#f1f6f0] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8dc5b5]" onClick={closeMenu}>عن سَنا</a>
        <a className="mt-[6px] inline-flex items-center justify-center gap-[9px] rounded-lg border border-[#dfe7df] bg-[#f4f8f2] px-[14px] py-[10px] text-sm text-[#37584e] no-underline transition-[border-color,background] duration-200 hover:border-[#bad1c3] hover:bg-[#f1f6f0] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8dc5b5]" href="#playground" onClick={closeMenu}>
          <span>استكشف المكتبة</span>
          <svg className="h-[15px] w-[15px] fill-none stroke-current [stroke-width:1.5]" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" /></svg>
        </a>
      </nav>
    </header>
  )
}

export default Header
