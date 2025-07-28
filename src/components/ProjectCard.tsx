import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  liveUrl?: string
  githubUrl?: string
}

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  imageUrl, 
  liveUrl, 
  githubUrl 
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      {imageUrl && (
        <div className="aspect-video bg-muted">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {liveUrl && (
            <Button size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 