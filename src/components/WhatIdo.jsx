
import React from 'react';
import {
  FiCode,
  FiSmartphone,
  FiMonitor,
  FiServer,
  FiLayers
} from 'react-icons/fi';
const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Build modern and responsive web applications.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Development',
    description: 'Create cross-platform mobile applications.',
  },
  {
    icon: FiMonitor,
    title: 'Desktop Development',
    description: 'Develop Windows applications with C# (.NET).',
  },
  {
    icon: FiServer,
    title: 'System & Server',
    description: 'Work with Windows Server, databases, and system management.',
  },
];

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="service-card d-flex align-items-center shadow-item">
      <div className="service-icon ms-2">
        <Icon />
      </div>

      <div className="service-content ms-2">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

const WhatIDo = () => {
  return (
    <section className="what-i-do">
      <div className="d-flex align-items-center gap-3 mb-4">
        <span className="shadow-item rounded-3 p-2 d-flex justify-content-center align-items-center">
          <FiLayers
            className="text-primary"
            size={23}
          />
        </span>

        <h4 className="fw-bold mb-0">
          What I Do
        </h4>
      </div>

      <div className="row g-3">
        {services.map((service, index) => (
          <div className="col-12 col-md-6" key={index}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
