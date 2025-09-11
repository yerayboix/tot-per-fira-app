export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-[var(--secondary-color)] mb-8 font-clash">
          Política de Privacidad
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Versión 1.0 – Julio 2025</strong>
          </p>
          
          <p className="mb-6">
            En Tot Per Fira nos tomamos muy en serio la protección de tus datos personales. Esta política explica cómo recogemos, usamos y protegemos la información que nos facilitas a través de nuestros formularios de contacto o cualquier otro medio electrónico.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4 font-clash">
              1. Responsable del tratamiento
            </h2>
            <p className="mb-4">
              <strong>Responsable:</strong> Tot Per Fira.
            </p>
            <div className="mb-4">
              <strong>Contacto:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Teléfono/WhatsApp: 616 121 597</li>
                <li>Correo electrónico: totperfira@gmail.com</li>
                <li>Dirección postal: Onda (Castellón), España.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4 font-clash">
              2. Datos que tratamos
            </h2>
            <p className="mb-4">Los datos que podemos solicitar son:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Nombre y apellidos</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4 font-clash">
              3. Finalidad del tratamiento
            </h2>
            <p className="mb-4">Utilizamos tus datos para:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Atender las consultas, solicitudes o reservas que realices a través de la web, correo electrónico o WhatsApp.</li>
              <li>Gestionar la prestación de nuestros servicios de alquiler y organización de eventos.</li>
              <li>Mantener la relación comercial derivada de los servicios contratados.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4 font-clash">
              4. Legitimación
            </h2>
            <p>
              La base legal para el tratamiento de tus datos es tu consentimiento (art. 6.1.a RGPD) cuando rellenas el formulario o nos contactas voluntariamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4 font-clash">
              5. Destinatarios
            </h2>
            <p className="mb-4">
              No cederemos tus datos a terceros salvo obligación legal.
            </p>
            <p>
              Si en el futuro necesitamos colaborar con proveedores (por ejemplo, hosting o servicios de correo), firmaremos con ellos los contratos de encargado de tratamiento exigidos por el RGPD.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4 font-clash">
              6. Plazo de conservación
            </h2>
            <p>
              Conservaremos los datos únicamente durante el tiempo necesario para atender tu solicitud o mientras dure la relación comercial, y el tiempo legal imprescindible para atender posibles responsabilidades.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4 font-clash">
              7. Derechos de las personas interesadas
            </h2>
            <p className="mb-4">Puedes ejercer en cualquier momento los derechos de:</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Acceso a tus datos.</li>
              <li>Rectificación de datos inexactos.</li>
              <li>Supresión (derecho al olvido).</li>
              <li>Oposición y limitación del tratamiento.</li>
              <li>Portabilidad de los datos cuando sea técnicamente posible.</li>
            </ul>
            <p className="mb-4">
              Para ello, envía una solicitud por escrito a{" "}
              <a href="mailto:totperfira@gmail.com" className="text-[var(--primary-color)] hover:underline">
                totperfira@gmail.com
              </a>{" "}
              indicando el derecho que deseas ejercer y adjuntando una copia de tu documento identificativo.
            </p>
            <p>
              Si consideras que el tratamiento de tus datos no se ajusta a la normativa, puedes presentar una reclamación ante la Agencia Española de Protección de Datos ({" "}
              <a 
                href="https://www.aepd.es" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--primary-color)] hover:underline"
              >
                www.aepd.es
              </a>
              ).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4 font-clash">
              8. Seguridad
            </h2>
            <p>
              Tot Per Fira aplica las medidas de seguridad técnicas y organizativas necesarias para proteger tus datos personales y evitar su pérdida, mal uso, alteración o acceso no autorizado. Nuestra web utilizará conexión segura HTTPS cuando esté disponible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4 font-clash">
              9. Cambios en la política
            </h2>
            <p>
              Podremos actualizar esta Política de Privacidad para adaptarla a cambios legales o de funcionamiento. Publicaremos cualquier modificación en la web con la fecha de última actualización.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 