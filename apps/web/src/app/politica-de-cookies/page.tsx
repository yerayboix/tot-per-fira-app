export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-[var(--secondary-color)] mb-8 font-clash">
          Política de Cookies
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Versión 1.0 – Julio 2025</strong>
          </p>
          
          <p className="mb-6">
            En Tot Per Fira utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Esta política explica qué son las cookies, cómo las utilizamos y cómo puedes gestionarlas.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4 font-clash">
              ¿Qué son las cookies?
            </h2>
            <p className="mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten que el sitio web recuerde información sobre tu visita, como tus preferencias e idioma, lo que puede facilitar tu próxima visita y hacer que el sitio web te resulte más útil.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4 font-clash">
              Tipos de cookies que utilizamos
            </h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[var(--secondary-color)] mb-3 font-clash">
                1. Cookies necesarias
              </h3>
              <p className="mb-4">
                Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar en nuestros sistemas. Generalmente se establecen como respuesta a acciones realizadas por ti que equivalen a una solicitud de servicios, como establecer tus preferencias de privacidad, iniciar sesión o completar formularios.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Ejemplos:</strong> Cookies de sesión, preferencias de cookies, estado de autenticación.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-[var(--secondary-color)] mb-3 font-clash">
                2. Cookies de análisis (Google Analytics)
              </h3>
              <p className="mb-4">
                Utilizamos Google Analytics para entender cómo los visitantes utilizan nuestro sitio web. Estas cookies nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Cookies de Google Analytics que utilizamos:</strong>
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li><strong>_ga:</strong> Duración: 2 años. Distingue a los usuarios únicos.</li>
                  <li><strong>_ga_*:</strong> Duración: 2 años. Utilizada para mantener el estado de la sesión.</li>
                  <li><strong>_gid:</strong> Duración: 24 horas. Distingue a los usuarios.</li>
                  <li><strong>_gat:</strong> Duración: 1 minuto. Utilizada para limitar el porcentaje de solicitudes.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4 font-clash">
              Información que recopilan las cookies de análisis
            </h2>
            <p className="mb-4">Google Analytics recopila información de forma anónima sobre:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Páginas que visitas en nuestro sitio web</li>
              <li>Tiempo que pasas en cada página</li>
              <li>Enlaces en los que haces clic</li>
              <li>Información sobre tu navegador y dispositivo</li>
              <li>Tu ubicación aproximada (a nivel de ciudad/región)</li>
              <li>Cómo llegaste a nuestro sitio web (motor de búsqueda, enlace directo, etc.)</li>
            </ul>
            <p className="mb-4">
              Esta información nos ayuda a entender qué contenido es más útil para nuestros visitantes y cómo podemos mejorar la experiencia en nuestro sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4 font-clash">
              Cómo gestionar las cookies
            </h2>
            <p className="mb-4">
              Puedes gestionar tus preferencias de cookies de las siguientes maneras:
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[var(--secondary-color)] mb-3 font-clash">
                Banner de cookies
              </h3>
              <p className="mb-4">
                Cuando visites nuestro sitio por primera vez, verás un banner de cookies donde puedes:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Aceptar todas las cookies</li>
                <li>Rechazar cookies opcionales (manteniendo solo las necesarias)</li>
                <li>Configurar tus preferencias de manera individual</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-[var(--secondary-color)] mb-3 font-clash">
                Configuración del navegador
              </h3>
              <p className="mb-4">
                También puedes gestionar las cookies directamente desde tu navegador:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
                <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio web</li>
                <li><strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos del sitio web</li>
                <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4 font-clash">
              Opt-out de Google Analytics
            </h2>
            <p className="mb-4">
              Si prefieres que Google Analytics no recopile información sobre tu actividad en nuestro sitio web, puedes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                Instalar el complemento de exclusión de Google Analytics:{" "}
                <a 
                  href="https://tools.google.com/dlpage/gaoptout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--primary-color)] hover:underline"
                >
                  https://tools.google.com/dlpage/gaoptout
                </a>
              </li>
              <li>Rechazar las cookies de análisis en nuestro banner de cookies</li>
              <li>Desactivar las cookies en la configuración de tu navegador</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4 font-clash">
              Terceros
            </h2>
            <p className="mb-4">
              <strong>Google Analytics</strong> es proporcionado por Google LLC. Para más información sobre cómo Google utiliza los datos, puedes consultar:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                Política de privacidad de Google:{" "}
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--primary-color)] hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
              </li>
              <li>
                Cómo usa Google los datos cuando utilizas sitios web o aplicaciones de nuestros partners:{" "}
                <a 
                  href="https://policies.google.com/technologies/partner-sites" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--primary-color)] hover:underline"
                >
                  https://policies.google.com/technologies/partner-sites
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4 font-clash">
              Contacto
            </h2>
            <p className="mb-4">
              Si tienes alguna pregunta sobre nuestra política de cookies, puedes contactarnos:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Correo electrónico: <a href="mailto:totperfira@gmail.com" className="text-[var(--primary-color)] hover:underline">totperfira@gmail.com</a></li>
              <li>Teléfono/WhatsApp: 616 121 597</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--secondary-color)] mb-4 font-clash">
              Cambios en esta política
            </h2>
            <p>
              Podemos actualizar esta Política de Cookies ocasionalmente. Te notificaremos sobre cualquier cambio publicando la nueva política en esta página con la fecha de última actualización.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 