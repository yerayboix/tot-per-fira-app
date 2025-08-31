import React from 'react';

const FontPreview = () => {
  const clashDisplayWeights = [
    { weight: 200, name: 'Extralight' },
    { weight: 300, name: 'Light' },
    { weight: 400, name: 'Regular' },
    { weight: 500, name: 'Medium' },
    { weight: 600, name: 'Semibold' },
    { weight: 700, name: 'Bold' },
  ];

  const khandWeights = [
    { weight: 300, name: 'Light' },
    { weight: 400, name: 'Regular' },
    { weight: 500, name: 'Medium' },
    { weight: 600, name: 'Semibold' },
    { weight: 700, name: 'Bold' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
          Vista Previa de Fuentes
        </h1>

        {/* ClashDisplay Preview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-slate-700 dark:text-slate-300 border-b-2 border-blue-200 dark:border-blue-800 pb-4">
            ClashDisplay
          </h2>
          <div className="grid gap-6">
            {clashDisplayWeights.map(({ weight, name }) => (
              <div key={weight} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono text-slate-500 dark:text-slate-400">
                    {name} ({weight})
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    font-weight: {weight}
                  </span>
                </div>
                <p 
                  className="text-2xl leading-relaxed text-slate-800 dark:text-slate-200"
                  style={{ 
                    fontFamily: 'ClashDisplay', 
                    fontWeight: weight 
                  }}
                >
                  The quick brown fox jumps over the lazy dog. 0123456789
                </p>
                <p 
                  className="text-lg mt-2 text-slate-600 dark:text-slate-400"
                  style={{ 
                    fontFamily: 'ClashDisplay', 
                    fontWeight: weight 
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Khand Preview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-slate-700 dark:text-slate-300 border-b-2 border-green-200 dark:border-green-800 pb-4">
            Khand
          </h2>
          <div className="grid gap-6">
            {khandWeights.map(({ weight, name }) => (
              <div key={weight} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono text-slate-500 dark:text-slate-400">
                    {name} ({weight})
                  </span>
                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                    font-weight: {weight}
                  </span>
                </div>
                <p 
                  className="text-2xl leading-relaxed text-slate-800 dark:text-slate-200"
                  style={{ 
                    fontFamily: 'Khand', 
                    fontWeight: weight 
                  }}
                >
                  The quick brown fox jumps over the lazy dog. 0123456789
                </p>
                <p 
                  className="text-lg mt-2 text-slate-600 dark:text-slate-400"
                  style={{ 
                    fontFamily: 'Khand', 
                    fontWeight: weight 
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparación de fuentes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-slate-700 dark:text-slate-300 border-b-2 border-purple-200 dark:border-purple-800 pb-4">
            Comparación de Fuentes
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-700 dark:text-slate-300">ClashDisplay</h3>
                <p 
                  className="text-xl leading-relaxed text-slate-800 dark:text-slate-200 font-clash font-medium"
                >
                  Esta es la fuente ClashDisplay en peso Medium. Es una fuente sans-serif moderna y elegante.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-700 dark:text-slate-300">Khand</h3>
                <p 
                  className="text-xl leading-relaxed text-slate-800 dark:text-slate-200 font-khand font-medium"
                >
                  Esta es la fuente Khand en peso Medium. Es una fuente sans-serif con un toque más geométrico.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-700 dark:text-slate-300">Sistema</h3>
                <p className="text-xl leading-relaxed text-slate-800 dark:text-slate-200 font-sans">
                  Esta es la fuente del sistema por defecto para comparar con las fuentes personalizadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Información técnica */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-slate-700 dark:text-slate-300 border-b-2 border-orange-200 dark:border-orange-800 pb-4">
            Información Técnica
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-700 dark:text-slate-300">ClashDisplay</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Formato: WOFF2</li>
                  <li>• Pesos: 200 (Extralight) a 700 (Bold)</li>
                  <li>• Estilo: Sans-serif moderno</li>
                  <li>• Uso recomendado: Títulos y texto destacado</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-700 dark:text-slate-300">Khand</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Formato: WOFF2</li>
                  <li>• Pesos: 300 (Light) a 700 (Bold)</li>
                  <li>• Estilo: Sans-serif geométrico</li>
                  <li>• Uso recomendado: Texto del cuerpo y UI</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-500 dark:text-slate-400 py-8">
          <p>Fuentes importadas correctamente desde /public/fonts/</p>
        </footer>
      </div>
    </div>
  );
};

export default FontPreview; 