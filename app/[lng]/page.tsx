import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '../i18n'
import { Contacts } from './components/contacts'
import { Footer } from './components/footer'

export default async function Page({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng)

  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1 className="header__title">Borinorge</h1>
        </div>
      </header>
      <main className="project">
        <h2 className="project__subtitle">{t('hello')}</h2>
        <p className="project__paragraph">{t('description')}</p>
        <Image
          className="project__image"
          src={"/images/home/avatar-oksana-donets.jpeg"}
          alt="Oksana Donets"
          width={640}
          height={640}
          priority
        />
        <p className="project__quote">
          {t('quote-oksana')}
        </p>
        <Contacts
          lng={lng}
          nameSlug={t('oksana-donets')}
          instagram={"https://www.instagram.com/oksanadonets.no/"} 
          linkedin={"https://www.linkedin.com/in/oksana-donets/"}
          isHome
        />
        <Image
          className="project__image"
          src={"/images/home/avatar-olena-varlamova.jpeg"}
          alt="Olena Varlamova"
          width={640}
          height={640}
          priority
        />
        <p className="project__quote">
          {t('quote-olena')}
        </p>
        <Contacts
          lng={lng}
          nameSlug={t('olena-varlamova')}
          instagram={"https://www.instagram.com/olena_varlamova/"} 
          linkedin={"https://www.linkedin.com/in/olena-varlamova-86a85724a/"}
          isHome
        />
        <ol className='py-12'>
          <li>
            <Link href={`/${lng}/projects/alias`}>
              {t('project-alias')}
            </Link>
          </li>
          <li>
            <Link href={`/${lng}/projects/troens-kraft`}>
              {t('project-troens-kraft')}
            </Link>
          </li>
        </ol>
        <h2 className="project__subtitle">{t('privacy-statement')}</h2>
        <p className="project__paragraph">{t('privacy-policy')}</p>
      </main>


      <Footer lng={lng} path={null}/>
    </>
  )
}
