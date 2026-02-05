import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Origen MESTIZO - Tienda</h1>
      <p className="mt-2">Bienvenido. Pronto agregaré la lista de productos.</p>
      <Link href="/admin/products">Ir al admin</Link>
    </div>
  )
}

export default Home