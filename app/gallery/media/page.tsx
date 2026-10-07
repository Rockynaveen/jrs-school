import { Metadata } from 'next'
import MediaPage from '../../../components/MediaPage'

export const metadata: Metadata = {
  title: 'News & Media | JRS International School, Hyderabad',
  description:
    'Explore news coverage, press releases, achievements, events, and media articles from JRS International School, Narapally, Hyderabad.',
}

export default function Page() {
  return <MediaPage />
}
