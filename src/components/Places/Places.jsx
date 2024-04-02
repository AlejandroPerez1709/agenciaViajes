/* eslint-disable react/prop-types */
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";
import { PlacesCard } from "./PlacesCard";



const placesData = [
    {
        id:1,
        img: Img1,
        title: "Paseo en Bote ",
        location: "USA",
        description: "Disfruta de un paseo relajante frente a las playas de Hawaii.",
        price: 5700,
        type: "Cultural Relax",
      },
      {
        id:2,
        img: Img2,
        title: "Taj Mahal",
        location: "India",
        description:
          "El Taj Mahal es un mausoleo de mármol blanco marfil en la orilla sur del río Yamuna en la ciudad india de Agra.",
        price: 10700,
        type: "Cultural Relax",
      },
      {
        id:3,
        img: Img3,
        title: "Buceo en Miami ",
        location: "US",
        description:
          "Aventúrate a hacer buceo, Prepara tu equipo de buceo tu tabla de surf. ¡El viaje al aire libre en USA te espera! Planifica tu próximo viaje ",
        price: 6200,
        type: "Cultural Relax",
      },
      {
        id:4,
        img: Img4,
        title: "Sydney",
        location: "USA",
        description: "Visita el Sydney Opera House,  la Manly Beach o Darling Harbour todo esto está incluido en nuestro viaje a Sydney",
        price: 12000,
        type: "Cultural Relax",
      },
      {
        id:5,
        img: Img5,
        title: "Los Angeles",
        location: "United states",
        description:
          "Si buscas actividades en Los Ángeles, te encantará la variedad de opciones que este vibrante destino ofrece. Conocer cada rincón de la llamada Ciudad de los Ángeles se convierte en una emocionante aventura llena de cultura, arte, naturaleza y diversión.",
        price: 5500,
        type: "Cultural Relax",
      },
      {
        id:6,
        img: Img6,
        title: "Los Vegas",
        location: "California",
        description:
          "Las Vegas, en el desierto de Mojave de Nevada, es una ciudad turística famosa por su activa vida nocturna, que se centra en casinos abiertos las 24 horas del día y otras opciones de entretenimiento",
        price: 5800,
        type: "Cultural Relax",
      },
]


export const Places = ({ handleOrderPopup }) => {
    return(
        <div className="bg-gray-50 py-10">
            <div className="container ">
                <h1 data-aos="fade-up" className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">Mejores Lugares Para Visitar </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg">
                    {
                        placesData.map((item, index) => (
                            <PlacesCard handleOrderPopup={handleOrderPopup} key={index} {...item}/>
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}