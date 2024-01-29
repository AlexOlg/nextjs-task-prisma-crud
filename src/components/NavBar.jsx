"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Navbar ({task}) {

    const router = useRouter()
    return(
        <nav className="bg-slate-900">
          <div className="container mx-auto flex justify-between items-center py-4">
            <Link href="/">
            <h3 className="font-bold text-3xl">NEXTCrud</h3>
            </Link>
            <ul className="flex gap-x-2 text-lg font-bold">
              <li>
                <Link href='/' className="text-slate-300 hover:text-slate-200">Tareas📋</Link>
              </li>
              <li>
                <Link href='/new' className="text-slate-300 hover:text-slate-200">Crear tarea🆕</Link>
              </li>
            </ul>
          </div>
      </nav>
    )
}