import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../../../i18n/settings'
import { useTranslation } from '../../../i18n'

const flagForLanguage = (lng) => {
  switch (lng) {
    case 'no':
      return '🇳🇴'
    case 'uk':
      return '🇺🇦'
    case 'ru':
      return '🇷🇺'
    case 'en':
      return '🇺🇸'
    default:
      return ''
  }
}

export const Footer = async ({ lng, path }) => {
  const { t } = await useTranslation(lng, 'footer')
  return (
    <footer className="bg-gray-800 text-center p-4 pt-8 pb-12">
      <div className="text-gray-200 max-w-md mx-auto overflow-hidden md:max-w-2xl">
        <Trans i18nKey="languageSwitcher" t={t} className="font-semibold">
          Switch from <strong>{{ lng }}</strong> to:{' '}
        </Trans>
        <div className="flex justify-center space-x-2 mt-2">
          {languages.filter((l) => lng !== l).map((l) => (
            <Link
              key={l}
              href={path ? `/${l}/${path}` : `/${l}`}
              className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600"
            >
              <span>{flagForLanguage(l)}&nbsp;</span>
              {l.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
