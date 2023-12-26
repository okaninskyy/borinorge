import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '../../../i18n'
import { Footer } from '../../components/footer'

export default async function Alias({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, 'alias')

  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1 className="header__title">{t('title')}</h1>
        </div>
      </header>
      <main className="project">
        <p className="project___paragraph">{t('description')}</p>
        <Image
          className="project__image"
          src={"/images/alias/alias_oksana.jpeg"}
          alt="Oksana Donets"
          width={1200}
          height={800}
          priority
        />
        <p className="project__quote">
          {t('quote')}
        </p>

        <div className="photogrid">
          <Image
            className="photogrid__image"
            src={"/images/alias/alias_oksana_olena.jpeg"}
            alt="Oksana Donets"
            width={2560}
            height={1637}
            priority
          />
          <Image
            className="photogrid__image"
            src={"/images/alias/alias_iryna.jpeg"}
            alt="Iryna Nepotenko"
            width={959}
            height={1280}
            priority
          />
        </div>
        
        <h2 className="project__subtitle">{t('contact-us')}</h2>
        <div className="project__contact">
          <p>{t('olena-varlamova')}:</p>
          <Link href="https://www.linkedin.com/in/olena-varlamova-86a85724a/" className="text-blue-600 hover:text-blue-800">
            LinkedIn
          </Link>
          <span>,</span>
          <Link href="https://www.instagram.com/olena_varlamova/" className="text-blue-600 hover:text-blue-800">
            Instagram
          </Link>
        </div>
        <div className="project__contact">
          <p>{t('oksana-donets')}:</p>
          <Link href="https://www.linkedin.com/in/oksana-donets/" className="text-blue-600 hover:text-blue-800">
            LinkedIn
          </Link>
          <span>,</span>
          <Link href="https://www.instagram.com/oksanadonets.no/" className="text-blue-600 hover:text-blue-800">
            Instagram
          </Link>
        </div>
      </main>
      <Footer lng={lng} path={"/projects/alias"}/>
    </>
  )
}
