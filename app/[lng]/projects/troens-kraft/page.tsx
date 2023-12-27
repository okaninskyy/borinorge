import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '../../../i18n'
import { Contacts } from '../../components/contacts'
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

        <div className="overflow-x-auto py-2">
          <table className="min-w-full text-center border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 border-b border-gray-300">📅 <strong>Дата та час</strong></th>
                <th className="px-6 py-3 border-b border-gray-300">🛠️ <strong>Тема</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-300">05 jan 2024, Fregad 18:00</td>
                <td className="px-6 py-4 border-b border-gray-300">Впевненість у собі. Що таке &quot;колесо впевненості&quot; та яким чином цей інструмент стане мені в пригоді? (Частина 1)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-300">12 jan 2024, Fregad 18:00</td>
                <td className="px-6 py-4 border-b border-gray-300">Шкала впевненості: від мрії до реалізації. Де я саме зараз? Чого бракує для впевненості в собі та де це знайти. (Частина 2)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-300">19 jan 2024, Fregad 18:00</td>
                <td className="px-6 py-4 border-b border-gray-300">Мої переконання. Я є те, у що я вірю!</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-300">26 jan 2024, Fregad 18:00</td>
                <td className="px-6 py-4 border-b border-gray-300">Дозвіл собі! Що за ним криється? Різноманітні страхи та їх трансформація.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-300">2 feb 2024, Fregad 18:00</td>
                <td className="px-6 py-4 border-b border-gray-300">Як працює наш мозок? Формула змін за Бекхардом.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-300">9 feb 2024, Fregad 18:00</td>
                <td className="px-6 py-4 border-b border-gray-300">Проактивність як стиль життя. Усвідомленість. Лідерство. Networking. Формула успіху від Т. Леонарда.</td>
              </tr>
            </tbody>
          </table>
        </div>

{/* | 📅 **Дата та час**         | 🛠️ **Тема** |
|----------------------------|-----------------------------------------------------|
| 09 jan 2024, Tirsdag 18:00 | Культурні практики цифрового середовища |
| 16 jan 2024, Tirsdag 18:00 | Спеціальності майбутнього у цифровому середовищі |
| 23 jan 2024, Tirsdag 18:00 | Цифрові гроші  |
| 30 jan 2024, Tirsdag 18:00 | Цифрова трансформація |
| 6 feb 2024, Tirsdag 18:00  | Блогінг та персональний бренд |
| 13 feb 2024, Tirsdag 18:00 | Цифровий суверенітет | */}

        <h2 className="project__subtitle">{t('calendar-it')}</h2>
        <p className="project__paragraph">{t('summary-it')}</p>

        <div className="overflow-x-auto py-2">
          <table className="min-w-full text-center border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 border-b border-gray-300">📅 <strong>Дата та час</strong></th>
                <th className="px-6 py-3 border-b border-gray-300">🛠️ <strong>Тема</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-300">09 jan 2024, Tirsdag 18:00</td>
                <td className="px-6 py-4 border-b border-gray-300">Культурні практики цифрового середовища</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-300">16 jan 2024, Tirsdag 18:00</td>
                <td className="px-6 py-4 border-b border-gray-300">Спеціальності майбутнього у цифровому середовищі</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-300">23 jan 2024, Tirsdag 18:00</td>
                <td className="px-6 py-4 border-b border-gray-300">Цифрові гроші</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-300">30 jan 2024, Tirsdag 18:00</td>
                <td className="px-6 py-4 border-b border-gray-300">Цифрова трансформація</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-300">6 feb 2024, Tirsdag 18:00</td>
                <td className="px-6 py-4 border-b border-gray-300">Блогінг та персональний бренд</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-300">13 feb 2024, Tirsdag 18:00</td>
                <td className="px-6 py-4 border-b border-gray-300">Цифровий суверенітет</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer lng={lng} path={"/projects/troens-kraft"}/>
    </>
  )
}
