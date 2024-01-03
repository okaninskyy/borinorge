import Link from 'next/link'
import { useTranslation } from '../../../i18n'
import { Footer } from '../../components/footer'

export default async function TroensKraft({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, 'troens-kraft')

  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1 className="header__title">{t('title')}</h1>
        </div>
      </header>
      <main className="project">
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
                <td className="events__td align-top">Впевненість у собі. Що таке &quot;колесо впевненості&quot; та яким чином цей інструмент стане мені в пригоді? (Частина 1)</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-01-12, 18:00</td>
                <td className="events__td">Шкала впевненості: від мрії до реалізації. Де я саме зараз? Чого бракує для впевненості в собі та де це знайти. (Частина 2)</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-01-19, 18:00</td>
                <td className="events__td">Мої переконання. Я є те, у що я вірю!</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-01-26, 18:00</td>
                <td className="events__td">Дозвіл собі! Що за ним криється? Різноманітні страхи та їх трансформація.</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-02-02, 18:00</td>
                <td className="events__td">Як працює наш мозок? Формула змін за Бекхардом.</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-02-09, 18:00</td>
                <td className="events__td">Проактивність як стиль життя. Усвідомленість. Лідерство. Networking. Формула успіху від Т. Леонарда.</td>
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
                <td className="events__td">Культурні практики цифрового середовища</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-01-16, 18:00</td>
                <td className="events__td">Спеціальності майбутнього у цифровому середовищі</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-01-23, 18:00</td>
                <td className="events__td">Цифрові гроші</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-01-30, 18:00</td>
                <td className="events__td">Цифрова трансформація</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-02-06, 18:00</td>
                <td className="events__td">Блогінг та персональний бренд</td>
              </tr>
              <tr className="events__tr">
                <td className="events__td">2024-02-13, 18:00</td>
                <td className="events__td">Цифровий суверенітет</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer lng={lng} path={"/projects/troens-kraft"}/>
    </>
  )
}
