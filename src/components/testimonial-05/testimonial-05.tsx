import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Laura Gómez",
    designation: "Crítica en IndieWire",
    testimonial:
      "Una adaptación impactante que conserva la esencia política y visual del cómic original.",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    id: 2,
    name: "Matías Romero",
    designation: "Editor en Fotogramas",
    testimonial:
      "La nieve eterna nunca se sintió tan cercana. Una producción ambiciosa y necesaria.",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 3,
    name: "Clara Bianchi",
    designation: "Redactora en Rotten Tomatoes",
    testimonial:
      "El Eternauta es un triunfo narrativo. Visualmente envolvente y profundamente humano.",
    avatar: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    id: 4,
    name: "Diego Fernández",
    designation: "Crítico en Sensacine",
    testimonial:
      "Respeta el legado del cómic y lo adapta con inteligencia al lenguaje audiovisual.",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    id: 5,
    name: "Julieta Álvarez",
    designation: "Periodista en Variety Latino",
    testimonial:
      "Una serie que combina ciencia ficción, memoria histórica y una dirección poderosa.",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    id: 6,
    name: "Tomás Herrera",
    designation: "Editor en IGN España",
    testimonial:
      "Ficción distópica de primer nivel. Netflix apostó fuerte y acertó.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const Testimonial05 = () => (
  <div className="min-h-screen flex justify-center items-center py-12 px-6">
    <div>
      <h2 className="mb-8 sm:mb-14 text-5xl md:text-6xl font-bold text-center tracking-tight">
        Testimonios
      </h2>
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden border-r border-background">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col outline outline-1 outline-border px-6 py-8"
            >
              <div className="flex items-center justify-center gap-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-6 h-6 fill-yellow-500 stroke-yellow-500"
                    />
                  ))}
              </div>
              <p className="my-6 text-[17px] text-center max-w-md">
                &quot;{testimonial.testimonial}&quot;
              </p>
              <div className="mt-auto flex items-center justify-center gap-3">
                <Avatar>
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Testimonial05;
