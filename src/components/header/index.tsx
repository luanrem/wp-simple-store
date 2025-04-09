import { ShoppingCart } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

export default function Header() {
  return (
    <section className="h-40">
      <header className="flex items-center justify-between px-4 py-2 border-b-2">
        <h1>Catálogo</h1>
        <div className="flex items-center gap-4">
          <nav className="flex items-center space-x-4">
            <a href="#" className="text-lg flex gap-2 items-center">
              <ShoppingCart className="h-6 w-6" />
              2
            </a>
          </nav>
          <ModeToggle />
        </div>
      </header>
      <div className="flex flex-col items-center justify-center h-full">
        <h1>Exposul</h1>
        <span>Expositores e Acessórios</span>
        <p>Tudo para sua loja em um só lugar</p>
      </div>
    </section>
  )
}