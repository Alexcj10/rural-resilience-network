import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ResourceCard = ({ title, description, icon }: ResourceCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 rounded-full mb-4">
          {icon}
        </div>
        <CardTitle className="font-inter">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;