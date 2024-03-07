import type { Metadata } from 'next'

// Dynamic metadata
export function generateMetadata() {
  const title = "Norsklett — Существительные"
  const description = "Cуществительные в норвежском языке. Мужской род, женский род и средний род. Единственное число и множественное число. Определенная форма и неопределенная форма."
  const metadataBase = new URL('https://www.borinorge.no')
  
  const metadata: Metadata = {
    title: title,
    description: description,
    metadataBase: metadataBase,
    openGraph: {
      type: "website",
      url: "@site",
      title: title,
      description: description,
      siteName: title,
      images: [{
        url: "/images/preview/norsklett/noun_1200_630.jpeg",
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@site",
      creator: "@creator", 
      images: "/images/preview/norsklett/noun_1200_630.jpeg" 
    },
  }

  return metadata
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}