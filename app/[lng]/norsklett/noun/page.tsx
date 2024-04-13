import Link from "next/link";
import { greatVibes } from "../../../fonts";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { useTranslation } from "../../../i18n";
import { Footer } from '../../components/footer'

export default async function Noun({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "noun");

  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1
            className={`header__title header__title--home ${greatVibes.variable}`}
          >
            Substantiv
          </h1>
        </div>
      </header>
      <main className="project">
        <Breadcrumbs currentPage={t("title")} lng={lng} />
        <p className="project__paragraph">{t("introduction")}</p>

        <h2 className="project__subtitle">
          <a href="#" title={t("details")}>
            {t("gender")}
          </a>
        </h2>
        <div className="project__paragraph">
          {t("gender-one")}
          <div className="pt-4 pb-6 pl-1 sm:pl-4 md:pl-8 grid grid-cols-2 gap-4">
            <div>
              <b>{t("masculine-gender")} </b>
              {t("article")}
              <b> en</b>
            </div>
            <div>en gutt - {t("boy")}</div>
            <div>
              <b>{t("feminine-gender")} </b>
              {t("article")}
              <b> ei</b>
            </div>
            <div>en jente - {t("girl")}</div>
            <div>
              <b>{t("neuter-gender")} </b>
              {t("article")}
              <b> et</b>
            </div>
            <div>
              et barn - {t("child")}, et eple - {t("apple")}
            </div>
          </div>

          <p className="pt-4">{t("gender-two")}</p>
        </div>

        <h2 className="project__subtitle">
          <a href="#" title={t("details")}>
            {t("indefinite-form")}
          </a>
        </h2>
        <div className="project__paragraph">
          <p>
            {t("indefinite-one")}
            <b> en</b>, <b> ei </b>
            {t("or")}
            <b> et </b>
            {t("indefinite-two")}
          </p>
          <span className="pl-4">
            <b>Jeg leser ei bok</b> — {t("reading-book")}
          </span>
          <p className="pt-2">{t("uncountable")}</p>
          <span className="pl-4">
            <b>Jeg liker te</b> — {t("liker-te")}
          </span>
        </div>

        <h2 className="project__subtitle">
          <a href="#" title={t("details")}>
            {t("definite-form")}
          </a>
        </h2>
        <div className="project__paragraph">
          <p>{t("definite-one")}</p>
          <div className="pl-1 sm:pl-4 md:pl-8 grid grid-cols-2 gap-4">
            <div>
              <b>{t("masculine-gender")} </b>
            </div>
            <div>
              <span>
                gutt<b>en</b>
              </span>
            </div>

            <div className="pt-2">
              <b>{t("feminine-gender")} </b>
            </div>
            <div className="pt-2">
              jent<b>a </b> ({t("article")}
              <b> ie </b>
              {t("definite-two")}
              <b> a</b>)
            </div>

            <div className="pt-2">
              <b>{t("neuter-gender")} </b>
            </div>
            <div className="pt-2">
              barn<b>et</b>, epl<b>et </b>
              {t("definite-three")}
            </div>
          </div>
        </div>

        <h2 className="project__subtitle">
          <a href="#" title={t("details")}>
            {t("plural")}
          </a>
        </h2>
        <div className="project__paragraph">
          <p>
            {t("indefinite-form")}
            <span className="whitespace-nowrap">
              {t("ending")}
              <b> -er</b>
            </span>
          </p>
          <ul className="pl-4 sm:pl-6 md:pl-8">
            <li>
              <span className="pl-4">
                gutt<b>er</b> - {t("boys")}
              </span>
            </li>
            <li className="pt-2">
              <span className="pl-4">
                jent<b>er</b> - {t("girls")}
              </span>
            </li>
            <li className="pt-2">
              <span className="pl-4">
                epl<b>er</b> - {t("apples")}
              </span>
            </li>
            <li className="pt-2">
              <span className="pl-4">barn - {t("children")}</span>
            </li>
          </ul>
        </div>

        <div className="project__paragraph">
          <p>
            {t("definite-form")}
            <span className="whitespace-nowrap">
              {t("ending")}
              <b> -ene</b>
            </span>
          </p>
          <ul className="pl-4 sm:pl-6 md:pl-8">
            <li>
              <span className="pl-4">
                gutt<b>ene</b> - {t("boys")}
              </span>
            </li>
            <li className="pt-2">
              <span className="pl-4">
                jent<b>ene</b> - {t("girls")}
              </span>
            </li>
            <li className="pt-2">
              <span className="pl-4">
                epl<b>ene</b> - {t("apples")}
              </span>
            </li>
            <li className="pt-2">
              <span className="pl-4">
                barn<b>a</b>
                {t("plural-three")} - {t("children")}
              </span>
            </li>
          </ul>
        </div>

        {/* Дополнительные материалы */}
        <div className="project__paragraph pt-8">
          {t("look-up-noun")}:
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
        </div>

        {/* Реклама телеграмма */}
        {lng !== "en" && (
          <>
            <p className="project__paragraph">{t("tables-forms-voicing")}</p>
            <p className="project__paragraph pb-4">{t("welcome-to-telegram")}</p>
            <div className="target-action pt-0">
              <Link href="https://t.me/norsklett" className="target-action__link">
                {t("norsklett")}
              </Link>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
