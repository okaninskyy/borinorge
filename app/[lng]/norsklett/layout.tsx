import type { Metadata } from 'next'

// Dynamic metadata
export async function generateMetadata({params: {lng}}:{params: {lng: string}}) {
  const title = "Norsklett — Норвежский? Легко!"
  const description = "Cообщество для изучающих норвежский язык. Разговорные кафе, помощь, игры. Круглосуточная поддержка ChatGPT. Словарный запас и вебинары по грамматике. Присоединяйтесь!"
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