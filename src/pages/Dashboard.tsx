
import { ProjectCard } from "@/components/ProjectCard";
import { StatusFilter } from "@/components/StatusFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { projects } from "@/data/mockData";
import { Plus, Search } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  
  const filteredProjects = projects.filter((project) => {
    // Apply status filter
    if (statusFilter && project.status !== statusFilter) {
      return false;
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query)
      );
    }
    
    return true;
  });

  return (
    <div className="container max-w-6xl px-4 py-6 mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">Your Projects</h1>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects..."
              className="pl-9 w-full sm:w-[200px] h-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Button className="gap-2 w-full sm:w-auto">
            <Plus className="h-4 w-4" />
            <span>New Project</span>
          </Button>
        </div>
      </div>
      
      <div className="mb-6">
        <StatusFilter
          currentStatus={statusFilter}
          onStatusChange={setStatusFilter}
        />
      </div>
      
      {filteredProjects.length === 0 ? (
        <div className="mt-16 text-center">
          <h3 className="text-xl font-medium mb-2">No projects found</h3>
          <p className="text-muted-foreground mb-4">Try changing your filters or create a new project</p>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            <span>Create Project</span>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
