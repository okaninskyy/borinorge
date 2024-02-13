import { greatVibes } from '../../../fonts'
import { useTranslation } from '../../../i18n'
import { Breadcrumbs } from '../../components/breadcrumbs'
import { Footer } from '../../components/footer'

export default async function TroensKraft({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, 'troens-kraft')

  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1 className={`header__title header__title--home ${greatVibes.variable}`}>{t('title')}</h1>
        </div>
      </header>
      <main className="project">
        <Breadcrumbs currentPage={t('title')} lng={lng} />
        <p className="project__paragraph">{t('description-tro')}</p>
        <p className="project__paragraph">{t('description-it')}</p>

        <h2 className="project__subtitle">{t('calendar-tro')}</h2>
        <p className="project__paragraph">{t('summary-tro')}</p>

        <div className="events">
          <table className="events__table">
            <thead className="events__thead">
              <tr>
                <th className="events__th w-1/3">📅 <strong>Дата та час</strong></th>
                <th className="events__th w-2/3">🛠️ <strong>Тема</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr className="events__tr">
                <td className="events__td align-top">2024-01-05, 18:00</td>
                <td className="events__td align-top">{t('tro-tema-1')}</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-01-12, 18:00</td>
                <td className="events__td">{t('tro-tema-2')}</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-01-19, 18:00</td>
                <td className="events__td">{t('tro-tema-3')}</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-01-26, 18:00</td>
                <td className="events__td">{t('tro-tema-4')}</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-02-02, 18:00</td>
                <td className="events__td">{t('tro-tema-5')}</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-02-09, 18:00</td>
                <td className="events__td">{t('tro-tema-6')}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="project__subtitle">{t('calendar-it')}</h2>
        <p className="project__paragraph">{t('summary-it')}</p>

        <div className="events">
          <table className="events__table">
            <thead className="events__thead">
              <tr>
                <th className="events__th w-1/3">📅 <strong>Дата та час</strong></th>
                <th className="events__th w-2/3">🛠️ <strong>Тема</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr className="events__tr">
                <td className="events__td">2024-01-09, 18:00</td>
                <td className="events__td">{t('it-tema-1')}</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-01-16, 21:00</td>
                <td className="events__td">{t('it-tema-2')}</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-01-23, 18:00</td>
                <td className="events__td">{t('it-tema-3')}</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-01-30, 18:00</td>
                <td className="events__td">{t('it-tema-4')}</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-02-06, 18:00</td>
                <td className="events__td">{t('it-tema-5')}</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-02-13, 18:00</td>
                <td className="events__td">{t('it-tema-6')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  )
}
