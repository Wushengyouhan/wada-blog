'use client'
import { useEffect, useState } from 'react'
import IconCloud from '@/components/ui/icon-cloud'

export default function IconCloudClient({ iconSlugs }: { iconSlugs: string[] }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div>Loading...</div>
  }

  return <IconCloud iconSlugs={iconSlugs} />
} 