import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BeyondCoding = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>🌟</span> Beyond Coding
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-foreground/80">
        <p>
          When not writing code, I focus on sharing knowledge and building community. 
          I believe in the power of collaboration and continuous learning.
        </p>
        <p>
          I share my knowledge through technical articles, mentoring developers, and 
          contributing to open-source projects that make a difference.
        </p>
      </CardContent>
    </Card>
  );
};

export default BeyondCoding;
