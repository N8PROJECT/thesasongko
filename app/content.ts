export const brand = {
  name: "The Sasongko Wedding Planner & Organizer",
  instagram: "https://www.instagram.com/thesasongko_weddingorganizer/",
  google: "https://share.google/sstLriKkMRDUBuru9",
  phone: "+62 817 911 4410",
  whatsapp: "https://wa.me/628179114410",
};

export const navigation = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"],
  ["Planning", "/planning"], ["Portfolio", "/#portofolio"],
] as const;

export const services = [
  ["Wedding planning", "Explore your concept, priorities, budget, venue, and vendor options with our team."],
  ["Wedding-day coordination", "Our team manages the schedule, coordinates vendors, and supports your family throughout the day."],
  ["Traditional Javanese and Sundanese weddings", "Plan ceremonies that honor your traditions and reflect what matters to both families."],
  ["Modern weddings", "Tell us how you want your celebration to feel and which details you want to include."],
  ["Wedding décor", "Tailor the ceremony and reception décor to your venue and wedding concept."],
  ["Bridal styling", "Explore bridal looks that suit your traditions or the style of your celebration."],
] as const;

export const inclusions = [
  "Wedding planning and vendor coordination",
  "Wedding-day timeline and coordination",
  "Traditional Javanese, Sundanese, and modern weddings",
  "Wedding décor and bridal styling",
];

export const stages = [
  ["First consultation", "Share your date, location, guest count, family traditions, and vision for the celebration."],
  ["Shaping the concept", "Shape the ceremony and reception around the traditions you want to include."],
  ["Setting the budget", "Set your priorities and a budget range for your celebration."],
  ["Choosing a venue and vendors", "Compare venue and vendor options based on capacity, location, and your concept."],
  ["Bringing the details together", "Coordinate décor, bridal styling, and family needs with the wedding schedule."],
  ["Final coordination", "Review the timeline and confirm responsibilities with everyone involved."],
  ["The wedding day", "Our team keeps the day on schedule and works closely with your vendors and family."],
] as const;

const weddingMarket = "https://weddingmarket.com/id/the-sasongko-wedding-planner-%26-organizer";

export const portfolio = [
  { couple: "Tiara & Dwiki", venue: "Hallf Patiunus", detail: "A traditional Sundanese wedding on August 8, 2020, planned by The Sasongko.", href: "https://www.weddingku.com/real-weddings/indahnya-pesta-pernikahan-era-normal-baru-dengan-adat-sunda-tiara-dwiki", label: "Read the Weddingku feature" },
  { couple: "Miranti & Dani", venue: "Plataran Dharmawangsa", href: weddingMarket + "/4189", label: "View on WeddingMarket" },
  { couple: "Devi & Ardi", venue: "Hotel Borobudur", href: weddingMarket + "/4190", label: "View on WeddingMarket" },
] as const;
