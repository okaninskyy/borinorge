import Image from 'next/image'
import Link from 'next/link'
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
          <h1 className="header__title header__title--home">Bor i Norge</h1>
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
        <h2 className="project__subtitle">{t('projects')}</h2>
        <div className="projects__grid">
          {[
            {
              id: 'alias',
              title: t('project-alias'),
              imageUrl: '/images/preview/alias_1200_630.jpeg',
            },
            {
              id: 'troens-kraft',
              title: t('project-troens-kraft'),
              imageUrl: '/images/preview/troens_kraft_1200_630.jpeg',
            },
            {
              id: 'ordbokene',
              title: t('project-ordbokene'),
              imageUrl: '/images/preview/ordbokene_1200_630.jpeg',
            },
          ].map((p: Project) => (
            <>
              <Link key={p.id} href={`/${lng}/projects/${p.id}`}>
                <ProjectCard project={p} />
              </Link>
            </>
          ))}
        </div>
        <h2 className="project__subtitle">{t('privacy-statement')}</h2>
        <p className="project__paragraph">{t('privacy-policy')}</p>
      </main>


      <Footer lng={lng} path={null}/>
    </>
  )
}
