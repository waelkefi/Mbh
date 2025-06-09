
import React from 'react';

const ClientsSection = () => {
  const clients = [
    { name: "AgriBusiness", logo: "https://via.placeholder.com/150/FFFFFF/043B29?text=AgriBusiness" },
    { name: "FarmTech", logo: "https://via.placeholder.com/150/FFFFFF/043B29?text=FarmTech" },
    { name: "GreenGrow", logo: "https://via.placeholder.com/150/FFFFFF/043B29?text=GreenGrow" },
    { name: "Eco Farms", logo: "https://via.placeholder.com/150/FFFFFF/043B29?text=EcoFarms" },
    { name: "Hydra Systems", logo: "https://via.placeholder.com/150/FFFFFF/043B29?text=HydraSystems" },
    { name: "AgriTech", logo: "https://via.placeholder.com/150/FFFFFF/043B29?text=AgriTech" },
  ];

  const partners = [
    { name: "WaterTech", logo: "https://via.placeholder.com/150/FFFFFF/043B29?text=WaterTech" },
    { name: "IrrigationPro", logo: "https://via.placeholder.com/150/FFFFFF/043B29?text=IrrigationPro" },
    { name: "AquaSystems", logo: "https://via.placeholder.com/150/FFFFFF/043B29?text=AquaSystems" },
    { name: "EcoWater", logo: "https://via.placeholder.com/150/FFFFFF/043B29?text=EcoWater" },
  ];

  return (
    <section id="clients" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-primary font-dream text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Ils nous font confiance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
            Rejoignez notre réseau de clients satisfaits et profitez de notre expertise en irrigation moderne.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-primary text-xl font-semibold mb-8 text-center animate-on-scroll">Clients</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center border border-gray-100 hover:shadow-md transition-shadow animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}  
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-16"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-primary text-xl font-semibold mb-8 text-center animate-on-scroll">Partenaires</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center border border-gray-100 hover:shadow-md transition-shadow animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}    
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
{/* 
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
          <h3 className="text-primary text-xl font-semibold mb-4">Étude de cas : Irrigation optimisée pour Grand Domaine Viticole</h3>
          <p className="text-gray-600 mb-4">
            Le défi : Réduire la consommation d'eau de 40% tout en maintenant la qualité des vignes sur 120 hectares.
          </p>
          <p className="text-gray-600 mb-4">
            Notre solution : Installation d'un système d'irrigation goutte-à-goutte programmable avec capteurs d'humidité et station météo connectée.
          </p>
          <p className="text-gray-600">
            Résultats : Réduction de 45% de la consommation d'eau, amélioration de la qualité des raisins et ROI en moins de 3 ans.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default ClientsSection;
