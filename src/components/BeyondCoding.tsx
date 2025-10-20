import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music } from "lucide-react";

const BeyondCoding = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Music className="w-5 h-5" /> Beyond Tech – Finding Balance
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-foreground/80">
        <p>
          Outside of the digital world, I value peace, creativity, and meaningful breaks. I often recharge by listening to 
          music, reading manga or manhwa, and watching anime that sparks imagination and emotion. These
          moments help me reset my mind and stay inspired.
        </p>
        <p>
          I also enjoy being outdoors appreciating scenery, spending time with friends, or simply enjoying quiet
          moments away from screens. For me, rest is not a distraction from productivity it’s part of the process that
          keeps me focused, driven, and creatively alive.
        </p>
      </CardContent>
    </Card>
  );
};

export default BeyondCoding;
