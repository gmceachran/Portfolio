import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="container py-16 pt-32" style={{ marginTop: '32px' }}>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-shrink-0 md:pl-8">
          <img 
            src="/gabriel-photo.jpg" 
            alt="Gabriel McEachran" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
            style={{ width: '128px', height: '128px', borderRadius: '50%', objectFit: 'cover' }}
          />
        </div>
        <div className="text-center lg:text-left">
          <Badge variant="outline" className="mb-4">Welcome to my portfolio</Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="text-primary">Gabriel McEachran</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6">
            I'm a full-stack developer with a focus on clean, fast, and user-friendly web apps. I enjoy building elegant interfaces, solving real-world problems, and learning fast to meet ambitious goals. Currently, I'm helping startups bring their ideas to life with investor-ready products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">View My Work</Button>
            <Button variant="outline" size="lg">Get In Touch</Button>
          </div>
        </div>
      </div>
    </section>
  )
} 