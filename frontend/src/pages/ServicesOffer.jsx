// ================================================
// File: src/pages/ServicesOffer.jsx
// Dynamic route page: /services-offer/:serviceSlug
// ================================================
import React from "react";
import { useParams } from "react-router-dom";
import { getServiceOfferBySlug } from "../data/serviceOfferData";
import { ServiceOfferTemplate } from "../components/service-offer/ServiceOfferTemplate";

export default function ServicesOffer() {
  const { serviceSlug } = useParams();
  const offer = getServiceOfferBySlug(serviceSlug);

  if (!offer) {
    return (
      <main className="w-full bg-white font-brand text-black">
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <h1 className="text-[2.03rem] font-extrabold leading-[1.05] md:text-[3.3rem]">
            Service not found
          </h1>
        </section>
      </main>
    );
  }

  return <ServiceOfferTemplate offer={offer} />;
}
