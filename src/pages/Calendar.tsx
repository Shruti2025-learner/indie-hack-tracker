
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/mockData";
import { cn, getStatusClass } from "@/lib/utils";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

// Function to get all dates in a month
const getDaysInMonth = (year: number, month: number) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

// Function to get days of previous month to fill calendar
const getPreviousMonthDays = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1).getDay();
  const previousMonth = month === 0 ? 11 : month - 1;
  const previousYear = month === 0 ? year - 1 : year;
  const daysInPreviousMonth = new Date(previousYear, previousMonth + 1, 0).getDate();
  const days = [];
  
  // Get the correct number of days to show from previous month
  // If first day is Sunday (0), we need 6 days from prev month (to match weekly view)
  const daysToShow = firstDay === 0 ? 6 : firstDay - 1;
  
  for (let i = daysToShow - 1; i >= 0; i--) {
    days.push(new Date(previousYear, previousMonth, daysInPreviousMonth - i));
  }
  
  return days;
};

// Function to get days of next month to fill calendar
const getNextMonthDays = (year: number, month: number, currentMonthDays: Date[]) => {
  const totalDays = currentMonthDays.length;
  const previousMonthDays = getPreviousMonthDays(year, month).length;
  const totalSlots = Math.ceil((totalDays + previousMonthDays) / 7) * 7;
  const daysToAdd = totalSlots - totalDays - previousMonthDays;
  
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextYear = month === 11 ? year + 1 : year;
  const days = [];
  
  for (let i = 1; i <= daysToAdd; i++) {
    days.push(new Date(nextYear, nextMonth, i));
  }
  
  return days;
};

// Function to format date for comparison
const formatDateForComparison = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  
  // Get tasks with due dates for the current view
  const tasksWithDueDate = projects.flatMap(project => 
    project.tasks
      .filter(task => task.dueDate)
      .map(task => ({
        ...task,
        projectId: project.id,
        projectName: project.name,
        projectStatus: project.status,
        date: new Date(task.dueDate as string)
      }))
  );

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const previousMonthDays = getPreviousMonthDays(currentYear, currentMonth);
  const nextMonthDays = getNextMonthDays(currentYear, currentMonth, daysInMonth);
  
  const allDays = [...previousMonthDays, ...daysInMonth, ...nextMonthDays];
  const weeks = [];
  
  for (let i = 0; i < allDays.length; i += 7) {
    weeks.push(allDays.slice(i, i + 7));
  }
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const navigateToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  const navigateToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  
  const resetToToday = () => {
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
  };

  return (
    <div className="container max-w-6xl px-4 py-6 mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">Calendar</h1>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={navigateToPreviousMonth}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            className="min-w-[150px]"
            onClick={resetToToday}
          >
            {monthNames[currentMonth]} {currentYear}
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={navigateToNextMonth}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Card>
        <CardContent className="p-0 pt-4">
          {/* Calendar header - weekday labels */}
          <div className="grid grid-cols-7 border-b">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div 
                key={day} 
                className="text-center py-2 font-medium text-sm text-muted-foreground"
              >
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar grid */}
          <div className="grid grid-cols-7 border-b">
            {weeks.map((week, weekIndex) => 
              week.map((day, dayIndex) => {
                const dateKey = formatDateForComparison(day);
                const isToday = formatDateForComparison(today) === dateKey;
                const isCurrentMonth = day.getMonth() === currentMonth;
                const dayTasks = tasksWithDueDate.filter(task => 
                  formatDateForComparison(task.date) === dateKey
                );
                
                return (
                  <div 
                    key={`${weekIndex}-${dayIndex}`}
                    className={cn(
                      "min-h-[120px] border-r border-b p-1 relative",
                      !isCurrentMonth && "bg-secondary/30",
                      dayIndex === 6 && "border-r-0", // Last day of week
                      weekIndex === weeks.length - 1 && "border-b-0" // Last week
                    )}
                  >
                    <div className={cn(
                      "h-6 w-6 flex items-center justify-center text-sm mb-1",
                      isToday && "bg-primary text-primary-foreground rounded-full",
                      !isCurrentMonth && "text-muted-foreground"
                    )}>
                      {day.getDate()}
                    </div>
                    
                    {/* Tasks for this day */}
                    <div className="space-y-1">
                      {dayTasks.map((task) => (
                        <Link 
                          key={task.id} 
                          to={`/project/${task.projectId}`}
                          className="block text-xs p-1 rounded bg-secondary hover:bg-secondary/70 transition-colors truncate"
                        >
                          <div className="flex items-center gap-1">
                            <div 
                              className={cn(
                                "w-2 h-2 rounded-full",
                                getStatusClass(task.projectStatus)
                              )}
                            />
                            <span className="truncate">{task.title}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Upcoming Tasks</h2>
        
        {tasksWithDueDate
          .filter(task => new Date(task.date) >= today)
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
          .slice(0, 5)
          .map((task) => (
            <div 
              key={task.id}
              className="mb-3 p-3 border rounded-md hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Badge className={getStatusClass(task.projectStatus)}>
                    {task.projectStatus}
                  </Badge>
                  <Link to={`/project/${task.projectId}`} className="font-medium hover:underline">
                    {task.projectName}
                  </Link>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarIcon className="h-3.5 w-3.5 mr-1" />
                  {new Date(task.date).toLocaleDateString()}
                </div>
              </div>
              
              <p className="text-sm">{task.title}</p>
              {task.description && (
                <p className="text-xs text-muted-foreground mt-1">{task.description}</p>
              )}
            </div>
          ))
        }
        
        {tasksWithDueDate.filter(task => new Date(task.date) >= today).length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No upcoming tasks
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
