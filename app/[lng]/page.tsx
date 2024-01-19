import Image from 'next/image'
import Link from 'next/link'
import { greatVibes } from '../fonts'
import { useTranslation } from '../i18n'
import { Contacts } from './components/contacts'
import { Footer } from './components/footer'
import { ProjectCard, type Project } from './components/project-card'

export default async function Page({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng)

  return (
    <>
      <header className="header header--home">
        <div className="header__container">
          <h1 className={`header__title header__title--home ${greatVibes.variable}`}>
            Bor i Norge
          </h1>
        </div>
      </header>
      <main className="project">
        <h2 className="project__subtitle">{t('hello')}</h2>
        <p className="project__paragraph">{t('description')}</p>
        <h2 className="project__subtitle">{t('projects')}</h2>
        <div className="projects__grid">
          {[
            {
              id: 'troens-kraft',
              title: t('project-troens-kraft'),
              imageUrl: '/images/preview/troens_kraft_1200_630.jpeg',
            },
            {
              id: 'alias',
              title: t('project-alias'),
              imageUrl: '/images/preview/alias_1200_630.jpeg',
            },
            {
              id: 'ordbokene',
              title: t('project-ordbokene'),
              imageUrl: '/images/preview/ordbokene_1200_630.jpeg',
            },
            {
              id: 'it-kunnskap',
              title: t('project-it-kunnskap'),
              imageUrl: '/images/preview/it_kunnskap_1200_630.jpeg',
            },
            {
              id: 'redaksjon',
              title: t('project-redaksjon'),
              imageUrl: '/images/preview/redaksjon_1200_630.jpeg',
            },
            {
              id: 'direkte-stotte',
              title: t('project-direkte-stotte'),
              imageUrl: '/images/preview/direkte_stotte_1200_630.jpeg',
            }
          ].map((p: Project) => (
            <Link key={p.id} href={`/${lng}/projects/${p.id}`}>
              <ProjectCard project={p} />
            </Link>
          ))}
        </div>
        <h2 className="project__subtitle">{t('privacy-statement')}</h2>
        <p className="project__paragraph">{t('privacy-policy')}</p>
      </main>

      <Footer lng={lng} path={null}/>
    </>
  )
}
