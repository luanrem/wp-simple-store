import { ShoppingCart } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Item } from "../Item";

export default function Header() {
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true)
  };

  const handleInputBlur = () => {
    setInputFocused(false)
  }

  return (
    <section className="h-40">
      <header className="flex items-center justify-between px-4 py-2 border-b-2">
        <Input className={cn("transition-all", inputFocused ? "w-full" : "w-48")} placeholder="Search" onFocus={handleInputFocus} onBlur={handleInputBlur} />
        <div className={cn("flex items-center gap-4", inputFocused ? "opacity-0 w-0" : "opacity-100")}>
          <Button className="flex items-center text-lg gap-2" variant="outline">
            <ShoppingCart className="h-6 w-6" />
            2
          </Button>
          <ModeToggle />
        </div>
      </header>
      <div className="flex flex-col items-center justify-center h-full border-b">
        <h1 className="text-3xl">Exposul</h1>
        <span className="text-2xl">Expositores e Acessórios</span>
        <p>Tudo para sua loja em um só lugar</p>
      </div>
      <div className="bg-primary-foreground/70">
        <div className="flex justify-between items-center px-4 py-2">
          <span>Cabides</span>
          <Button className="">Mostrar tudo</Button>
        </div>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <div className="flex justify-between items-center px-4 py-2">
          <span>Araras</span>
          <Button className="">Mostrar tudo</Button>
        </div>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  )
}