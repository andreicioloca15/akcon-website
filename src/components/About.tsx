import aboutData from '../content/about.json';

export default function About() {
  const renderMarkdown = (markdown: string) => {
    const lines = markdown.split('\n');
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let key = 0;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ');
        const parts = text.split(/(\*\*.*?\*\*)/g);
        elements.push(
          <p key={key++} className="font-open-sans text-gray-600 leading-body mb-4">
            {parts.map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="font-semibold text-gray-700">{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </p>
        );
        currentParagraph = [];
      }
    };

    lines.forEach((line) => {
      if (line.startsWith('## ')) {
        flushParagraph();
        elements.push(
          <h3 key={key++} className="font-montserrat text-xl md:text-2xl font-bold text-gray-700 mt-6 mb-3">
            {line.slice(3)}
          </h3>
        );
      } else if (line.startsWith('- ')) {
        flushParagraph();
        const text = line.slice(2);
        const parts = text.split(/(\*\*.*?\*\*)/g);
        elements.push(
          <li key={key++} className="font-open-sans text-gray-600 leading-body mb-2 ml-6">
            {parts.map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="font-semibold text-gray-700">{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </li>
        );
      } else if (line.trim() === '') {
        flushParagraph();
      } else {
        currentParagraph.push(line);
      }
    });

    flushParagraph();
    return elements;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="despre">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-left">
            <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop font-bold text-gray-700 mb-6 hover:text-gold transition-colors duration-300">
              {aboutData.title}
            </h2>
            <div className="prose prose-lg max-w-none">
              {renderMarkdown(aboutData.description)}
            </div>
          </div>
          {aboutData.image && (
            <div className="relative fade-in-right">
              <div className="absolute inset-0 bg-gold/20 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
              <img
                src={aboutData.image}
                alt="Despre AKCON - Experți în Acoperișuri"
                className="rounded-lg shadow-2xl w-full h-auto object-cover hover:shadow-gold/50 transition-shadow duration-300 relative z-10"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
