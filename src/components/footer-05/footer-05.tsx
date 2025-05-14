import { Separator } from "@/components/ui/separator";
import { GithubIcon, LinkedinIcon } from "lucide-react";

const Footer05Page = () => {
  return (
    <div className="flex flex-col">
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 flex flex-col justify-start items-center"></div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()} Imanol Herrero
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <a
                href="https://github.com/ImanolHerrero/El-Eternauta"
                target="_blank"
                className="flex gap-2"
              >
                <GithubIcon className="h-5 w-5" />
                Repositorio
              </a>
              <a
                href="https://www.linkedin.com/in/imanol-herrero-932956247/"
                target="_blank"
                className="flex gap-2"
              >
                <LinkedinIcon className="h-5 w-5" />
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer05Page;
