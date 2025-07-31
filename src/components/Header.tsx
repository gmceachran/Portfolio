import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Header() {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pt-4">
      <div className="container flex h-16 items-center justify-between pb-8">
        <div className="flex items-center space-x-2 pl-4">
          <h1 className="text-xl font-bold">Gabriel McEachran</h1>
          <Badge variant="secondary">Full-Stack Developer</Badge>
        </div>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">About</Button>
          <Button variant="ghost" size="sm">Projects</Button>
          <Button variant="ghost" size="sm">Skills</Button>
          <Button variant="ghost" size="sm">Contact</Button>
        </nav>
      </div>
    </header>
  )
} 