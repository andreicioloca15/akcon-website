import { Check } from 'lucide-react';

export default function WhyChooseUsMobile() {
  return (
    <section className="why-choose-section">
      <h2 className="section-title">De Ce Să Ne Alegi?</h2>

      <p>
        Cu o experiență de peste 45 ani în domeniul acoperișurilor, oferim servicii complete de
        montaj, renovare și reparații. Suntem o firmă de familie cu 4 generații de meșteri, dedicați
        calității și satisfacției clientului.
      </p>

      <ul className="checklist">
        <li>
          <Check />
          Echipă cu peste 30 ani experiență în domeniu
        </li>
        <li>
          <Check />
          Garanție 15 ani pentru manoperă
        </li>
        <li>
          <Check />
          Materiale premium certificate de producători
        </li>
        <li>
          <Check />
          4 generații de meșteri profesioniști
        </li>
        <li>
          <Check />
          Peste 100 de proiecte finalizate cu succes
        </li>
        <li>
          <Check />
          Consultanță gratuită și transparență totală
        </li>
      </ul>
    </section>
  );
}
