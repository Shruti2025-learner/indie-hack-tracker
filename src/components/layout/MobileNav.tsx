
import { Calendar, Home, Plus, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const { pathname } = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };
  
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-border bg-background z-10 py-2 px-4">
      <div className="grid grid-cols-4 gap-1">
        <Button
          asChild
          variant="ghost"
          size="icon"
          className={cn(
            "flex flex-col items-center justify-center h-14 rounded-md",
            isActive('/') && "bg-secondary text-foreground"
          )}
        >
          <Link to="/" className="w-full h-full flex flex-col items-center justify-center pt-1">
            <Home className="w-5 h-5" />
            <span className="text-xs mt-1">Home</span>
          </Link>
        </Button>
        
        <Button
          asChild
          variant="ghost"
          size="icon"
          className={cn(
            "flex flex-col items-center justify-center h-14 rounded-md",
            isActive('/calendar') && "bg-secondary text-foreground"
          )}
        >
          <Link to="/calendar" className="w-full h-full flex flex-col items-center justify-center pt-1">
            <Calendar className="w-5 h-5" />
            <span className="text-xs mt-1">Calendar</span>
          </Link>
        </Button>
        
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="flex flex-col items-center justify-center h-14 rounded-md"
        >
          <Link to="/new-project" className="w-full h-full flex flex-col items-center justify-center pt-1">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <Plus className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xs mt-1">New</span>
          </Link>
        </Button>
        
        <Button
          asChild
          variant="ghost"
          size="icon"
          className={cn(
            "flex flex-col items-center justify-center h-14 rounded-md",
            isActive('/settings') && "bg-secondary text-foreground"
          )}
        >
          <Link to="/settings" className="w-full h-full flex flex-col items-center justify-center pt-1">
            <Settings className="w-5 h-5" />
            <span className="text-xs mt-1">Settings</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
