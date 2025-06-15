
import React, { useEffect } from 'react';
import { Droplets, Factory, Wrench, BarChart, Landmark, LeafyGreen, Gauge, Filter, Warehouse, Shovel, Map, Shield, Waves } from 'lucide-react';

const ServicesSection = () => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1,
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 40V20" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36 40V8" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 40V32" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      ,
      title: "Études des projets agricoles",
      description: "Analyse hydraulique et technico-économique pour assurer la rentabilité et la durabilité de vos projets agricoles."
    },
    {
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 32.6001C18.4 32.6001 22 28.9401 22 24.5001C22 22.1801 20.86 19.9801 18.58 18.1201C16.3 16.2601 14.58 13.5001 14 10.6001C13.42 13.5001 11.72 16.2801 9.42 18.1201C7.12 19.9601 6 22.2001 6 24.5001C6 28.9401 9.6 32.6001 14 32.6001Z" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25.12 13.2C26.4955 11.0023 27.4706 8.57813 28 6.04004C29 11.04 32 15.84 36 19.04C40 22.24 42 26.04 42 30.04C42.0114 32.8046 41.2017 35.5103 39.6736 37.8142C38.1454 40.1181 35.9676 41.9163 33.4163 42.981C30.8649 44.0457 28.0548 44.3289 25.3423 43.7946C22.6298 43.2603 20.1371 41.9327 18.18 39.98" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      ,
      title: "Vente de matériel d'irrigation",
      description: "Fourniture de systèmes goutte-à-goutte, asperseurs, pompes, filtres et accessoires pour une irrigation optimisée."
    },
    {
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 40C4 41.0609 4.42143 42.0783 5.17157 42.8284C5.92172 43.5786 6.93913 44 8 44H40C41.0609 44 42.0783 43.5786 42.8284 42.8284C43.5786 42.0783 44 41.0609 44 40V16L30 26V16L16 26V8C16 6.93913 15.5786 5.92172 14.8284 5.17157C14.0783 4.42143 13.0609 4 12 4H8C6.93913 4 5.92172 4.42143 5.17157 5.17157C4.42143 5.92172 4 6.93913 4 8V40Z" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 36H36" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 36H26" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 36H16" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      ,
      title: "Réalisation des projets agricoles",
      description: "Prise en charge complète de vos projets, de l'analyse à l'exécution."
    },
    {
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.212 11.106C28.7672 11.3835 29.3793 11.5279 30 11.5279C30.6207 11.5279 31.2328 11.3835 31.788 11.106L39.106 7.44603C39.4112 7.29355 39.7502 7.22165 40.091 7.23717C40.4318 7.25269 40.7629 7.35511 41.0529 7.53469C41.3429 7.71428 41.5822 7.96506 41.748 8.2632C41.9138 8.56133 42.0005 8.89691 42 9.23803V34.766C41.9998 35.1374 41.8962 35.5013 41.7009 35.8171C41.5056 36.1329 41.2262 36.3881 40.894 36.554L31.788 41.108C31.2328 41.3855 30.6207 41.5299 30 41.5299C29.3793 41.5299 28.7672 41.3855 28.212 41.108L19.788 36.896C19.2328 36.6186 18.6207 36.4742 18 36.4742C17.3793 36.4742 16.7672 36.6186 16.212 36.896L8.89401 40.556C8.58871 40.7086 8.24945 40.7805 7.90852 40.7649C7.56758 40.7493 7.23632 40.6467 6.94624 40.4668C6.65616 40.287 6.41693 40.036 6.2513 39.7376C6.08567 39.4391 5.99916 39.1033 6.00001 38.762V13.236C6.0002 12.8647 6.10377 12.5008 6.29911 12.185C6.49445 11.8692 6.77384 11.614 7.10601 11.448L16.212 6.89403C16.7672 6.6166 17.3793 6.47217 18 6.47217C18.6207 6.47217 19.2328 6.6166 19.788 6.89403L28.212 11.106Z" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 11.5281V41.5281" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 6.47192V36.4719" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      ,
      title: "Piquetage",
      description: "Construction de digues de rétention d'eau pour prévenir l'érosion et améliorer la gestion des ressources hydriques."
    },
    {
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.99997 44.0001C6.49997 42.0261 8.53997 40.0501 11.8 39.6001C14.6222 39.5994 17.3391 40.6719 19.4 42.6001C20.4695 43.3493 21.7061 43.8253 23.0019 43.9866C24.2976 44.1478 25.6132 43.9895 26.8337 43.5253C28.0542 43.0611 29.1425 42.3052 30.0037 41.3237C30.8648 40.3421 31.4726 39.1646 31.774 37.8941C33.0716 38.1254 34.4082 37.9857 35.6299 37.491C36.8516 36.9962 37.9088 36.1666 38.6799 35.0976C39.4509 34.0286 39.9045 32.7636 39.9884 31.4482C40.0722 30.1327 39.783 28.8204 39.154 27.6621C40.3005 27.2917 41.332 26.6316 42.1487 25.7458C42.9653 24.8599 43.5395 23.7782 43.8157 22.6055C44.0918 21.4327 44.0606 20.2085 43.725 19.0513C43.3894 17.8941 42.7608 16.8431 41.9 16.0001C42.55 15.35 43.0657 14.5783 43.4175 13.729C43.7693 12.8797 43.9503 11.9694 43.9503 11.0501C43.9503 10.1308 43.7693 9.22048 43.4175 8.37116C43.0657 7.52184 42.55 6.75012 41.9 6.10008C41.2499 5.45004 40.4782 4.93439 39.6289 4.58259C38.7796 4.23079 37.8693 4.04972 36.95 4.04972C35.0934 4.04972 33.3128 4.78726 32 6.10008C31.1569 5.23929 30.106 4.61068 28.9488 4.27508C27.7916 3.93947 26.5674 3.90824 25.3946 4.18439C24.2218 4.46054 23.1402 5.03473 22.2543 5.8514C21.3684 6.66807 20.7084 7.69957 20.338 8.84608C19.1797 8.21704 17.8673 7.92782 16.5519 8.01169C15.2365 8.09556 13.9715 8.54912 12.9024 9.32017C11.8334 10.0912 11.0038 11.1484 10.5091 12.3702C10.0144 13.5919 9.87463 14.9285 10.106 16.2261C8.84649 16.5328 7.6804 17.141 6.70809 17.9983C5.73577 18.8556 4.98634 19.9364 4.52431 21.1475C4.06228 22.3587 3.90148 23.664 4.05577 24.951C4.21005 26.2381 4.67478 27.4684 5.40997 28.5361C6.99797 30.8401 8.81797 33.4241 8.39997 36.2001C7.85197 39.4861 6.02797 41.4641 3.99997 44.0001Z" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 44L34 14" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      ,
      title: "Plantation",
      description: "Optimisation des parcelles agricoles pour un écoulement efficace de l'eau et un meilleur rendement."
    },
    {
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 25.9999C40 35.9999 33 40.9999 24.68 43.8999C24.2443 44.0476 23.7711 44.0405 23.34 43.8799C15 40.9999 8 35.9999 8 25.9999V11.9999C8 11.4695 8.21071 10.9608 8.58579 10.5857C8.96086 10.2106 9.46957 9.99992 10 9.99992C14 9.99992 19 7.59992 22.48 4.55992C22.9037 4.19792 23.4427 3.99902 24 3.99902C24.5573 3.99902 25.0963 4.19792 25.52 4.55992C29.02 7.61992 34 9.99992 38 9.99992C38.5304 9.99992 39.0391 10.2106 39.4142 10.5857C39.7893 10.9608 40 11.4695 40 11.9999V25.9999Z" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      ,
      title: "Fabrication et installation de clôtures",
      description: "Mise en place de clôtures résistantes pour protéger vos cultures et votre bétail."
    },
    {
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 28L32 20" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.68 37.9999C4.92444 34.9595 4.00013 31.5106 4 27.9998C3.99987 24.489 4.92391 21.04 6.67924 17.9995C8.43457 14.959 10.9593 12.4341 13.9998 10.6786C17.0402 8.92319 20.4892 7.99902 24 7.99902C27.5108 7.99902 30.9598 8.92319 34.0002 10.6786C37.0407 12.4341 39.5654 14.959 41.3208 17.9995C43.0761 21.04 44.0001 24.489 44 27.9998C43.9999 31.5106 43.0756 34.9595 41.32 37.9999" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      ,
      title: "Station de pompage",
      description: "Installation de systèmes de pompage performants pour assurer un approvisionnement en eau fiable et constant."
    },
    {
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12C5.2 13 6.4 14 9 14C14 14 14 10 19 10C24.2 10 23.8 14 29 14C34 14 34 10 39 10C41.6 10 42.8 11 44 12" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 24C5.2 25 6.4 26 9 26C14 26 14 22 19 22C24.2 22 23.8 26 29 26C34 26 34 22 39 22C41.6 22 42.8 23 44 24" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 36C5.2 37 6.4 38 9 38C14 38 14 34 19 34C24.2 34 23.8 38 29 38C34 38 34 34 39 34C41.6 34 42.8 35 44 36" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      ,
      title: "Installation des pompes immergées",
      description: "Mise en place de pompes submersibles pour extraire efficacement l'eau des puits, rivières ou forages."
    },
    {
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44 6H4L20 24.92V38L28 42V24.92L44 6Z" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      ,
      title: "Station de filtration",
      description: "Installation de systèmes avancés pour une eau propre et sans impuretés."
    },
    {
      icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44 16.7V40C44 41.0609 43.5786 42.0783 42.8284 42.8285C42.0783 43.5786 41.0609 44 40 44H8C6.93913 44 5.92172 43.5786 5.17157 42.8285C4.42143 42.0783 4 41.0609 4 40V16.7C4.00322 15.9023 4.24488 15.1238 4.69392 14.4645C5.14297 13.8052 5.7789 13.2952 6.52 13L22.52 6.60004C23.4704 6.22154 24.5296 6.22154 25.48 6.60004L41.48 13C42.2211 13.2952 42.857 13.8052 43.3061 14.4645C43.7551 15.1238 43.9968 15.9023 44 16.7Z" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 36H36" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 28H36" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36 20H12V44H36V20Z" stroke="#A1C93B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      ,
      title: "Installation des bassins en plastique",
      description: "Mise en place de bassins de stockage en plastique pour une conservation optimale de l'eau d'irrigation."
    }
  ];

  return (
    <section id="services" className="section-padding  py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-primary font-dream text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Nos Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
            Des solutions complètes d'irrigation pour répondre à tous vos besoins, de la conception à la maintenance.
          </p>
        </div>



  <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card flex flex-col  animate-on-scroll bg-white p-6 rounded-lg border-l-4 ${index === services.length - 1 ? 'col-start-2 col-end-3 ' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
           >
               <div className=" p-3 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 ">{service.title}</h3>
              <p className="text-gray-600 " style={{ color: "#1C2126" }}>{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
