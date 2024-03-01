import Link from 'next/link'
import { greatVibes } from '../../../fonts'
import { Breadcrumbs } from '../../components/breadcrumbs'

export default function Noun({ params: { lng } }: { params: { lng: string } }) {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1 className={`header__title header__title--home ${greatVibes.variable}`}>{"Substantiv"}</h1>
        </div>
      </header>
      <main className="project">
        <Breadcrumbs currentPage={"Существительные"} lng={lng} />
        <p className="project__paragraph">
          Существительные в норвежском языке (Bokmål) имеют ряд характеристик,
          включая род, число и определённость, которые могут изменять их форму. 
          Вот основные аспекты существительных в норвежском языке.
        </p>

        {/* Род */}
        <h2 className="project__subtitle">Род</h2>
        <p className="project__paragraph">
          <b>Мужской род</b>:
          Используется артикль &quot;en&quot; для неопределённой формы и суффикс &quot;-en&quot; для определённой формы. 
          Например, &quot;en bil&quot; (машина) становится &quot;bilen&quot; в определённой форме.
        </p>
        <p className="project__paragraph">
          <b>Женский род</b>:
          Используется артикль &quot;ei&quot; для неопределённой формы и суффикс &quot;-a&quot; для определённой формы.
          Женские существительные также могут принимать мужской род, используя артикль &quot;en&quot; 
          и суффикс &quot;-en&quot;. Например, &quot;ei bok&quot; (книга) 
          становится &quot;boka&quot; или &quot;boken&quot; в определённой форме.
        </p>
        <p className="project__paragraph">
          <b>Средний род</b>:
          Используется артикль &quot;et&quot; для неопределённой формы и суффикс &quot;-et&quot; для определённой формы.
          Например, &quot;et hus&quot; (дом) становится &quot;huset&quot; (дом) в определённой форме.
        </p>

        {/* Число */}
        <h2 className="project__subtitle">Число</h2>
        <p className="project__paragraph">
          <b>Единственное число</b>:
          Форма существительного, обозначающая один объект или понятие.
        </p>
        <p className="project__paragraph">
          <b>Множественное число</b>:
          Формируется разными способами в зависимости от рода и окончания существительного. 
          Обычные суффиксы для множественного числа включают &quot;-er&quot;, &quot;-e&quot;, и &quot;-a&quot;. 
          Например, &quot;biler&quot; (автомобили) от &quot;bil&quot;, &quot;bøker&quot; (книги) от &quot;bok&quot;.
        </p>

        {/* Определённость */}
        <h2 className="project__subtitle">Определённость</h2>
        <p className="project__paragraph">
          <b>Неопределённая форма</b>:
          Используется артикль (en, ei, et) перед существительным.
        </p>
        <p className="project__paragraph">
          <b>Определённая форма</b>:
          Формируется добавлением суффикса к слову (например, &quot;-en&quot;, &quot;-a&quot;, &quot;-et&quot;).
        </p>
        <p className="project__paragraph">
          <b>Примеры</b>:
          <ol>
            <li>En gutt (мальчик) → Gutten (мальчик, определённая форма)</li>
            <li>Ei jente (девочка) → Jenta (девочка, определённая форма)</li>
            <li>Et eple (яблоко) → Eplet (яблоко, определённая форма)</li>
          </ol>
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
