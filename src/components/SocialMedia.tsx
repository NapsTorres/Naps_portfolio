import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, Github, Instagram, Facebook } from "lucide-react";

interface SocialPlatform {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const socialPlatforms: SocialPlatform[] = [
  {
    name: "LinkedIn",
    icon: <Link className="w-5 h-5" />,
    url: "https://www.linkedin.com/in/napoleon-torres-1940b518a"
  },
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com/NapsTorres"
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    url: "https://www.instagram.com/misterlittle.n"
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
    url: "https://www.facebook.com/misterlittle.n"
  }
];

const SocialMedia = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-bold text-[20px] dark:text-white">
          <Link className="w-4 h-4" /> Social Links
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {socialPlatforms.map((platform, index) => (
          <a
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:-translate-y-1 transition-all duration-200"
            title={`Visit ${platform.name}`}
          >
            {platform.icon}
            <span className="font-semibold text-black dark:text-white hover:underline">{platform.name}</span>
          </a>
        ))}
      </CardContent>
    </Card>
  );
};

export default SocialMedia;
