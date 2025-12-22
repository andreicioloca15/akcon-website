# 📚 Ghid Complet Decap CMS pentru AKCON

## 🎯 Ce Este și Cum Funcționează

Decap CMS este sistemul tău centralizat de management al conținutului. **Tot conținutul de pe site este acum în CMS** - nu mai trebuie să modifici cod niciodată!

**Accesează CMS-ul:** `https://site-ul-tau.com/admin`

---

## 🗂️ Structura Completă

### ⚙️ SETĂRI WEBSITE

Toate setările generale ale site-ului sunt aici. Modificările se aplică peste tot automat.

#### 1. **Informații Companie**
**Locație în CMS:** `⚙️ Setări Website` → `Informații Companie`

**Ce modifici:**
- Nume companie, telefon, email
- Adresă completă (stradă, oraș, județ, cod poștal)
- Statistici (ani experiență, proiecte finalizate, clienți mulțumiți)
- Număr WhatsApp

**Impact:** Header, footer, contact, statistici, butonul WhatsApp

---

#### 2. **Proces de Lucru (Cum Lucrăm)**
**Locație în CMS:** `⚙️ Setări Website` → `Proces de Lucru (Cum Lucrăm)`

**Structura:**
- Titlu secțiune (ex: "Cum Lucrăm")
- Subtitlu
- Listă de pași (fiecare pas are: număr, titlu, descriere, ordine)

**Impact:** Secțiunea "Cum Lucrăm" de pe homepage

**Exemplu pas:**
```
Număr: 1
Titlu: Consultație Gratuită
Descriere: Venim la dumneavoastră, evaluăm acoperișul actual...
Ordine: 1
```

---

#### 3. **De Ce Să Ne Alegeți**
**Locație în CMS:** `⚙️ Setări Website` → `De Ce Să Ne Alegeți`

**Structura:**
- Titlu secțiune
- Subtitlu
- Listă piloni/motive (fiecare are: tip, icon/număr, titlu, descriere, ordine)

**Tipuri de piloni:**
- **icon:** Folosește iconițe Lucide (ex: Users, ShieldCheck, MapPin)
- **number:** Folosește număr mare (ex: "15" pentru garanție)

**Impact:** Secțiunea navy (albastră) "De Ce Clienții Aleg Akcon"

**Exemplu pilon cu icon:**
```
Tip: icon
Icon: Users
Titlu: Echipă Proprie Certificată
Descriere: Nu subcontractăm...
Ordine: 2
```

**Exemplu pilon cu număr:**
```
Tip: number
Număr: 15
Titlu: Garanție 15 Ani Manoperă
Descriere: Cea mai extinsă garanție...
Ordine: 1
```

---

#### 4. **Zone Deservite**
**Locație în CMS:** `⚙️ Setări Website` → `Zone Deservite`

**Ce modifici:**
- Titluri secțiune
- Text hartă
- Listă localități (nume + ordine)
- Notă footer

**Impact:** Secțiunea "Zone Deservite în Județul Alba"

**Cum să adaugi localitate:**
1. Click "Add Localități"
2. Nume Localitate: "Mediaș"
3. Ordine: 11 (sau următorul număr)
4. Salvează

---

#### 5. **Parteneri / Branduri**
**Locație în CMS:** `⚙️ Setări Website` → `Parteneri / Branduri`

**Ce modifici:**
- Titlu secțiune
- Listă branduri (nume + ordine)

**Impact:** Secțiunea cu logo-urile partenerilor (VELUX, LINDAB, etc.)

**Cum să adaugi brand:**
1. Click "Add Branduri"
2. Nume Brand: "BRAMAC"
3. Ordine: 6
4. Salvează

---

### 🛠️ SERVICII

**Locație în CMS:** `🛠️ Servicii`

**Unde apar serviciile:**
- Homepage: carduri în secțiunea "Serviciile Noastre"
- Header: dropdown "Servicii" (doar cele cu Link completat)
- Mobile menu

**Câmpuri:**
- **Titlu Serviciu:** Ex: "Montaj Acoperișuri Noi"
- **Descriere Scurtă:** 2-3 propoziții pentru card
- **Icon (Lucide):** DOAR numele (ex: `Home`, `Wrench`, `Shield`)
  - 📖 Vezi toate: [lucide.dev/icons](https://lucide.dev/icons)
- **Link Pagină:** Ex: `/servicii/montaj-acoperisuri`
  - ⚠️ Dacă lași gol, serviciul apare doar pe homepage, NU în meniu
- **Ordine Afișare:** Număr (1, 2, 3...)

**✅ Servicii existente:**
1. Montaj Acoperișuri Noi
2. Renovare Acoperișuri
3. Țiglă Ceramică
4. Țiglă Metalică
5. Mansardări
6. Reparații Acoperișuri
7. Montaj Țiglă (nou)

---

### 📸 PORTOFOLIU PROIECTE

**Locație în CMS:** `📸 Portofoliu Proiecte`

**Unde apar:** Homepage, secțiunea "Transformări de Care Suntem Mândri" (carduri cu hover)

**Câmpuri:**
- Titlu proiect
- Locație (oraș)
- Tip lucrare (ex: "Țiglă ceramică Tondach")
- Suprafață (ex: "280 mp")
- Durată (ex: "4 săptămâni")
- Imagine (800x600px minim)
- Descriere scurtă (1-2 propoziții)
- Citat client (apare la hover, opțional)
- Nume client (opțional)
- Ordine afișare

**✅ Proiecte existente:**
1. Vilă Premium Alba Iulia
2. Renovare Completă Sebeș
3. Mansardare Premium Aiud
4. Casă Modernă Blaj
5. Renovare Vilă Cugir
6. Acoperiș Nou Ocna Mureș

---

### 💬 TESTIMONIALE CLIENȚI

**Locație în CMS:** `💬 Testimoniale Clienți`

**Unde apar:** Homepage, secțiunea "Ce Spun Clienții Noștri" (primele 3)

**Câmpuri:**
- Nume client
- Oraș
- Rating (1-5 stele)
- Testimonial (2-4 propoziții)
- Dată
- Ordine afișare

**Sfat:** Primele 3 testimoniale (ordine 1, 2, 3) apar pe homepage

**✅ Testimoniale existente:**
1. Maria Georgescu (Alba Iulia)
2. Ioan Popescu
3. Andrei Dumitrescu

---

### 📋 STUDII DE CAZ DETALIATE

**Locație în CMS:** `📋 Studii de Caz Detaliate`

**CE ESTE:** Versiune extinsă pentru proiecte importante (pagină întreagă cu toate detaliile)

**Când să folosești:**
- Pentru proiecte majore care merită pagină dedicată
- Când vrei să arăți procesul complet: provocări → soluții → rezultate

**Câmpuri:**
- Titlu + subtitlu
- Locație completă (cu stradă)
- Imagine principală
- Galerie imagini (multiple)
- Descriere completă (markdown - poți folosi formatare)
- Provocări, Soluții, Rezultate (secțiuni separate)
- **Detalii Tehnice:**
  - Tip acoperiș
  - Material
  - Suprafață
  - Durată
  - An finalizare
- Testimonial client
- Data publicării

**Diferența față de Portofoliu:**
- **Portofoliu:** Card simplu cu hover pe homepage
- **Studiu de Caz:** Pagină întreagă cu detalii complete

---

## 🎨 Iconițe Recomandate

| Serviciu | Icon Recomandat |
|----------|----------------|
| Montaj acoperișuri | `Home`, `Building` |
| Renovare | `Wrench`, `Construction` |
| Reparații | `Hammer`, `Wrench` |
| Țiglă ceramică | `Grid3x3`, `Layers` |
| Țiglă metalică | `ShieldCheck`, `Shield` |
| Mansardări | `Home`, `ArrowUpCircle` |
| Izolații | `Shield` |
| Jgheaburi | `Droplet` |
| Echipă | `Users` |
| Locație | `MapPin` |
| Certificare | `ShieldCheck` |

**Vezi toate:** [lucide.dev/icons](https://lucide.dev/icons)

---

## 🔧 Cum Funcționează Automat

### Detectare Automată
✅ Site-ul **detectează automat** toate fișierele JSON
✅ Adaugi în CMS → apare instant pe site
✅ Ștergi din CMS → dispare instant
✅ **Nu trebuie să modifici cod**

### Ordonare Automată
Toate colecțiile se sortează automat după câmpul "Ordine Afișare" / "Ordine":
- Număr mai mic = apare mai devreme
- Ex: Ordine 1, 2, 3, 4...

### Linkuri Automate
- Serviciile cu "Link Pagină" completat → apar în dropdown-ul header
- Serviciile fără link → apar doar pe homepage

---

## ✅ Checklist Adăugare Conținut

### Serviciu Nou
1. Du-te în CMS → `🛠️ Servicii` → `New 🛠️ Servicii`
2. Completează:
   - Titlu descriptiv
   - Descriere (2-3 propoziții)
   - Icon: DOAR numele (ex: `Wrench`)
   - Link: `/servicii/nume-serviciu` (dacă vrei în meniu)
   - Ordine: număr mai mare decât ultimul serviciu
3. Click **"Publicat"** (nu Ciornă!)
4. Verifică:
   - ✓ Apare în "Serviciile Noastre" pe homepage?
   - ✓ Apare în dropdown header? (doar dacă ai Link)

### Proiect Portofoliu Nou
1. `📸 Portofoliu Proiecte` → `New 📸 Portofoliu Proiecte`
2. Completează toate câmpurile
3. Upload imagine (min 800x600px)
4. Citat client: scurt, 1 propoziție
5. Ordine: număr mai mare decât ultimul proiect
6. Click **"Publicat"**

### Testimonial Nou
1. `💬 Testimoniale Clienți` → `New 💬 Testimoniale Clienți`
2. Nume complet client
3. Oraș
4. Rating: 5 stele (de obicei)
5. Testimonial: 2-4 propoziții, specific
6. Dată: când l-ai primit
7. Ordine: 1-3 pentru homepage, >3 pentru viitor
8. Click **"Publicat"**

### Localitate Nouă în Zone Deservite
1. `⚙️ Setări Website` → `Zone Deservite`
2. Scroll la "Localități"
3. Click "Add Localități"
4. Nume Localitate: "Mediaș"
5. Ordine: următorul număr disponibil
6. Salvează

---

## 🚨 Erori Comune și Soluții

### ❌ Serviciul nu apare în dropdown header
**Cauză:** Câmpul "Link Pagină" este gol
**Soluție:** Editează serviciul, adaugă link (ex: `/servicii/montaj-tigla`)

### ❌ Iconița nu apare corect
**Cauză:** Ai pus cod/script în loc de nume simplu
**Soluție:** Șterge tot, pune doar: `Home`, `Wrench`, etc.

### ❌ Conținutul nou nu apare
**Cauză:** Status "Ciornă" în loc de "Publicat"
**Soluție:** Editează, schimbă în "Publicat"

### ❌ Ordinea nu este corectă
**Cauză:** Câmpul "Ordine" nu este setat logic
**Soluție:** Folosește 1, 2, 3, 4... (mic = devreme)

### ❌ Schimbările nu se văd
**Cauză:** Cache browser
**Soluție:** Refresh hard (Ctrl+Shift+R sau Cmd+Shift+R)

---

## 📊 Mapare Completă: Unde Apare Fiecare Colecție

| Colecție CMS | Unde Apare pe Site |
|--------------|-------------------|
| **Informații Companie** | Header (telefon), Footer (toate datele), Contact, Stats |
| **Proces de Lucru** | Homepage → secțiunea "Cum Lucrăm" |
| **De Ce Să Ne Alegeți** | Homepage → secțiunea navy "De Ce Clienții Aleg Akcon" |
| **Zone Deservite** | Homepage → secțiunea "Zone Deservite în Județul Alba" |
| **Parteneri/Branduri** | Homepage → secțiunea cu logo-uri branduri |
| **Servicii** | Homepage (carduri) + Header dropdown + Mobile menu |
| **Portofoliu** | Homepage → "Transformări de Care Suntem Mândri" |
| **Testimoniale** | Homepage → "Ce Spun Clienții Noștri" (primele 3) |
| **Studii de Caz** | Pagini dedicate (când le creezi) |

---

## 💡 Best Practices

### Pentru Servicii
- Descrieri clare, concrete, cu beneficii
- Verbe de acțiune: "Montăm", "Renovăm", "Asigurăm"
- Menționează garanții, certificări, timpi

### Pentru Portofoliu
- Imagini de calitate (min 800px lățime)
- Titluri cu locație specifică
- Citate client scurte dar impactante

### Pentru Testimoniale
- Nume complete reale
- Detalii specifice (nu doar "foarte bine")
- 2-4 propoziții, nu prea lung

### Pentru Process Steps
- Titluri clare, acționabile
- Descrieri care inspiră încredere
- Max 6-8 pași (nu complica)

### Pentru Why Choose Us
- 4 piloni maxim (nu supraîncărca)
- Fiecare pilon = un beneficiu major
- Folosește numere când ai date concrete (ex: "15" ani garanție)

---

## 🎯 TL;DR - Quick Start

1. **Accesează:** `site-ul-tau.com/admin`
2. **Login** cu contul tău
3. **Alege colecția** din sidebar:
   - `⚙️ Setări Website` pentru setări generale
   - `🛠️ Servicii` pentru servicii
   - `📸 Portofoliu Proiecte` pentru proiecte
   - `💬 Testimoniale Clienți` pentru testimoniale
4. **Click "New"** pentru a adăuga sau click pe item existent pentru a edita
5. **Completează câmpurile** (urmează hint-urile)
6. **Click "Publicat"** (nu Ciornă!)
7. **Refresh site-ul** și verifică

---

## 📞 Recomandări Finale

### Ce NU Trebuie Să Faci
❌ Nu modifica fișierele JSON manual în cod
❌ Nu crea fișiere duplicate
❌ Nu lăsa conținut în status "Ciornă" permanent
❌ Nu uita să completezi câmpul "Ordine"

### Ce Trebuie Să Faci
✅ Folosește întotdeauna CMS-ul pentru modificări
✅ Publică conținutul când e gata
✅ Verifică preview-ul înainte de publicare
✅ Păstrează o ordine logică (1, 2, 3...)
✅ Folosește imagini de calitate

---

## 🎉 Ai Acum Control Complet!

**Toate aceste secțiuni sunt editabile din CMS:**
- ⚙️ Informații companie, telefon, email, adresă
- 📊 Statistici (ani, proiecte, clienți)
- 🛠️ Toate serviciile
- 📸 Toate proiectele din portofoliu
- 💬 Toate testimonialele
- 🎯 Procesul de lucru (6 pași)
- ⭐ De ce să alegi Akcon (4 piloni)
- 📍 Zone deservite (10 localități)
- 🏢 Parteneri branduri (5 branduri)

**Nu mai trebuie să atingi codul niciodată!**
