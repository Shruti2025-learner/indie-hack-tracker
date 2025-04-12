
import { Task } from "@/data/mockData";
import { cn, formatDate } from "@/lib/utils";
import { Calendar, CheckSquare, Square } from "lucide-react";
import { useState } from "react";

interface TaskListProps {
  tasks: Task[];
  onTaskComplete?: (taskId: string, completed: boolean) => void;
}

export function TaskList({ tasks, onTaskComplete }: TaskListProps) {
  const [completedTaskIds, setCompletedTaskIds] = useState<Set<string>>(
    new Set(tasks.filter(task => task.completed).map(task => task.id))
  );
  
  const toggleTask = (taskId: string) => {
    const newCompletedTasks = new Set(completedTaskIds);
    if (newCompletedTasks.has(taskId)) {
      newCompletedTasks.delete(taskId);
    } else {
      newCompletedTasks.add(taskId);
    }
    
    setCompletedTaskIds(newCompletedTasks);
    
    if (onTaskComplete) {
      onTaskComplete(taskId, !completedTasks.has(taskId));
    }
  };
  
  const completedTasks = completedTaskIds;
  
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No tasks yet
      </div>
    );
  }
  
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div 
          key={task.id}
          className={cn(
            "p-3 border border-border rounded-md flex items-start gap-3 group transition-colors",
            completedTasks.has(task.id) && "bg-secondary/50"
          )}
        >
          <button
            onClick={() => toggleTask(task.id)}
            className="mt-0.5 text-primary hover:text-primary/80 transition-colors"
          >
            {completedTasks.has(task.id) ? (
              <CheckSquare className="w-5 h-5" />
            ) : (
              <Square className="w-5 h-5" />
            )}
          </button>
          
          <div className="flex-1 min-w-0">
            <h4 className={cn(
              "font-medium text-sm",
              completedTasks.has(task.id) && "line-through text-muted-foreground"
            )}>
              {task.title}
            </h4>
            
            {task.description && (
              <p className={cn(
                "text-xs text-muted-foreground mt-1",
                completedTasks.has(task.id) && "line-through"
              )}>
                {task.description}
              </p>
            )}
            
            {task.dueDate && (
              <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>Due {formatDate(task.dueDate)}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
