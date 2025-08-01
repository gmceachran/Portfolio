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
    <header className="w-full border-b bg-white pt-4">
      <div className="container flex h-16 items-center justify-between pb-8">
        <div className="flex items-center space-x-2 pl-4">
          <h1 className="text-xl font-bold text-black">Gabriel McEachran</h1>
          <Badge variant="outline" className="text-black border-black">Full-Stack Developer</Badge>
        </div>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={() => scrollToSection('about')} className="text-black hover:bg-gray-100">About</Button>
          <Button variant="ghost" size="sm" onClick={() => scrollToSection('projects')} className="text-black hover:bg-gray-100">Projects</Button>
          <Button variant="ghost" size="sm" onClick={() => scrollToSection('skills')} className="text-black hover:bg-gray-100">Skills</Button>
          <Button variant="ghost" size="sm" onClick={() => scrollToSection('contact')} className="text-black hover:bg-gray-100">Contact</Button>
        </nav>
      </div>
    </header>
  )
} 