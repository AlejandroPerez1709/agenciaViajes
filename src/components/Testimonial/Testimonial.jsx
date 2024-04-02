
import Slider from "react-slick";


const TestimonialData = [
    {
      id: 1,
      name: "Rogelio Roa",
      text: "Mi experiencia con la Agencia de Viajes ha sido excepcional. Desde el momento en que contacté con ellos para planificar unas vacaciones familiares en Japón",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "Alejandro Pérez",
      text: "Estoy extremadamente satisfecho con el servicio que recibí de la Agencia de Viajes. Decidí reservar un paquete turístico a Europa para unas vacaciones en solitario",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Rodolfo Juárez",
      text: "¡Mi experiencia con la Agencia de Viajes Estrella superó mis expectativas! Decidí reservar un viaje de Luna de Miel a las paradisíacas playas de Tailandia",
      img: "https://picsum.photos/103/103",
    },
  ];

export const Testimonial = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };    

    return(
        <div className="py-10 ">
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Testimoniales</p>
                    <h1 className="text-3xl font-bold ">Testimoniales</h1>
                    <p className="text-xs text-gray-400">Algunos de nuestros clientes satisfechos </p>
                </div >
                {/* Testimonial Section */}
                <div className="grid grid-cols-1 max-w-[800px] mx-auto gap-6">
                    <Slider {...settings}>
                        {TestimonialData.map(({ id, name, text, img }) => {
                            return (
                            <div key={id} className="my-6">
                                <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                                <img
                                    src={img}
                                    alt=""
                                    className="rounded-full block mx-auto"
                                />
                                <h1 className="text-xl font-bold">{name}</h1>
                                <p className="text-gray-500 text-sm">{text}</p>
                                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                    ,,
                                </p>
                                </div>
                            </div>
                            );
                        })}
                    </Slider>
                </div>
                
            </div>
        </div>
    )
}