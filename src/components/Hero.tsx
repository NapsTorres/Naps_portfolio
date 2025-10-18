import { MapPin, Mail, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/Naps.jpg";

const Hero = () => {
  return (
    <section className="animate-fade-in">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Profile Image */}
        <div className="shrink-0">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg ring-2 ring-primary/10"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1 space-y-4">
          <div>
            {/* Name with badge inline */}
            <h1 className="text-4xl md:text-2xl font-bold tracking-tight mb-2 flex items-center gap-2">
              Napoleon Torres
              <BadgeCheck className="w-5 h-5 text-white fill-blue-500 stroke-white" />
            </h1>

            <div className="flex items-center gap-2 text-muted-foreground mb-3">
              <MapPin className="w-4 h-4" />
              <span>Calabanga, Camarines Sur, Philippines</span>
            </div>

            <p className="text-l font-bold text-foreground/80">
              Data Engineer | Data Analyst | IT & Network Specialist | Web Developer
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=napoleontorres5@gmail.com",
                  "_blank"
                )
              }
            >
              <Mail className="w-4 h-4" />
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
