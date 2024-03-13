import Link from 'next/link'
import { greatVibes } from '../../../fonts'
import { Breadcrumbs } from '../../components/breadcrumbs'
import { useTranslation } from '../../../i18n'

export default async function Noun({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, "noun")

  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1 className={`header__title header__title--home ${greatVibes.variable}`}>{t("title")}</h1>
        </div>
      </header>
      <main className="project">
        <Breadcrumbs currentPage={"Существительные"} lng={lng} />
        <p className="project__paragraph">
          Часть речи, обозначающая <b>предмет</b>, лицо или понятие,
          отвечает на вопросы <b>«кто?»</b> или <b>«что?»</b>.
        </p>
        
        <div className="project__paragraph">
          <span>
            В норвежском языке у существительного есть категории:
          </span>
          <ol className="list-decimal pl-4">
            <li>
              <b>Род</b>: мужской, женский и средний. Если на вашем языке
              слово мужского рода, оно не обязательно будет такого же рода
              на норвежском.
            </li>
            <li><b>Неопределенность</b> и <b>определенность</b></li>
            <li><b>Число</b>: единственное и множественное.</li>
          </ol>
        </div>

        <div className="project__paragraph">
          <span>
            Какого рода существительное, нам показывают артикли:
          </span>
          <ul>
            <li><b>en - мужской род</b></li>
            <li><b>ei - женский род</b></li>
            <li><b>et - средний род</b></li>
          </ul>
          <span>
            Хорошая новость! Все слова женского рода можно использовать так, как будто они мужского рода. 
            И это не будет ошибкой. Поэтому запомнить надо только слова среднего рода (их около 25%)
          </span>
        </div>

        <div className="project__paragraph">
          <span>У каждого существительного есть 4 формы:</span>
          <ol className="list-decimal list-inside pl-0">
            <li>
              неопределенная форма, единственное число
              en gutt, ei jente, et eple, et hus - мальчик, девочка, яблоко, дом
            </li>
            <li>
              определенная форма, единственное число (артикль уходит в конец слова)
              gutten, jenta (ei превращается в a), eplet, huset (t в конце не читается)
            </li>
            <li>
              неопределенная форма, множественное число (окончание -er)
              gutter, jenter, epler, hus (односложное слово среднего рода так и остается)
              мальчики, девочки, яблоки, дома
            </li>
            <li>
              определенная форма, множественное число (окончание -ene)
              guttene, jentene, eplene, husene
            </li>
          </ol>
        </div>

        <div className="project__paragraph">
          <span>Где смотреть формы существительного? В <b>словарях</b>:</span>
          <ul>
            <li>
              *Словарь русско-норвежский Lexin, с озвучкой<br />
              <a href="https://lexin.oslomet.no/#/findwords/message.bokmal-russian" className='project__link'>
                https://lexin.oslomet.no/#/findwords/message.bokmal-russian
              </a><br />
              (чтобы посмотреть формы слова, ищите строчку bøyning)
            </li>
            <li>
              *Словарь норвежско-норвежский Ordbøkene <br />
              <a href="https://ordbokene.no/" className='project__link'>
                https://ordbokene.no/
              </a><br />
              (чтобы посмотреть формы слова, нажмите на vis bøyning)
            </li>
          </ul>
        </div>

        <div className='project__paragraph'>
          En/ei/et по сути означает ОДИН. Поэтому мы можем использовать неопределенный артикль только перед тем, что можем подсчитать.
          <div className="grid grid-cols-2">
            <div>Можно мне чашку чая?</div>
            <div>Kan jeg få en kopp te?</div>
            <div>Можно мне чай?</div>
            <div>Kan jeg få te?</div>
          </div>
        </div>

        <div className='project__paragraph'>
          Неопределенная или определенная форма? Основное правило: если
          информация для вашего собеседника новая - неопределенная форма.
        </div>

        <div className='project__paragraph'>
          Хотите узнать больше о том, когда именно использовать неопределенную
          или определенную форму, ставить ли артикль, какие есть исключения из
          правил, а также найти список слов среднего рода с переводом и озвучкой? 
        </div>

        <div className='project__paragraph'>
          <b>Добро пожаловать в Телеграм “Норвежский? Легко!” &nbsp;
          <a href="https://ordbokene.no/" className='project__link'>https://t.me/NorskLett</a>
          </b>
        </div>

        {/* Реклама чата */}
        {/* 
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
        */}
      </main>
    </>
  )
}
