
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="container max-w-4xl px-4 py-6 mx-auto">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>
              Customize how the application looks and feels.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  The application is currently set to dark mode by default.
                </p>
              </div>
              <Switch id="dark-mode" checked={true} disabled />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="animations">Enable animations</Label>
                <p className="text-sm text-muted-foreground">
                  Toggle UI animations on or off.
                </p>
              </div>
              <Switch id="animations" defaultChecked />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Configure how you want to be notified.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox id="notifications-tasks" defaultChecked />
              <div className="space-y-1 leading-none">
                <Label htmlFor="notifications-tasks">Task reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications when tasks are due soon.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Checkbox id="notifications-projects" defaultChecked />
              <div className="space-y-1 leading-none">
                <Label htmlFor="notifications-projects">Project updates</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about changes to your projects.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>
              Manage your account security settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="auto-backup">Auto backup</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically backup your projects and tasks.
                </p>
              </div>
              <Switch id="auto-backup" />
            </div>
            
            <div className="flex items-start space-x-3">
              <Checkbox id="data-usage" defaultChecked />
              <div className="space-y-1 leading-none">
                <Label htmlFor="data-usage">Share anonymous usage data</Label>
                <p className="text-sm text-muted-foreground">
                  Help us improve by sharing anonymous usage statistics.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-end gap-4">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
