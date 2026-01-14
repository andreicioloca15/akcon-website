import Logo from '../components/Logo';

export default function LogoDemo() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          AKCON Logo Design
        </h1>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Minimal. Geometric. Architectural.
        </p>

        <div className="space-y-16">
          <section className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Primary Logo</h2>
            <p className="text-sm text-gray-600 mb-8">Navy #1e3a5f + Gold #c9a961 on white background</p>
            <div className="flex justify-center items-center py-12 border-2 border-gray-100 rounded-xl">
              <Logo variant="horizontal" width={400} />
            </div>
          </section>

          <section className="bg-[#1e3a5f] rounded-2xl shadow-lg p-12">
            <h2 className="text-2xl font-bold mb-2 text-white">White Version</h2>
            <p className="text-sm text-gray-300 mb-8">All-white AKCON + gold tagline on navy background</p>
            <div className="flex justify-center items-center py-12 border-2 border-white/10 rounded-xl">
              <Logo variant="horizontal" width={400} dark={true} />
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Size Test</h2>
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-6 pb-8 border-b border-gray-200">
                <Logo variant="horizontal" width={300} />
                <span className="text-sm font-mono text-gray-500">300px</span>
              </div>
              <div className="flex items-center justify-center gap-6 pb-8 border-b border-gray-200">
                <Logo variant="horizontal" width={150} />
                <span className="text-sm font-mono text-gray-500">150px</span>
              </div>
              <div className="flex items-center justify-center gap-6">
                <Logo variant="horizontal" width={75} />
                <span className="text-sm font-mono text-gray-500">75px (favicon size)</span>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Stacked Logo Variant</h2>
            <div className="flex justify-center items-center py-8">
              <Logo variant="stacked" />
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Icon / Favicon</h2>
            <div className="flex justify-center items-center gap-12 py-8">
              <div className="text-center">
                <div className="inline-block p-4 bg-gray-100 rounded-xl">
                  <Logo variant="icon" width={64} height={64} />
                </div>
                <p className="mt-4 text-sm font-mono text-gray-600">64px</p>
              </div>
              <div className="text-center">
                <div className="inline-block p-4 bg-gray-100 rounded-xl">
                  <Logo variant="icon" width={48} height={48} />
                </div>
                <p className="mt-4 text-sm font-mono text-gray-600">48px</p>
              </div>
              <div className="text-center">
                <div className="inline-block p-4 bg-gray-100 rounded-xl">
                  <Logo variant="icon" width={32} height={32} />
                </div>
                <p className="mt-4 text-sm font-mono text-gray-600">32px</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl shadow-lg p-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">
              Design Philosophy
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 mb-8">
                <div className="flex justify-center mb-6">
                  <Logo variant="icon" width={120} height={120} />
                </div>
                <div className="text-center space-y-4">
                  <h3 className="font-bold text-xl text-gray-900">Geometric Minimalism</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The "A" is constructed from just 4 basic shapes: two polygons (roof slopes),
                    one rectangle (crossbar), and one line accent (ridge). This brutally simple
                    approach creates an iconic mark that works at any size.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl text-center">
                  <div className="text-3xl mb-3">📐</div>
                  <h4 className="font-bold text-gray-900 mb-2">Geometric Precision</h4>
                  <p className="text-sm text-gray-600">
                    Clean angles and perfect proportions create a professional, architectural aesthetic
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl text-center">
                  <div className="text-3xl mb-3">✨</div>
                  <h4 className="font-bold text-gray-900 mb-2">Luxury Simplicity</h4>
                  <p className="text-sm text-gray-600">
                    Like Audi or BMW logos, sophistication comes from restraint, not decoration
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl text-center">
                  <div className="text-3xl mb-3">🏠</div>
                  <h4 className="font-bold text-gray-900 mb-2">Instant Recognition</h4>
                  <p className="text-sm text-gray-600">
                    The roof reads immediately as both a letter "A" and architectural structure
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-xl p-8">
                <h4 className="font-bold text-gray-900 mb-4 text-center">Design Elements</h4>
                <ul className="space-y-2 text-gray-700 max-w-2xl mx-auto">
                  <li className="flex items-start gap-3">
                    <span className="text-[#c9a961] font-bold">▲</span>
                    <span><strong>Left Slope:</strong> Solid navy #1e3a5f polygon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#c9a961] font-bold">▲</span>
                    <span><strong>Right Slope:</strong> Slightly lighter navy #2a4a6f for subtle depth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#c9a961] font-bold">■</span>
                    <span><strong>Gold Crossbar:</strong> #c9a961 rectangle as the structural beam</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#c9a961] font-bold">—</span>
                    <span><strong>Ridge Accent:</strong> Thin gold line at the peak for definition</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">
              Style Reference
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8 text-center">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Inspired By</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Luxury automotive logos (Audi, BMW)</li>
                      <li>✓ Modern architectural firms</li>
                      <li>✓ Scandinavian minimalism</li>
                      <li>✓ Swiss design principles</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Design Principle</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Less is more</li>
                      <li>✓ Form follows function</li>
                      <li>✓ Engineered, not decorated</li>
                      <li>✓ Timeless, not trendy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/"
            className="inline-block bg-[#1e3a5f] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2a4a6f] transition-colors"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
