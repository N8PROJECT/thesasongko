# UI STRUCTURE — Luxury Wedding Agency Landing Page

> Versi 1.0 · Referensi: screenshot kolase dengan tema forest green dan ivory.  
> **Implementasi wajib:** area hero mengganti foto statis menjadi **video autoplay tanpa tombol play/pause/player UI**. Tombol CTA untuk menghitung biaya/konsultasi tetap ditampilkan.  
> Bahasa konten contoh: Indonesia. Screenshot memakai bahasa Rusia; copy lokal adalah adaptasi yang harus dikonfirmasi pemilik brand.

## 0. Metode rekonstruksi

- **[TERLIHAT]** hanya untuk objek/hierarki yang benar-benar terlihat pada screenshot.
- **[ESTIMASI]** untuk visual sizing, typography, grid, dan warna yang diperkirakan dari gambar.
- **[REKOMENDASI]** untuk struktur DOM, interaksi, perilaku responsive dan urutan section.
- Screenshot adalah **kolase beberapa section dengan skala berbeda**, sehingga kita tidak dapat menyimpulkan satu urutan scroll pasti dari posisi setiap panel.
- Kami menyusun alur landing page yang logis: `Hero → Process → Services/Package → Journey → Testimonials → Pricing form → Consultation CTA → Footer`. Urutan dapat disesuaikan bila tersedia screenshot utuh.

## 1. Inventory seluruh panel screenshot

| ID | Lokasi pada kolase | Elemen terlihat | Catatan |
|---|---|---|---|
| `A` | Kiri atas | Hero image meja wedding, header, headline serif, CTA estimasi biaya | Menjadi **hero video** |
| `B` | Kiri tengah | Ivory Process panel: bunga calla besar, headline campuran hitam/hijau, daftar plus icon | Accordion |
| `C` | Kiri bawah | Panel testimonial, heading “apa kata klien”, card review + avatars | Sebagian card terpotong frame |
| `D` | Kolom sempit tengah atas | Photo kecil pasangan pengantin rotated, decorative flower, copy, CTA | Contact/promo card |
| `E` | Kolom sempit tengah | Journey card dengan garden background, numbered tabs, title detail, wedding cake cutout | Versi compact dari motif journey kanan |
| `F` | Kolom sempit tengah bawah | Estimasi biaya: 5 input dan slider budget, CTA | Form vertikal |
| `G` | Kanan paling atas (terpotong) | Wide wedding cake / event photo, overlay label kecil | Photo banner / section transition |
| `H` | Kanan atas | Ivory package section, three-line headline serif, checklist, green envelope illustration | Paket full service |
| `I` | Kanan tengah | Outdoor garden background, title, tabs 01–07, central step card, cake foreground | Journey detail versi lebar |
| `J` | Kanan bawah (terpotong) | Ivory heading “СОТЫЙ ПРУД” (“Sotyy Prud”, nama tempat), deskripsi | Venue/experience section |

**Konten asli terlihat dalam bahasa Rusia**, contoh: “РОСКОШНАЯ СВАДЬБА БЕЗ ЛИШНИХ ЗАТРАТ” (luxury wedding without unnecessary expenses), “БЕРЁМ НА СЕБЯ ВЕСЬ ПРОЦЕСС — ОТ ИДЕИ ДО ФИНАЛЬНОГО ТОСТА” (handle the whole process), “ПОЛНЫЙ СПЕКТР УСЛУГ ПОД КЛЮЧ...” (full turnkey services), “УЗНАЙТЕ СТОИМОСТЬ ВАШЕЙ СВАДЬБЫ” (find out the cost). Terjemahan digunakan untuk pemahaman, bukan copy resmi.

## 2. Page architecture [REKOMENDASI]

```text
app/
└── (marketing)/
    └── page.tsx                         # Home / Wedding agency landing
        ├── SiteHeader
        │   ├── BrandLogo
        │   ├── DesktopNav
        │   ├── PhoneLink
        │   ├── HeaderInquiryButton
        │   └── MobileMenu
        ├── main
        │   ├── HeroSection                 [A]
        │   │   ├── HeroBackgroundVideo     [NEW; replaces photo]
        │   │   ├── HeroScrim
        │   │   ├── HeroEyebrow
        │   │   ├── HeroTitle (h1)
        │   │   ├── HeroSupportingCopy
        │   │   └── CostEstimateCTA        [business button]
        │   ├── ProcessSection              [B]
        │   │   ├── SectionHeading
        │   │   ├── BotanicalCutout
        │   │   └── ProcessAccordion
        │   ├── FullServicePackageSection   [H]
        │   │   ├── PackageHeading
        │   │   ├── IncludedServicesList
        │   │   └── EnvelopeArtwork
        │   ├── JourneySection              [E,I]
        │   │   ├── LandscapeImage
        │   │   ├── JourneyHeading
        │   │   ├── StageTabs (01–07)
        │   │   └── ActiveStageCard
        │   │       └── CakeIllustration
        │   ├── TestimonialsSection         [C]
        │   │   ├── SectionHeading
        │   │   └── ReviewCarousel
        │   ├── VenueSpotlightSection       [J]
        │   │   ├── VenueHeading
        │   │   └── VenueDescription
        │   ├── PricingLeadSection          [F]
        │   │   └── WeddingCostForm
        │   └── ConsultationSection         [D]
        │       ├── TiltedBridePhoto
        │       ├── DecorativeFlower
        │       ├── ConsultationCopy
        │       └── InquiryCTA
        └── SiteFooter
```

**Note:** Panel G (wedding cake photo banner) bisa dipakai sebagai visual transition di sebelum packages/journey. Jangan membuat section baru tanpa konten bisnis relevan hanya demi memaksakan kolase.

## 3. Global shell, semantic HTML

```tsx
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <ProcessSection />
        <FullServicePackageSection />
        <JourneySection />
        <TestimonialsSection />
        <VenueSpotlightSection />
        <PricingLeadSection />
        <ConsultationSection />
      </main>
      <SiteFooter />
    </>
  );
}
```

- Main wrapper on dark forest canvas, editorial ivory panels separated by narrow green gutters.
- Prefer `<header>`, `<main>`, `<section aria-labelledby>`, `<nav aria-label>`, `<footer>`.
- First focusable helper: skip-link ke `#main-content`.
- One `h1` in hero; each following full section has `h2`.
- Recommended max-width `1440px`; spacing token in `design-system.md`.

## 4. Section A — Header + HERO VIDEO (priority P0)

### 4.1 Observed structure

**[TERLIHAT]** header overlay in top area; left logo with Russian copy, centered nav (tentang, biaya, tahapan, ulasan), phone contact, right outline inquiry button. Hero wedding tablescape image. Bottom-left small eyebrow and large serif uppercase title. Bottom-right supporting copy and CTA pill with green circle arrow.

### 4.2 Required change vs screenshot

| Aspect | Original screenshot | New implementation |
|---|---|---|
| Hero media | Static wedding photo | **Autoplay background video** |
| Play controls | Tidak terlihat | **Tidak boleh render tombol play/pause ataupun controls** |
| Media playback | Tidak dapat diketahui | `autoPlay muted loop playsInline` |
| Fallback | N/A | Poster image cocok dengan scene |
| Copy | Serif white | Tetap serif white |
| Business CTA | “Рассчитать стоимость” | Tetap “Hitung Estimasi Biaya” |
| Accessibility | Tidak terlihat | Reduced motion → poster statis |

### 4.3 Desktop wireframe

```text
┌───────────────────────────────────────────────────────────────────────────┐
│ BRAND        Tentang   Layanan   Proses   Ulasan      +62...   [Hubungi]  │
│                                                                           │
│             BACKGROUND VIDEO — AUTOPLAY / MUTED / LOOP                   │
│                 Luxury table decor, flowers, candles                     │
│                    (No video UI / no play icon)                          │
│                                                                           │
│                                                                           │
│ Eyebrow                                                     Copy singkat  │
│ PERNIKAHAN MEWAH,                                            [→ Hitung    │
│ TANPA BIAYA BERLEBIHAN                                          Biaya]    │
└───────────────────────────────────────────────────────────────────────────┘
```

### 4.4 Mobile wireframe

```text
┌─────────────────────────┐
│ LOGO                 ☰  │
│                         │
│                         │
│      AUTOPLAY VIDEO     │
│      object-fit:cover   │
│                         │
│                         │
│ Eyebrow                 │
│ PERNIKAHAN MEWAH,       │
│ TANPA BIAYA BERLEBIHAN  │
│ Supporting description  │
│ [→ Hitung Biaya]        │
└─────────────────────────┘
```

### 4.5 Interaction specification

- **Hero mounts →** browser attempts autoplay automatically if motion preference allows. No user action required.
- **No player UI:** DO NOT add `controls`, play icon, video modal, overlay media trigger, scrubber, volume slider or custom player toolbar.
- **Muted:** no sound; plays inline on iOS with `playsInline`.
- **Loop:** no black frame between end/start; edit file to seamless clip.
- **Autoplay denied / network error:** poster/background image remains visible; hero text/CTA always work.
- **Reduced motion:** show static poster rather than autoplay; no play button is added.
- **Tab hidden:** optionally pause; resume when visible and permitted.
- **Scroll:** no forced scrub/play-on-scroll effect; avoid scroll hijacking.
- **CTA:** anchor to `#estimasi-biaya` (or navigate to pricing/contact route). This is NOT a playback control.

### 4.6 Implementation outline

```tsx
export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <HeroBackgroundVideo />
      <div className="hero__content container">
        <div className="hero__headline">
          <span className="eyebrow">Wedding planning & coordination</span>
          <h1 id="hero-title" className="display">
            Pernikahan mewah, <br /> tanpa biaya berlebihan
          </h1>
        </div>
        <div className="hero__aside">
          <p>Perencanaan elegan, terstruktur, dan personal.</p>
          <a className="button button--pill" href="#estimasi-biaya">
            <span aria-hidden="true">→</span> Hitung Estimasi Biaya
          </a>
        </div>
      </div>
    </section>
  );
}
```

`HeroBackgroundVideo` implementation lengkap tersedia di `design-system.md` termasuk media query reduced motion. Jangan memakai iframe YouTube/Vimeo jika targetnya full-cover autoplay tanpa overlay; native `<video>` memberi kontrol layout lebih presisi.

### 4.7 Asset contract

```text
public/
  videos/
    wedding-hero.mp4        # required H.264, silent, loop-friendly
    wedding-hero.webm       # optional optimized alternative
  images/
    hero-poster.webp        # required
```

**Footage direction:** close-ups table decor, candle flames, flowers, soft camera dolly, no sudden cuts, enough negative space below for white text. Brand visual tidak boleh bergeser ke gaya party neon/fast-cut.

## 5. Section B — “Kami menangani seluruh proses”

### 5.1 Layout

**[TERLIHAT]** ivory panel; mini overline di kiri atas; headline dua baris serif dengan segmen green; besar cutout calla flower di kiri bawah. Kolom kanan memuat penjelasan singkat lalu 7 baris layanan berakhir ikon hijau circular plus.

**[REKOMENDASI]** desktop two-column: botanical artwork 40%, content+accordion 60%; mobile image dapat dipindah bawah setelah headline atau menjadi dekor di sudut, accordion mengambil full width.

### 5.2 Accordion content model

Isi awal yang disarankan (bukan transkripsi literal screenshot):

| Key | Label Indonesia |
|---|---|
| `planning` | Perencanaan pernikahan menyeluruh |
| `budget` | Solusi sesuai anggaran |
| `vendors` | Vendor terpercaya |
| `timing` | Timeline yang terencana |
| `experiences` | Konsep dan pengalaman personal |
| `coordination` | Koordinasi pada hari-H |
| `venue` | Lokasi pilihan untuk perayaan |

- Default: semua tertutup atau item pertama terbuka, dipilih konsisten.
- Klik baris → toggle panel; plus berubah menjadi minus/rotate 45°.
- Keyboard Enter/Space works, `aria-expanded`, `aria-controls`, unique ID.
- Expanded text max width 55ch, preserve layout stability.
- Dilarang menempatkan ikon plus yang tidak interaktif tanpa click target.

## 6. Section H — Full service / package overview

### 6.1 Layout

**[TERLIHAT]** ivory background, centered eyebrow, massive three-line heading serif uppercase: “ПОЛНЫЙ СПЕКТР УСЛУГ / ПОД КЛЮЧ / ДЛЯ СВАДЬБЫ ВАШЕЙ МЕЧТЫ”; middle line green. Left checklist on cream surface; right oversized green paper envelope artwork, attached paper tag/card and wedding rings emblem.

**[REKOMENDASI]** heading centered; bottom split two columns `minmax(0,1fr)`, sufficient whitespace above. Mobile: heading center → checklist → artwork, avoid overlap with text.

### 6.2 Checklist

In screenshot, a list of service inclusions with green checkmarks is visible. Some small lines are not reliably readable; structure matters more than unverifiable exact wording. Recommended schema:

```ts
type Package = {
  id: string;
  eyebrow?: string;
  heading: string;
  included: { id: string; label: string }[];
  priceLabel?: string;
  illustration: { src: string; alt: string };
  cta?: { text: string; href: string };
};
```

**Price:** card/envelope shows “800 т.р.” on original Russian visual, plausibly shorthand for thousands of rubles; **do not assume this is production pricing or use Indonesian rupiah conversion without business input**. In adapted website use `{priceLabel}` from CMS/data. Logos/monograms need assets owned/licensed by client.

## 7. Section E + I — Journey “Dari konsep hingga rundown acara”

### 7.1 Observed pattern

**[TERLIHAT]** landscape photo with pond/garden backdrop; white serif heading across top. Numeric stages 01, 02, 03, 04, 05, 06, 07 in a tab row. Front ivory detail card contains number/eyebrow, title serif, paragraph, wedding cake cutout at bottom right. Middle-column variant shows multiple stacked cards offset to the right.

### 7.2 Recommended interaction

Use one content component rendered responsively: desktop overlapping stage cards + tabs; mobile tab strip + single card. Do **not** render two independent sections just because screenshot repeats the same section at two scales.

```ts
type JourneyStep = {
  id: string;            // '01'...'07'
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};
```

**Plausible seven-stage content [REKOMENDASI, not verified as literal screenshot]:** discovery call, concept, budget, vendor selection, detail alignment, final coordination, wedding day.

#### State model

```text
State: activeStepId (default "01")
User clicks tab 04 -> set activeStepId "04"
Screen reader -> announce selected state via role=tab + aria-selected
Card -> update heading, text, optional image; maintain stable height if possible
Keyboard -> ArrowLeft/ArrowRight, Home/End per tab pattern
```

Accessibility: `role="tablist"`, numbered buttons `role="tab"` with `aria-controls`; active panel `role="tabpanel"`. The card itself should not require horizontal page scrolling.

## 8. Section C — Testimonials

### 8.1 Visual structure

**[TERLIHAT]** broad ivory panel, small overline, headline serif in black+green, cards with circular grayscale avatar, names, copy and green circular arrows on heading side. At least three cards can be glimpsed; screenshot crops bottom.

### 8.2 Recommended behavior

- Desktop 3 card grid within clipping carousel area or 3 visible slider cards.
- Mobile 1 card; next/previous arrow usable with mouse/touch and keyboard.
- Use manual navigation; no auto-playing testimonial slider.
- Generic testimonial schema:

```ts
type Testimonial = {
  id: string;
  name: string;
  city?: string;
  quote: string;
  avatar: { src: string; alt: string };
};
```

- Preserve quotation authenticity: use only real permitted reviews; screenshot text too small to fully transcribe.
- Reviewer avatars require permission/licensing; otherwise use typography-only cards.

## 9. Section F — Wedding cost / lead form

### 9.1 Observed UI

**[TERLIHAT]** narrow ivory vertical panel with eyebrow, heading “УЗНАЙТЕ СТОИМОСТЬ ВАШЕЙ СВАДЬБЫ” (get wedding cost), small description, five stacked fields, budget slider, note/consent text, green CTA.

Fields readable in crop:

1. “Ваше имя” — nama.
2. “Номер телефона” — nomor telepon.
3. “Дата свадьбы” — tanggal wedding.
4. “Количество гостей” — jumlah tamu.
5. “Ваши пожелания и необычные хотелки” — preferensi/kebutuhan khusus.

Under them: “Предполагаемый бюджет” — perkiraan budget, slider with endpoints roughly **700 000** and **2 000 000**. Currency and business logic must be sourced from owner.

### 9.2 Validation

| Field | Input | Validation |
|---|---|---|
| Nama | `text` | Required, trim, reasonable length |
| Telepon | `tel` | Required, region-aware format; avoid hardcoded Russian country code in ID site |
| Tanggal | `date`/date-picker | Date not past if scheduling future wedding |
| Tamu | `number` | Integer >0, upper bound business-owned |
| Keinginan | `textarea` | Optional, max-length |
| Budget | `range` + readable output | Min/max defined by business; display localized currency |
| Consent | Checkbox if legally required | Link privacy policy |

### 9.3 Submit interaction

`idle → validating → submitting → success | error`. Disable duplicate submission. Do not present fabricated price or “request sent” until actual backend confirms. User-facing error has retry option. If form is only lead inquiry, CTA should be “Minta Estimasi” rather than pretending to calculate instant result.

### 9.4 CTA destinations

- Hero CTA: `href="#estimasi-biaya"`.
- Package CTA: same section or separate consultation flow.
- Consultation mini-card CTA: same section/form.
- Header inquiry CTA: form/contact route.

Focus after anchored navigation should reach the section heading or first input when appropriate, with sticky header offset via `scroll-margin-top`.

## 10. Section D — Consultation/promo card

**[TERLIHAT]** vertical ivory card with photo rotated left, decorative white flower pinned near photo, paragraph explaining consult/organizing, green rectangular CTA centered.

**[REKOMENDASI]** treat as reusable marketing callout:

```tsx
<ConsultationCard
  image="/images/consultation-bride.webp"
  heading="Wujudkan hari yang terasa personal"
  body="Ceritakan ide pernikahan Anda dan dapatkan arahan awal."
  action={{ label: "Konsultasi Sekarang", href: "#estimasi-biaya" }}
/>
```

This compact card could be a sidebar element on wide desktop or inline full-width on mobile. Do not put essential form CTA exclusively in a narrow sidebar.

## 11. Section G/J — Editorial photograph & venue spotlight

- Panel G: cake/reception image across top-right screenshot; appears part of a photo banner, exact section name unknown.
- Panel J: ivory section with headline beginning `«СОТЫЙ ПРУД» — МЕСТО, ГДЕ ПРОЙДЁТ ВАША СВАДЬБА`, plus short paragraph. Treat as venue spotlight or wedding location feature rather than global brand section.
- Provide `VenueSpotlightSection` only if venue content exists and the business truly promotes that venue. Otherwise this can be swapped for generic `FeaturedVenueSection` with CMS data.
- Possible fields: `venueName`, `headline`, `description`, `images`, `ctaHref`, `location`.
- Avoid inventing address, prices, rating, or available dates.

## 12. Mobile-first layout matrix

| Section | ≥1280px | 768–1279px | ≤767px |
|---|---|---|---|
| Header | Logo/nav/tel/CTA one row | Reduced nav | Brand + menu |
| Hero | Full-bleed video, bottom left title, right copy+CTA | Two-column bottom if fits | Stack title → copy → CTA |
| Process | Left floral 40%, right accordion 60% | Left 30%, right 70% | Full width text & accordion; floral below/behind safely |
| Packages | Large title; checklist/envelope 50/50 | 55/45 | Stack list then envelope |
| Journey | Pond bg + 7 tabs + front card | Compact front card | Tab strip horizontal with single card |
| Testimonials | 3 visible cards | 2 visible | 1 card + manual arrows |
| Lead form | Narrow centered block or split editorial | Container 680px | Full width inputs, large tap targets |
| Consultation | Compact card in grid | Inline card | Full width; image above text |
| Venue | Two-column editorial | Stacked or 50/50 | Text then image |

Breakpoints are engineering recommendations, not exact reference breakpoints.

## 13. React folder structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx
│   │   ├── MobileMenu.tsx
│   │   └── SiteFooter.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── FullServicePackageSection.tsx
│   │   ├── JourneySection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── VenueSpotlightSection.tsx
│   │   ├── PricingLeadSection.tsx
│   │   └── ConsultationSection.tsx
│   ├── media/
│   │   ├── HeroBackgroundVideo.tsx
│   │   ├── EditorialImage.tsx
│   │   └── BotanicalCutout.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Accordion.tsx
│   │   ├── Tabs.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── InputField.tsx
│   └── forms/
│       └── WeddingCostForm.tsx
├── data/
│   ├── nav.ts
│   ├── process.ts
│   ├── journey.ts
│   ├── packages.ts
│   └── testimonials.ts
├── lib/
│   ├── formatCurrency.ts
│   ├── validation.ts
│   └── analytics.ts
└── styles/
    ├── tokens.css
    └── components.css
public/
├── videos/
│   ├── wedding-hero.mp4
│   └── wedding-hero.webm
└── images/
    ├── hero-poster.webp
    ├── process-calla.webp
    ├── journey-garden.webp
    ├── journey-cake.webp
    ├── package-envelope.webp
    └── consultation-bride.webp
```

## 14. Data contracts

```ts
export type NavigationItem = {
  label: string;
  href: string;
};

export type ProcessItem = {
  id: string;
  title: string;
  details: string;
};

export type JourneyStep = {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  visual?: { src: string; alt: string };
};

export type Testimonial = {
  id: string;
  reviewerName: string;
  description: string;
  avatarUrl?: string;
};

export type WeddingFormValues = {
  name: string;
  phone: string;
  weddingDate: string;
  guests: number | null;
  preferences: string;
  estimatedBudget: number;
  consent: boolean;
};

export type HeroMedia = {
  videoMp4: string;
  videoWebm?: string;
  poster: string;
  objectPositionDesktop?: string;
  objectPositionMobile?: string;
};
```

## 15. Content/visual ordering guidance

### Recommended navigation labels

`Tentang`, `Layanan`, `Proses`, `Ulasan`, `Estimasi Biaya`; phone link `tel:`; CTA “Hubungi Kami”. Anchor target harus benar-benar ada.

### Narrative progression

1. **Attract** with cinematic muted video + unmistakable offer.
2. **Build trust** through explicit end-to-end process capabilities.
3. **Clarify offer** with turnkey package checklist and paper envelope motif.
4. **Explain execution** via 7-stage journey experience.
5. **Provide proof** through verified testimonials.
6. **Show venue experience** only if relevant to brand.
7. **Convert** with transparent lead form and consultation CTA.

### Conversion details

- CTA label consistent across hero, pricing and inquiry cards.
- Avoid more than one prominent CTA visible at once on mobile except sticky CTA if client explicitly requests it.
- Keep `#estimasi-biaya` as anchor. Form ideally no more than 5 fields + budget + consent.
- Do not force video interaction before user can reach CTA.

## 16. State and events

| Element | Event | State/output |
|---|---|---|
| Hero video | Mount | Autoplay if allowed (muted, loop, inline) |
| Hero video | Reduced motion detected | Pause/hide video, show poster |
| Hero video | Failure/autoplay denied | Poster remains, CTA remains |
| Header menu | Toggle | Drawer open/closed, keyboard escape close |
| Process accordion | Toggle item | Expanded/collapsed details |
| Journey tabs | Select `01..07` | Active stage title/text/image changed |
| Testimonials | Prev/next | Active visible cards changed |
| Budget slider | Input/change | Form budget numeric + formatted output |
| Form submit | Valid/invalid | Submit or show field errors |
| Form backend response | Success/error | Confirmation or recovery message |
| CTA anchor | Click | Navigate/scroll to pricing form |

## 17. Implementation milestones

**P0 — foundation & first fold:** token palette, fonts, shell forest frame, hero video autoplay+poster, responsive header, CTA anchor.

**P1 — core content:** process accordion, full service package, journey 7-step interaction.

**P2 — conversion & proof:** testimonials, pricing form validation/backend, consultation card.

**P3 — polish:** venue spotlight, image loading strategy, reduced-motion audits, device testing, analytics.

## 18. QA acceptance criteria

### Visual fidelity

- [ ] Dominant dark forest framing surrounding warm ivory sections.
- [ ] Editorial serif headlines with strategic green highlighted words.
- [ ] Botanical elements: white calla cutout, wedding cake and green envelope illustration.
- [ ] Asymmetrical crop/stacking preserved without causing mobile overflow.
- [ ] Hero text aligns visually to lower region like reference.
- [ ] Text overlay remains legible over bright moving video footage.

### Mandatory hero behavior

- [ ] Video automatically attempts to play on page load (without click) where browser permits.
- [ ] `muted`, `loop`, `playsInline`, and `autoPlay` used.
- [ ] **No video playback button or controls of any kind**.
- [ ] Business CTA to cost estimator **remains present and functional**.
- [ ] Poster appears on loading/error/blocked autoplay.
- [ ] Reduced motion respects user preference and uses poster.
- [ ] Mobile Safari test: video inline and cover crop acceptable.
- [ ] Video optimized (size, format, cache headers, no intrusive audio).

### Usability & accessibility

- [ ] Entire accordion row clickable/keyboard usable.
- [ ] Journey tab list accessible with proper role and focus behavior.
- [ ] Testimonial slider (if enabled) has manual controls.
- [ ] Form labels/validation/errors and server response are meaningful.
- [ ] Contrast tested; tap target min 44×44px.
- [ ] No horizontal scroll at 320px, 375px, 768px, 1024px, 1440px.
- [ ] Source assets and copyright permissions cleared.

## 19. Non-goals / uncertainties

- The original site's **full scroll order**, fonts, exact pixels, all Russian paragraphs, live slider behavior, form backend, prices and brand identity are not recoverable from a single composite screenshot.
- Screenshot has still imagery only; the video is deliberately a changed requirement provided by user. No actual video asset was uploaded, so file paths are placeholders.
- Repeated journey artwork in center and right is interpreted as different presentation crops of the **same design pattern**, not proof of duplicated production sections.
- The original Russian branding and location-specific names should not be copied into a new commercial brand without validation.

---

**Dependency:** `design-system.md` defines colors, spacing, type scale, UI interaction and complete `HeroBackgroundVideo` component. Treat both documents as a paired implementation specification.
