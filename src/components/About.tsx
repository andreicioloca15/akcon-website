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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop font-bold text-gray-700 mb-6">
              {aboutData.title}
            </h2>
            <div className="prose prose-lg max-w-none">
              {renderMarkdown(aboutData.description)}
            </div>
          </div>
          {aboutData.image && (
            <div className="relative">
              <img
                src={aboutData.image}
                alt="Despre AKCON"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
