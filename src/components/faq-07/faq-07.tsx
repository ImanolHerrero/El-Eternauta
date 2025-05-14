import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const faq = [
  {
    question: "¿De qué trata la serie El Eternauta?",
    answer:
      "El Eternauta es una serie de ciencia ficción y drama basada en la historieta homónima de Héctor Germán Oesterheld y Francisco Solano López. Narra la historia de un grupo de sobrevivientes de un apocalipsis provocado por una tormenta mortal de nieve, liderados por Juan Salvo, un hombre común que lucha por sobrevivir y salvar a su gente en un Buenos Aires devastado.",
  },
  {
    question: "¿Quiénes son los protagonistas de la serie?",
    answer:
      "Los principales protagonistas de la serie son Ricardo Darín, quien interpreta a Juan Salvo, y Carla Peterson, que interpreta a otro de los personajes claves de la narrativa. La serie también cuenta con un elenco destacado que incluye a César Troncoso, Andrea Pietra, y otros actores reconocidos.",
  },
  {
    question: "¿Quiénes están detrás de la producción de la serie?",
    answer:
      "La serie fue creada y dirigida por Bruno Stagnaro, quien también participó como guionista. Además, Ricardo Darín, uno de los protagonistas, es productor ejecutivo. La producción también incluye a importantes figuras como Gastón Girod (director de fotografía) y Federico Jusid (compositor de la banda sonora).",
  },
  {
    question: "¿Cuántos episodios tiene la serie?",
    answer:
      "La serie *El Eternauta* cuenta con una temporada de 6 episodios, lanzados por Netflix, y ofrece una adaptación intensa de la obra clásica argentina.",
  },
  {
    question: "¿Cuándo se estrenó la serie?",
    answer:
      "La serie se estrenó en 2025 como una producción original de Netflix, trayendo la historia de *El Eternauta* a un público global.",
  },
  {
    question: "¿Dónde se filmó la serie?",
    answer:
      "La serie fue filmada en varias locaciones de Buenos Aires, recreando un mundo apocalíptico cubierto por la nieve. El equipo de producción buscó capturar la atmósfera única que caracteriza a la obra original.",
  },
];

const FAQ07 = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-12"
      id="faq"
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight">
          Preguntas Frecuentes sobre *El Eternauta*
        </h2>
        <p className="mt-1.5 text-lg text-muted-foreground">
          Respuestas rápidas a preguntas comunes sobre la serie y su producción.
        </p>

        <Accordion
          type="single"
          collapsible
          className="mt-8 space-y-4"
          defaultValue="question-0"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg"
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ07;
