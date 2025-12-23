import { useStaggeredAnimation } from '../hooks/useScrollAnimation';
import processData from '../content/process-steps.json';

export default function Process() {
  const steps = processData.steps.sort((a, b) => a.order - b.order);
  const { elementRef, visibleItems } = useStaggeredAnimation(steps.length, 100);

  return (
    <section className="py-20 bg-white" id="proces">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop font-bold text-gray-700 mb-4">
            {processData.title}
          </h2>
          <p className="font-open-sans text-base md:text-lg text-gray-600 leading-body max-w-2xl mx-auto">
            {processData.subtitle}
          </p>
        </div>

        <div ref={elementRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all ${
                visibleItems.has(index)
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
              style={{
                transform: visibleItems.has(index)
                  ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)'
                  : 'translate3d(0, 16px, 0) scale3d(1.03, 1.03, 1)',
                transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: visibleItems.has(index) ? 'auto' : 'transform, opacity',
              }}
            >
              <div className="flex items-start card-animate bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center font-montserrat text-xl font-bold text-white">
                  {step.number}
                </div>
                <div className="ml-4">
                  <h3 className="font-montserrat text-h3-mobile md:text-h3-tablet font-semibold text-gray-700 mb-2">
                    {step.title}
                  </h3>
                  <p className="font-open-sans text-gray-600 leading-body">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
