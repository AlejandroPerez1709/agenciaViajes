import { BlogsComp } from "../components/Blogs/BlogsComp"
import Location from '../components/Location/Location'

export const About = () => {



    return(
        <div>
            <div className="container pt-14">
                <div className="py-10">
                    <h1 data-aos="fade-up" className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
                    Acerca de Nosotros
                    </h1>
                    <p>
                    En Viajes del Mundo, nos dedicamos a hacer realidad los sueños de viaje de nuestros clientes. Somos una agencia comprometida con la excelencia en el servicio y la satisfacción del viajero. Desde nuestra fundación, nos hemos esforzado por ofrecer experiencias únicas y memorables en destinos de todo el mundo
                    </p>
                    <br />
                    <p>
                    Experiencia Personalizada:
                    Nuestro equipo de expertos en viajes está aquí para hacer que cada aventura sea especial. Ya sea que estés planeando unas vacaciones familiares, una escapada romántica o un viaje de negocios, te ofreceremos opciones personalizadas que se adapten a tus necesidades y preferencias.
                    </p>
                    <p className="mt-5">
                    Destinos Excepcionales:
                    Desde las playas vírgenes del Caribe hasta los majestuosos picos de los Himalayas, ofrecemos una amplia gama de destinos para que elijas. Ya sea que busques relajarte en un resort de lujo, explorar la naturaleza salvaje o sumergirte en la cultura de una ciudad vibrante, tenemos el destino perfecto para ti.
                    </p>
                </div>
            </div>
            <Location />
            <BlogsComp />
        </div>
    )
}