
import { cn } from "@/lib/utils";
import { CheckCircle2, CircleDot, Code, Github, PanelRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projects } from "@/data/mockData";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="font-bold text-primary-foreground text-lg">P</span>
            </div>
            <span className="font-semibold text-xl">ProjectPilot</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4 mr-2" />
                <span>GitHub</span>
              </a>
            </Button>
            <Button asChild>
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Track your solo projects <br className="hidden sm:block" /> 
              <span className="text-primary">without the complexity</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-10">
              A minimal project tracker designed for indie hackers and solo developers. 
              Organize your ideas, track progress, and ship more often.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg">
                <Link to="/dashboard">
                  Get Started
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Star on GitHub
                </a>
              </Button>
            </div>
            
            <div className="w-full max-w-3xl relative">
              <div className="absolute -top-4 -left-4 -right-4 -bottom-4 bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl rounded-xl opacity-30" />
              <div className="relative overflow-hidden border border-border rounded-xl shadow-xl bg-card">
                <div className="bg-secondary/70 border-b border-border px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <div className="text-muted-foreground ml-2 text-sm">ProjectPilot</div>
                </div>
                <img 
                  src="https://placehold.co/800x450/111827/e5e7eb?text=ProjectPilot+Dashboard"
                  alt="ProjectPilot Dashboard"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Built for indie hackers</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            All the essential features you need to track your projects, without the bloat.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-border rounded-lg p-6">
              <PanelRight className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Simple Dashboard</h3>
              <p className="text-muted-foreground">
                See all your projects at a glance with status, progress, and key metrics.
              </p>
            </div>
            
            <div className="border border-border rounded-lg p-6">
              <CircleDot className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Task Management</h3>
              <p className="text-muted-foreground">
                Add, update, and complete tasks for each project. Set due dates to stay on track.
              </p>
            </div>
            
            <div className="border border-border rounded-lg p-6">
              <Code className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Tech Stack Tracking</h3>
              <p className="text-muted-foreground">
                Tag projects with technologies used and link to GitHub repos and live deployments.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Preview */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Your projects, organized</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Stay on top of all your side projects with a simple and intuitive interface.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <div className={cn(
                    "px-2 py-0.5 text-xs font-medium rounded-full",
                    project.status === 'active' && "bg-green-500/20 text-green-400",
                    project.status === 'planning' && "bg-blue-500/20 text-blue-400",
                    project.status === 'paused' && "bg-amber-500/20 text-amber-400",
                    project.status === 'archived' && "bg-gray-500/20 text-gray-400",
                  )}>
                    {project.status}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-medium">Tasks</h4>
                  {project.tasks.slice(0, 2).map((task) => (
                    <div key={task.id} className="flex items-start gap-2">
                      <CheckCircle2 className={cn(
                        "h-4 w-4 mt-0.5",
                        task.completed ? "text-primary" : "text-muted-foreground"
                      )} />
                      <span className={cn(task.completed && "line-through text-muted-foreground")}>
                        {task.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link to="/dashboard">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get organized?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start tracking your projects today and turn your ideas into reality.
            </p>
            <Button asChild size="lg">
              <Link to="/dashboard">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="mt-auto border-t border-border py-8">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="font-bold text-primary-foreground text-lg">P</span>
              </div>
              <span className="font-semibold text-xl">ProjectPilot</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} ProjectPilot. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
