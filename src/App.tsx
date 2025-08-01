import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { ProjectCard } from "@/components/ProjectCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

function App() {
  const { toast } = useToast()
  
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('gabemceachran@gmail.com')
      toast({
        title: "Email copied!",
        description: "gabemceachran@gmail.com has been copied to your clipboard.",
      })
    } catch {
      toast({
        title: "Failed to copy",
        description: "Please copy gabemceachran@gmail.com manually.",
        variant: "destructive",
      })
    }
  }

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
        
                 {/* About Section */}
         <section id="about" className="container max-w-none py-16 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate developer who loves building things that solve real problems.
            </p>
          </div>
                     <div className="flex justify-center">
             <div className="max-w-4xl text-center">
                 <p className="text-lg leading-relaxed mb-6">
                   I've been working with <a href="https://brock.software/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-700 transition-colors">Brock Software</a> for six months, handling both development and sales responsibilities. 
                   I believe this expirience has given me a unique perspective to create genuinely valuable software.
                 </p>
             </div>
           </div>
        </section>

        <Separator className="my-16" />
        
        {/* Projects Section */}
        <section id="projects" className="container max-w-none py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each one presented unique challenges 
              and opportunities to learn and grow as a developer.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="max-w-md">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Skills Section */}
        <section id="skills" className="container max-w-none py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I've worked with a variety of technologies and frameworks. Here are the main ones I use regularly.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
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
          </div>
        </section>

        <Separator className="my-16" />

        {/* Contact Section */}
        <section id="contact" className="container max-w-none py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Feel free to reach out if you'd like to work together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                             <button 
                 onClick={copyEmailToClipboard}
                 className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 h-10 px-4 py-2"
               >
                 Copy Email
               </button>
              <a 
                href="https://github.com/gmceachran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-100 h-10 px-4 py-2"
              >
                GitHub
              </a>
            </div>
          </div>
                 </section>
       </main>
       
       {/* Footer */}
               <footer className="border-t bg-white py-8 mt-16">
          <div className="container max-w-none px-4">
           <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
             <div className="mb-4 md:mb-0">
               <p className="text-sm text-gray-600">
                 © 2024 Gabriel McEachran. All rights reserved.
               </p>
             </div>
             <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
               <p className="text-sm text-gray-600">
                 Built with React, TypeScript & Tailwind CSS
               </p>
               <a 
                 href="https://github.com/gmceachran/portfolio" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-sm text-black underline hover:text-gray-700 transition-colors"
               >
                 View source
               </a>
             </div>
           </div>
         </div>
       </footer>
       
       <Toaster />
     </div>
   )
 }

export default App
