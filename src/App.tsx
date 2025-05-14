import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";

function App() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
            EL ETERNAUTA HA LLEGADO
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
            Una nevada mortal. Un mundo en silencio. Un grupo de sobrevivientes
            enfrentando lo imposible. Descubrí la nueva adaptación del clásico
            de la ciencia ficción argentina que ya está causando impacto global
            en Netflix.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <a
              href="https://www.netflix.com/ar/title/80216888"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="rounded-full text-base hover:cursor-pointer font-bold"
              >
                Ver en Netflix <ArrowUpRight className="!h-5 !w-5" />
              </Button>
            </a>
            <a
              href="https://www.youtube.com/embed/ykLTd5aTa88"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-base shadow-none hover:cursor-pointer"
              >
                <CirclePlay className="!h-5 !w-5" /> Ver trailer
              </Button>
            </a>
          </div>
        </div>
        <div className="w-full aspect-video rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ykLTd5aTa88"
            title="El Eternauta - Tráiler Oficial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
