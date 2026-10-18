function Hero() {
  return (
    <section className="relative my-[10px] mb-[30px] flex min-h-[244px] items-center overflow-hidden max-[760px]:mb-[23px] max-[760px]:min-h-[215px] max-[480px]:min-h-[226px]" aria-labelledby="hero-title">
      <div className="z-[1] max-w-[600px] py-[17px] pb-[9px] max-[760px]:max-w-[78%] max-[480px]:max-w-full">
        <h1 className="my-[18px] mb-[10px] text-[clamp(36px,4.3vw,51px)] font-[630] leading-[1.35] tracking-[-2.2px] text-[#20302b] max-[760px]:text-[clamp(33px,7vw,44px)] max-[480px]:text-[38px]" id="hero-title">كل إجابة، <span className="text-[#498773]">في مكانها.</span></h1>
        <p className="m-0 max-w-[505px] text-[19px] leading-[2] text-[#818b85] max-[760px]:text-base max-[480px]:max-w-[87%]">
          قائمة منسدلة مرنة تكشف المعلومة في اللحظة المناسبة. صُمّمت لتكون واضحة،
          سهلة الوصول، وجميلة في كل تفاصيلها.
        </p>
      </div>
      <div className="absolute top-1 left-2 grid h-55 w-[225px] place-items-center opacity-[.92] max-[1050px]:left-[-35px] max-[1050px]:opacity-[.55] max-[760px]:left-[-83px] max-[760px]:scale-[.8] max-[480px]:left-[-113px] max-[480px]:opacity-[.28]" aria-hidden="true">
        <div className="absolute h-[176px] w-[176px] rounded-full border border-[rgba(109,159,132,.16)]" />
        <div className="absolute h-33 w-[132px] rounded-full border border-[rgba(109,159,132,.16)]" />
        <div className="relative flex h-25.75 w-21 rotate-[8deg] flex-col gap-2.25 rounded-[13px] border border-[#e5ebe2] bg-[linear-gradient(145deg,#fff_10%,#f1f5ed)] px-[14px] pt-7 shadow-[0_17px_35px_rgba(63,102,81,.09)] before:absolute before:top-[-10px] before:left-[13px] before:h-[22px] before:w-[22px] before:rounded-lg before:border-4 before:border-[#f9faf6] before:bg-[#81b298] before:content-['']">
          <span className="h-1 w-full rounded-[5px] bg-[#d8e4d9]" />
          <span className="h-1.25 w-1.25 self-end rounded-full bg-[#a3c4ab]" />
          <span className="h-1 w-[63%] rounded-[5px] bg-[#e8eee6]" />
        </div>
        <div className="absolute top-10.25 right-8.25 text-[21px] text-[#82ab8d]">✳</div>
        <div className="absolute bottom-7.5 left-8.25 text-[15px] text-[#c5ae79]">✦</div>
        <div className="absolute right-8.5 bottom-12 text-[22px] text-[#87af98]">✧</div>
      </div>
    </section>
  )
}

export default Hero
