/*
  # Create Projects and Case Studies Schema

  1. New Tables
    - `services`
      - `id` (uuid, primary key)
      - `slug` (text, unique) - URL-friendly identifier
      - `name` (text) - Service name
      - `description` (text) - Short description
      - `long_description` (text) - Full description for service page
      - `meta_title` (text) - SEO title
      - `meta_description` (text) - SEO description
      - `keywords` (text array) - SEO keywords
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `projects`
      - `id` (uuid, primary key)
      - `service_id` (uuid, foreign key to services)
      - `title` (text) - Project title
      - `slug` (text, unique) - URL-friendly identifier
      - `client_name` (text) - Client name
      - `client_location` (text) - City/location
      - `client_profession` (text, nullable) - Client profession/description
      - `project_date` (date) - When project was completed
      - `duration_weeks` (integer) - How long it took
      - `area_sqm` (integer) - Area in square meters
      - `materials_used` (text) - Materials description
      - `problem_description` (text) - Before state / problem
      - `solution_description` (text) - What we did
      - `results_description` (text) - After state / results
      - `client_testimonial` (text) - Full testimonial
      - `investment_value` (text, nullable) - Project value range
      - `before_images` (text array) - URLs to before photos
      - `during_images` (text array) - URLs to during work photos
      - `after_images` (text array) - URLs to after photos
      - `featured` (boolean) - Show on homepage
      - `published` (boolean) - Is publicly visible
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text) - Post title
      - `slug` (text, unique) - URL-friendly identifier
      - `excerpt` (text) - Short excerpt
      - `content` (text) - Full content
      - `author` (text) - Author name
      - `featured_image` (text) - URL to main image
      - `meta_title` (text) - SEO title
      - `meta_description` (text) - SEO description
      - `keywords` (text array) - SEO keywords
      - `published` (boolean) - Is publicly visible
      - `published_at` (timestamp) - Publication date
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated admin write access
*/

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  long_description text NOT NULL,
  meta_title text NOT NULL,
  meta_description text NOT NULL,
  keywords text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id uuid REFERENCES services(id) ON DELETE CASCADE,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  client_name text NOT NULL,
  client_location text NOT NULL,
  client_profession text,
  project_date date NOT NULL,
  duration_weeks integer NOT NULL,
  area_sqm integer NOT NULL,
  materials_used text NOT NULL,
  problem_description text NOT NULL,
  solution_description text NOT NULL,
  results_description text NOT NULL,
  client_testimonial text NOT NULL,
  investment_value text,
  before_images text[] DEFAULT '{}',
  during_images text[] DEFAULT '{}',
  after_images text[] DEFAULT '{}',
  featured boolean DEFAULT false,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  featured_image text,
  meta_title text NOT NULL,
  meta_description text NOT NULL,
  keywords text[] DEFAULT '{}',
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Services policies (public read)
CREATE POLICY "Anyone can view services"
  ON services FOR SELECT
  TO anon, authenticated
  USING (true);

-- Projects policies (public read for published)
CREATE POLICY "Anyone can view published projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (published = true);

-- Blog posts policies (public read for published)
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (published = true);

-- Insert default services
INSERT INTO services (slug, name, description, long_description, meta_title, meta_description, keywords) VALUES
('montaj-acoperisuri-noi', 'Montaj Acoperișuri Noi', 'Construcție completă de acoperișuri premium cu garanție 15 ani', 'Servicii complete de montaj acoperișuri noi în județul Alba. Echipă certificată, materiale premium Lindab, Velux, Bilka. Garanție 15 ani manoperă. Proiecte rezidențiale de lux cu țiglă ceramică, țiglă metalică și tablă fălțuită.', 'Montaj Acoperișuri Noi Alba Iulia | Garanție 15 Ani | Akcon', 'Montaj acoperișuri premium în Alba Iulia. Echipă certificată, materiale de top (Lindab, Velux, Bilka). Garanție 15 ani. ☎ 0XXX-XXX-XXX. Ofertă gratuită!', ARRAY['montaj acoperiș Alba Iulia', 'acoperiș nou Alba', 'constructor acoperișuri Alba Iulia', 'acoperișuri premium Alba']),

('renovare-acoperisuri', 'Renovare Acoperișuri', 'Înlocuire completă învelitoare și modernizare structură', 'Renovare profesională acoperișuri în județul Alba. Înlocuire învelitoare degradată, modernizare izolație termică, reparații structură. Transformăm acoperișuri vechi în sisteme premium moderne cu garanție extinsă.', 'Renovare Acoperișuri Alba Iulia | Modernizare Completă | Akcon', 'Renovare acoperișuri în Alba Iulia. Înlocuire învelitoare, izolație modernă, garanție 15 ani. Echipă certificată. ☎ 0XXX-XXX-XXX', ARRAY['renovare acoperiș Alba Iulia', 'înlocuire țiglă Alba', 'modernizare acoperiș', 'reparație acoperiș vechi']),

('tigla-ceramica', 'Țiglă Ceramică Premium', 'Montaj țiglă ceramică cu durabilitate 100+ ani', 'Montaj profesional țiglă ceramică premium în județul Alba. Branduri de top: Tondach, Creaton. Durabilitate excepțională 100+ ani, izolație termică și fonică superioară. Ideal pentru case de lux și vile.', 'Țiglă Ceramică Alba Iulia | Tondach, Creaton | Akcon Premium', 'Montaj țiglă ceramică premium în Alba Iulia. Tondach, Creaton. Durabilitate 100+ ani. Echipă specializată. ☎ 0XXX-XXX-XXX', ARRAY['țiglă ceramică Alba Iulia', 'Tondach Alba', 'țiglă Creaton Alba', 'acoperiș ceramică premium']),

('tigla-metalica', 'Țiglă Metalică', 'Sisteme moderne cu garanție până la 50 ani', 'Montaj țiglă metalică premium în județul Alba. Sisteme Bilka, Wetterbest, Lindab cu garanție producător până la 50 ani. Greutate redusă, montaj rapid, varietate cromatică. Soluția modernă pentru acoperișuri durabile.', 'Țiglă Metalică Alba Iulia | Bilka, Lindab, Wetterbest | Akcon', 'Țiglă metalică premium Alba Iulia. Bilka, Lindab, Wetterbest. Garanție 50 ani. Montaj profesional. ☎ 0XXX-XXX-XXX', ARRAY['țiglă metalică Alba Iulia', 'Bilka Alba', 'Lindab Alba', 'acoperiș metal premium']),

('mansardari', 'Mansardări Complete', 'Transformare pod în spațiu locuibil premium', 'Mansardări complete în județul Alba. De la proiectare și autorizații până la execuție finalizată. Izolație termică premium, ferestre Velux, structură sigură. Creștem valoarea proprietății tale cu 30-40%.', 'Mansardare Alba Iulia | Proiectare + Execuție | Akcon Premium', 'Mansardări complete Alba Iulia. Proiectare, autorizații, execuție. Ferestre Velux. Garanție 15 ani. ☎ 0XXX-XXX-XXX', ARRAY['mansardare Alba Iulia', 'amenajare pod Alba', 'mansardare casă', 'extindere mansardă']),

('reparatii-acoperisuri', 'Reparații Acoperișuri', 'Intervenții rapide pentru infiltrații și degradări', 'Reparații profesionale acoperișuri în județul Alba. Intervenții rapide pentru infiltrații, țiglă deteriorată, probleme structurale. Disponibili pentru urgențe. Diagnosticare gratuită și soluții garantate.', 'Reparații Acoperișuri Alba Iulia | Intervenții Rapide | Akcon', 'Reparații acoperișuri Alba Iulia. Infiltrații, țiglă deteriorată. Intervenții rapide. Garanție pe lucrări. ☎ 0XXX-XXX-XXX', ARRAY['reparații acoperiș Alba Iulia', 'infiltrații acoperiș Alba', 'reparații urgente acoperiș', 'scurgeri acoperiș'])
ON CONFLICT (slug) DO NOTHING;
