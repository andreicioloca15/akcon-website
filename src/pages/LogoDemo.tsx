import Logo from '../components/Logo';

export default function LogoDemo() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-900">
          AKCON Logo Variations
        </h1>

        <div className="space-y-24">
          <section className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Primary Horizontal Logo</h2>
            <div className="flex justify-center items-center py-8">
              <Logo variant="horizontal" />
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Stacked Logo</h2>
            <div className="flex justify-center items-center py-8">
              <Logo variant="stacked" />
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Icon / Favicon</h2>
            <div className="flex justify-center items-center gap-8 py-8">
              <div className="text-center">
                <Logo variant="icon" width={64} height={64} />
                <p className="mt-4 text-sm text-gray-600">64px</p>
              </div>
              <div className="text-center">
                <Logo variant="icon" width={48} height={48} />
                <p className="mt-4 text-sm text-gray-600">48px</p>
              </div>
              <div className="text-center">
                <Logo variant="icon" width={32} height={32} />
                <p className="mt-4 text-sm text-gray-600">32px</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Size Tests - Horizontal</h2>
            <div className="space-y-12">
              <div className="flex items-center justify-center gap-4">
                <Logo variant="horizontal" width={400} />
                <span className="text-sm text-gray-600">400px</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Logo variant="horizontal" width={300} />
                <span className="text-sm text-gray-600">300px</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Logo variant="horizontal" width={200} />
                <span className="text-sm text-gray-600">200px</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Logo variant="horizontal" width={150} />
                <span className="text-sm text-gray-600">150px</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Logo variant="horizontal" width={100} />
                <span className="text-sm text-gray-600">100px</span>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-2xl shadow-lg p-12">
            <h2 className="text-2xl font-bold mb-8 text-white">Dark Background Variants</h2>
            <div className="space-y-12">
              <div className="flex justify-center items-center py-8">
                <Logo variant="horizontal" dark={true} />
              </div>
              <div className="flex justify-center items-center py-8">
                <Logo variant="stacked" dark={true} />
              </div>
              <div className="flex justify-center items-center gap-8 py-8">
                <Logo variant="icon" width={64} height={64} dark={true} />
                <Logo variant="icon" width={48} height={48} dark={true} />
                <Logo variant="icon" width={32} height={32} dark={true} />
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Logo Details Showcase</h2>
            <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <Logo variant="icon" width={200} height={200} />
              </div>
              <div className="space-y-4 text-gray-700">
                <h3 className="font-bold text-lg">Architectural Features:</h3>
                <ul className="space-y-2 ml-4">
                  <li>✓ Visible roof tiles in staggered pattern</li>
                  <li>✓ Ridge cap at the peak where slopes meet</li>
                  <li>✓ Structural support beam (crossbar of the A)</li>
                  <li>✓ Eaves with subtle overhang at the bottom</li>
                  <li>✓ Foundation base line</li>
                  <li>✓ Depth created by two-tone navy shading</li>
                  <li>✓ Wood grain texture detail on beam</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">
              The Concept
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-xl mb-8">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-bold">The letter "A" is an actual roof.</span>
                  <br />
                  <br />
                  When you look at the AKCON logo, the first thing you see is a well-crafted roof with architectural details -
                  individual tiles, a ridge cap, a structural beam. Only then do you realize it's also the letter "A".
                  This double-take moment creates memorability while showcasing the company's attention to detail and craftsmanship.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Design Philosophy</h4>
                  <p className="text-sm text-gray-700">
                    Roof first, letter second. The architectural details make it recognizable
                    as a real roof structure, not just a stylized triangle.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Technical Execution</h4>
                  <p className="text-sm text-gray-700">
                    Individual tile rendering, proper proportions, and subtle textures create
                    a premium, professional appearance that scales beautifully.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
