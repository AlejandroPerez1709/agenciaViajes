import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";
import { BlogCard } from "./BlogCard";

const BlogsData = [
    {
      id: 1,
      image: Img1,
      title: "Top Lugares para visitar en la India",
      description:
        "El Taj Mahal, ubicado en Agra, India, es uno de los monumentos más emblemáticos y reconocidos a nivel mundial. Construido en el siglo XVII por el emperador mogol Shah Jahan en memoria de su esposa favorita, Mumtaz Mahal, este magnífico mausoleo es un testimonio de amor eterno y una obra maestra de la arquitectura. El Taj Mahal se destaca por su imponente estructura de mármol blanco, adornada con intrincados detalles y elaboradas incrustaciones de piedras semipreciosas. Su diseño simétrico y su icónica cúpula central lo convierten en una maravilla visual que deja a los visitantes asombrados por su belleza y elegancia. Además de su impresionante arquitectura, el Taj Mahal también es famoso por su significado histórico y cultural. Es un símbolo de la rica herencia de la India y ha sido declarado Patrimonio de la Humanidad por la UNESCO. Los visitantes pueden explorar los exuberantes jardines que rodean el mausoleo, que ofrecen vistas panorámicas y un ambiente sereno para disfrutar de la majestuosidad del sitio. El Taj Mahal atrae a millones de turistas de todo el mundo cada año, quienes quedan cautivados por su belleza atemporal y su historia fascinante. Es un destino obligado para aquellos que desean experimentar la grandeza arquitectónica y cultural de la India, y una visita al Taj Mahal es una experiencia inolvidable que deja una impresión duradera en la mente y el corazón de quienes lo visitan.",
      author: "Alex Ram",
      date: "Abril 22, 2023",
    },
    {
      id: 1,
      image: Img2,
      title: "Top Lugares para visitar en E.U",
      description:
        "Los Estados Unidos de América son un destino turístico diverso y emocionante que ofrece una amplia gama de experiencias para todo tipo de viajeros. Desde los imponentes rascacielos de Nueva York hasta los majestuosos parques nacionales del oeste, pasando por las playas soleadas de California y Florida, el país ofrece una mezcla única de paisajes, culturas y actividades que lo convierten en un lugar imperdible para explorar. Una de las principales atracciones de los Estados Unidos es su variedad geográfica. Desde las montañas escarpadas de las Rocosas hasta los extensos desiertos del suroeste, pasando por los frondosos bosques del noreste y las impresionantes costas del Pacífico y el Atlántico, el país cuenta con una diversidad de paisajes que ofrecen infinitas oportunidades para la aventura y la exploración. Además de su espectacular naturaleza, los Estados Unidos son el hogar de algunas de las ciudades más vibrantes y culturalmente ricas del mundo. Nueva York, Los Ángeles, Chicago, San Francisco y Miami son solo algunas de las ciudades emblemáticas que atraen a millones de visitantes cada año con su arquitectura impresionante, su escena gastronómica diversa, sus famosos monumentos y sus emocionantes opciones de entretenimiento.",
      author: "Alex Ram",
      date: "Abril 22, 2023",
    },
    {
      id: 1,
      image: Img3,
      title: "Top Lugares para visitar en la Japon",
      description:
        "Japón es un destino turístico fascinante y único que combina a la perfección una rica historia y tradición con la tecnología más avanzada y una cultura vibrante. Este país insular del este de Asia ofrece una experiencia de viaje inolvidable, que va desde la serenidad de sus antiguos templos y jardines hasta la bulliciosa vida urbana de sus modernas ciudades. Una de las atracciones más destacadas de Japón es su increíble mezcla de lo antiguo y lo moderno. En ciudades como Tokio, Kioto y Osaka, los visitantes pueden explorar rascacielos futuristas, distritos de compras de moda y restaurantes innovadores, al tiempo que descubren la rica historia y cultura de Japón a través de sus templos antiguos, santuarios sagrados y festivales tradicionales. Los templos y santuarios de Japón son especialmente impresionantes, con estructuras centenarias, jardines serenos y una atmósfera de paz y tranquilidad. El Templo Senso-ji en Tokio, el Templo Kinkaku-ji en Kioto y el Santuario Itsukushima en la isla de Miyajima son solo algunos ejemplos de los muchos sitios sagrados que ofrecen a los visitantes la oportunidad de sumergirse en la espiritualidad y la belleza del país.",
      author: "Alex Ram",
      date: "Abril 28, 2023",
    },
  ];

export const BlogsComp = () => {

    return(
        <div className="container">
            <div data-aos="fade-up" className="capitalize my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
                <h1>Nuestros mas recientes Blogs </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    BlogsData.map((item, index) => (
                        <BlogCard key={index} {...item}/>
                    ))
                }
            </div>        
        </div>
    )
}