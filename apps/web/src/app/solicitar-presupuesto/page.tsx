import type { Metadata } from 'next'
import SolicitarPresupuestoComponent from "./solicitar-component";

export const metadata: Metadata = {
  title: "Solicitar Presupuesto",
  description: "Completa el formulario para recibir tu presupuesto personalizado",
  keywords: [
    "solicitar presupuesto",
    "presupuesto",
    "tot per fira",
    "fiestas",
    "alquiler de equipos de sonido",
    "alquiler de congeladores",
    "alquiler de botelleros",
    "alquiler de grifos de cerveza",
    "alquiler de mesas y sillas",
    "alquiler de iluminación",
    "bebidas",
    "botellas de agua",
    "botellas de refresco",
    "botellas de cerveza",
    "botellas de vino",
    "botellas de agua",
    "botellas de refresco",
    "organización de fiestas",
    "organización de eventos",
    "organización de fiestas en Onda",
    "organización de eventos en Onda",
    "organización de fiestas en Castellón",
    "organización de eventos en Castellón",
  ],
};

export default function SolicitarPresupuestoPage() {
  return <SolicitarPresupuestoComponent />;
}