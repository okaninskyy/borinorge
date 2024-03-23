import { greatVibes } from '../../../fonts'
import { Breadcrumbs } from '../../components/breadcrumbs'
import { useTranslation } from '../../../i18n'

export default async function Noun({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, "noun")

  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1
            className={`header__title header__title--home ${greatVibes.variable}`}
          >
            {t("title")}
          </h1>
        </div>
      </header>
      <main className="project">
        <Breadcrumbs currentPage={"Существительные"} lng={lng} />
        <p className="project__paragraph">
          Класс слов, обозначающих людей, вещи и понятия, а также другие
          предметы, отвечает на вопросы <b>«кто?»</b> или <b>«что?»</b>.
          Существительные в норвежском языке имеют род и могут изменяться в
          зависимости от количества и смысловой определённости.
        </p>

        <h2 className="project__subtitle">
          <a href="#" title="Подробнее">
            Род
          </a>
        </h2>
        <div className="project__paragraph">
          <p>
            В норвежском языке есть существительные трёх родов: женского,
            мужского и среднего. Если в русском языке слово мужского рода, то
            оно необязательно будет такого же рода в норвежском. В норвежском
            языке нет такого правила как в русском, где род слова определяет
            последняя буква, здесь род определяется по артиклю:
          </p>
          <ul className="pl-12">
            <li>
              <b>Мужской род</b> артикль <b>en</b>
              <span className="pl-8 -mt-2"> en gutt - мальчик</span>
            </li>

            <li className="pt-2">
              <b>Женский род</b> артикль <b>ei</b>
              <span className="pl-8 -mt-2"> en jente - девочка</span>
            </li>

            <li className="pt-2">
              <b>Средний род</b> артикль <b>et</b>
              <span className="pl-8 -mt-2"> et barn - ребёнок</span>
            </li>
          </ul>
          <p className="pt-4">
            Хорошая новость! В букмоле, все слова женского рода можно
            использовать так, как будто они мужского рода и это не будет
            ошибкой. Поэтому запоминать род есть смысл только для
            существительных среднего рода (их около 25%).
          </p>
        </div>

        <h2 className="project__subtitle">
          <a href="#" title="Подробнее">
            Неопределённые существительные
          </a>
        </h2>
        <div className="project__paragraph">
          <p>
            Если у нас что-то неопределенное (например, впервые упоминается в
            тексте) в единственном числе, что можно сосчитать и дополнить словом
            «какой-то» или «один», то перед существительным будет неопределенный
            артикль <b>en</b>, <b>ei</b> или <b>et</b> в зависимости от рода.
          </p>
          <span>
            <b>Jeg leser ei bok</b> — Я читаю книгу (т.е., я читаю
            <b className="pl-1">какую-то</b> книгу или <b>одну</b> книгу)
          </span>
          <p className="pt-2">
            Перед неисчисляемыми существительными (жидкости, порошки, пудры)
            артикли не ставят.
          </p>
          <span>
            <b>Jeg liker te</b> — Мне нравится чай
          </span>
        </div>

        <h2 className="project__subtitle">
          <a href="#" title="Подробнее">
            Определённые существительные
          </a>
        </h2>
        <div className="project__paragraph">
          <p>
            Когда известно о чём или о ком идёт речь (например, уже упоминалось
            в тексте) в единственном числе, то неопределённый артикль переносят
            в конец слова (артикль <b>ei</b> превращается в <b>a</b>)
          </p>
          <ul className="pl-12">
            <li>
              gutt<b>en</b>
            </li>
            <li>
              jent<b>a</b>
            </li>
            <li>
              barn<b>et</b> (буква <b>t</b> в конце определённых существительных
              не читается)
            </li>
          </ul>
        </div>

        <h2 className="project__subtitle">
          <a href="#" title="Подробнее">
            Множественное число
          </a>
        </h2>
        <div className="project__paragraph">
          <p>
            Для того чтобы получить множественное число существительного в
            <b className="pl-1">неопределенной</b> форме, используют
            неопределённую форму единственного числа без артикля и
          </p>
          <ul className="w-3/4 pl-6 list-disc">
            <li>
              к слову присоединяется окончание <b>-er</b>, не обращая внимания
              на род слова:
              <span className="pl-4">
                gutt<b>er</b>
              </span>
            </li>
            <li className="pt-2">
              к слову присоединяется окончание <b>-r</b>, если существительное
              уже и так заканчивается на <b>-e</b>:
              <span className="pl-4">
                jente<b>r</b>
              </span>
            </li>
            <li className="pt-2">
              слово так и остается в его изначальной форме, если существительное
              среднего рода и имеет один слог:
              <span className="pl-4">barn</span>
            </li>
          </ul>
          <p className="pt-2">
            Для образования множественного числа существительных в
            <b className="pl-1">определённой</b> форме к его изначальной форме
            прибавляют окончание <b>-ene</b>:
            <span className="pl-4">
              gutt<b>ene</b>, jent<b>ene</b> (исключения barna, beina).
            </span>
          </p>
        </div>

        <div className="project__paragraph">
          <span>
            Где смотреть формы существительного? В <b>словарях</b>:
          </span>
          <ul className="pl-6 list-disc">
            <li>
              Словарь русско-норвежский Lexin, с озвучкой
              <br />
              <a
                href="https://lexin.oslomet.no/#/findwords/message.bokmal-russian"
                className="project__link"
              >
                lexin.oslomet.no
              </a>
              <br />
              (чтобы посмотреть формы слова, ищите строчку bøyning)
            </li>
            <li className="pt-3">
              Толковый словарь норвежского языка Ordbøkene <br />
              <a href="https://ordbokene.no/" className="project__link">
                ordbokene.no
              </a>
              <br />
              (чтобы посмотреть формы слова, нажмите на vis bøyning)
            </li>
            <li className="pt-3">
              Норвежско-русский словарь с транскрипцией Dict
              <br />
              <a
                href="https://www.dict.com/%D0%BD%D0%BE%D1%80%D0%B2%D0%B5%D0%B6%D1%81%D0%BA%D0%BE-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B8"
                className="project__link"
              >
                dict.com
              </a>
            </li>
          </ul>
        </div>

        <div className="project__paragraph">
          Хотите узнать больше о том, когда именно использовать неопределенную
          или определенную форму, ставить ли артикль, какие есть исключения из
          правил, а также найти список слов среднего рода с переводом и
          озвучкой?
        </div>

        <div className="project__paragraph">
          <b>
            Добро пожаловать в Телеграм “Норвежский? Легко!” &nbsp;
            <a href="https://ordbokene.no/" className="project__link">
              https://t.me/NorskLett
            </a>
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
  );
}
