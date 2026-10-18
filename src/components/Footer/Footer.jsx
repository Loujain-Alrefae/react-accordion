const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="flex min-h-[51px] items-center justify-between border-t border-[#e9ece7] px-[max(5.55vw,calc((100vw-1440px)/2))] text-[15px] text-[#717672] max-[1050px]:px-8 max-[760px]:px-5 max-[480px]:gap-[10px] max-[480px]:text-sm" id="about">
      <span>© {currentYear} سَنا ديزاين سيستم</span>
      <span>صُنع بـ <b className="px-[2px] text-[10px] text-[#80a68d]">♥</b> في دمشق</span>
    </footer>
  )
}

export default Footer
