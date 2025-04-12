
import { TaskList } from "@/components/TaskList";
import { TechnologyBadge } from "@/components/TechnologyBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { projects, technologies } from "@/data/mockData";
import { cn, formatDate, getStatusClass } from "@/lib/utils";
import { ArrowLeft, CalendarClock, Edit, ExternalLink, Github, Plus, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(projects.find(p => p.id === id));
  
  useEffect(() => {
    // Reset project data when id changes
    setProject(projects.find(p => p.id === id));
  }, [id]);
  
  if (!project) {
    return (
      <div className="container max-w-4xl px-4 py-10 mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <p className="mb-6 text-muted-foreground">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>
    );
  }
  
  const projectTechs = technologies.filter(tech => 
    project.technologies.includes(tech.id)
  );
  
  const completedTasks = project.tasks.filter(task => task.completed).length;
  const totalTasks = project.tasks.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  
  return (
    <div className="container max-w-4xl px-4 py-6 mx-auto">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>
        </Button>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
          <h1 className="text-3xl font-bold">{project.name}</h1>
          
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline">
              <Edit className="h-4 w-4 mr-2" />
              <span>Edit Project</span>
            </Button>
            
            <Button size="sm" variant="destructive">
              <Trash className="h-4 w-4 mr-2" />
              <span>Delete</span>
            </Button>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge className={cn("px-2.5 py-0.5", getStatusClass(project.status))}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </Badge>
          
          <div className="text-sm text-muted-foreground">
            Created {formatDate(project.createdAt)}
          </div>
          
          <div className="text-sm text-muted-foreground">
            Last updated {formatDate(project.updatedAt)}
          </div>
        </div>
        
        <p className="text-muted-foreground mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {projectTechs.map((tech) => (
            <TechnologyBadge key={tech.id} name={tech.name} color={tech.color} />
          ))}
          <Button size="sm" variant="outline" className="h-7">
            <Plus className="h-3.5 w-3.5 mr-1" />
            Add
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 border rounded-md hover:bg-secondary/50 transition-colors"
            >
              <Github className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">View on GitHub</span>
              <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
            </a>
          )}
          
          {project.deploymentUrl && (
            <a 
              href={project.deploymentUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 border rounded-md hover:bg-secondary/50 transition-colors"
            >
              <ExternalLink className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">View Live Site</span>
              <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
            </a>
          )}
        </div>
      </div>
      
      <div className="mb-8">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Tasks</h2>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                <span>Add Task</span>
              </Button>
            </div>
            
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>
                {completedTasks} of {totalTasks} completed
              </span>
              <span className="text-xs">
                {Math.round(progress)}% complete
              </span>
            </div>
            <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </CardHeader>
          
          <CardContent>
            <TaskList tasks={project.tasks} />
          </CardContent>
        </Card>
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Updates</h2>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            <span>Add Update</span>
          </Button>
        </div>
        
        {/* Example updates */}
        <div className="space-y-4">
          <div className="border rounded-md p-4">
            <div className="flex items-center gap-2 mb-2">
              <CalendarClock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {formatDate(project.updatedAt)}
              </span>
            </div>
            <p className="text-sm">
              Initial project setup complete. Created repository and deployed basic landing page.
            </p>
          </div>
          
          {project.createdAt !== project.updatedAt && (
            <div className="border rounded-md p-4">
              <div className="flex items-center gap-2 mb-2">
                <CalendarClock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {formatDate(project.createdAt)}
                </span>
              </div>
              <p className="text-sm">
                Project created.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
