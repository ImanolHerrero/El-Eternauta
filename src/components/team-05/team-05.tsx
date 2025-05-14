import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Bruno Stagnaro",
    title: "Creador, Guionista y Director",
    bio: "Responsable de adaptar la emblemática historieta al lenguaje audiovisual contemporáneo.",
    imageUrl:
      "https://www.lanacion.com.ar/resizer/v2/tras-haber-ganado-un-martin-fierro-de-oro-el-EJLAQBD7TVHPPLJO6SG2KWQP4A.jpg?auth=ca9b51c7d0f62a8b722e5c3c68c056e5c8f2a61103e29276f8cbbf2a8e4e3484&width=420&height=280&quality=70&smart=true",
  },
  {
    name: "Ricardo Darín",
    title: "Protagonista (Juan Salvo) y Productor Ejecutivo",
    bio: "Lidera el elenco como el personaje icónico del Eternauta, aportando profundidad emocional y peso actoral.",
    imageUrl:
      "https://cdn.aarp.net/content/dam/aarp/entertainment/movies-for-grownups/2018/06/1140-retrato-actor-ricardo-darin-esp.jpg",
  },
  {
    name: "Carla Peterson",
    title: "Actriz Principal",
    bio: "Integra el reparto dando vida a uno de los personajes clave de esta distopía argentina.",
    imageUrl:
      "https://viapais.com.ar/resizer/v2/OTPDSIEOYVHPRDC7U3JMJJMKRA.jpg?auth=5eabcbc45ad8d5825023df07bbb914505548b323be0c3a2eb0cab4a48b08a453&width=1080&height=1080",
  },
  {
    name: "Federico Jusid",
    title: "Compositor",
    bio: "Creador de la banda sonora que acompaña y potencia la tensión narrativa de la serie.",
    imageUrl:
      "https://resizer.glanacion.com/resizer/v2/federico-jusid-en-las-escalinatas-del-TJFM3MFRO5C3DFQVCIEEYUSKHI.JPG?auth=a31d30eadf83aa7e75ee5005e550bf50e93d6830c739c7f6e1b5af5083619a86&width=1280&height=854&quality=70&smart=true",
  },
  {
    name: "Alejandro Brodersohn",
    title: "Editor",
    bio: "Responsable de la edición y ritmo narrativo que sostiene la intensidad de cada episodio.",
    imageUrl:
      "https://images.mubicdn.net/images/cast_member/40717/cache-262143-1506730559/image-w856.jpg",
  },
  {
    name: "Matías Mosteirín",
    title: "Productor",
    bio: "Figura clave en la producción general, con experiencia en grandes proyectos nacionales.",
    imageUrl:
      "https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2021/07/15/17074/202107150546394a52bf2ddb5aa61ff80afb14bae0f5d7.jpg",
  },
  {
    name: "Martín Mórtola Oesterheld",
    title: "Productor Ejecutivo",
    bio: "Nieto del autor original, garantiza la fidelidad al legado de Héctor Germán Oesterheld.",
    imageUrl:
      "https://resizer.glanacion.com/resizer/v2/martin-oesterheld-nieto-del-creador-de-el-3WNLAGIJJRC2ZDXMW3X64J6W3E.jpg?auth=8e18fed9fbaa6a77d09d9b52d8435912dcb2aa7eebcb9d585d0def87c9b522e9&width=1200&quality=70&smart=false&height=800",
  },
];

const Team05Page = () => {
  return (
    <div className="flex flex-col justify-center py-8 sm:py-12 px-6 lg:px-8 max-w-screen-xl mx-auto gap-16">
      <div className="text-center max-w-2xl mx-auto">
        <b className="text-center text-muted-foreground text-base font-semibold">
          Producción Original de Netflix
        </b>
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
          El equipo detrás de El Eternauta
        </h2>
        <p className="mt-6 text-base sm:text-lg">
          Una producción que honra el legado de Oesterheld con una narrativa
          poderosa y un equipo técnico de primer nivel.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
        {teamMembers.map((member) => (
          <div key={member.name}>
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full aspect-square rounded-lg object-cover bg-secondary"
              width={600}
              height={600}
            />
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-muted-foreground text-sm">{member.title}</p>
            <p className="mt-3">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team05Page;
