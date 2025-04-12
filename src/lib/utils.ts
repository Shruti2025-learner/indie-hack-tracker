
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, parseISO } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
  let dateObj: Date;
  
  if (typeof date === 'string') {
    dateObj = parseISO(date);
  } else {
    dateObj = date;
  }
  
  return format(dateObj, 'MMM d, yyyy');
}

export function getStatusClass(status: string): string {
  switch (status.toLowerCase()) {
    case 'active':
      return 'status-active';
    case 'archived':
      return 'status-archived';
    case 'planning':
      return 'status-planning';
    case 'paused':
      return 'status-paused';
    default:
      return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
  }
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}
