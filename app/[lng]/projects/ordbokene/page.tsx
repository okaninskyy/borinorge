import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '../../../i18n'
import { Footer } from '../../components/footer'

export default async function Ordbokene({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, 'ordbokene')

  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1 className="header__title">{t('title')}</h1>
        </div>
      </header>
      <main className="project">
        <p className="project__paragraph">{t('description')}</p>
        <p className="project__paragraph p-0">{t('fra-olena')}</p>
        <Image
          className="project__image p-0 pt-4"
          src="/images/ordbokene/olena-varlamova.jpeg"
          alt="Olena Varlamova"
          width={2560}
          height={2239}
          priority
        />
        <p className="project__quote">{t('quote-olena')}</p>
        
        <p className="project__paragraph p-0 pt-4">{t('oksana-ta-sturla')}</p>
        <Image
          className="project__image py-4"
          src="/images/ordbokene/oksana-ta-sturla.jpeg"
          alt="Oksana Donets og Sturla Berg-Olsen"
          width={1771}
          height={1214}
          priority
        />
        <p className="project__paragraph p-0 pt-4">{t('fra-oksana')}</p>
        <p className="project__quote">{t('quote-oksana')}</p>
        <iframe 
          width="100%"
          height="310"
          src="https://www.youtube.com/embed/tLBJNZ9m6So?si=SxVvFk6yo-zFJWls"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>  
        </iframe>
        <div className="py-8 flex justify-center">
          <Link href="https://ordbøkene.no" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Ordbøkene.no
          </Link>
        </div>
      </main>
      <Footer lng={lng} path={"/projects/ordbokene"}/>
    </>
  )
}