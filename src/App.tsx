import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { ProjectCard } from "@/components/ProjectCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

function App() {
  const projects = [
    {
      title: "Grimoire - Worldbuilding Tool",
      description: "A browser-based worldbuilding tool for creators to build and link lore entries, create interactive maps with pins, and design timelines for fictional worlds. Features encyclopedia entries, map pinning, and timeline visualization.",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      imageUrl: "/grimoire-screenshot.png",
      liveUrl: "",
      githubUrl: "https://github.com/gmceachran/Grimoire"
    }
  ]

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code"] }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        <Separator className="my-16" />
        
        {/* Projects Section */}
        <section id="projects" className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each one presented unique challenges 
              and opportunities to learn and grow as a developer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Skills Section */}
        <section id="skills" className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I've worked with a variety of technologies and frameworks. Here are the main ones I use regularly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category}>
                <CardHeader>
                  <CardTitle>{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Contact Section */}
        <section id="contact" className="container py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Feel free to reach out if you'd like to work together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => {
                navigator.clipboard.writeText('gabemceachran@gmail.com');
                alert('Email copied to clipboard: gabemceachran@gmail.com');
              }}>
                Copy Email
              </Button>
              <Button variant="outline" asChild>
                <a 
                  href="https://github.com/gmceachran" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
