import { Trophy, CheckCircle, Star, Users } from 'lucide-react';
import companyData from '../content/company.json';

export default function TrustBadges() {
  return (
    <section className="trust-badges">
      <div className="badge">
        <Trophy className="badge-icon" />
        <div className="badge-number">Din {companyData.yearFounded}</div>
        <div className="badge-text">Peste {companyData.experienceYears} ani experiență</div>
      </div>

      <div className="badge">
        <CheckCircle className="badge-icon" />
        <div className="badge-number">{companyData.projectsCompleted}+ Proiecte</div>
        <div className="badge-text">Finalizate cu succes</div>
      </div>

      <div className="badge">
        <Star className="badge-icon" />
        <div className="badge-number">100% Satisfacție</div>
        <div className="badge-text">Clienți mulțumiți</div>
      </div>

      <div className="badge">
        <Users className="badge-icon" />
        <div className="badge-number">{companyData.generations} Generații</div>
        <div className="badge-text">De meșteri profesioniști</div>
      </div>
    </section>
  );
}
