import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full py-16 pt-32 relative">
      {/* Content */}
      <div className="container max-w-none flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-shrink-0 pl-8 lg:pl-12 flex justify-center lg:justify-start">
          <a 
            href="https://www.linkedin.com/in/gabriel-mceachran-535a85351/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img 
              src="/gabriel-photo.jpg" 
              alt="Gabriel McEachran" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg cursor-pointer"
            />
          </a>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Hi, I'm Gabriel McEachran
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6">
            I'm a full-stack developer with a focus on clean, fast, and user-friendly web apps. I enjoy building elegant interfaces, solving real-world problems, and learning fast to meet ambitious goals. Currently, I'm helping startups bring their ideas to life with investor-ready products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" onClick={() => scrollToSection('projects')}>View My Work</Button>
            <Button size="lg" onClick={() => scrollToSection('contact')}>Get In Touch</Button>
          </div>
        </div>
      </div>
    </section>
  )
} 