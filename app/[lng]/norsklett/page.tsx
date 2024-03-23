import Link from 'next/link'
import { greatVibes } from '../../fonts'
import { Breadcrumbs } from '../components/breadcrumbs'

export default async function ChatNorsklett({ params: { lng } }: { params: { lng: string } }) {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1 className={`header__title header__title--home ${greatVibes.variable}`}>Норвежский? Легко!</h1>
        </div>
      </header>
      <main className="project">
        <Breadcrumbs currentPage={"Норвежский? Легко!"} lng={lng} />
        <p className="project__paragraph">
          Добро пожаловать в проект «Норвежский? Легко!» — сообщество для изучающих
          норвежский язык. Мы предлагаем различные возможности для практики языка,
          общение с носителями, учебные материалы и мероприятия. Присоединяйтесь!
        </p>

        {/* Объявления */}
        <h2 className="project__subtitle">📣 Объявления</h2>
        <p className="project__paragraph">
          В разделе «Объявления» вы найдете информацию о предстоящих мероприятиях
          и других событиях, связанных с работой группы. Разговорные кафе, конкурсы,
          встречи и другие мероприятия. Будь в курсе, чтобы ничего не пропустить!
        </p>
        <div className="target-action pt-0 mt-0">
          <Link href="https://t.me/NorskLett/839" className="target-action__link">
            Norsklett — Объявления
          </Link>
        </div>

        {/* БОТ */}
        <h2 className="project__subtitle">🤖 БОТ</h2>
        <p className="project__paragraph">
          Бот предназначен для ответов на вопросы по норвежскому языку. Для
          активации запроса используется команда <span className='text-sky-700'>/ask</span>.
          Бот умеет выполнять такие задачи, как перевод, написание текстов по заданной теме,
          исправление текстов и подбор слов по теме. Качество ответа зависит
          от точности формулировки запроса. Однако бот менее эффективен в
          вопросах грамматики и не понимает продолжения диалога без отсылки
          к предыдущим сообщениям. Он также не разбирается в языковых уровнях,
          но можно задать параметры текста, такие как простота, длина и
          ключевые слова.
        </p>
        <div className="target-action pt-0 mt-0">
          <Link href="https://t.me/NorskLett/9016" className="target-action__link">
            Norsklett — БОТ
          </Link>
        </div>

        {/* Болталка и помощь */}
        <h2 className="project__subtitle">💬 Болталка и помощь</h2>
        <p className="project__paragraph">
          В разделе «Болталка и помощь» можно всё:
          задавать любые вопросы, обращаться за помощью, болтать по-норвежски.
        </p>
        <div className="target-action pt-0 mt-0">
          <Link href="https://t.me/NorskLett/835" className="target-action__link">
            Norsklett — Болталка и помощь
          </Link>
        </div>

        {/* Alias online */}
        <h2 className="project__subtitle">🎮 Alias online</h2>
        <p className="project__paragraph">
          Alias Online — это игра, в которой бот, используя искусственный интеллект, объясняет слово,
          а участники должны угадать, о каком слове идет речь. Игра проходит
          в соответствующем разделе, и каждый может присоединиться к игре в любое время.
        </p>
        <div className="target-action pt-0 mt-0">
          <Link href="https://t.me/NorskLett/24172" className="target-action__link">
            Norsklett — Alias online
          </Link>
        </div>

        {/* Online språkkafe */}
        <h2 className="project__subtitle">🗣 Online språkkafe</h2>
        <p className="project__paragraph">
          Раздел «Online språkkafe» — это онлайн-пространство для общения на норвежском языке
          через аудиозаписи или групповые звонки, где участники могут обсуждать разные темы,
          делиться знаниями и практиковать язык. Организаторы мероприятия регулярно
          собирают людей.
        </p>
        <div className="target-action pt-0 mt-0">
          <Link href="https://t.me/NorskLett/1797" className="target-action__link">
            Norsklett — Online språkkafe
          </Link>
        </div>

        {/* Dagens ord */}
        <h2 className="project__subtitle">📆 Dagens ord</h2>
        <p className="project__paragraph">
          В раздел «Dagens ord» каждый день публикуется одно слово с переводом
          и пример его употребления. Приглашаем потренироваться и составить примеры
          с этим словом в комментариях! Отличная практика.
        </p>
        <div className="target-action pt-0 mt-0">
          <Link href="https://t.me/NorskLett/54176" className="target-action__link">
            Norsklett — Dagens ord
          </Link>
        </div>

        {/* Грамматика */}
        <h2 className="project__subtitle">✍️ Грамматика</h2>
        <p className="project__paragraph">
          Раздел «Грамматика» предоставляет материалы по грамматике,
          организованные от простого к сложному.
          В тексте присутствуют хэштеги для различных грамматических категорий.
        </p>
        <div className="target-action pt-0 mt-0">
          <Link href="https://t.me/NorskLett/25" className="target-action__link">
            Norsklett — Грамматика
          </Link>
        </div>

        {/* Словарный запас */}
        <h2 className="project__subtitle">📝 Словарный запас</h2>
        <p className="project__paragraph">
          Раздел «Словарный запас» содержит списки слов по темам, которые
          помогут вам расширить словарный запас.
        </p>
        <div className="target-action pt-0 mt-0">
          <Link href="https://t.me/NorskLett/27" className="target-action__link">
            Norsklett — Словарный запас
          </Link>
        </div>

        {/* Вебинары */}
        <h2 className="project__subtitle">🎬 Вебинары</h2>
        <p className="project__paragraph">
          Раздел «Вебинары» содержит текстовые и видеоматериалы по норвежскому языку.
        </p>
        <div className="target-action pt-0 mt-0">
          <Link href="https://t.me/NorskLett/848" className="target-action__link">
            Norsklett — Вебинары
          </Link>
        </div>

        {/* Больше информации */}
        <h2 className="project__subtitle">Больше информации</h2>
        <p className="project__paragraph">
          Приглашаем вас в наш телеграм чат, где вы сможете самостоятельно
          исследовать все разделы и получить помощь от участников. До встречи 🤗
        </p>
        <div className="target-action pt-0 mt-0">
          <Link href="https://t.me/NorskLett" className="target-action__link">
            Norsklett
          </Link>
        </div>
      </main>
    </>
  )
}
