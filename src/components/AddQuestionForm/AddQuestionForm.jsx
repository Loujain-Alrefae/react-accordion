import { useState } from 'react'

function AddQuestionForm({ onAdd }) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')

  const submitQuestion = (event) => {
    event.preventDefault()
    const trimmedQuestion = question.trim()
    const trimmedAnswer = answer.trim()

    if (!trimmedQuestion || !trimmedAnswer) {
      setError('يرجى إدخال السؤال والإجابة قبل الإضافة.')
      return
    }

    onAdd({ question: trimmedQuestion, answer: trimmedAnswer })
    setQuestion('')
    setAnswer('')
    setError('')
    setStatus('تمت إضافة السؤال إلى القائمة.')
  }

  return (
    <form className="my-3.5 mb-4 grid grid-cols-2 gap-3 rounded-[10px] border border-[#e6ebe4] bg-white p-4.5 max-[480px]:grid-cols-1 max-[480px]:p-3.75" onSubmit={submitQuestion} noValidate>
      <div className="col-span-full max-[480px]:col-auto">
        <h3 className="mb-1 mt-0 text-[22px] font-[650] text-[#43584c]">أضف سؤالاً جديداً</h3>
        <p className="m-0 text-lg text-[#8b978e]">أضف سؤالاً وإجابته إلى القائمة مباشرة.</p>
      </div>
      <label className="flex flex-col gap-1.5 text-base font-[550] text-[#68796e]">
        <span>السؤال</span>
        <input
          className="w-full min-w-0 rounded-[7px] border border-[#e5eae3] bg-white px-2.75 py-2.5 text-sm font-normal text-[#33423c] placeholder:text-[#a4ada6] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8dc5b5]"
          type="text"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="اكتب السؤال هنا"
          maxLength={180}
          required
        />
      </label>
      <label className="flex flex-col gap-1.5 text-base font-[550] text-[#68796e]">
        <span>الإجابة</span>
        <textarea
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          placeholder="اكتب الإجابة هنا"
          rows={3}
          maxLength={1200}
          required
          className="w-full min-w-0 resize-none rounded-[7px] border border-[#e5eae3] bg-white px-2.75 py-2.5 text-sm font-normal text-[#33423c] placeholder:text-[#a4ada6] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8dc5b5]"
        />
      </label>
      <div className="col-span-full flex items-center justify-between gap-3 max-[480px]:col-auto max-[480px]:items-start max-[480px]:flex-col">
        <div>
          <p className="m-0 min-h-5 text-[13px] text-[#a4493f]" role="alert">{error}</p>
          <p className="mt-0.75 mb-0 text-[13px] text-[#4f8068]" role="status">{status}</p>
        </div>
        <button className="min-h-10 cursor-pointer rounded-[7px] border-0 bg-[#287767] px-4.25 text-sm font-semibold text-white transition-[background,transform] duration-200 hover:bg-[#1e6054] active:translate-y-px focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8dc5b5]" type="submit">إضافة السؤال</button>
      </div>
    </form>
  )
}

export default AddQuestionForm
