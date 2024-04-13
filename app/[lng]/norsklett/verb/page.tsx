import { greatVibes } from "../../../fonts";
import { useTranslation } from "../../../i18n";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { Footer } from '../../components/footer'

export default async function Noun({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "verb");
  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1
            className={`header__title header__title--home ${greatVibes.variable}`}
          >
            Verb
          </h1>
        </div>
      </header>

      <main className="project">
        <Breadcrumbs currentPage={t("title-second")} lng={lng} />
        <p className="project__paragraph">{t("class-word")}.</p>

        {/* Инфинитив */}
        <h2 className="project__subtitle">{t("infinitive")}</h2>
        <div className="project__paragraph">
          <p className="project__paragraph">
            {t("about-infinitive")}
            <b>&quot;{t("what-to-do")}&quot;</b>.
          </p>
          <span>
            {t("infinitive-has-marker")} <b>å</b> :
          </span>
          <ul className="pl-10">
            <li>å jobbe - {t("work")}</li>
            <li>å lese - {t("read")}</li>
            <li>å gå - {t("walk")}</li>
          </ul>
        </div>

        {/* Настоящее время (Presens) */}
        <h2 className="project__subtitle">{t("present-tense")}</h2>
        <div className="project__paragraph">
          <p>{t("find-the-verb")}</p>
          <div className="grid grid-cols-2 project__paragraph">
            <div>
              Jeg jobbe<b>r</b>.
            </div>
            <div>{t("im-working")}.</div>
            <div>
              Du lese<b>r</b>.
            </div>
            <div>{t("you-reading")}.</div>
            <div>
              Vi gå<b>r</b>.
            </div>
            <div>{t("we-on-way")}.</div>
          </div>
          <p>
            {t("good-news")} {t("ending-is-changed")} {t("v1")}
            <b>{t("e1")}</b>
            {t("dot")} {t("v2")}
            <b>{t("e2")}</b>
            {t("dot")} {t("v3")}
            <b>{t("e3")}</b>
            {t("dot")}
            {t("right-bracket")}
            {t("comma")} {t("form-present-tense")} {t("nv1")}
            <b>{t("r")}</b>
            {t("dot")} {t("nv2")}
            <b>{t("r")}</b>
            {t("dot")} {t("nv3")}
            <b>{t("r")}</b>
            {t("dot")}
            {t("right-bracket")}
          </p>
        </div>

        {/* Будущее время */}
        <h2 className="project__subtitle">{t("future-tense")}</h2>
        <div className="project__paragraph">
          <p className="project__paragraph">
            {t("express-future-tense")} <b>skal</b>,{" "}
            {t("followed-by-infinitive")} å:
          </p>
          <div className="grid grid-cols-2">
            <div>
              Han <b>skal</b> jobbe.
            </div>
            <div>{t("it-will-work")}.</div>
            <div>
              Hun <b>skal</b> lese.
            </div>
            <div>{t("she-will-reading")}.</div>
            <div>
              De <b>skal</b> gå.
            </div>
            <div>{t("they-will-go")}.</div>
          </div>
        </div>

        {/* Повелительное наклонение */}
        <h2 className="project__subtitle">{t("imperative")}</h2>
        <div className="project__paragraph">
          <p>
            {t("infinitive-ends")} <b>-e</b>, {t("remove-it")}:
          </p>
          <div className="grid grid-cols-2">
            <div>å lese - {t("read")}</div>
            <div>Les! {t("read-on")}!</div>
            <div>å vente - {t("wait")}</div>
            <div>Vent! {t("hold-on")}!</div>
          </div>
        </div>

        {/* Прошедшее время (Preteritum) */}
        <h2 className="project__subtitle">{t("past-tense")}</h2>
        <div className="project__paragraph">
          <p className="project__paragraph">{t("about-actions-past")}:</p>
          <ul className="pl-10">
            <li>
              <b>{t("infinitive")}</b> - å lese
            </li>
            <li>
              <b>{t("past-tense")}</b> - leste
            </li>
            <li>
              <b>{t("present-perfect-tense")}</b> - har lest
            </li>
          </ul>

          <p className="project__paragraph">
            {t("tricky-to-figure")} <b>Preteritum</b>:
          </p>

          <p>
            Jeg <b>leste</b> i går. {t("i-read-yesterday")}
          </p>
        </div>

        {/* Прошедшее совершенное время (Perfektum) */}
        <div className="project__paragraph">
          <p className="project__paragraph">
            <b>Presens Perfektum</b> {t("used-several-cases")}:
          </p>
          <ol className="list-decimal pl-10">
            <li>
              {t("circumstance-of-time")}:
              <p>
                Jeg <b>har lest</b> denne boka. {t("read-this-book")}.
              </p>
            </li>
            <li>
              {t("indication-of-period")}:
              <p>
                Jeg <b>har lest</b> i dag. {t("read-it-today")}.
              </p>
            </li>
            <li>
              {t("action-began-past")}:
              <p>
                Jeg <b>har lest</b> denne boka i to måneder.{" "}
                {t("been-reading-this")}.
              </p>
            </li>
          </ol>
        </div>

        {/* Дополнительные материалы */}
        <div className="project__paragraph">
          {t("look-up-verb")}:
          <ul className="list-outside list-disc pl-4 sm:pl-6 md:pl-10">
            <li>
              {t("russian-norwegian-dictionary")}
              <p>
                <a
                  href="https://lexin.oslomet.no/"
                  target="_blank"
                  className="project__link"
                >
                  lexin.oslomet.no
                </a>
              </p>
              ({t("forms-of-word")} bøyning)
            </li>
            <li>
              {t("ordbokene-explanatory-dictionary")} Ordbøkene
              <p>
                <a
                  href="https://ordbokene.no/"
                  target="_blank"
                  className="project__link"
                >
                  ordbokene.no
                </a>
              </p>
              ({t("click-on-vis")} vis bøyning)
            </li>
            <li>
              {t("dict-dictionary")}Dict
              <p>
                <a
                  href={t("dict-link")}
                  target="_blank"
                  className="project__link"
                >
                  dict.com
                </a>
              </p>
              {t("with-transcription")}
            </li>
          </ul>
          <p className="project__paragraph">{t("tables-forms-voicing")}?</p>
        </div>

        {/* Реклама телеграмма */}
        <div className="project__paragraph">
          <b>{t("welcome-to-telegram")} &nbsp;</b>
          <a
            href="https://t.me/NorskLett"
            target="_blank"
            className="project__link"
          >
            t.me/NorskLett
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
