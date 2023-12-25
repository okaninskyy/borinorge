import Link from 'next/link'
import { useTranslation } from '../i18n'
import { Footer } from './components/footer'

export default async function Page({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng)

  return (
    <>
      <h1>{t('title')}</h1>
      <ol>
        <li>
          <Link href={`/${lng}/projects/alias`}>
            {t('project-alias')}
          </Link>
        </li>
      </ol>

      <Footer lng={lng} path={null}/>
    </>
  )
}
