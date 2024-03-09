import Link from 'next/link'
import { greatVibes } from '../../../fonts'
import { Breadcrumbs } from '../../components/breadcrumbs'
import { useTranslation } from '../../../i18n'

export default async function Noun({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, "verb")

  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1 className={`header__title header__title--home ${greatVibes.variable}`}>{t("title")}</h1>
        </div>
      </header>
      <main className="project">
        <Breadcrumbs currentPage={"Глаголы"} lng={lng} />
        <p className="project__paragraph">
          Норвежский язык относится к группе скандинавских языков и обладает рядом интересных
          особенностей в своей грамматике, особенно в части употребления глаголов. Глаголы в 
          норвежском языке изменяются по временам, лицам и числам, но в отличие от многих 
          других языков, в норвежском процесс склонения довольно упрощен.
        </p>

        {/* Инфинитив */}
        <h2 className="project__subtitle">Инфинитив</h2>
        <p className="project__paragraph">
          Инфинитив глагола обычно оканчивается на &quot;-e&quot; (например, å snakke – говорить, å lese – читать).
        </p>

        {/* Прошедшее время (Preteritum) */}
        <h2 className="project__subtitle">Прошедшее время (Preteritum)</h2>
        <p className="project__paragraph">
          В норвежском языке есть несколько способов образования прошедшего времени,
          в том числе добавление суффикса &quot;-et&quot; или &quot;-te&quot; к основе глагола для слабых 
          глаголов и изменение гласных в корне слова для сильных глаголов
          (например, snakket – говорил, leste – читал).
        </p>
       
        {/* Настоящее время (Presens) */}
        <h2 className="project__subtitle">Настоящее время (Presens)</h2>
        <p className="project__paragraph">
          Для образования настоящего времени к инфинитиву глагола обычно 
          добавляется окончание &quot;-r&quot; (snakker – говорю/говорит, leser – читаю/читает).
        </p>

        {/* Будущее время */}
        <h2 className="project__subtitle">Будущее время</h2>
        <p className="project__paragraph">
          В норвежском языке будущее время часто выражается с помощью вспомогательного 
          глагола &quot;skal&quot; или &quot;vil&quot; перед инфинитивом основного глагола 
          (skal snakke – буду говорить, vil lese – хочу читать).
        </p>

        {/* Прошедшее совершенное время (Perfektum) */}
        <h2 className="project__subtitle">Прошедшее совершенное время (Perfektum)</h2>
        <p className="project__paragraph">
          Прошедшее совершенное время (Perfektum) формируется с помощью вспомогательного 
          глагола &quot;har&quot; и причастия прошедшего времени основного глагола 
          (har snakket – говорил/говорила, har lest – читал/читала).
        </p>
        
        {/* Пассив */}
        <h2 className="project__subtitle">Пассив</h2>
        <p className="project__paragraph">
          Пассивная форма глагола в норвежском часто формируется путем добавления 
          суффикса &quot;-s&quot; к инфинитиву глагола (snakkes – говорится, leses – читается).
        </p>
        
        {/* Императив */}
        <h2 className="project__subtitle">Императив</h2>
        <p className="project__paragraph">
          Для образования формы повелительного наклонения инфинитив глагола
          используется без частицы &quot;å&quot; и без окончания &quot;-e&quot; (snakk! – говори!, les! – читай!).
        </p>

        <p className="project__paragraph">
          Следует отметить, что в норвежском языке существует множество нерегулярных глаголов, которые следуют своим собственным правилам склонения. Поэтому при изучении глаголов важно обращать внимание на исключения и запоминать их формы.
        </p>

        {/* Реклама чата */}
        <h2 className="project__subtitle">Больше информации</h2>
        <p className="project__paragraph">
          Вступайте в наш телеграм чат, общайтесь с участниками, играйте в обучающие игры,
          присоединяйтесь к комьюнити, приходите на мероприятия онлайн и офлайн. До встречи 🤗
        </p>
        <div className="target-action">
          <Link href="https://t.me/NorskLett" className="target-action__link">
            @NorskLett
          </Link>
        </div>
      </main>
    </>
  )
}
