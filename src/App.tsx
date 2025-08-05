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
                    I've been working with <a href="https://brock.software/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-700 transition-colors">Brock Software</a> since January 2025, both developing web applications and managing clients. 
                    I also handle sales responsibilities, which has given me a unique perspective to create genuinely valuable software that meets real business needs.
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

        {/* Testimonials Section */}
        <section id="testimonials" className="container max-w-none py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What People Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's what colleagues and clients have said about working with me.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="max-w-2xl">
              <Card className="p-8">
                <CardContent className="text-center">
                  <p className="text-lg italic mb-4">
                    “Gabe has been great to work with. He’s motivated, a clear communicator, and willing to take on responsibility.”
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img 
                        src="/Bryant-Brock.jpg" 
                        alt="Bryant Brock" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">Bryant Brock</p>
                      <p className="text-sm text-gray-600">CEO, Brock Software</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-100 h-10 w-10 p-0"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/gabriel-mceachran-535a85351/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-100 h-10 w-10 p-0"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
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
