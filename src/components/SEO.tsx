import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export default function SEO({
  title,
  description,
  keywords = [],
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonical
}: SEOProps): null {
  const location = useLocation();
  const baseUrl = 'https://akcon.ro';
  const fullUrl = canonical || `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateOrCreateMetaTag = (selector: string, attribute: string, content: string): void => {
      let tag = document.querySelector(selector) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        if (selector.includes('property')) {
          tag.setAttribute('property', selector.split('=')[1].replace(/['"]/g, '').replace(']', ''));
        } else {
          tag.setAttribute('name', selector.split('=')[1].replace(/['"]/g, '').replace(']', ''));
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Update or create standard meta tags
    updateOrCreateMetaTag('meta[name="description"]', 'content', description);

    if (keywords.length > 0) {
      updateOrCreateMetaTag('meta[name="keywords"]', 'content', keywords.join(', '));
    }

    // Update or create Open Graph tags
    updateOrCreateMetaTag('meta[property="og:title"]', 'content', title);
    updateOrCreateMetaTag('meta[property="og:description"]', 'content', description);
    updateOrCreateMetaTag('meta[property="og:url"]', 'content', fullUrl);
    updateOrCreateMetaTag('meta[property="og:type"]', 'content', ogType);
    updateOrCreateMetaTag('meta[property="og:image"]', 'content', `${baseUrl}${ogImage}`);
    updateOrCreateMetaTag('meta[property="og:locale"]', 'content', 'ro_RO');

    // Update or create Twitter Card tags
    updateOrCreateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateOrCreateMetaTag('meta[name="twitter:title"]', 'content', title);
    updateOrCreateMetaTag('meta[name="twitter:description"]', 'content', description);
    updateOrCreateMetaTag('meta[name="twitter:image"]', 'content', `${baseUrl}${ogImage}`);

    // Update or create canonical link
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', fullUrl);

    // Update language attribute
    document.documentElement.setAttribute('lang', 'ro');

  }, [title, description, keywords, ogImage, ogType, fullUrl]);

  return null;
}
