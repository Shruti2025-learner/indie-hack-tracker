
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar, Home, Plus, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const { pathname } = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="px-4 py-3 border-b border-border bg-background sticky top-0 z-10">
      <div className="container flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center">
          <Link to="/" className="flex items-center mr-6 gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="font-bold text-primary-foreground text-lg">P</span>
            </div>
            <span className="font-semibold text-xl">ProjectPilot</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            <Button 
              asChild 
              variant={isActive('/') ? "secondary" : "ghost"}
              size="sm"
              className="gap-2"
            >
              <Link to="/">
                <Home className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant={isActive('/calendar') ? "secondary" : "ghost"}
              size="sm"
              className="gap-2"
            >
              <Link to="/calendar">
                <Calendar className="w-4 h-4" />
                <span>Calendar</span>
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant={isActive('/settings') ? "secondary" : "ghost"}
              size="sm"
              className="gap-2"
            >
              <Link to="/settings">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </Link>
            </Button>
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          <Button size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            <span className="hidden md:inline-block">New Project</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
