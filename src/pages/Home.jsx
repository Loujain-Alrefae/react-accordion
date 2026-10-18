import { useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import Accordion from '../components/Accordion/Accordion.jsx'
import AddQuestionForm from '../components/AddQuestionForm/AddQuestionForm.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Header from '../components/Header/Header.jsx'
import Hero from '../components/Hero/Hero.jsx'
import SearchBar from '../components/SearchBar/SearchBar.jsx'
import SidebarControls from '../components/SidebarControls/SidebarControls.jsx'

const initialQuestions = [
  {
    id: 'getting-started',
    question: 'كيف أبدأ باستخدام المنصة؟',
    answer: 'ابدأ بإنشاء حسابك، ثم اختر المساحة التي تناسب احتياجاتك. ستجد في لوحة التحكم دليلاً مختصراً يساعدك على إعداد كل شيء خلال دقائق.',
  },
  {
    id: 'change-plan',
    question: 'هل يمكنني تغيير خطتي لاحقاً؟',
    answer: 'بالتأكيد. يمكنك ترقية خطتك أو تخفيضها في أي وقت من إعدادات الفوترة، وسيتم احتساب الفرق بشكل تلقائي وواضح.',
  },
  {
    id: 'data-security',
    question: 'كيف أحافظ على أمان بياناتي؟',
    answer: 'نستخدم تشفيراً متقدماً لحماية بياناتك أثناء النقل والتخزين، مع نسخ احتياطية منتظمة وصلاحيات وصول يمكنك التحكم بها.',
  },
  {
    id: 'team-members',
    question: 'هل أستطيع دعوة أعضاء فريقي؟',
    answer: 'نعم، يمكنك دعوة فريقك من صفحة الأعضاء وتحديد دور وصلاحيات مستقلة لكل شخص. هذه الميزة متاحة في جميع الخطط.',
  },
  {
    id: 'payment-methods',
    question: 'ما طرق الدفع المتاحة؟',
    answer: 'نقبل بطاقات مدى وVisa وMastercard، كما يمكنك اختيار الدفع السنوي للحصول على سعر أفضل وفاتورة واحدة.',
  },
]

const initialSettings = {
  variant: 'separated',
  iconType: 'chevron',
  iconPosition: 'end',
  mode: 'multiple',
  collapsible: true,
  animated: true,
  headingLevel: 'h3',
}

function Home() {
  const [questions, setQuestions] = useState(initialQuestions)
  const [settings, setSettings] = useState(initialSettings)
  const [openIds, setOpenIds] = useState(['getting-started'])
  const [searchQuery, setSearchQuery] = useState('')
  const [copied, setCopied] = useState(false)
  const nextQuestionId = useRef(0)
  const prefersReducedMotion = useReducedMotion()
  const animated = settings.animated && !prefersReducedMotion
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase()
  const filteredQuestions = normalizedQuery
    ? questions.filter(({ question, answer }) => (
      `${question} ${answer}`.toLocaleLowerCase().includes(normalizedQuery)
    ))
    : questions

  const updateSetting = (key, value) => {
    setSettings((current) => ({ ...current, [key]: value }))
  }

  const toggleItem = (id) => {
    setOpenIds((current) => {
      const isOpen = current.includes(id)
      if (isOpen) {
        if (!settings.collapsible && current.length === 1) return current
        return current.filter((openId) => openId !== id)
      }
      return settings.mode === 'single' ? [id] : [...current, id]
    })
  }

  const addQuestion = ({ question, answer }) => {
    const item = { id: `custom-${nextQuestionId.current++}`, question, answer }
    setQuestions((current) => [...current, item])
    setSearchQuery('')
    setOpenIds((current) => (settings.mode === 'single' ? [item.id] : [...current, item.id]))
  }

  const handleModeChange = (allowMultiple) => {
    updateSetting('mode', allowMultiple ? 'multiple' : 'single')
    if (!allowMultiple) setOpenIds((current) => current.slice(0, 1))
  }

  const snippet = `<Accordion
  variant="${settings.variant}"
  iconType="${settings.iconType}"
  iconPosition="${settings.iconPosition}"
  mode="${settings.mode}"
  collapsible={${settings.collapsible}}
  animated={${settings.animated}}
  headingLevel="${settings.headingLevel}"
  dir="rtl"
/>`

  const copySnippet = async () => {
    try {
      await navigator.clipboard.writeText(snippet)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch (error) {
      console.error('تعذّر نسخ الكود إلى الحافظة.', error)
    }
  }

  return (
    <div
      className="min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_71%_5%,rgba(231,239,229,.56),transparent_33rem),#f8f9f6] text-[#202c2b] motion-reduce:scroll-auto motion-reduce:[animation-duration:.01ms] motion-reduce:[animation-iteration-count:1] motion-reduce:[transition-duration:.01ms]"
      dir="rtl"
    >
      <Header />

      <main
        className="mx-auto grid w-[min(1280px,calc(100%-11.1vw))] grid-cols-[minmax(0,1fr)_322px] gap-[70px] py-[38px] pb-[45px] min-[1500px]:grid-cols-[minmax(0,1fr)_350px] min-[1500px]:gap-[90px] max-[1050px]:w-[min(900px,calc(100%-64px))] max-[1050px]:grid-cols-[minmax(0,1fr)_295px] max-[1050px]:gap-8 max-[760px]:w-[calc(100%-40px)] max-[760px]:grid-cols-1 max-[760px]:gap-[23px] max-[760px]:pt-[27px] max-[480px]:w-[calc(100%-28px)]"
        id="main-content"
      >
        <section className="min-w-0">
            <Hero />
            <div className="mb-4 flex items-end justify-between max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-[11px]" id="playground">
              <div>
                <span className="text-base font-semibold text-[#6f9a87]">جرّب بنفسك</span>
                <h2 className="mt-[5px] mb-0 text-2xl font-[650] tracking-[-.4px] text-[#283732]">الأسئلة الشائعة</h2>
              </div>
            </div>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <div className="rounded-xl border border-[#e8ece6] bg-[rgba(255,255,255,.76)] shadow-[0_8px_24px_rgba(42,66,53,.035)]">
              <Accordion
                items={filteredQuestions}
                settings={settings}
                openIds={openIds}
                onToggle={toggleItem}
                animated={animated}
              />
              {filteredQuestions.length === 0 && (
                <p className="m-0 px-[18px] py-8 text-center text-[15px] leading-[1.8] text-[#818b85]" role="status">
                  {normalizedQuery ? 'لم نعثر على سؤال أو إجابة تطابق بحثك.' : 'لا توجد أسئلة بعد. أضف سؤالك الأول من النموذج أعلاه.'}
                </p>
              )}
          </div>
          <AddQuestionForm onAdd={addQuestion} />
        </section>

        <SidebarControls
          settings={settings}
          updateSetting={updateSetting}
          onModeChange={handleModeChange}
          copied={copied}
          copySnippet={copySnippet}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Home
