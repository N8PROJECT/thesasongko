# DESIGN SYSTEM — Luxury Wedding Agency (Ivory × Forest Green)

> Versi 1.0 · Bahasa dokumentasi: Indonesia · Sumber: screenshot kolase 1024×768 yang diberikan pengguna (19 November 2026).  
> Tujuan: merekonstruksi bahasa visual dan interaksi website agensi wedding premium. **Perubahan wajib dari referensi:** hero memakai **video autoplay tanpa tombol play, pause, maupun kontrol player visual**. Tombol CTA penawaran biaya tetap boleh ditampilkan seperti referensi.

## 0. Cara membaca spesifikasi

- **[TERLIHAT]**: dapat diamati langsung pada screenshot.
- **[ESTIMASI]**: nilai visual perkiraan dari raster; bukan CSS, HEX, font atau ukuran asli dari website.
- **[REKOMENDASI]**: keputusan implementasi yang diusulkan agar desain responsif, aksesibel, dan siap produksi.
- Screenshot merupakan **kolase dari beberapa potongan halaman pada skala berbeda**, bukan satu viewport panjang dengan koordinat yang dapat diukur langsung. Urutan semua section belum bisa dipastikan dari satu gambar. Gunakan `UI-structure.md` untuk alur halaman yang direkomendasikan.
- Teks asli yang tampak memakai **bahasa Rusia/Cyrillic**. Contoh Bahasa Indonesia di dokumen ini adalah adaptasi konten, **bukan** klaim tentang copy asli.

## 1. Visual DNA

**Brand keywords:** premium, editorial, intimate, timeless, refined, botanical, formal, composed.  
**Mood:** deep forest green framing + warm ivory paper-like panels + restrained sage accents + fine serif titles + monochromatic wedding imagery.  
**Kontras utama:** foto sinematik berwarna gelap vs blok konten ivory yang terang.  
**Komposisi:** blok besar geometris, editorial whitespace, asymmetric layouts, card layering, image-led storytelling.  
**Prinsip:** luxury through restraint; tidak memakai gradient mencolok, shadow berat, ikon berlebihan, atau motion agresif.

### Observasi per area

| Area | Bukti yang terlihat | Perlakuan desain |
|---|---|---|
| Hero | Foto dekorasi meja, lilin tinggi, kursi, bunga; navbar transparan dan headline serif di bawah | Video background sinematik dengan overlay terukur |
| Process | Panel ivory dengan bunga calla putih di kiri dan daftar baris plus di kanan | Accordion ringan, garis batas tipis |
| Testimonial | Panel ivory dengan judul besar dua warna, kartu review dan avatar | Carousel/slider opsional, kartu berjarak |
| Journey | Foto halaman rumput dan danau, stack kartu bernomor 01–07, objek kue | Tabbed/stacked storytelling |
| Pricing lead | Form vertikal ivory dengan input field dan range budget | Form sederhana dengan slider |
| Packages | Panel ivory, headline tiga baris, envelope/sleeve hijau besar, checklist | Editorial product/package composition |
| Contact mini-card | Foto pengantin miring, bunga kecil, copy singkat, CTA hijau | Lead magnet card |

## 2. Color system

### 2.1 Core palette

Semua nilai di bawah **[ESTIMASI]**, dipilih agar mendekati screenshot dan tetap usable.

| Token | HEX | Pemakaian |
|---|---|---|
| `--color-forest-950` | `#17251D` | Darkest background/fallback video |
| `--color-forest-900` | `#263629` | Canvas framing dan footer |
| `--color-forest-800` | `#354937` | Surface gelap dan border kontekstual |
| `--color-forest-700` | `#456746` | Heading aksen hijau |
| `--color-sage-600` | `#65875D` | Accent/icon di panel terang |
| `--color-sage-400` | `#A5C79A` | Tombol CTA utama dan icon-circle |
| `--color-sage-200` | `#D9E8CE` | Hover/outline subtle |
| `--color-ivory-50` | `#FFF9EF` | Background kartu utama |
| `--color-ivory-100` | `#F7F1E5` | Field background / panel sekunder |
| `--color-cream-200` | `#EDE5D6` | Separator dan surface tertiary |
| `--color-ink-900` | `#262620` | Headline pada ivory |
| `--color-text-600` | `#6C6C61` | Subcopy dan metadata |
| `--color-white` | `#FFFFFF` | Hero headline, icon di atas foto |

### 2.2 Semantic tokens

```css
:root {
  --color-forest-950: #17251d;
  --color-forest-900: #263629;
  --color-forest-800: #354937;
  --color-forest-700: #456746;
  --color-sage-600: #65875d;
  --color-sage-400: #a5c79a;
  --color-sage-200: #d9e8ce;
  --color-ivory-50: #fff9ef;
  --color-ivory-100: #f7f1e5;
  --color-cream-200: #ede5d6;
  --color-ink-900: #262620;
  --color-text-600: #6c6c61;
  --color-white: #fff;

  --color-canvas: var(--color-forest-900);
  --color-surface: var(--color-ivory-50);
  --color-surface-muted: var(--color-ivory-100);
  --color-heading: var(--color-ink-900);
  --color-body: var(--color-ink-900);
  --color-muted: var(--color-text-600);
  --color-accent: var(--color-forest-700);
  --color-action: var(--color-sage-400);
  --color-on-action: var(--color-forest-950);
  --color-line: #ded9cd;
  --color-error: #a43c31;
  --color-focus: #285bce;
}
```

### 2.3 Color usage rules

- Background halaman luas: forest. Konten editorial: ivory.
- Judul: ink dengan **highlight beberapa kata sage/forest**, bukan seluruh judul hijau.
- Atas foto/video: putih dengan scrim gelap (bukan teks gelap langsung di atas footage).
- Tombol CTA terang di area gelap; border hijau/dark pada area terang.
- Pastikan rasio kontras WCAG AA (`4.5:1` untuk teks normal; `3:1` teks besar dan UI non-teks). Kombinasi sage 400 + putih **tidak** aman untuk teks kecil; gunakan forest 950 pada tombol tersebut.

## 3. Typography

### 3.1 Font pairing

**[TERLIHAT]** headline menggunakan serif kontras tinggi, body dan navigasi memakai sans-serif yang ringkas. Nama font asli tidak dapat dipastikan dari screenshot.

- **[REKOMENDASI] Display:** `Cormorant Garamond`, fallback `Georgia`, `serif`. Alternatif: `Bodoni Moda` atau `Prata` untuk kesan lebih formal (uji Cyrillic jika copy Rusia dipertahankan).
- **[REKOMENDASI] Body/UI:** `Manrope`, fallback `Arial`, `sans-serif`. Alternatif: `Inter`.
- Untuk heading Cyrillic, validasi glyph lengkap font sebelum deploy. Jangan mengandalkan font fallback per karakter jika mengganggu konsistensi.

### 3.2 Type scale

| Style | Desktop | Tablet | Mobile | Weight | Line-height | Tracking |
|---|---:|---:|---:|---:|---:|---:|
| Hero display | `clamp(44px,5.0vw,84px)` | 48–64px | 38–48px | 400 | 0.96–1.08 | `-0.025em` |
| Section display | `clamp(36px,4vw,68px)` | 40–52px | 32–42px | 400 | 1.00–1.10 | `-0.02em` |
| Card heading | 24–36px | 22–32px | 24–30px | 400 | 1.06–1.16 | `-0.01em` |
| Subheading | 18–24px | 18–22px | 18–20px | 400–500 | 1.2 | 0 |
| Body | 15–16px | 15–16px | 15–16px | 400 | 1.5–1.65 | 0 |
| Small body | 13–14px | 13–14px | 13–14px | 400 | 1.5 | 0 |
| Eyebrow | 10–12px | 10–12px | 11–12px | 500–600 | 1.2 | `0.1em` |
| Button/label | 13–14px | 13–14px | 14px | 500 | 1.2 | `0.01em` |

**Aturan headline:** uppercase diperbolehkan untuk headline Rusia seperti “РОСКОШНАЯ СВАДЬБА БЕЗ ЛИШНИХ ЗАТРАТ”; set wrap manual hanya jika dibutuhkan; jangan pecah kata di tengah; pakai `text-wrap: balance` dengan fallback normal.

## 4. Layout, sizing & grid

### 4.1 Containers — [REKOMENDASI]

```css
:root {
  --container-max: 1440px;
  --page-gutter: clamp(16px, 2.5vw, 36px);
  --section-gap: clamp(14px, 1.8vw, 28px);
  --panel-pad: clamp(24px, 4vw, 72px);
  --header-height: 76px;
}
.container {
  width: min(calc(100% - 2 * var(--page-gutter)), var(--container-max));
  margin-inline: auto;
}
```

- **[TERLIHAT]** canvas forest dipakai sebagai *frame* di sela-sela panel.
- **[ESTIMASI]** panel memakai gap relatif kecil dan mostly sharp corners (border radius 0–8px).
- Design baseline desktop: 1440px wide. Tablet: 768–1023px. Mobile: 320–767px.
- Desktop content block: 12-column grid / CSS grid fleksibel. Section split: 45/55 atau 50/50. Kolom editorial narrow: 280–360px. Jangan memaksakan ukuran kolase sebagai ukuran halaman.

### 4.2 Spacing scale (4px base)

`--space-1:4px`, `--space-2:8px`, `--space-3:12px`, `--space-4:16px`, `--space-5:20px`, `--space-6:24px`, `--space-8:32px`, `--space-10:40px`, `--space-12:48px`, `--space-16:64px`, `--space-20:80px`, `--space-24:96px`, `--space-32:128px`.

**Rules:**

- Section large padding desktop: 64–112px vertical; mobile: 44–64px.
- Jarak eyebrow → headline: 12–24px; headline → description: 16–32px.
- Card internal padding: 24–40px desktop, 20–24px mobile.
- Antar accordion row: 0px dengan border-bottom sebagai pemisah; min-height row 52px.
- Form input min-height 48–56px.

## 5. Shape, borders, shadow, image

| Element | Specification |
|---|---|
| Large panels | Square/minimal radius `0–4px` |
| Standard cards | `0–8px` tergantung kebutuhan |
| Buttons | Pill `999px` atau rounded 8px; hero CTA pada referensi bergaya pill |
| Input | Minimal rounded `0–4px`; terang di atas ivory |
| Line | `1px solid var(--color-line)` |
| Icon buttons | Circular 26–40px dengan aksen hijau |
| Shadows | Tidak dominan; hanya pada stack-card jika butuh separation |
| Photography | Soft natural light, florals, table styling, ceremony, cake, garden, texture |
| Decorative motif | Botanical cutouts, envelope/paper, folded card, rings monogram |

**Photo direction:** desaturated warm neutrals, botanical whites, sage greens, delicate table styling, candid interactions. Hindari gambar generic stock berwarna sangat jenuh atau image overlay terlalu gelap.

## 6. Motion & interaction

### 6.1 Motion tokens

```css
:root {
  --motion-fast: 140ms;
  --motion-base: 240ms;
  --motion-slow: 420ms;
  --ease-standard: cubic-bezier(.22, 1, .36, 1);
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
}
```

- Accordion: height/opacity 200–300ms.
- Tab switch: 160–240ms crossfade, tidak wajib slide kompleks.
- Hover CTA: darken/fill transition 140–220ms, tidak scaling agresif.
- Testimonial carousel: snap or button-controlled; hindari autoplay tanpa kendali.

### 6.2 HERO VIDEO — requirement utama (menggantikan foto)

**[PERMINTAAN PENGGUNA]** Hero pertama menggunakan video yang otomatis diputar tanpa tombol play dan tanpa player UI.

**Behavior kontrak:**

1. Video ditempatkan **di belakang seluruh hero**, area full-bleed (`position:absolute; inset:0; width/height:100%; object-fit:cover`).
2. `autoPlay`, `muted`, `loop`, `playsInline` semuanya aktif. `muted` wajib demi peluang autoplay pada browser modern.
3. **Jangan render `controls`, tombol play, tombol pause, audio toggle, timeline, atau floating media controls.** CTA “Hitung Estimasi Biaya” **tetap ada**: itu tombol bisnis, bukan tombol player.
4. Video tidak punya audio yang terdengar; idealnya export tanpa audio track.
5. `poster` menampilkan gambar wedding yang sewarna dengan first frame video, untuk loading/error/bandwidth rendah.
6. Gunakan `preload="metadata"` sebagai default; pertimbangkan `auto` hanya bila hasil uji LCP dan bandwidth masuk akal.
7. Overlay gradient gelap di bawah atau kiri/bawah area headline agar readability kuat; bukan menutup visual seluruh video.
8. `object-position` disesuaikan dengan framing visual: desktop `center 48%`, mobile `center center` (estimasi awal, perlu cek footage).
9. Video dekoratif: `aria-hidden="true"`, `tabIndex={-1}`, hindari screen-reader redundant narration.
10. Hormati `prefers-reduced-motion: reduce`: **jangan autoplay untuk pengguna tersebut**, tampilkan poster statis. Ini pengecualian aksesibilitas yang disengaja dari autoplay default.
11. Browser dapat tetap memblokir autoplay. Jangan tampilkan player button hanya untuk mengatasi pemblokiran; gunakan poster yang bagus sebagai graceful fallback.
12. Opsional pause playback saat tab/page tidak terlihat, dan resume saat terlihat apabila autoplay diizinkan.

**Video asset guideline [REKOMENDASI]:**

| Parameter | Target |
|---|---|
| Format utama | MP4 H.264 (`video/mp4`) |
| Format alternatif | WebM jika tersedia |
| Durasi | 8–20 detik dengan seam loop tidak terlihat |
| Resolusi | 1920×1080 desktop; versi mobile vertical crop bila diperlukan |
| Frame rate | 24–30 fps |
| Audio | Tidak ada / muted |
| Target asset weight | Usahakan 2–6 MB, sesuaikan kualitas dan jaringan |
| Poster | AVIF/WebP, resolusi mengikuti responsive hero |
| Subject | Luxury tablescape / wedding florals / candles, gerakan kamera halus |
| Transition | Start-to-end seamless, tanpa frame hitam |

**Implementation (React/Next.js):**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduceMotion) {
      video.pause();
      return;
    }
    const syncVisibility = () => {
      if (document.hidden) video.pause();
      else video.play().catch(() => {/* poster remains */});
    };
    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);
    return () => document.removeEventListener("visibilitychange", syncVisibility);
  }, [reduceMotion]);

  return (
    <div className="hero-media" aria-hidden="true">
      <video
        ref={videoRef}
        className="hero-media__video"
        autoPlay={!reduceMotion}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.webp"
        tabIndex={-1}
      >
        <source src="/videos/wedding-hero.webm" type="video/webm" />
        <source src="/videos/wedding-hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-media__scrim" />
    </div>
  );
}
```

**SSR/hydration note:** state diawali `true`, sehingga sebelum preferensi diketahui video tidak memaksa autoplay. Jika target memprioritaskan autoplay paling awal, render native `autoPlay muted playsInline` di SSR lalu hentikan segera saat reduced motion terdeteksi; itu menimbulkan risiko flash gerakan, maka pola di atas diprioritaskan untuk aksesibilitas. Untuk fallback poster saat `<video>` tidak ter-load, pasang CSS `background-image` di `.hero-media`.

```css
.hero { position: relative; min-height: min(820px, 100svh); min-height: clamp(580px, 100svh, 900px); isolation: isolate; color: #fff; }
.hero-media { position: absolute; inset: 0; z-index: -1; overflow: hidden; background: #17251d url('/images/hero-poster.webp') center/cover no-repeat; }
.hero-media__video { width: 100%; height: 100%; display: block; object-fit: cover; object-position: center 48%; }
.hero-media__scrim { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(12,24,16,.48) 0%, rgba(12,24,16,.03) 38%, rgba(12,24,16,.67) 100%); pointer-events: none; }
.hero__content { position: relative; z-index: 1; min-height: inherit; display: flex; flex-direction: column; justify-content: flex-end; padding: 110px var(--panel-pad) 52px; }
@media (max-width: 767px) {
  .hero { min-height: 680px; min-height: 88svh; }
  .hero-media__video { object-position: center center; }
  .hero-media__scrim { background: linear-gradient(180deg, rgba(12,24,16,.60), rgba(12,24,16,.10) 37%, rgba(12,24,16,.76)); }
}
@media (prefers-reduced-motion: reduce) { .hero-media__video { display: none; } }
```

## 7. Component catalogue

### 7.1 Header / Navigation

**[TERLIHAT]** brand/wordmark kiri, sejumlah tautan navigasi di tengah, nomor telepon di kanan, tombol outline rounded di kanan. Hero menggunakan header transparan.

- Desktop horizontal, aligned center; min-height 72–88px.
- Link white atau warm-white pada area video; `:hover` underline subtle.
- CTA outline light on dark, label singkat (misalnya “Ajukan Permintaan”).
- Mobile: logo kiri, tombol menu kanan. Mobile drawer forest dengan link berjarak dan focus trap.
- Sticky header **bukan** fakta screenshot; bila diperlukan gunakan setelah scroll dan periksa kontras.

### 7.2 `PrimaryCTA`

- Hero: tombol pill ivory + circular sage arrow icon.
- Other CTA: rectangular softly-rounded sage fill + ink text.
- `height`: 44–52px; target sentuh minimal 44×44px.
- States: default, hover, active, keyboard focus, disabled, loading.
- Label: “Hitung Estimasi Biaya”/“Konsultasikan Pernikahan”.
- No CTA label “Play”, “Tonton Video”, “Putar Video” di hero.

### 7.3 `SectionHeading`

- Optional eyebrow kecil uppercase/sans.
- Serif heading multiline, highlight kata hijau.
- Body max-width 42–65ch agar nyaman.
- Props: `eyebrow`, `titleLines`, `accentParts`, `description`, `alignment`.

### 7.4 `ProcessAccordion`

- Item list kanan pada ivory, thin separator.
- Label uppercase serif atau small display; round green plus di right.
- Single-open recommended. Button seluruh row, bukan hanya icon.
- `aria-expanded`, `aria-controls`; panel berisi detail nyata.
- Daftar terlihat secara ringkas: full wedding planning, budget solutions, vetted vendors, ideal timing, diverse experiences, day-of coordination, lokasi/venue (copy perlu diverifikasi lebih dekat dari aset jika ingin exact).

### 7.5 `EditorialImageCard`

- Photo cropped purposeful, minimal border, overlay caption optional.
- Aspect ratio 3:4, 4:5, atau vertical tall depending section.
- Image `alt` informatif jika menyampaikan konten; decorative cutouts `alt=""`.

### 7.6 `TestimonialCard` & `TestimonialCarousel`

- Off-white review card, circular avatar, small overline, reviewer name serif, paragraph body sans.
- Mobile single-card snap. Desktop 2–3 cards.
- Navigasi carousel dengan previous/next **berlabel aksesibel**, bukan autoplay.
- Jika carousel tidak selesai di screenshot, perlakukan interaksi slider sebagai rekomendasi.

### 7.7 `JourneyStageTabs`

- Fotografi outdoor background, heading putih di atas.
- 7 numeric labels (01–07) terlihat pada tab/tumpukan.
- Active card ivory, number tag small, stage heading serif, deskripsi, foreground cake cutout.
- Interaction choice [REKOMENDASI]: tabs WAI-ARIA dengan keyboard arrow, Home/End; user dapat klik tab.
- Mobile: scrollable tabs dan single card; jangan expose kartu di belakang sebagai click target jika tertutup.

### 7.8 `PackageChecklist` & `EnvelopeArtwork`

- Headline large serif; accent line forest green; checklist di kiri; ilustrasi amplop hijau di kanan.
- Gunakan assets SVG jika tersedia atau recreate dengan CSS/layered SVG original; jangan menyalin logo/brand tanpa izin.
- Checklist `ul > li`, check icon dekoratif di samping teks (bukan checkbox interaktif).
- Screenshotted number **“800 т.р.”** terlihat pada amplop; bukan harga yang direkomendasikan untuk produksi dan perlu validasi mata uang/paket.

### 7.9 `WeddingCostForm`

- Stack fields: nama, telepon, tanggal wedding, jumlah tamu, lokasi/provinsi/alamat, perkiraan budget.
- Slider with min/max labels: screenshot terlihat kira-kira **700.000–2.000.000** (mata uang dan aturan konversi tidak dipastikan). Jangan hardcode nilai produksi tanpa data bisnis.
- CTA “Hitung Estimasi Biaya” bukan perhitungan instan bila backend belum tersedia.
- Client-side validation, consent/privacy statement, loading/error/success handling.
- `inputMode="tel"`/`type="tel"`, date picker native atau accessible third-party.

### 7.10 `ConsultationCard`

- Small ivory panel, rotated bride photo, flower overlay, supporting text, sage CTA.
- Image angle estimated ~-5° to -10°.
- Mobile: reduce rotation and keep content readable.

## 8. Accessibility requirements

- Setiap section `section` dengan heading bermakna. Satu `h1` di hero.
- Video dekoratif tanpa audio/control, dengan poster dan reduced-motion fallback.
- Manual controls untuk setiap carousel/tab yang bersifat informasi; jangan otomatis menggeser content cards.
- Keyboard focus ring terlihat (`2–3px` blue/dark contrasting, offset 2px).
- Semua tombol min tap target 44×44px; click targets menu dan tab tidak bertumpuk.
- Accordion pakai semantic `<button>`; card yang non-clickable jangan diberi `cursor:pointer`.
- Form memiliki `<label>`, `name`, error text dengan `aria-describedby`, status `role="status"` bila perlu.
- Teks foto overlay harus diuji contrast setiap video frame; gunakan scrim permanen.
- Decorative image alt empty; informative scene alt concise.
- Motion nonessential dipangkas bila reduced motion.
- Avoid scroll-jacking, marquee, auto-scrolling text, atau parallax intens.

## 9. Responsive behavior

| Component | Desktop ≥1024px | Tablet 768–1023px | Mobile <768px |
|---|---|---|---|
| Header | Full nav + tel + CTA | Simplified nav | Logo + menu drawer |
| Hero | 70–100svh video, split bottom headline/info | Headline + CTA stack | Full viewport-ish, headline lower, CTA full/auto width |
| Process | Floral left / accordion right | 35/65 split | Floral cropped top/bottom, accordion below |
| Testimonials | 3 columns or slider | 2 columns or slider | Single card + arrows |
| Journey | Background + horizontal numbered tabs + central card | Compact tabs | Tabs horizontally scroll, one full-width card |
| Packages | Checklist 50% + envelope 50% | 55/45 | Stacked checklist then artwork |
| Cost form | Narrow panel in editorial layout | 1 col | 100% width stacked form |
| Consultation | Portrait + copy | Same smaller | Image top, copy/button bottom |

## 10. Implementation guidance

### 10.1 Suggested stack

- Next.js App Router + React + TypeScript.
- Tailwind CSS optional; tokens defined above map to Tailwind theme/CSS variables.
- Fonts self-hosted / Google Fonts with licensing and Cyrillic support verified.
- Native `<video>` for hero; no player library necessary.
- `next/image` for editorial photographs and poster (poster URL for video remains plain asset path).
- Form: React Hook Form + Zod optional; do not invent backend response.

### 10.2 Suggested token utilities

```css
:root {
  --radius-panel: 4px;
  --radius-card: 6px;
  --radius-button: 999px;
  --border-light: 1px solid var(--color-line);
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Manrope', Arial, sans-serif;
}
body { margin: 0; background: var(--color-canvas); color: var(--color-body); font-family: var(--font-body); }
.display { font-family: var(--font-display); font-weight: 400; line-height: 1.05; letter-spacing: -.02em; }
.panel { background: var(--color-surface); }
.eyebrow { font-size: .72rem; letter-spacing: .12em; text-transform: uppercase; }
.button:focus-visible, a:focus-visible, input:focus-visible, [role="tab"]:focus-visible { outline: 3px solid var(--color-focus); outline-offset: 3px; }
```

### 10.3 Image/video inventory (assets to procure)

| File placeholder | Usage | Requirements |
|---|---|---|
| `/videos/wedding-hero.mp4` | Hero autoplay | Tablescape/candle/flowers, seamless loop |
| `/videos/wedding-hero.webm` | Optional hero alternative | Same cut/ratio |
| `/images/hero-poster.webp` | First paint/fallback | Matches video composition |
| `/images/process-calla.webp` | Process decoration | Transparent or clean ivory background |
| `/images/review-avatar-*.webp` | Testimonials | Consent/licensed photography |
| `/images/journey-garden.webp` | Journey background | Wide landscape, dark enough for white text with overlay |
| `/images/journey-cake.webp` | Journey decorative cake | Cutout/transparent background |
| `/images/package-envelope.webp` | Package artwork | Recreated original brand graphic |
| `/images/consultation-bride.webp` | Consultation small card | Vertical portrait |

## 11. QA / acceptance checklist

- [ ] Landing page keeps forest frame + ivory editorial panels.
- [ ] Typeface contrast: elegant serif display vs sans UI.
- [ ] Header readable on every frame of video.
- [ ] **Hero video autoplay muted loop playsInline** on supported desktop/mobile browsers.
- [ ] **No play, pause, sound, scrubber, or browser controls rendered**.
- [ ] Hero's **business CTA is still present**.
- [ ] Video poster covers loading/error/autoplay denied.
- [ ] Reduced-motion shows static poster (no autoplay).
- [ ] No horizontal overflow on 320px viewport.
- [ ] Process accordion works by click + keyboard.
- [ ] Journey numbered tabs update content accessibly.
- [ ] Form validation, consent copy, errors and success states covered.
- [ ] Image rights, brand assets, fonts and literal pricing verified before release.
- [ ] Test at 320, 375, 768, 1024, 1440, 1920px; mobile Safari and Chrome.

## 12. Screenshot limitations / avoid fabricating

- Exact original fonts, HEX, spacing, animation behavior, video source, URLs, names, business prices and full Russian paragraphs cannot be proven from this screenshot.
- Source imagery references the screenshot only; no website assets were extracted. The video is a **new requirement**, not something shown in the original.
- Section ordering in `UI-structure.md` is a recommended page flow; the collage may show multiple areas out of scroll order.
- UI implementations should **recreate the aesthetic**, not reproduce protected branding, logos, or photographs without appropriate rights.
