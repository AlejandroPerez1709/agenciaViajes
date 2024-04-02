

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
          Visítanos en el interior del parque Siervo de la Nación 
          </h1>

          <div className="rounded-xl ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15037.406285212515!2d-99.0467389755981!3d19.56943309672231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f04e6112833d%3A0x4ba99a61e403ddc3!2sParque%20Bicentenario%20Siervo%20de%20La%20Naci%C3%B3n!5e0!3m2!1ses!2smx!4v1711475168292!5m2!1ses!2smx"
              width="100%"
              height="360"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
