import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '../../../i18n'
import { Footer } from '../../components/footer'

export default async function Alias({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, 'alias')

  return (
    <>
      <header className="bg-gray-800 text-center p-4 pt-12 pb-8">
        <div className="text-gray-200 max-w-md mx-auto overflow-hidden md:max-w-2xl">
          <h1 className="text-3xl font-bold my-2">{t('title')}</h1>
        </div>
      </header>
      <main className="max-w-md mx-auto overflow-hidden md:max-w-2xl py-8 px-4">
        <p className="text-base my-2 text-gray-700 leading-relaxed">{t('description')}</p>
        <Image
          className="py-4"
          src={"/images/alias/alias_oksana.jpeg"}
          alt="Oksana Donets"
          width={1200}
          height={800}
          priority
        />
        <p className="text-base my-4 italic border-l-4 pl-4 border-gray-400 text-gray-600">
          {t('quote')}
        </p>
        <div className="py-4 flex items-center space-x-2">
        <Image
          className="h-32 sm:h-48 md:h-64 object-cover"
          src={"/images/alias/alias_oksana_olena.jpeg"}
          alt="Oksana Donets"
          width={2560}
          height={1637}
          priority
        />
        <div className="bg-white" style={{ width: '2px', height: '100%' }}></div> {/* Separator */}
        <Image
          className="h-32 sm:h-48 md:h-64 object-cover"
          src={"/images/alias/alias_iryna.jpeg"}
          alt="Oksana Donets"
          width={959}
          height={1280}
          priority
        />
        </div>
        <h2 className="text-2xl font-semibold my-2">{t('contact-us')}</h2>
        <div className="flex space-x-4 pb-4 pt-4">
          <p>{t('olena-varlamova')}:</p>
          <Link href="https://www.linkedin.com/in/olena-varlamova-86a85724a/" className="text-blue-600 hover:text-blue-800">
            LinkedIn
          </Link>
          <span>,</span>
          <Link href="https://www.instagram.com/olena_varlamova/" className="text-blue-600 hover:text-blue-800">
            Instagram
          </Link>
        </div>
        <div className="flex space-x-4">
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
