
import { Project, technologies } from "@/data/mockData";
import { cn, formatDate, getStatusClass } from "@/lib/utils";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const projectTechs = technologies.filter(tech => 
    project.technologies.includes(tech.id)
  ).slice(0, 4);
  
  const completedTasks = project.tasks.filter(task => task.completed).length;
  const totalTasks = project.tasks.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  
  return (
    <Link to={`/project/${project.id}`}>
      <Card className="h-full card-hover">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold truncate">{project.name}</h3>
            <Badge className={cn("px-2 py-0.5 text-xs font-medium", getStatusClass(project.status))}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 h-10">
            {project.description}
          </p>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-wrap gap-1 mb-4">
            {projectTechs.map((tech) => (
              <Badge key={tech.id} variant="outline" className="text-xs bg-secondary">
                {tech.name}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs bg-secondary">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>{completedTasks}/{totalTasks} tasks</span>
            </div>
            <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="pt-2 flex justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <div className="flex items-center">
                <GitBranch className="w-3 h-3 mr-1" />
                <span>GitHub</span>
              </div>
            )}
            {project.deploymentUrl && (
              <div className="flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                <span>Live</span>
              </div>
            )}
          </div>
          <span>Updated {formatDate(project.updatedAt)}</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
