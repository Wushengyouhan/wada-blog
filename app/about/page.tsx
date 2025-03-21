import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { techIcons } from '@/data/infoConfig'
import IconCloudClient from 'components/IconCloudClient'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex-1">
            <MDXLayoutRenderer code={author.body.code} />
          </div>
          <div className="flex-1">
            <IconCloudClient iconSlugs={techIcons} />
          </div>
        </div>
      </AuthorLayout>
    </>
  )
}
