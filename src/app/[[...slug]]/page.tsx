import '../../index.css'
import { ClientOnly } from './client'
 
export function generateStaticParams() {
  return [{ slug: ['/vite.svg'] }]
}
 
export default function Page() {
  return <ClientOnly />
}