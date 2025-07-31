import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pt-4">
      <div className="container flex h-16 items-center justify-between pb-8">
        <div className="flex items-center space-x-2 pl-4">
          <h1 className="text-xl font-bold">Gabriel McEachran</h1>
          <Badge variant="secondary">Full-Stack Developer</Badge>
        </div>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={() => scrollToSection('about')}>About</Button>
          <Button variant="ghost" size="sm" onClick={() => scrollToSection('projects')}>Projects</Button>
          <Button variant="ghost" size="sm" onClick={() => scrollToSection('skills')}>Skills</Button>
          <Button variant="ghost" size="sm" onClick={() => scrollToSection('contact')}>Contact</Button>
        </nav>
      </div>
    </header>
  )
} 