export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  items: FAQItem[];
  primaryServiceLink: { label: string; href: string };
  relatedFAQs: string[];
}

export const faqCategories: FAQCategory[] = [
  {
    slug: "interior-painting",
    title: "Interior Painting FAQ",
    description:
      "Answers to common questions about interior house painting in Vancouver. Costs, timelines, paint types, and what to expect.",
    metaTitle: "Interior Painting FAQ | Vancouver House Painters | Shape of Paint",
    metaDescription:
      "Get answers about interior painting costs, timelines, paint types, and prep work. Vancouver homeowners trust Shape of Paint for honest, detailed answers.",
    primaryServiceLink: { label: "Interior Painting", href: "/vancouver/interior-painting" },
    relatedFAQs: ["pricing-estimates", "paint-materials"],
    items: [
      {
        question: "How much does interior painting cost in Vancouver?",
        answer:
          "Most Vancouver homes cost between $3,000 and $8,000 for a full interior repaint. The final number depends on square footage, ceiling height, number of rooms, and the condition of your walls. We provide firm quotes - not estimates - so your price is locked before work begins.",
      },
      {
        question: "How long does it take to paint the interior of a house?",
        answer:
          "A typical 3-bedroom home takes 4 to 6 days. Larger homes or projects with extensive prep work may take 7 to 10 days. We build a detailed schedule before starting so you know exactly what to expect each day.",
      },
      {
        question: "What type of paint do you use for interiors?",
        answer:
          "We use C2 Paint for most interior work. C2 is a handcrafted artisan paint with over 500 curated colours. For specialty finishes, we bring in Metropolis and Novocolor from Italy. Every product is chosen for durability, colour depth, and a beautiful finish.",
      },
      {
        question: "How much prep work is involved?",
        answer:
          "Prep is where most of the quality comes from. We fill holes, sand rough spots, caulk gaps, and prime stains before any colour goes on. On older Vancouver homes, prep can take 30-40% of the total project time. Cutting corners here leads to peeling and poor coverage.",
      },
      {
        question: "How do I choose the right colours for my home?",
        answer:
          "Start with your fixed elements - flooring, countertops, and furniture you plan to keep. We can guide you through colour selection using large swatches on your actual walls. Natural light in Vancouver shifts throughout the day, so testing colours in your space matters more than a paint chip at the store.",
      },
      {
        question: "Can I stay in my home while you paint?",
        answer:
          "Yes. Most families stay home during interior painting. We work room by room so you always have space to live in. Furniture gets moved and protected. Floors are covered. Each room is cleaned at the end of every work day, not just the last one.",
      },
      {
        question: "What factors affect the price of interior painting?",
        answer:
          "The biggest factors are total wall area, ceiling height, number of colours, wall condition, and trim detail. Homes with extensive crown moulding, wainscoting, or textured walls require more time. We walk through every detail during our on-site visit so the quote reflects your actual project.",
      },
      {
        question: "Do you offer low-VOC paint options?",
        answer:
          "Yes. C2 Paint is low-VOC by default. For clients who want zero-VOC or plant-based options, we also carry Livos natural finishes from Germany. These are ideal for nurseries, bedrooms, and homes with chemical sensitivities. No compromise on colour or durability.",
      },
    ],
  },
  {
    slug: "exterior-painting",
    title: "Exterior Painting FAQ",
    description:
      "Everything Vancouver homeowners ask about exterior house painting. Weather, timing, costs, and how to protect your home.",
    metaTitle: "Exterior Painting FAQ | Vancouver House Painters | Shape of Paint",
    metaDescription:
      "Answers about exterior painting in Vancouver's climate. Best time to paint, costs, prep work, and how weather affects your project.",
    primaryServiceLink: { label: "Exterior Painting", href: "/vancouver/exterior-painting" },
    relatedFAQs: ["pricing-estimates", "paint-materials"],
    items: [
      {
        question: "When is the best time to paint a house exterior in Vancouver?",
        answer:
          "Late May through September gives you the most reliable weather. Paint needs dry conditions and temperatures above 10 degrees Celsius to cure properly. We monitor forecasts closely and schedule around rain to protect your finish. Spring and early fall can work if we get a dry stretch.",
      },
      {
        question: "How much does exterior painting cost in Vancouver?",
        answer:
          "A typical Vancouver home exterior runs between $6,000 and $15,000. The range depends on home size, siding type, height, and how much prep is needed. Multi-story homes and heritage properties sit at the higher end. We provide a firm quote after an on-site walkthrough.",
      },
      {
        question: "How does Vancouver's weather affect exterior paint?",
        answer:
          "Rain, moisture, and UV exposure are the three biggest challenges. We use products formulated for coastal climates that resist moisture penetration and fade. Proper surface prep - cleaning, scraping, priming - is what makes the difference between paint that lasts 3 years and paint that lasts 10.",
      },
      {
        question: "What types of siding can you paint?",
        answer:
          "We paint wood siding, cedar shingles, fibre cement (like Hardie board), stucco, brick, and previously painted aluminum. Each material requires different prep and primer systems. During our walkthrough, we identify your siding type and recommend the right approach.",
      },
      {
        question: "How long does exterior paint last in the Lower Mainland?",
        answer:
          "With proper prep and quality products, exterior paint in Vancouver lasts 7 to 10 years. South-facing walls fade faster from UV exposure. North-facing walls deal with more moisture. We adjust our product choices based on the exposure of each wall on your home.",
      },
      {
        question: "How do I know if my house needs repainting?",
        answer:
          "Look for peeling, cracking, chalking (white powder when you touch the surface), or faded colour. Bare wood exposed to rain is urgent - moisture damage gets expensive fast. If your paint is more than 8 years old, it is worth scheduling an inspection before problems start.",
      },
      {
        question: "Do you paint trim and gutters too?",
        answer:
          "Yes. Trim, fascia, soffits, gutters, window frames, and doors are all part of a complete exterior project. These details are what make an exterior paint job look finished and professional. We include all of this in our standard exterior quotes.",
      },
    ],
  },
  {
    slug: "cabinet-painting",
    title: "Cabinet Painting FAQ",
    description:
      "Common questions about kitchen cabinet painting and refinishing. Spray finishes, costs, timelines, and what makes a professional result.",
    metaTitle: "Cabinet Painting FAQ | Vancouver Kitchen Painters | Shape of Paint",
    metaDescription:
      "Get answers about cabinet painting costs, spray vs brush finishes, timelines, and durability. HVLP spray finishing by Shape of Paint in Vancouver.",
    primaryServiceLink: { label: "Cabinet Painting", href: "/vancouver/cabinet-painting" },
    relatedFAQs: ["pricing-estimates", "paint-materials"],
    items: [
      {
        question: "Should cabinets be sprayed or brushed?",
        answer:
          "Sprayed. HVLP spray finishing produces a smooth, factory-like result that brushes and rollers cannot match. Every cabinet door we finish is sprayed in a controlled environment for an even coat with no brush marks. This is the standard in professional cabinet refinishing.",
      },
      {
        question: "How much does cabinet painting cost?",
        answer:
          "A standard Vancouver kitchen with 20 to 30 doors typically costs between $4,000 and $8,000. The price depends on door count, door style, condition, and the coating system. We use Italian coatings from Renner and ALCEA that cost more than hardware-store paint but deliver a superior, lasting finish.",
      },
      {
        question: "How long does cabinet painting take?",
        answer:
          "Most kitchen cabinet projects take 5 to 8 business days. Doors are removed and sprayed off-site while we prep and paint the frames in your kitchen. You will have limited kitchen access during the frame work, but full access returns as soon as doors go back on.",
      },
      {
        question: "Can you paint laminate or thermofoil cabinets?",
        answer:
          "Yes, with the right prep and primer system. Laminate and thermofoil need bonding primers that adhere to slick surfaces. Not every painter knows how to do this correctly. We have refinished hundreds of laminate and thermofoil kitchens with results that hold up to daily use.",
      },
      {
        question: "What paint do you use on cabinets?",
        answer:
          "We use Renner and ALCEA Italian wood coatings. These are professional-grade products designed for furniture and cabinetry, not wall paint repurposed for cabinets. They cure harder, resist scratches better, and produce a smoother finish than standard latex or alkyd paints.",
      },
      {
        question: "How durable is painted cabinet finish?",
        answer:
          "With Italian coatings and proper prep, a professional spray finish lasts 10 to 15 years of daily kitchen use. The cured coating resists scratches, moisture, and household cleaners. Our clients regularly tell us their cabinets look as good 5 years later as they did on day one.",
      },
      {
        question: "Will I have access to my kitchen during the project?",
        answer:
          "Partially. When we are working on the cabinet frames, your kitchen access is limited for 1 to 2 days. During that time, you can use your sink and appliances with some coordination. Once the frames are done, full kitchen access returns while doors finish curing off-site.",
      },
      {
        question: "Is cabinet painting worth it compared to replacing?",
        answer:
          "For most kitchens, yes. Professional cabinet refinishing costs roughly one-third of full replacement and takes days instead of weeks. Your existing layout stays the same, which avoids plumbing and countertop disruption. The result is a kitchen that looks and feels new at a fraction of the timeline.",
      },
    ],
  },
  {
    slug: "pricing-estimates",
    title: "Pricing & Estimates FAQ",
    description:
      "How our pricing works, what affects cost, and what to expect from a Shape of Paint quote. No surprises, no change orders.",
    metaTitle: "Painting Prices & Estimates FAQ | Shape of Paint Vancouver",
    metaDescription:
      "Learn how Shape of Paint pricing works. Firm quotes, transparent payment terms, and what factors affect the cost of your painting project.",
    primaryServiceLink: { label: "Free Estimate", href: "/contact#contact-form" },
    relatedFAQs: ["interior-painting", "process-timeline"],
    items: [
      {
        question: "Do you provide estimates or firm quotes?",
        answer:
          "Firm quotes only. The number you see is the number you pay - no surprises, no change orders. The only exceptions are popcorn ceiling removal and specialty finishes priced on time and materials. We explain that upfront before any work starts.",
      },
      {
        question: "What affects the price of a painting project?",
        answer:
          "Square footage, wall condition, ceiling height, number of colours, trim detail, and access difficulty. A home with 10-foot ceilings and intricate trim costs more than a straightforward condo. We walk through every factor during our on-site visit so nothing is missed.",
      },
      {
        question: "How does your payment structure work?",
        answer:
          "30% deposit when you accept the quote. The remaining 70% is due only after the work is done and you are 100% happy with the results. Cash, credit, or e-transfer - your choice. No progress payments, no complicated schedules.",
      },
      {
        question: "Is the estimate visit free?",
        answer:
          "Yes. We visit your home, measure the space, assess the surfaces, and discuss your goals. You receive a detailed firm quote within 48 hours. There is no cost and no obligation. Call us at 604-353-7378 or fill out the form on our contact page to book.",
      },
      {
        question: "What is included in your quote?",
        answer:
          "Everything. Paint, primer, materials, labour, prep work, protection of your furniture and floors, and final cleanup. We do not add fees after the quote is signed. If something unexpected comes up during the project, we absorb the cost unless the scope changes at your request.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Call us at 604-353-7378 or submit a request through our website. We schedule an on-site visit at a time that works for you. The walkthrough takes about 30 minutes. You receive your firm quote within 48 hours by email.",
      },
      {
        question: "Why are your prices higher than some other painters?",
        answer:
          "We use premium products - Italian coatings, artisan paints, professional-grade primers - and invest more time in surface preparation. Our crews are trained, not subcontracted. The result is a finish that looks better on day one and holds up for years. Quality materials and skilled labour cost more, and the difference shows.",
      },
    ],
  },
  {
    slug: "process-timeline",
    title: "Our Process & Timeline FAQ",
    description:
      "What to expect before, during, and after your painting project. Scheduling, prep, cleanliness, and how we protect your home.",
    metaTitle: "Painting Process & Timeline FAQ | Shape of Paint Vancouver",
    metaDescription:
      "Learn what to expect from a Shape of Paint project. Day-by-day process, furniture protection, cleanliness standards, and project timelines.",
    primaryServiceLink: { label: "About Shape of Paint", href: "/about" },
    relatedFAQs: ["pricing-estimates", "paint-materials"],
    items: [
      {
        question: "How long does a typical painting project take?",
        answer:
          "Interior projects for a 3-bedroom home take 4 to 6 days. Exteriors take 5 to 10 days depending on size and weather. Cabinet refinishing takes 5 to 8 business days. We give you a specific timeline in your quote and update you if anything changes.",
      },
      {
        question: "What happens on day one of the project?",
        answer:
          "Your crew lead does a walkthrough with you to confirm every detail. Then we protect your floors, furniture, and fixtures before any prep begins. Nothing gets painted on day one - the first day is dedicated to setup and surface preparation. This is where quality starts.",
      },
      {
        question: "How do you keep the job site clean?",
        answer:
          "Every crew follows a 12-point daily checklist. Protective barriers go up before a single can opens. Floors are covered. Furniture is wrapped. Your home gets cleaned at the end of every work day - not just the last one. If your family is living in the space, rooms we are not working in stay completely untouched.",
      },
      {
        question: "Do I need to move my furniture before you arrive?",
        answer:
          "No. We handle all furniture moving and protection. Large items get shifted to the centre of the room and wrapped. Smaller items should be cleared from shelves and mantels for safety. We provide a simple checklist before your project start date.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "2 to 4 weeks is typical for interior work. Exterior season (May through September) books faster - 4 to 6 weeks out is safest. If you have a specific deadline, let us know early and we will do our best to accommodate. Call 604-353-7378 to check current availability.",
      },
      {
        question: "Do you offer a warranty or guarantee?",
        answer:
          "Yes. We stand behind every project with a written warranty. If anything peels, cracks, or fails due to our workmanship, we come back and fix it at no charge. The specific warranty period depends on the project type and is outlined in your quote.",
      },
      {
        question: "What if I need to change the colour after work starts?",
        answer:
          "Colour changes after work begins may affect your timeline and cost. We encourage finalizing colours before the project starts using large test swatches on your walls. If a change is needed mid-project, we discuss the impact and adjust transparently.",
      },
    ],
  },
  {
    slug: "paint-materials",
    title: "Paint & Materials FAQ",
    description:
      "Questions about the paints, coatings, and materials we use. From Italian imports to low-VOC options, learn what goes on your walls.",
    metaTitle: "Paint & Materials FAQ | Shape of Paint Vancouver",
    metaDescription:
      "Learn about the paints and coatings Shape of Paint uses. C2 Paint, Renner, ALCEA, Livos, and Italian decorative finishes explained.",
    primaryServiceLink: { label: "Interior Painting", href: "/vancouver/interior-painting" },
    relatedFAQs: ["interior-painting", "cabinet-painting"],
    items: [
      {
        question: "What paint brands do you use?",
        answer:
          "We use C2 Paint for interior walls, Renner and ALCEA for cabinet coatings, Livos for natural plant-based finishes, and Metropolis and Novocolor for decorative work. Each brand is selected for a specific purpose. We do not use one generic paint for everything.",
      },
      {
        question: "Are your paints low-VOC or zero-VOC?",
        answer:
          "C2 Paint is low-VOC. Livos plant-based finishes from Germany are naturally low in volatile compounds. For clients who need zero-VOC options - nurseries, homes with allergies, chemically sensitive spaces - we have solutions that deliver full colour and durability without the fumes.",
      },
      {
        question: "What is the best paint for kitchens and bathrooms?",
        answer:
          "Kitchens and bathrooms need moisture-resistant coatings with a slight sheen for easy cleaning. We typically use a satin or semi-gloss finish from C2 Paint in these rooms. For cabinets near moisture, Italian coatings from Renner cure harder and resist steam better than standard paints.",
      },
      {
        question: "How do I choose the right finish or sheen?",
        answer:
          "Flat and matte finishes hide imperfections and work well on ceilings and low-traffic walls. Eggshell is the most popular for living spaces - easy to clean with a subtle warmth. Satin and semi-gloss go on trim, doors, kitchens, and bathrooms where durability matters most.",
      },
      {
        question: "Why is primer important?",
        answer:
          "Primer seals the surface, blocks stains, and gives the topcoat something to bond to. Skipping primer leads to uneven colour, poor coverage, and peeling. On new drywall, wood, or repaired surfaces, primer is not optional - it is the foundation of a lasting paint job.",
      },
      {
        question: "What are Italian paints and why do you use them?",
        answer:
          "Italian coatings from Renner, ALCEA, Metropolis, and Novocolor are formulated for professional finishing. They cure harder, spray smoother, and produce richer colour depth than most domestic products. We import them specifically for cabinet work and decorative finishes where quality is visible every day.",
      },
      {
        question: "Do you carry paint for people with chemical sensitivities?",
        answer:
          "Yes. Livos finishes are plant-based and manufactured without synthetic solvents. They are a strong choice for clients with MCS (multiple chemical sensitivity), respiratory concerns, or young children. We can walk you through the options during your estimate visit.",
      },
      {
        question: "Can I supply my own paint?",
        answer:
          "You can, but we recommend against it. We select products based on the surface type, room conditions, and finish you want. Using the wrong product leads to adhesion problems and shorter lifespan. If you have a specific brand in mind, we are happy to discuss whether it is the right fit for your project.",
      },
    ],
  },
];

export function getFAQBySlug(slug: string): FAQCategory | undefined {
  return faqCategories.find((cat) => cat.slug === slug);
}

export function getAllFAQSlugs(): string[] {
  return faqCategories.map((cat) => cat.slug);
}
