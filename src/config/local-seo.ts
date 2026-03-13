export const PRIMARY_CITY_SLUG = "vancouver" as const;

export const CITY_CONTENT = {
  vancouver: {
    name: "Vancouver",
    summary:
      "From heritage homes in Kitsilano to modern builds on the West Side, Vancouver projects need detailed prep, tight scheduling, and premium coatings that hold through wet winters.",
    neighborhoods: [
      "Kitsilano",
      "Mount Pleasant",
      "Dunbar",
      "Kerrisdale",
      "Shaughnessy",
      "Point Grey",
    ],
    heroImage: "/images/exterior-portfolio-2.webp",
    heroAlt: "Vancouver home painted by Shape of Paint",
    weatherContext:
      "Vancouver averages 166 rain days per year. That constant moisture softens old caulking and lifts paint film on wood siding. Your exterior coatings need a primer system rated for high-humidity substrates -- not a standard all-purpose primer that most painters default to.",
    neighborhoodDetails:
      "Kitsilano heritage homes along Vine and Yew streets often have original fir siding that needs careful scraping before recoating. Shaughnessy properties feature multi-level trim details, leaded glass surrounds, and large covered porches that trap moisture behind fascia boards. Mount Pleasant row houses and character homes sit close together, so your project schedule needs to account for tight access and neighbour coordination.",
    localContext:
      "Vancouver housing stock spans 1920s Craftsman bungalows in Dunbar to 2010s infills along Cambie Corridor. Each substrate type -- cedar shingle, stucco, hardie board -- demands a different prep sequence and product system. Your home likely has at least two substrate types on the same elevation. That mix is where most painters cut corners on primer selection. Our process maps every surface before a brush touches the wall.",
    seasonalNote:
      "The driest stretch in Vancouver runs late June through mid-September. Booking your exterior project for July or August gives the longest cure windows between coats and the lowest risk of rain disrupting prep work.",
  },
  burnaby: {
    name: "Burnaby",
    summary:
      "Burnaby homes range from high-rise condos to older detached homes. Our process adapts to each property style without cutting prep or finish quality.",
    neighborhoods: ["Brentwood", "Burnaby Heights", "Metrotown", "Edmonds"],
    heroImage: "/images/exterior-portfolio-1.webp",
    heroAlt: "Burnaby exterior painting project",
    weatherContext:
      "Burnaby sits between the mountains and the Fraser River. That geography pulls moisture from both directions. Your siding dries slower here than in the Fraser Valley, and paint applied over damp substrates fails within 2 to 3 years. Moisture-meter checks before priming are not optional.",
    neighborhoodDetails:
      "Brentwood is transforming fast -- older ranchers next to new towers mean your detached home catches extra wind and shadow from adjacent high-rises. Burnaby Heights homes along Hastings and Elliot Street tend to be 1950s-era wood-frame with original cedar siding that needs thorough prep. Edmonds properties near Kingsway often have stucco over wood-frame construction, which traps moisture at the transition points if not properly sealed.",
    localContext:
      "Burnaby is one of the most architecturally mixed cities in the Lower Mainland. A single block can have a 1960s rancher, a 2020 laneway home, and a mid-rise condo. Your home needs a painting team that reads substrate conditions on site -- not one that runs the same product system on every job. Rapid redevelopment also means construction dust and debris settle on your exterior surfaces faster than you might expect.",
    seasonalNote:
      "Late June through August is the strongest window for exterior work in Burnaby. The gap between morning fog burn-off and evening dew gives your coatings enough cure time. Interior projects run well year-round with controlled ventilation.",
  },
  "north-vancouver": {
    name: "North Vancouver",
    summary:
      "North Vancouver projects face moisture and shade from the mountains. We prioritize substrate prep and coating selection to protect finishes longer.",
    neighborhoods: ["Lower Lonsdale", "Lynn Valley", "Edgemont", "Deep Cove"],
    heroImage: "/images/exterior-portfolio-5.webp",
    heroAlt: "North Vancouver house painting project",
    weatherContext:
      "North Vancouver gets roughly 30% more rain than downtown Vancouver. Mountain runoff keeps humidity high well into spring. North-facing elevations on your home may stay damp for weeks at a time. Most exterior paint failures here trace back to coating applied over moisture that never fully dried.",
    neighborhoodDetails:
      "Lower Lonsdale condos and townhomes along Esplanade face direct harbour exposure and salt air that accelerates coating breakdown on metal railings and trim. Lynn Valley homes sit under heavy tree canopy -- your north-facing walls collect moss and algae that must be fully removed before primer. Deep Cove properties along Panorama Drive deal with steep grades and limited sun, which means your siding holds moisture longer than flat-lot homes.",
    localContext:
      "North Van homes are built into slopes, surrounded by mature cedars, and exposed to mountain weather patterns that the rest of Metro Vancouver does not see. Your exterior surfaces face a unique combination of shade, moisture, and organic growth. Standard prep skips -- like pressure washing without proper dry time -- cause more repaints here than anywhere else in the region. Selecting the right primer for damp substrates is the single biggest factor in how long your finish lasts.",
    seasonalNote:
      "July and August offer the most reliable dry days on the North Shore. Early September can work if your project is already prepped. Spring is often too wet for exterior work, but interior projects schedule well from March onward.",
  },
  "west-vancouver": {
    name: "West Vancouver",
    summary:
      "West Vancouver homes often combine complex architecture with coastal exposure. We use a disciplined process to protect high-value surfaces and details.",
    neighborhoods: ["Dundarave", "Ambleside", "Caulfeild", "British Properties"],
    heroImage: "/images/exterior-portfolio-4.webp",
    heroAlt: "West Vancouver luxury exterior painting",
    weatherContext:
      "West Vancouver catches direct Pacific weather off English Bay. Salt-laden wind and heavy rain hit your oceanside elevations harder than sheltered walls just 50 feet away. UV exposure on south-facing surfaces fades colour faster here than anywhere else in Metro Vancouver. Your coating system needs to handle both extremes on the same home.",
    neighborhoodDetails:
      "Dundarave and Ambleside homes along Marine Drive face direct ocean wind that strips poorly bonded coatings in under 3 years. British Properties estates on the upper slopes feature complex rooflines, multi-level trim, and large timber accents that demand scaffold access and detailed sequencing. Caulfeild properties along Pilot House Road sit among mature evergreens -- your siding collects organic buildup that needs thorough remediation before coating.",
    localContext:
      "West Vancouver homes are among the most architecturally detailed in the region. Multi-substrate facades, large window packages, and custom millwork are standard. Your home likely has 3 or more surface types per elevation -- each needing a matched primer and topcoat system. Painters who use one product across every surface leave your investment exposed to early failure at transition points. Process discipline and product mapping are what protect a high-value finish.",
    seasonalNote:
      "Mid-June through late August is the prime exterior window in West Vancouver. Ocean breeze keeps temperatures moderate, but morning fog can delay start times on waterfront properties. Your interior work can run year-round with proper ventilation controls.",
  },
  coquitlam: {
    name: "Coquitlam",
    summary:
      "Coquitlam homes need practical timelines and durable coatings for family use. We keep sites organized and deliver crisp finishes that last.",
    neighborhoods: ["Burke Mountain", "Westwood Plateau", "Maillardville", "Austin Heights"],
    heroImage: "/images/exterior-portfolio-3.webp",
    heroAlt: "Coquitlam home painting project",
    weatherContext:
      "Coquitlam gets more rain than Vancouver proper -- around 1,800 mm annually at higher elevations near Burke Mountain. Your home at altitude faces longer wet seasons and cooler temps that slow paint cure times. Coating applied below the right temperature threshold will not bond properly, even if it looks fine at first.",
    neighborhoodDetails:
      "Burke Mountain homes built after 2015 often have hardie board and vinyl siding that needs specific adhesion primers most painters skip. Maillardville is one of the oldest neighbourhoods in the Tri-Cities -- your home may have original wood siding under layers of old paint that need full stripping before recoating. Austin Heights properties along Foster Avenue feature mid-century ranchers with stucco and wood trim combinations that require separate prep and product systems per surface.",
    localContext:
      "Coquitlam housing stock covers 60 years of building styles. New construction on Burke Mountain sits beside 1960s bungalows in Austin Heights and heritage-era homes near Maillardville. Your home fits somewhere in that range, and each era has different substrate conditions. A team that runs one prep sequence for every job will miss the specific failure points on your walls. Surface-by-surface mapping before work begins is what separates a 3-year repaint from a 10-year finish.",
    seasonalNote:
      "Late June through mid-September works best for exterior painting in Coquitlam. Burke Mountain homes at higher elevations should book early summer before fall rain arrives in late September. Interior projects fit well in any season with proper climate control.",
  },
  "port-moody": {
    name: "Port Moody",
    summary:
      "Port Moody properties are exposed to marine moisture and tree cover. Our prep-first process helps prevent early peeling and uneven wear.",
    neighborhoods: ["Heritage Mountain", "Newport Village", "Glenayre", "College Park"],
    heroImage: "/images/exterior-portfolio-8.webp",
    heroAlt: "Port Moody painting project",
    weatherContext:
      "Port Moody sits at the head of Burrard Inlet where marine moisture meets mountain runoff. Your home absorbs humidity from both sources. Fog lingers longer here than in Coquitlam or Burnaby, and morning dew on your siding can push back exterior start times by 2 to 3 hours on cool days.",
    neighborhoodDetails:
      "Heritage Mountain homes along David Avenue are surrounded by dense tree cover that blocks direct sun -- your north-facing walls may never fully dry between rain events without intervention. Newport Village townhomes feature modern composite siding that needs adhesion-specific primer, not the latex primer most crews carry. Glenayre properties near Ioco Road are older stock from the 1970s and 1980s with wood siding that often has hidden rot behind fascia boards and window trim.",
    localContext:
      "Port Moody is a compact city where inlet proximity and forest canopy create micro-climates block by block. Your home on Heritage Mountain faces different moisture conditions than a townhome in Newport Village just 2 km away. Cookie-cutter painting approaches fail here because they ignore those differences. The right process starts with a moisture reading on every elevation and a product plan that matches what your specific walls need -- not what worked on the last job.",
    seasonalNote:
      "July and August are the most dependable months for exterior work in Port Moody. Inlet fog clears later in spring than you might expect. If your project includes deck staining, book early July so wood surfaces have maximum dry time before fall rain returns.",
  },
  surrey: {
    name: "Surrey",
    summary:
      "Surrey projects often involve larger footprints and multi-phase timelines. We coordinate clearly so work moves without delays or surprises.",
    neighborhoods: ["South Surrey", "Cloverdale", "Fleetwood", "Newton"],
    heroImage: "/images/exterior-portfolio-6.webp",
    heroAlt: "Surrey house painting project",
    weatherContext:
      "Surrey is large enough to have its own weather zones. South Surrey near the border gets more wind off Boundary Bay, while Newton and Fleetwood sit lower and hold moisture after rain. Your home's specific location within Surrey determines how fast surfaces dry and which product systems perform best long-term.",
    neighborhoodDetails:
      "South Surrey homes along 16th Avenue and Crescent Road tend to be large custom builds with multiple substrate types per elevation -- stucco, hardie, cedar, and stone. Cloverdale properties near 176th Street mix rural-era farmhouses with newer infills, and your older home may have lead paint layers that need careful abatement before recoating. Fleetwood homes from the 1980s and 1990s often have T1-11 panel siding that absorbs water at the seams and needs targeted sealing before primer.",
    localContext:
      "Surrey has the most diverse housing stock in the Lower Mainland. Your home could be a 4,000 sq ft South Surrey estate, a 1970s Fleetwood split-level, or a Cloverdale character home on a half-acre lot. Each one has different access challenges, substrate conditions, and scheduling needs. A team that treats every Surrey project the same will miss the details that matter most on your property. Proper scoping before work starts prevents surprises during production.",
    seasonalNote:
      "June through September is your exterior window in Surrey. South Surrey projects benefit from slightly warmer temperatures than the rest of the Lower Mainland. For large-footprint homes, booking early summer ensures your full scope completes before fall moisture returns.",
  },
  "new-westminster": {
    name: "New Westminster",
    summary:
      "New Westminster includes heritage homes and dense urban properties. We handle both with precise prep, clean execution, and minimal disruption.",
    neighborhoods: ["Queen's Park", "Sapperton", "Uptown", "Downtown"],
    heroImage: "/images/exterior-portfolio-7.webp",
    heroAlt: "New Westminster painting project",
    weatherContext:
      "New Westminster sits along the Fraser River where humidity stays elevated year-round. Your heritage-era home absorbs that moisture through original wood siding and single-pane window frames. River fog in fall and winter keeps surfaces damp longer than you would expect, and paint applied over moisture trapped in old-growth fir fails within a few seasons.",
    neighborhoodDetails:
      "Queen's Park is one of the oldest residential neighbourhoods in BC -- your home may be a designated heritage property with original millwork, decorative brackets, and wood shingle siding that needs hand-prep, not power tools. Sapperton homes along East Columbia Street are dense working-class stock from the early 1900s with layers of lead-era paint requiring careful removal. Uptown properties near 6th Avenue and 6th Street are a mix of post-war bungalows and newer townhomes where stucco meets wood trim at problem-prone transition points.",
    localContext:
      "New Westminster has more pre-1940 homes per capita than any other city in Metro Vancouver. That heritage stock demands a different skill set than new construction. Your home likely has old-growth fir siding, multi-layer paint buildup, and substrate conditions that need careful assessment before any coating goes on. Painters who treat heritage prep like standard prep create failures that show up within 2 years. Proper stripping, consolidation, and period-appropriate product selection protect both your finish and your home's character.",
    seasonalNote:
      "July through early September is the safest exterior window in New Westminster. River-proximity fog lifts later in spring than in higher-elevation cities. Heritage exterior projects often take longer due to detailed prep, so booking by May for a summer start date keeps your timeline on track.",
  },
  langley: {
    name: "Langley",
    summary:
      "Langley homeowners value durable finishes and practical planning. Our teams deliver room-by-room clarity and long-term coating performance.",
    neighborhoods: ["Willoughby", "Walnut Grove", "Brookswood", "Fort Langley"],
    heroImage: "/images/exterior-portfolio-4.webp",
    heroAlt: "Langley house painting project",
    weatherContext:
      "Langley is further inland than most of Metro Vancouver, so your home sees wider temperature swings -- hotter summers and colder winters than the coast. That thermal cycling expands and contracts your siding more aggressively. Coatings need higher flexibility ratings here, or hairline cracks appear within 2 to 3 years.",
    neighborhoodDetails:
      "Willoughby is one of the fastest-growing neighbourhoods in BC -- homes built after 2016 use hardie board and engineered trim that need adhesion-grade primers, not standard latex. Walnut Grove homes from the 1990s along 88th Avenue often have aging stucco with hairline cracks at window corners where water enters the wall assembly. Fort Langley heritage homes along Glover Road feature original wood siding and period trim details that need hand-sanding and careful product matching to preserve character.",
    localContext:
      "Langley covers a wide range -- from brand-new Willoughby subdivisions to rural acreages in Brookswood and heritage homes in Fort Langley. Your property fits somewhere in that spectrum, and each type has its own prep demands. Newer hardie board fails when painted with the wrong primer. Older wood siding fails when stripped too aggressively. A team that understands both ends of that range protects your finish and your timeline. Product selection based on substrate age is where the difference shows up.",
    seasonalNote:
      "Langley's inland position gives you a slightly longer exterior season -- late May through mid-September. Summer temperatures often reach 30 degrees, which speeds dry times but requires early morning starts to avoid coating in direct midday heat.",
  },
  richmond: {
    name: "Richmond",
    summary:
      "Richmond properties near water and open exposure demand reliable coating systems. We choose products and prep methods for those exact conditions.",
    neighborhoods: ["Steveston", "Terra Nova", "Seafair", "Brighouse"],
    heroImage: "/images/exterior-portfolio-5.webp",
    heroAlt: "Richmond painting project",
    weatherContext:
      "Richmond is flat and exposed. Wind off the Strait of Georgia drives rain sideways into your siding at angles that sheltered cities never see. That lateral moisture penetration causes paint failure at horizontal joints and window sills first. Your coating system needs wind-driven rain resistance, not just top-down water protection.",
    neighborhoodDetails:
      "Steveston homes along Moncton Street and the waterfront face constant salt air exposure that degrades metal hardware and accelerates coating breakdown on wood trim. Terra Nova properties near the dike trail sit at near-sea-level elevation where ground moisture wicks up through foundation walls into lower siding courses. Brighouse townhomes and newer builds along No. 3 Road have composite siding panels that need manufacturer-specified primers to maintain warranty coverage.",
    localContext:
      "Richmond homes deal with a combination of wind, water proximity, and flat terrain that creates unique painting challenges. Your property likely sits below 2 metres above sea level. That means ground moisture, lateral wind-driven rain, and salt air all affect your exterior surfaces at the same time. Painters who prep for rain alone miss the wind and salt factors. A proper scope in Richmond includes moisture mapping, joint sealing, and product selection rated for coastal exposure conditions.",
    seasonalNote:
      "July and August are the strongest months for exterior work in Richmond. Wind patterns calm in midsummer, which gives your coatings more stable cure conditions. Steveston waterfront homes should plan for morning marine layer delays on cooler days.",
  },
  delta: {
    name: "Delta",
    summary:
      "Delta homes see strong wind and rain exposure. Our prep and product choices are built for that reality, not just short-term curb appeal.",
    neighborhoods: ["Ladner", "Tsawwassen", "North Delta", "Sunshine Hills"],
    heroImage: "/images/exterior-portfolio-2.webp",
    heroAlt: "Delta exterior painting project",
    weatherContext:
      "Delta is one of the most wind-exposed communities in the Lower Mainland. Tsawwassen catches direct Pacific gusts, and Ladner sits in an open river delta with no terrain to buffer weather. Your exterior paint film takes more mechanical stress from wind here than in sheltered inland cities. Flexible, high-adhesion coatings are essential.",
    neighborhoodDetails:
      "Tsawwassen homes along 56th Street and Beach Grove face direct ocean wind that strips poorly bonded coatings and drives salt spray deep into siding joints. Ladner village properties near 48th Avenue feature character homes with original wood siding, covered porches, and agricultural-era outbuildings that each need separate prep treatment. North Delta homes along Scott Road and Sunshine Hills are 1970s to 1990s stock with stucco and wood-frame construction where caulking at window transitions fails first.",
    localContext:
      "Delta spans three distinct communities, each with different exposure profiles. Your Tsawwassen home faces ocean wind. Your Ladner home faces river moisture. Your North Delta home faces suburban sheltering but older substrate conditions. A single approach across all three ignores the geography that drives coating failure. The right process reads your specific exposure -- wind angle, moisture source, sun path -- and selects products that respond to those conditions rather than defaulting to a one-size system.",
    seasonalNote:
      "June through August is the safest exterior window in Delta. Tsawwassen sees less rain than the rest of the Lower Mainland in summer, but wind never fully stops. Your project schedule should account for wind-hold days when spray application is not possible.",
  },
  "pitt-meadows": {
    name: "Pitt Meadows",
    summary:
      "Pitt Meadows homes benefit from careful moisture management and maintenance planning. We deliver coatings engineered for local weather swings.",
    neighborhoods: ["Central Pitt Meadows", "North Bonson", "Harris Road", "Meadowtown"],
    heroImage: "/images/exterior-portfolio-7.webp",
    heroAlt: "Pitt Meadows house painting project",
    weatherContext:
      "Pitt Meadows sits in a river valley between the Pitt and Fraser Rivers. Morning fog is common 8 months of the year, and agricultural land on all sides holds ground moisture that affects your home's lower siding and foundation trim. Temperature swings between summer highs and winter lows are sharper here than on the coast.",
    neighborhoodDetails:
      "Central Pitt Meadows homes along Harris Road are typically 1980s to 2000s builds with vinyl and wood siding combinations -- your vinyl panels may be in fair shape, but the wood trim around windows and fascia often needs full replacement before recoating. North Bonson is newer development where hardie board and engineered trim require adhesion primers that standard latex will not properly bond to. Meadowtown properties near the Lougheed corridor face road dust and vibration from truck traffic that deposits grime on your exterior surfaces faster than in quieter areas.",
    localContext:
      "Pitt Meadows is a small community surrounded by agricultural land and river systems. Your home absorbs moisture from the ground, the air, and seasonal flooding in adjacent fields. That combination creates conditions where standard exterior coatings underperform. Most paint failures here start at the bottom of walls where ground moisture wicks upward, not at the top where rain hits. Proper Pitt Meadows prep includes lower-wall moisture checks and vapor-permeable primer systems that let trapped moisture escape without blistering the topcoat.",
    seasonalNote:
      "Late June through August gives the best exterior conditions in Pitt Meadows. Morning fog burns off by 10 AM most summer days. Avoid fall bookings -- the valley traps moisture starting in October and your coatings will not cure properly in those conditions.",
  },
  "port-coquitlam": {
    name: "Port Coquitlam",
    summary:
      "Port Coquitlam projects need high durability for busy family homes. Our process focuses on detailed prep and finishes that stay clean and stable.",
    neighborhoods: ["Citadel", "Mary Hill", "Riverwood", "Lincoln Park"],
    heroImage: "/images/exterior-portfolio-6.webp",
    heroAlt: "Port Coquitlam painting project",
    weatherContext:
      "Port Coquitlam gets steady rain from October through April and moderate summer heat. Your home sits in a transition zone between coastal moisture and inland temperature swings. That combination means your exterior coatings need to handle both sustained dampness and thermal expansion -- a pairing that eliminates most entry-level paint products.",
    neighborhoodDetails:
      "Citadel Heights homes along Citadel Drive are family-oriented properties from the 1990s with stucco and vinyl exteriors -- your stucco likely has hairline cracks at corners and around dryer vents that let water behind the surface. Mary Hill properties near the Pitt River face elevated humidity from river proximity, and your lower siding and deck structures absorb moisture that accelerates rot if left unprotected. Lincoln Park homes along Lincoln Avenue are older 1970s stock where original wood siding has been painted multiple times, building up layers that need proper removal before recoating.",
    localContext:
      "Port Coquitlam is a family-focused city where homes see heavy daily use -- kids, pets, sports gear against walls, and frequent entry-point traffic. Your interior surfaces take more impact than a quiet empty-nester home. That means your coating selection should prioritize scrubbability and impact resistance, not just colour. Exterior surfaces face Tri-Cities rain patterns without the mountain shelter that Coquitlam gets. A durable finish in PoCo starts with products rated for the actual wear your home experiences, inside and out.",
    seasonalNote:
      "Late June through early September is your best exterior window in Port Coquitlam. Interior projects work well in spring and fall when your family can ventilate rooms without rain interference. Summer bookings fill early in PoCo due to the short dry season.",
  },
} as const;

export const INDEXABLE_SERVICE_SLUGS = [
  "interior-painting",
  "exterior-painting",
  "cabinet-painting",
  "decorative-finishes",
  "deck-fence-staining",
  "custom-millwork-feature-walls",
] as const;

export const SUPPORT_SERVICE_SLUGS = [
  "spray-finishes",
  "design-services",
] as const;

export type CitySlug = keyof typeof CITY_CONTENT;
export type IndexableServiceSlug = (typeof INDEXABLE_SERVICE_SLUGS)[number];
export type SupportServiceSlug = (typeof SUPPORT_SERVICE_SLUGS)[number];
export type ServiceSlug = IndexableServiceSlug | SupportServiceSlug;

type ServiceKeywordPlan = {
  primary: string;
  secondary: readonly string[];
};

type CityOverride = {
  localChallenge: string;
  pricingContext: string;
  seasonalTip: string;
};

type ServiceContentItem = {
  name: string;
  shortName: string;
  summary: string;
  introLead: string;
  answerBlock: string;
  processSteps: readonly [string, string, string];
  heroImage: string;
  heroAlt: string;
  image: string;
  imageAlt: string;
  brands: readonly string[];
  indexable: boolean;
  keywordPlan?: ServiceKeywordPlan;
  cityOverrides?: Partial<Record<CitySlug, CityOverride>>;
};

export const SERVICE_CONTENT: Record<ServiceSlug, ServiceContentItem> = {
  "interior-painting": {
    name: "Interior Painting",
    shortName: "interior painting",
    summary:
      "Walls, ceilings, trim, and detail surfaces finished with clear prep standards, clean lines, and product systems chosen for long-term performance.",
    introLead:
      "Interior painting projects need full surface prep, room protection, and line quality that still looks clean years later.",
    answerBlock:
      "For homeowners looking for interior painting in Metro Vancouver, the best results come from prep-first execution and product selection matched to each room.",
    processSteps: [
      "Protect floors and furnishings, repair surface defects, and map each room sequence before paint starts.",
      "Prime where needed, then apply premium coatings with controlled dry times for uniform sheen.",
      "Complete punch-list walkthroughs room by room so every edge, corner, and finish line is verified.",
    ],
    heroImage: "/images/interior.webp",
    heroAlt: "Interior painting service by Shape of Paint",
    image: "/images/interior-work.webp",
    imageAlt: "Interior painting detail by Shape of Paint",
    brands: ["Benjamin Moore", "C2 Paint", "Novocolor"],
    indexable: true,
    keywordPlan: {
      primary: "interior painting",
      secondary: [
        "interior house painting",
        "home interior painters",
      ],
    },
    cityOverrides: {
      vancouver: {
        localChallenge:
          "Heritage homes in Kitsilano and Shaughnessy often have plaster walls, high ceilings, and decorative moulding that need careful prep. Drywall patches on old plaster show through if the primer system is wrong. Your project plan should account for those substrate transitions.",
        pricingContext:
          "Vancouver interior projects typically run $3,500 to $9,000 for a full home depending on room count, ceiling height, and prep complexity.",
        seasonalTip:
          "Book interior work any time of year. Heated Vancouver homes dry coatings well even in winter months.",
      },
      burnaby: {
        localChallenge:
          "Burnaby homes near Brentwood face construction dust from nearby tower projects that settles on walls and trim. Older wood-frame interiors in Burnaby Heights have plaster over lathe that cracks along stud lines. Your prep plan needs to address both dust contamination and substrate movement before primer goes on.",
        pricingContext:
          "Burnaby interior painting typically ranges from $3,000 to $8,500 depending on room count, wall repairs, and whether older plaster needs skim coating.",
        seasonalTip:
          "Interior work runs well year-round in Burnaby. Spring and fall are popular booking windows when families settle into routines.",
      },
      "north-vancouver": {
        localChallenge:
          "North Vancouver mountain homes hold more interior moisture than coastal properties. Condensation builds on north-facing walls near large windows, especially in Lynn Valley homes surrounded by tree canopy. Your bathroom and kitchen surfaces need moisture-rated primers that stop vapor from blistering the topcoat.",
        pricingContext:
          "North Vancouver interior scopes usually range from $3,500 to $9,500 depending on ceiling height, moisture prep, and access to upper-level rooms.",
        seasonalTip:
          "Any season works for interior painting here. Winter projects benefit from your home heating system keeping surfaces warm enough for proper cure.",
      },
      "west-vancouver": {
        localChallenge:
          "West Vancouver homes feature large room volumes, soaring ceilings, and natural light that shifts dramatically through the day. Your walls show every imperfection when afternoon sun rakes across the surface at a low angle. Skim coating and careful sanding are standard prep steps here, not upgrades.",
        pricingContext:
          "West Vancouver interior projects typically run $5,500 to $15,000 or more given the larger footprints, custom millwork, and higher ceiling access requirements.",
        seasonalTip:
          "Book any season. West Vancouver homes have excellent climate control that supports year-round interior coating work.",
      },
      coquitlam: {
        localChallenge:
          "Coquitlam family homes see heavy daily traffic in hallways, stairwells, and kids' rooms. Newer Burke Mountain drywall is smooth but shows scuffs fast. Older Austin Heights homes have textured walls that trap dirt and need careful cleaning before recoating. Your product choice should prioritize scrubbability over sheen.",
        pricingContext:
          "Coquitlam interior painting runs $3,000 to $8,000 for a typical family home depending on room count and how much drywall repair is needed.",
        seasonalTip:
          "Fall and winter are ideal for interior projects when your family is settled into school routines and rooms can be painted in sequence.",
      },
      "port-moody": {
        localChallenge:
          "Port Moody townhomes and compact homes have smaller rooms where roller marks and lap lines are more visible up close. Inlet humidity pushes moisture into your bathrooms and laundry areas faster than inland cities. Your coating system needs to handle tight working space and elevated moisture without compromising sheen consistency.",
        pricingContext:
          "Port Moody interior projects typically range from $2,800 to $7,000 depending on the number of rooms and whether humidity-related prep is needed.",
        seasonalTip:
          "Interior work schedules well any time of year. Spring bookings let you refresh rooms before summer when windows stay open.",
      },
      surrey: {
        localChallenge:
          "Surrey homes often have larger footprints with 8 to 12 rooms that need phased scheduling so your family can keep using the house during the project. South Surrey custom builds mix drywall textures, feature walls, and tall foyer ceilings. Newton homes from the 1980s may have popcorn ceilings that need scraping before repainting.",
        pricingContext:
          "Surrey interior scopes range from $3,500 to $12,000 depending on home size, room count, and whether ceiling texture removal is included.",
        seasonalTip:
          "Any season works for Surrey interior painting. Larger homes benefit from booking early so phased scheduling aligns with your daily routine.",
      },
      "new-westminster": {
        localChallenge:
          "New Westminster heritage homes in Queen's Park often have original plaster walls with horsehair reinforcement that cracks differently than modern drywall. Your trim may have 6 or more paint layers from past decades, some containing lead that needs careful removal. Proper stripping and consolidation protect the character your home was built with.",
        pricingContext:
          "New Westminster interior painting typically costs $3,500 to $10,000 depending on heritage prep, lead abatement needs, and plaster restoration scope.",
        seasonalTip:
          "Book interior work any time of year. Heritage homes hold heat well, and winter projects keep your summer free for exterior work.",
      },
      langley: {
        localChallenge:
          "Langley's temperature swings affect interior cure times more than coastal cities. Your Willoughby home has smooth builder-grade drywall that shows roller texture if application speed is not controlled. Fort Langley heritage interiors feature plaster walls and wood trim that need careful prep to preserve the original character of your rooms.",
        pricingContext:
          "Langley interior painting ranges from $3,000 to $8,500 depending on home age, wall condition, and whether heritage-grade prep is part of the scope.",
        seasonalTip:
          "Spring and fall are ideal for interior work in Langley. Summer heat can speed dry times past the point where lap marks disappear cleanly.",
      },
      richmond: {
        localChallenge:
          "Richmond homes near sea level absorb ambient humidity that affects how paint dries on your walls. Condo and townhome interiors along No. 3 Road have limited ventilation that slows cure times. Your bathroom and kitchen surfaces are more prone to moisture-related coating failure here than in higher-elevation cities across Metro Vancouver.",
        pricingContext:
          "Richmond interior projects typically run $2,800 to $7,500 depending on unit size, ventilation conditions, and how much moisture prep is required.",
        seasonalTip:
          "Any season works for interior painting. Summer months offer the best ventilation conditions when windows can stay open between coats.",
      },
      delta: {
        localChallenge:
          "Delta homes -- especially in Ladner and Tsawwassen -- deal with wind-driven humidity that raises indoor moisture levels on stormy days. Your older Ladner home may have plaster walls with decades of paint buildup. North Delta split-levels from the 1970s often have textured ceilings and paneling that need specific prep before coating.",
        pricingContext:
          "Delta interior painting typically costs $3,000 to $8,000 depending on wall condition, texture removal, and the number of rooms in your scope.",
        seasonalTip:
          "Interior work runs well year-round. Fall and winter projects let you complete rooms while outdoor weather limits exterior options.",
      },
      "pitt-meadows": {
        localChallenge:
          "Pitt Meadows valley homes trap morning fog moisture that wicks into your walls through foundation-level gaps. Condensation on cool interior surfaces is common 8 months a year. Your lower-level rooms and bathrooms need vapor-permeable primers that let trapped moisture escape without blistering the finish coat on top.",
        pricingContext:
          "Pitt Meadows interior painting typically ranges from $2,800 to $7,500 depending on moisture prep, room count, and lower-level wall treatment.",
        seasonalTip:
          "Book interior work from fall through spring when outdoor projects pause. Summer is your window for deck and exterior work instead.",
      },
      "port-coquitlam": {
        localChallenge:
          "Port Coquitlam family homes take daily impact from kids, pets, and gear against hallway walls. Your high-traffic zones need coatings rated for scrubbing, not just colour. Citadel and Lincoln Park homes from the 1990s often have builder-grade flat paint that marks easily and was never designed for the level of use your household puts on it.",
        pricingContext:
          "Port Coquitlam interior painting typically costs $3,000 to $8,000 depending on room count, wall repair scope, and whether high-durability coatings are specified.",
        seasonalTip:
          "Fall and spring are popular for interior work in PoCo. These windows fit well between school schedules and outdoor project seasons.",
      },
    },
  },
  "exterior-painting": {
    name: "Exterior Painting",
    shortName: "exterior painting",
    summary:
      "Siding, stucco, trim, and decks coated with prep-driven systems built for Lower Mainland rain, UV, and seasonal temperature shifts.",
    introLead:
      "Exterior painting needs moisture-aware prep and coatings that are selected for Lower Mainland weather exposure.",
    answerBlock:
      "If you need exterior painting in Metro Vancouver, long coating life comes from substrate repairs, moisture control, and disciplined application windows.",
    processSteps: [
      "Inspect siding and trim, remediate peeling areas, and complete targeted repairs before coating starts.",
      "Match primer and topcoat systems to substrate type, solar exposure, and local moisture risk.",
      "Sequence elevation work by weather window and complete a final adhesion and coverage walkthrough.",
    ],
    heroImage: "/images/exterior.webp",
    heroAlt: "Exterior painting service by Shape of Paint",
    image: "/images/exterior-portfolio-3.webp",
    imageAlt: "Exterior painting detail by Shape of Paint",
    brands: ["Benjamin Moore", "Novocolor", "Metropolis"],
    indexable: true,
    keywordPlan: {
      primary: "exterior painting",
      secondary: [
        "exterior house painting",
        "stucco painting",
      ],
    },
    cityOverrides: {
      vancouver: {
        localChallenge:
          "Vancouver exteriors cycle between cedar shingle, stucco, and hardie board -- often on the same wall. Heritage homes along Vine Street in Kitsilano have original fir siding that needs full scraping before recoating. Your primer system must bridge those substrate transitions or the finish separates at every joint within two seasons.",
        pricingContext:
          "Vancouver exterior painting typically ranges from $5,000 to $14,000 depending on siding type, elevation count, and how much substrate repair is needed.",
        seasonalTip:
          "Late June through mid-September is your best exterior window. July and August give the longest cure times between coats.",
      },
      burnaby: {
        localChallenge:
          "Burnaby exteriors face moisture from two directions -- mountain runoff from the north and Fraser River humidity from the south. New towers in Brentwood cast shadows that keep your siding damp well past noon. Your coating system needs to handle slow-drying substrates that never get full sun exposure on the north side.",
        pricingContext:
          "Burnaby exterior scopes usually run $4,500 to $12,000 depending on access complexity, substrate mix, and whether adjacent construction creates scheduling constraints.",
        seasonalTip:
          "Late June through August gives the strongest cure conditions. Morning fog typically burns off by 10 AM in Burnaby during summer months.",
      },
      "north-vancouver": {
        localChallenge:
          "North Vancouver exteriors face constant moisture from mountain runoff and canopy shade. Cedar siding in Lynn Valley holds water longer than exposed south-facing walls. Your coating system needs to breathe, not trap moisture underneath. Painters who seal damp wood create blisters that appear within the first wet season.",
        pricingContext:
          "North Vancouver exterior scopes usually range from $5,000 to $14,000 depending on elevation access, substrate repairs, and canopy-related prep work.",
        seasonalTip:
          "May through September is the reliable exterior window. October is possible with weather monitoring on lower-elevation properties.",
      },
      "west-vancouver": {
        localChallenge:
          "West Vancouver exteriors take direct Pacific wind loaded with salt spray on ocean-facing elevations. Your south-facing walls fade twice as fast as sheltered surfaces just around the corner. Multi-substrate facades with cedar, stone, and stucco need separate primer systems per material -- one product across all surfaces guarantees early failure at transitions.",
        pricingContext:
          "West Vancouver exterior painting typically runs $8,000 to $22,000 or more given scaffold access needs, multi-substrate complexity, and coastal-grade product requirements.",
        seasonalTip:
          "Mid-June through late August is your prime window. Morning marine fog on waterfront properties can delay start times by 1 to 2 hours.",
      },
      coquitlam: {
        localChallenge:
          "Coquitlam exterior substrates vary sharply by elevation. Burke Mountain homes built after 2015 have hardie board that needs adhesion-grade primers most crews skip. Lower-elevation homes in Maillardville have original wood siding under layers of old paint. Your home's altitude affects both moisture exposure and how fast coatings cure between coats.",
        pricingContext:
          "Coquitlam exterior painting typically costs $4,500 to $12,000 depending on elevation, siding type, and the extent of substrate stripping required.",
        seasonalTip:
          "Late June through mid-September is ideal. Burke Mountain homes at higher elevations should book early summer before fall rain sets in late September.",
      },
      "port-moody": {
        localChallenge:
          "Port Moody sits where marine air meets mountain runoff at the head of Burrard Inlet. Your siding absorbs humidity from both sources. Heritage Mountain homes under dense tree cover never fully dry on north-facing walls between rain events. Standard exterior prep that skips moisture-meter checks before priming leads to blistering within the first winter.",
        pricingContext:
          "Port Moody exterior scopes typically range from $4,500 to $11,000 depending on tree-cover prep, substrate condition, and inlet-side moisture complexity.",
        seasonalTip:
          "July and August are your most dependable months. Inlet fog clears later in spring than you might expect -- plan for mid-morning start times.",
      },
      surrey: {
        localChallenge:
          "Surrey is large enough to have its own weather zones. Your South Surrey home catches wind off Boundary Bay that drives rain sideways into horizontal siding joints. Fleetwood homes from the 1980s have T1-11 panel siding that absorbs water at every seam. Newton properties face different drainage patterns than South Surrey -- one prep approach across all of Surrey ignores the geography.",
        pricingContext:
          "Surrey exterior painting ranges from $4,500 to $15,000 depending on footprint size, siding type, and whether your location faces direct coastal wind exposure.",
        seasonalTip:
          "June through September is your exterior window. South Surrey enjoys slightly warmer conditions that extend cure windows on larger scopes.",
      },
      "new-westminster": {
        localChallenge:
          "New Westminster has more pre-1940 homes per capita than any other Metro Vancouver city. Your heritage-era exterior likely has old-growth fir siding with multiple paint layers built up over decades. Fraser River humidity keeps surfaces damp longer than you expect. Painters who treat heritage prep like standard prep create failures that show up within 2 years.",
        pricingContext:
          "New Westminster exterior painting typically costs $5,000 to $13,000 depending on heritage prep scope, paint-layer removal, and river-proximity moisture challenges.",
        seasonalTip:
          "July through early September is the safest window. Heritage exterior scopes take longer, so booking by May for a summer start keeps your timeline intact.",
      },
      langley: {
        localChallenge:
          "Langley sits further inland than most of Metro Vancouver, so your siding faces wider temperature swings -- hotter summers and colder winters than the coast. That thermal cycling expands and contracts your cladding more aggressively. Coatings need higher flexibility ratings here. Hairline cracks appear within 2 to 3 years when rigid products are used.",
        pricingContext:
          "Langley exterior painting typically ranges from $4,500 to $12,000 depending on substrate age, thermal-expansion damage, and whether hardie or wood siding is involved.",
        seasonalTip:
          "Late May through mid-September gives you a longer window than the coast. Avoid coating in direct midday heat above 30 degrees -- early morning starts are standard.",
      },
      richmond: {
        localChallenge:
          "Richmond is flat and exposed. Wind off the Strait of Georgia drives rain sideways into your siding at angles that sheltered cities never see. That lateral moisture penetration causes paint failure at horizontal joints and window sills first. Your coating system needs wind-driven rain resistance, not just top-down water protection from standard products.",
        pricingContext:
          "Richmond exterior scopes typically run $4,500 to $12,000 depending on wind exposure level, substrate sealing needs, and how much joint repair is required.",
        seasonalTip:
          "July and August are the strongest months. Wind patterns calm in midsummer, giving your coatings more stable cure conditions across all elevations.",
      },
      delta: {
        localChallenge:
          "Delta is one of the most wind-exposed communities in the Lower Mainland. Tsawwassen catches direct Pacific gusts that strip poorly bonded coatings and drive salt into every siding joint. Your Ladner home faces river delta moisture. North Delta stucco from the 1970s develops hairline cracks at window corners that let water behind the surface if left unsealed.",
        pricingContext:
          "Delta exterior painting typically costs $4,500 to $13,000 depending on wind exposure, substrate type, and whether your property requires wind-hold days for spray application.",
        seasonalTip:
          "June through August is the safest window. Wind never fully stops in Tsawwassen, so your schedule should include buffer days for wind holds.",
      },
      "pitt-meadows": {
        localChallenge:
          "Pitt Meadows sits in a river valley where morning fog is common 8 months a year. Your exterior surfaces absorb moisture from the ground, the air, and seasonal flooding in adjacent agricultural fields. Most paint failures here start at the bottom of walls where ground moisture wicks upward -- not at the top where rain hits. Lower-wall prep is critical.",
        pricingContext:
          "Pitt Meadows exterior painting typically ranges from $4,000 to $10,000 depending on ground-moisture prep, substrate condition, and fog-related scheduling adjustments.",
        seasonalTip:
          "Late June through August gives the best conditions. Morning fog burns off by 10 AM most summer days, but avoid fall bookings after October.",
      },
      "port-coquitlam": {
        localChallenge:
          "Port Coquitlam gets steady rain from October through April and moderate summer heat. Your home sits in a transition zone between coastal moisture and inland temperature swings. Mary Hill properties near the Pitt River face elevated humidity that accelerates rot on unprotected lower siding. That combination eliminates most entry-level paint products from your spec.",
        pricingContext:
          "Port Coquitlam exterior painting typically costs $4,500 to $11,000 depending on river-proximity prep, substrate age, and whether stucco crack repair is included.",
        seasonalTip:
          "Late June through early September is your best window. Summer bookings fill early in PoCo due to the short reliable dry season.",
      },
    },
  },
  "cabinet-painting": {
    name: "Cabinet Painting",
    shortName: "cabinet painting",
    summary:
      "Kitchen and bathroom cabinets refinished with a controlled spray process for smooth, durable surfaces that outperform rushed brush-and-roll work.",
    introLead:
      "Cabinet painting requires degreasing, abrasion, and controlled spray finishing to avoid premature failure.",
    answerBlock:
      "Homeowners comparing cabinet painting options should prioritize prep detail and spray-process control over quick cosmetic paintovers.",
    processSteps: [
      "Remove and label doors and drawers, then degrease, abrade, and repair every cabinet component.",
      "Apply adhesion-promoting primer and spray-grade coatings in controlled conditions for a smooth factory-style finish.",
      "Reinstall hardware with alignment checks and complete a final cure and care walkthrough.",
    ],
    heroImage: "/images/cabinets.webp",
    heroAlt: "Cabinet painting service by Shape of Paint",
    image: "/images/cabinet-finish.webp",
    imageAlt: "Cabinet spray finish by Shape of Paint",
    brands: ["Renner", "ALCEA", "Livos"],
    indexable: true,
    keywordPlan: {
      primary: "cabinet painting",
      secondary: [
        "cabinet refinishing",
        "cabinet refacing",
        "kitchen cabinet painting",
      ],
    },
    cityOverrides: {
      vancouver: {
        localChallenge:
          "Kitsilano craftsman homes often have solid wood cabinet doors from the 1950s with layered lacquer finishes that need chemical stripping before primer bonds. High-end kitchen renovations along the West Side demand spray precision that matches your neighbourhood's standards. Heritage wood profiles need careful prep to preserve their original character.",
        pricingContext:
          "Vancouver cabinet painting typically ranges from $5,000 to $12,000 depending on door count, wood species, and whether heritage lacquer removal adds prep days to your scope.",
        seasonalTip:
          "Cabinet work runs year-round indoors. Winter bookings move faster since exterior demand pauses and spray crews have open availability.",
      },
      burnaby: {
        localChallenge:
          "Burnaby Heights homes built in the 1980s still carry their original oak cabinets with dark stain and raised panels. Your condo kitchen near Metrotown likely has limited ventilation for spray equipment, and strata rules may restrict HVLP use. A low-overspray setup is essential in tight multi-unit buildings where air handling cannot be compromised.",
        pricingContext:
          "Burnaby cabinet painting typically costs $4,500 to $10,000 depending on condo ventilation requirements, oak prep, and total door count across kitchen and bathroom.",
        seasonalTip:
          "Book any season. Condo projects need strata approval for spray equipment, so allow two extra weeks for building coordination before your start date.",
      },
      "north-vancouver": {
        localChallenge:
          "Mountain humidity in North Vancouver slows cure times on cabinet coatings. Your 1970s or 1980s kitchen likely has dated wood cabinets with yellowed varnish that needs full sanding. Damp air from nearby trails can push indoor humidity above 60 percent, and spraying in those conditions traps moisture under the film and clouds your sheen.",
        pricingContext:
          "North Vancouver cabinet painting usually ranges from $5,000 to $11,000 depending on moisture management, wood condition, and whether dehumidification is needed during curing.",
        seasonalTip:
          "Summer gives the driest spray conditions. If you book in winter, portable dehumidifiers in your kitchen keep cure times on track.",
      },
      "west-vancouver": {
        localChallenge:
          "West Vancouver kitchens feature large layouts with imported cabinetry materials and designer specifications. Your cabinet doors may be a European wood species that requires specialty primer and colour-matched topcoats. The sheen depth and surface clarity expected at this level leave zero tolerance for orange peel, dust inclusions, or uneven film build.",
        pricingContext:
          "West Vancouver cabinet painting typically runs $7,000 to $18,000 depending on imported wood prep, door count, and whether designer colour matching adds sample rounds.",
        seasonalTip:
          "Schedule any season. Year-round climate control in West Vancouver homes supports consistent spray conditions regardless of exterior weather.",
      },
      coquitlam: {
        localChallenge:
          "Coquitlam family kitchens handle heavy daily cooking, and grease buildup around stovetops is the hidden problem most homeowners underestimate. Burke Mountain modern kitchens have clean MDF shaker doors, but older stock in Austin Heights has solid oak with dark stain. Your degreasing step determines whether primer bonds or peels within a year.",
        pricingContext:
          "Coquitlam cabinet painting typically costs $4,500 to $10,000 depending on grease remediation, door count, and whether older stained oak needs full sanding to accept lighter paint.",
        seasonalTip:
          "Any season works indoors. Fall bookings are easier to schedule since exterior demand drops and your kitchen project gets priority crew attention.",
      },
      "port-moody": {
        localChallenge:
          "Port Moody kitchens tend toward compact layouts where overspray containment is critical. Burrard Inlet moisture raises ambient humidity inside your home, and cabinet doors sprayed in damp conditions develop a hazy sheen instead of the smooth factory look. Condensation risk during application means your refinisher needs humidity monitoring equipment on site.",
        pricingContext:
          "Port Moody cabinet painting typically ranges from $4,500 to $9,000 depending on kitchen size, containment complexity, and whether humidity control equipment is needed during curing.",
        seasonalTip:
          "Summer offers the best natural ventilation. Book by April to lock in a summer slot before exterior season fills the schedule.",
      },
      surrey: {
        localChallenge:
          "Newton-area homes commonly have thermofoil cabinet doors that peel at the edges. Most painters refuse to touch thermofoil because standard primers do not bond to it. Your larger Surrey kitchen may have 40 or more doors, and each thermofoil face needs bonding primer rated for non-porous surfaces. That primer selection is the entire difference between a lasting finish and early failure.",
        pricingContext:
          "Surrey cabinet painting typically ranges from $4,500 to $10,000 depending on door count, thermofoil repair scope, and how many cabinet materials need separate prep systems.",
        seasonalTip:
          "Any time of year works well. Larger kitchens benefit from winter bookings when spray crews can dedicate a full week without competing exterior commitments.",
      },
      "new-westminster": {
        localChallenge:
          "Queen's Park heritage kitchens may have original solid wood cabinets with raised panels and decades of paint layers underneath. Your cabinet doors carry character worth preserving. Stripping old finishes on heritage cabinetry is slow, detail-oriented work, but the result keeps wood profiles intact rather than burying them under thick new coats that obscure the millwork.",
        pricingContext:
          "New Westminster cabinet painting typically costs $5,000 to $11,000 depending on heritage prep, paint layer removal, and the complexity of original cabinet profiles.",
        seasonalTip:
          "Book any season. Heritage cabinet work takes longer than standard refinishing, so plan for 7 to 10 production days rather than the typical 4 to 5.",
      },
      langley: {
        localChallenge:
          "Newer Willoughby kitchens have MDF and melamine doors with smooth factory surfaces that reject paint unless the right adhesion primer is used. Fort Langley heritage homes have solid wood cabinetry with character profiles worth keeping. Your finish system needs to match the substrate, because one primer approach does not cover both materials reliably.",
        pricingContext:
          "Langley cabinet painting ranges from $4,000 to $9,000 depending on door count, material type, and whether MDF edge sealing or heritage wood repair adds prep scope.",
        seasonalTip:
          "Spring and fall are ideal. Summer heat above 30 degrees affects spray viscosity in garage spray booths, and winter is a quieter booking window with faster scheduling.",
      },
      richmond: {
        localChallenge:
          "Richmond kitchens face two challenges most areas do not. Cooking styles that produce heavy grease films on cabinet faces, and flat-terrain humidity that keeps ambient moisture elevated year-round. Your degreasing step is the most critical part of the project. Skip it or rush it, and your primer fails within months regardless of topcoat quality.",
        pricingContext:
          "Richmond cabinet painting typically ranges from $4,500 to $10,000 depending on grease remediation scope, humidity management, and strata approval timelines for spray equipment.",
        seasonalTip:
          "Summer months give the lowest humidity for spray work. Allow extra lead time for strata or building management approval of ventilation and equipment plans.",
      },
      delta: {
        localChallenge:
          "Older Ladner kitchens have solid wood cabinets with dark varnish that needs full sanding before a lighter finish takes evenly. Newer Tsawwassen homes often have thermofoil doors that peel at the edges and reject standard primers. Your cabinet material drives the entire prep approach, and confusing the two substrate types leads to adhesion failure.",
        pricingContext:
          "Delta cabinet painting typically costs $4,500 to $9,500 depending on cabinet material, existing finish removal, and whether thermofoil repair adds to the prep scope.",
        seasonalTip:
          "Any season works for indoor cabinet refinishing. Summer bookings fill early, so plan ahead if you want your kitchen finished before fall entertaining season.",
      },
      "pitt-meadows": {
        localChallenge:
          "Valley humidity in Pitt Meadows affects spray curing even indoors. Your 1990s oak cabinet stock likely has a factory finish that has yellowed from UV through kitchen windows. Agricultural dust from surrounding fields settles on surfaces and must be cleaned before spray work begins, otherwise particles embed in your wet topcoat and ruin the finish.",
        pricingContext:
          "Pitt Meadows cabinet painting typically ranges from $4,000 to $9,000 depending on dust contamination prep, oak condition, and whether yellowed finishes need colour correction.",
        seasonalTip:
          "Winter months are a strong booking window. Agricultural dust levels drop and crews have more availability once exterior season ends.",
      },
      "port-coquitlam": {
        localChallenge:
          "Port Coquitlam family kitchens handle heavy daily use, and grease buildup around your stovetop and range hood is the biggest prep challenge. Your cabinets need thorough degreasing before primer goes on. Scrubbability matters in a busy household, so your topcoat needs to be rated for repeated cleaning without dulling or wearing through at high-contact points.",
        pricingContext:
          "Port Coquitlam cabinet painting typically costs $4,500 to $9,500 depending on grease remediation, door count, and whether damaged MDF edges need rebuilding before spray.",
        seasonalTip:
          "Book any season. Fall and spring are popular when families want their kitchens refreshed without competing with summer outdoor schedules.",
      },
    },
  },
  "decorative-finishes": {
    name: "Decorative Finishes",
    shortName: "decorative finishes",
    summary:
      "Feature walls and artisan decorative systems including Venetian plaster, texture layering, and custom finish development for high-character interiors.",
    introLead:
      "Decorative finishes are detail-driven installations that need planning, sample approval, and careful execution.",
    answerBlock:
      "For decorative finishes in Metro Vancouver, Venetian plaster and artisan texture systems perform best when the substrate and sheen strategy are defined before application.",
    processSteps: [
      "Build sample boards and agree on texture, movement, and sheen before full installation.",
      "Prepare substrate for specialty materials, then apply layered finish systems with controlled trowel and tool technique.",
      "Refine transitions, lighting response, and edge detail during final artisan walkthroughs.",
    ],
    heroImage: "/images/custom-project.webp",
    heroAlt: "Decorative finish installation by Shape of Paint",
    image: "/images/design-services.webp",
    imageAlt: "Venetian plaster decorative finish detail",
    brands: ["Novocolor", "Metropolis", "Meoded"],
    indexable: true,
    keywordPlan: {
      primary: "venetian plaster",
      secondary: [
        "decorative wall finishes",
        "artisan wall finishes",
      ],
    },
    cityOverrides: {
      vancouver: {
        localChallenge:
          "West Side design-forward homes have large feature walls with floor-to-ceiling windows that push natural light across textured surfaces all day. Your plaster finish looks different at 9 a.m. than at 4 p.m. Sample boards must be evaluated in your actual room across multiple light conditions before full application begins.",
        pricingContext:
          "Vancouver decorative finish projects typically range from $2,500 to $8,000 per feature wall depending on wall area, material system, and the number of custom sample boards required.",
        seasonalTip:
          "Book any season. Plaster applications need stable indoor temperatures, which Vancouver homes maintain well year-round with standard heating systems.",
      },
      burnaby: {
        localChallenge:
          "Burnaby condo accent walls in open-concept layouts need to anchor a room without overwhelming it. Your wall may connect visually to kitchen, dining, and living areas all at once. Smaller feature installations in tight spaces demand precise trowel control, because your eye sits closer to the surface than in a large home with generous room depth.",
        pricingContext:
          "Burnaby decorative finish projects typically cost $2,000 to $6,500 depending on wall size, material selection, and whether strata approval adds lead time to your schedule.",
        seasonalTip:
          "Any season works well. Condo projects should confirm building access for specialty materials and trowel equipment before locking your installation date.",
      },
      "north-vancouver": {
        localChallenge:
          "Mountain views through large windows in North Vancouver create dramatic natural light that shifts across your feature wall throughout the day. Morning sun, midday shade, and golden evening glow each reveal different depth and movement in plaster surfaces. That changing light is your finish's greatest asset when the texture is right, and its biggest liability when it is not.",
        pricingContext:
          "North Vancouver decorative finish scopes usually range from $2,500 to $7,500 depending on wall area, light-response testing, and material complexity for your chosen system.",
        seasonalTip:
          "Book any season. Extended summer daylight gives you the broadest range of natural conditions to evaluate your finish samples against before committing.",
      },
      "west-vancouver": {
        localChallenge:
          "West Vancouver luxury estates call for full-room installations with imported Italian plaster systems and designer-led colour development. Your living room wall may be 200 square feet or more with 15-foot ceilings. At that scale, trowel technique, material batch consistency, and edge transitions become critical. Any inconsistency in stroke pattern is visible from across the room.",
        pricingContext:
          "West Vancouver decorative finish projects typically run $4,000 to $15,000 depending on wall scale, ceiling height, imported material grade, and the complexity of edge detailing.",
        seasonalTip:
          "Any season works. Year-round climate control in West Vancouver homes supports consistent plaster cure conditions regardless of outdoor weather.",
      },
      coquitlam: {
        localChallenge:
          "Coquitlam homeowners are showing emerging interest in textured finishes for living room feature walls. Your Burke Mountain great room with vaulted ceilings needs a finish that anchors the space without overwhelming it. Newer drywall is smooth and well-suited for plaster, but the substrate needs proper sealing to prevent moisture wicking into your decorative layer.",
        pricingContext:
          "Coquitlam decorative finish projects typically cost $2,000 to $6,000 depending on wall height, material system, and whether new drywall needs additional sealing prep.",
        seasonalTip:
          "Fall and winter are ideal booking seasons when feature wall projects fit between other home finishing steps in newer Burke Mountain builds.",
      },
      "port-moody": {
        localChallenge:
          "Port Moody's artistic community gravitates toward smaller, considered installations in heritage Mountain custom homes and modern townhomes alike. Your compact room means the feature wall fills a large percentage of your visual field. Trowel work must be precise because viewing distance is short, and any inconsistency in texture reads immediately at close range.",
        pricingContext:
          "Port Moody decorative finish projects typically range from $2,000 to $6,000 depending on wall size, material selection, and whether inlet humidity requires cure monitoring equipment.",
        seasonalTip:
          "Summer offers the lowest humidity for plaster curing. Book by spring to secure a summer slot before the schedule fills with exterior commitments.",
      },
      surrey: {
        localChallenge:
          "South Surrey's growing luxury market brings large format living rooms that suit full-scale decorative installations. Your home may have multiple rooms that each warrant a different approach. Venetian plaster in the dining room, limewash in the primary bedroom, and textured stucco in the foyer each need separate material systems coordinated to keep the home visually cohesive.",
        pricingContext:
          "Surrey decorative finish projects typically range from $2,500 to $7,000 depending on room count, material variety, and the scale of each wall surface in your home.",
        seasonalTip:
          "Any season works for indoor decorative finishes. Multi-room scopes benefit from winter bookings when artisan crews have dedicated availability.",
      },
      "new-westminster": {
        localChallenge:
          "Heritage interiors in Queen's Park have original plaster walls, crown moulding, and picture rails that your decorative finish needs to complement. Applying modern Venetian plaster over old plaster substrates requires compatibility testing. Some heritage wall compositions react poorly to modern lime-based products, and period-appropriate restoration demands a different material approach than new construction.",
        pricingContext:
          "New Westminster decorative finish projects typically cost $2,500 to $7,000 depending on heritage substrate testing, wall condition, and period-detail coordination.",
        seasonalTip:
          "Book any season. Heritage homes hold stable indoor temperatures that support consistent plaster application and curing throughout the year.",
      },
      langley: {
        localChallenge:
          "Fort Langley character homes suit aged-plaster techniques that complement original wood trim and period details. Newer Willoughby builds with builder-grade smooth walls want texture contrast that adds visual depth to otherwise plain surfaces. Your finish choice needs to match your home's character, because the wrong texture in the wrong setting undermines both the room and the investment.",
        pricingContext:
          "Langley decorative finish projects typically range from $2,000 to $6,000 depending on finish style, wall preparation, and whether heritage-compatible materials are needed.",
        seasonalTip:
          "Spring and fall are ideal. Summer heat in Langley can accelerate plaster dry times past the point where trowel manipulation creates the intended texture.",
      },
      richmond: {
        localChallenge:
          "Richmond interiors lean toward contemporary design with clean lines and subtle texture preferences. Your feature wall placement needs careful consideration because condo and townhome layouts offer limited wall space. The wall you choose must handle both the visual weight of the finish and the room's lighting conditions without overwhelming a compact floor plan.",
        pricingContext:
          "Richmond decorative finish projects typically cost $2,000 to $6,500 depending on wall area, humidity control needs, and the complexity of your chosen material system.",
        seasonalTip:
          "Summer months offer the lowest ambient humidity for plaster work. Confirm building access for materials and equipment well in advance of your start date.",
      },
      delta: {
        localChallenge:
          "South Delta luxury homes and Tsawwassen custom builds often have coastal-inspired interiors where decorative finishes complement ocean views. Your Ladner character home may have formal rooms that suit traditional plaster techniques. Matching the finish to your home's era is essential. A polished modern plaster in a 1920s cottage feels misplaced, just as rough limewash in a sleek new build misses the mark.",
        pricingContext:
          "Delta decorative finish projects typically range from $2,000 to $6,500 depending on architectural style-matching, wall size, and material complexity.",
        seasonalTip:
          "Any season works for indoor finishes. Tsawwassen's moderate temperatures and lower rainfall make scheduling and material delivery straightforward year-round.",
      },
      "pitt-meadows": {
        localChallenge:
          "Pitt Meadows homes suit smaller feature wall projects and accent treatments that enhance natural light without competing with valley views through your windows. Earthy plaster tones and natural lime-based finishes complement the rural setting better than high-gloss or heavily pigmented systems that feel urban and out of place.",
        pricingContext:
          "Pitt Meadows decorative finish projects typically cost $1,800 to $5,500 depending on material choice, wall area, and whether valley humidity requires additional cure monitoring.",
        seasonalTip:
          "Book in summer or early fall when humidity is lowest. Valley fog in winter raises indoor moisture that can extend plaster cure times significantly.",
      },
      "port-coquitlam": {
        localChallenge:
          "Port Coquitlam's growing interest in decorative finishes centers on living room and dining room accent walls. Your feature wall in a main living area will get touched, bumped, and cleaned regularly. The finish system must be durable enough for a busy household while still delivering the artisan texture and depth that drew you to a decorative approach over standard paint.",
        pricingContext:
          "Port Coquitlam decorative finish projects typically range from $2,000 to $6,000 depending on durability requirements, wall size, and material selection.",
        seasonalTip:
          "Fall and winter are good booking windows. Indoor feature wall work fits well when outdoor projects pause and family schedules settle into predictable routines.",
      },
    },
  },
  "deck-fence-staining": {
    name: "Deck & Fence Staining",
    shortName: "deck and fence staining",
    summary:
      "Deck and fence staining with wash prep, moisture checks, and penetration-focused product systems that preserve wood and stabilize colour.",
    introLead:
      "Deck and fence staining projects succeed when moisture levels, prep timing, and penetration depth are controlled.",
    answerBlock:
      "For deck and fence staining in Metro Vancouver, coating life depends on wash prep, dry-time discipline, and stain systems selected for local rain cycles.",
    processSteps: [
      "Wash and prep wood surfaces, then confirm moisture content before stain application begins.",
      "Select penetrating stain systems based on wood age, grain condition, and UV exposure.",
      "Apply even coats, back-brush for penetration, and complete maintenance scheduling guidance at closeout.",
    ],
    heroImage: "/images/exterior-portfolio-6.webp",
    heroAlt: "Deck and fence staining project by Shape of Paint",
    image: "/images/exterior-portfolio-2.webp",
    imageAlt: "Stained outdoor wood surface by Shape of Paint",
    brands: ["Benjamin Moore", "Livos", "Renner"],
    indexable: true,
    keywordPlan: {
      primary: "deck staining",
      secondary: [
        "fence staining",
        "wood staining",
      ],
    },
    cityOverrides: {
      vancouver: {
        localChallenge:
          "Vancouver decks face 166 rain days a year. Cedar decking in Kitsilano and Point Grey absorbs moisture that never fully dries between storms on covered surfaces. Your back-lane fence gets rain from both sides, which means it weathers twice as fast as a sheltered wall. Penetrating stain systems outperform film-forming products here because they let trapped water escape.",
        pricingContext:
          "Vancouver deck and fence staining typically ranges from $1,500 to $5,500 depending on square footage, wood condition, and whether power washing and grey-wood restoration are needed.",
        seasonalTip:
          "Book for July or August when your wood has the best chance to dry fully before stain application. Early June can work if the spring has been dry.",
      },
      burnaby: {
        localChallenge:
          "Burnaby decks near Brentwood sit in shadow from adjacent towers for part of the day, which slows wood drying after rain. Older cedar fences in Burnaby Heights have weathered grey and may need wood brightener treatment before stain penetrates evenly. Your deck boards may also collect construction dust from nearby development that contaminates the surface and blocks stain absorption.",
        pricingContext:
          "Burnaby deck and fence staining typically costs $1,500 to $5,000 depending on wood condition, shade-related prep, and whether grey-wood restoration is included.",
        seasonalTip:
          "Late June through August is your best window. Morning fog burns off by mid-morning in summer, giving your wood enough dry hours for stain to penetrate.",
      },
      "north-vancouver": {
        localChallenge:
          "North Vancouver decks under heavy tree canopy in Lynn Valley and Deep Cove stay damp far longer than sun-exposed surfaces. Moss and algae grow on your deck boards and fence posts between staining cycles. Your wood needs thorough cleaning and sometimes sanding to remove organic growth that prevents stain from bonding. Steep lots also create drainage issues where water pools at deck footings.",
        pricingContext:
          "North Vancouver deck and fence staining usually ranges from $1,800 to $6,000 depending on canopy shade prep, moss removal, and slope-related access challenges.",
        seasonalTip:
          "July and August are the only reliable months. Canopy shade limits dry windows even in summer, so your project needs precise timing around weather forecasts.",
      },
      "west-vancouver": {
        localChallenge:
          "West Vancouver decks face ocean salt spray on waterfront properties and intense UV on south-facing surfaces along the upper slopes. Your cedar or ipe decking degrades from both ends -- salt pulls moisture into the grain while UV breaks down surface fibers. Fence panels along steep lot lines are hard to access and often face different exposure conditions on each side, requiring varied stain application rates.",
        pricingContext:
          "West Vancouver deck and fence staining typically runs $2,500 to $8,000 depending on deck size, wood species, salt-exposure prep, and slope access requirements.",
        seasonalTip:
          "Mid-June through late August is your prime window. Morning marine fog on waterfront decks can delay start times, so plan for flexible scheduling.",
      },
      coquitlam: {
        localChallenge:
          "Coquitlam decks at higher elevations on Burke Mountain receive more rain than lower-lying neighbourhoods. Your newer pressure-treated deck may still contain factory moisture that needs a full drying season before stain will absorb properly. Many homeowners stain new decks too soon. Older cedar decks in Austin Heights have weathered grey and need restoration treatment to open the wood grain before penetrating stain can do its job.",
        pricingContext:
          "Coquitlam deck and fence staining typically costs $1,500 to $5,000 depending on wood age, elevation-related moisture content, and whether new-wood drying time is needed.",
        seasonalTip:
          "Late June through mid-September works best. Burke Mountain properties at higher elevation should book early summer before fall rain returns in late September.",
      },
      "port-moody": {
        localChallenge:
          "Port Moody decks at the head of Burrard Inlet absorb marine moisture from the water and ground moisture from surrounding forest. Your Heritage Mountain deck under dense tree cover may never fully dry without intervention. Compact townhome decks in Newport Village have limited airflow underneath that traps moisture against the underside of your boards, accelerating rot from below -- a failure point most homeowners never check.",
        pricingContext:
          "Port Moody deck and fence staining typically ranges from $1,500 to $5,000 depending on moisture management, underside ventilation assessment, and wood condition.",
        seasonalTip:
          "Book for early July when inlet fog subsides and wood surfaces have maximum dry time. Deck staining before fall is critical to protect against winter rain.",
      },
      surrey: {
        localChallenge:
          "Surrey decks range from large South Surrey outdoor living spaces to modest Fleetwood patio decks. Your South Surrey property near Boundary Bay faces wind that strips stain from exposed surfaces faster than sheltered locations. Cloverdale properties with older cedar fences along property lines often have ground-contact posts that rot from the base up and need replacement before staining the rest of the fence makes sense.",
        pricingContext:
          "Surrey deck and fence staining typically ranges from $1,500 to $6,500 depending on total square footage, wind exposure level, and whether post replacement is included.",
        seasonalTip:
          "June through September gives you the widest window in Surrey. South Surrey dries faster than Fleetwood in summer, so scheduling varies by neighbourhood.",
      },
      "new-westminster": {
        localChallenge:
          "New Westminster heritage homes often have covered verandas, wrap-around porches, and original cedar railings that need careful staining without damaging adjacent painted surfaces. Your Queen's Park porch may have tongue-and-groove decking that traps moisture between boards. Fraser River proximity keeps humidity high, so your wood surfaces need longer dry times between wash and stain than homes further from the water.",
        pricingContext:
          "New Westminster deck and porch staining typically costs $1,500 to $5,500 depending on heritage porch complexity, railing detail, and river-proximity prep time.",
        seasonalTip:
          "July through early September is safest. River fog lifts later in spring, so avoid booking porch staining before mid-June in New Westminster.",
      },
      langley: {
        localChallenge:
          "Langley decks face wider temperature swings than coastal cities. Summer heat above 30 degrees bakes your deck boards dry, then winter cold contracts the wood grain -- that cycle cracks stain films that are not flexible enough. Your Fort Langley heritage porch may have softwood decking that absorbs stain unevenly without proper sanding. Brookswood acreage decks and fences cover large areas that need phased scheduling.",
        pricingContext:
          "Langley deck and fence staining typically ranges from $1,500 to $6,000 depending on total area, wood species, and whether temperature-cycling damage needs repair first.",
        seasonalTip:
          "Early June through mid-September gives you the longest window. Avoid staining in direct midday heat above 30 degrees -- mornings are best for Langley.",
      },
      richmond: {
        localChallenge:
          "Richmond decks sit near sea level where ground moisture wicks up through deck footings and post bases. Wind off the strait drives rain sideways under covered decks that most homeowners think are protected. Your Steveston waterfront deck also faces salt air that breaks down stain faster than freshwater exposure alone. Ground-level decks with poor underside drainage are the biggest failure point in Richmond.",
        pricingContext:
          "Richmond deck and fence staining typically costs $1,500 to $5,000 depending on ground-moisture prep, salt-exposure level, and underside drainage conditions.",
        seasonalTip:
          "July and August give the calmest wind conditions for stain application. Steveston waterfront properties should plan for marine layer delays on cooler mornings.",
      },
      delta: {
        localChallenge:
          "Delta decks take more wind stress than almost anywhere else in Metro Vancouver. Your Tsawwassen deck catches direct Pacific gusts that strip film-forming stains within 2 years. Ladner character-home porches with ground-contact posts absorb river delta moisture that rots wood from the inside out. Penetrating stain systems work better here because they move with the wood instead of sitting on top where wind and water attack the film.",
        pricingContext:
          "Delta deck and fence staining typically ranges from $1,500 to $5,500 depending on wind exposure, post condition, and whether structural wood repairs are needed first.",
        seasonalTip:
          "June through August is your window. Wind never fully stops in Tsawwassen, so spray-applied stain may not be viable -- brush and roller application gives better results.",
      },
      "pitt-meadows": {
        localChallenge:
          "Pitt Meadows decks absorb moisture from agricultural ground, valley fog, and seasonal river flooding in adjacent fields. Your deck boards may feel dry on top but hold moisture underneath where airflow is limited. Morning fog is common 8 months a year, which deposits a thin moisture film on wood surfaces before you even notice. Stain applied over that invisible dampness will not penetrate properly and will peel within a season.",
        pricingContext:
          "Pitt Meadows deck and fence staining typically costs $1,500 to $4,500 depending on moisture management, ground-level drainage issues, and fog-related scheduling adjustments.",
        seasonalTip:
          "Late June through August is the only reliable window. Morning fog burns off by 10 AM, but you need stain-ready wood by then -- so prep the day before.",
      },
      "port-coquitlam": {
        localChallenge:
          "Port Coquitlam decks serve busy family households where kids, pets, and outdoor furniture grind dirt into the wood grain. Your deck surface takes more mechanical wear than a quiet patio, which means prep needs to remove ground-in debris before stain can penetrate. Mary Hill properties near the Pitt River also face elevated humidity that keeps wood moisture content higher than your deck surface appearance suggests.",
        pricingContext:
          "Port Coquitlam deck and fence staining typically ranges from $1,500 to $5,000 depending on wear-related prep, wood condition, and river-proximity moisture levels.",
        seasonalTip:
          "Late June through early September is your window. Summer bookings fill fast in PoCo, so plan ahead if you want your deck ready for peak outdoor season.",
      },
    },
  },
  "custom-millwork-feature-walls": {
    name: "Custom Millwork & Feature Walls",
    shortName: "custom millwork and feature wall finishing",
    summary:
      "Wainscotting, board-and-batten, shiplap, and feature-wall finishing with detailed joinery prep and high-contrast paint systems.",
    introLead:
      "Custom millwork and feature wall projects need clean carpentry transitions, precise caulking, and durable finish systems.",
    answerBlock:
      "For custom millwork and feature walls in Metro Vancouver, long-term quality comes from joinery prep, edge discipline, and finish sequencing.",
    processSteps: [
      "Audit existing trim or new millwork conditions, then fill, sand, and caulk for seamless transitions.",
      "Prime and finish each profile with product systems matched to traffic level and light exposure.",
      "Run detail-level final checks on lines, corners, and texture consistency before handoff.",
    ],
    heroImage: "/images/custom-project.webp",
    heroAlt: "Custom millwork feature wall painting by Shape of Paint",
    image: "/images/interior-portfolio-5.webp",
    imageAlt: "Feature wall detail by Shape of Paint",
    brands: ["C2 Paint", "Benjamin Moore", "Metropolis"],
    indexable: true,
    keywordPlan: {
      primary: "custom millwork",
      secondary: [
        "wainscoting",
        "board and batten",
        "feature wall painting",
      ],
    },
    cityOverrides: {
      vancouver: {
        localChallenge:
          "Vancouver Craftsman homes in Dunbar and Kerrisdale have original crown moulding, baseboard profiles, and picture rails that define the room's character. Your millwork may need careful repair before recoating -- filling nail holes, re-caulking shrinkage gaps, and sanding profiles without flattening the original detail. New shiplap or board-and-batten installations in Mount Pleasant lofts need a different finishing approach entirely.",
        pricingContext:
          "Vancouver millwork and feature wall projects typically range from $2,500 to $10,000 depending on trim complexity, wall installation scope, and heritage detail restoration.",
        seasonalTip:
          "Book any season. Millwork finishing is indoor work that runs well year-round with controlled temperature and humidity in your home.",
      },
      burnaby: {
        localChallenge:
          "Burnaby homes range from builder-grade trim in Brentwood towers to mid-century profiles in older Burnaby Heights houses. Your condo may have flat stock baseboards that lack character, and adding wainscoting or panel moulding transforms the space without structural changes. Older homes have settling-related gaps where trim meets walls that need careful filling to create clean lines before finishing.",
        pricingContext:
          "Burnaby millwork and feature wall projects typically cost $2,000 to $7,500 depending on whether the scope includes new installation, profile upgrades, or refinishing existing trim.",
        seasonalTip:
          "Any season works well. Winter is a good time for millwork upgrades when your home renovation schedule is quieter and crews have more availability.",
      },
      "north-vancouver": {
        localChallenge:
          "North Vancouver mountain homes often feature West Coast modern architecture with clean-line trim profiles, large window casings, and natural wood panel accents. Your feature wall may use vertical cedar planks or reclaimed wood that needs a clear coat rather than paint. Moisture from mountain proximity means your wood trim expands and contracts more than in drier cities -- joint caulking and flexible fillers are essential for lasting lines.",
        pricingContext:
          "North Vancouver millwork projects typically range from $2,500 to $9,000 depending on wood species, panel installation scope, and moisture-management prep at trim transitions.",
        seasonalTip:
          "Book any season. Indoor humidity control in North Vancouver homes supports year-round finishing. Summer offers better ventilation during clear-coat applications.",
      },
      "west-vancouver": {
        localChallenge:
          "West Vancouver homes feature custom millwork that often includes imported profiles, raised-panel wainscoting, and floor-to-ceiling library walls. Your trim may have been installed by specialty carpenters with precision joints that demand equally precise paint lines. The scale of formal living rooms -- 12 to 15-foot ceilings with continuous crown runs -- requires scaffold access and a finishing approach that keeps sheen consistent across long unbroken surfaces.",
        pricingContext:
          "West Vancouver millwork and feature wall projects typically run $5,000 to $18,000 depending on scale, imported profile complexity, and the level of finish detail expected.",
        seasonalTip:
          "Any season works. Climate-controlled West Vancouver homes support year-round millwork finishing with consistent cure conditions throughout the space.",
      },
      coquitlam: {
        localChallenge:
          "Coquitlam homeowners on Burke Mountain are adding wainscoting, board-and-batten, and feature wall panels to personalize newer builder-grade interiors. Your smooth drywall is an ideal substrate for panel installation, but the trim needs to be properly acclimatized to your home's humidity level before installation -- boards installed straight from the lumber yard will shrink and gap as they dry down to indoor moisture content.",
        pricingContext:
          "Coquitlam millwork and feature wall projects typically cost $2,000 to $7,500 depending on installation scope, panel style, and whether existing trim needs upgrades to match.",
        seasonalTip:
          "Fall and winter are ideal for millwork projects when indoor humidity is stable and your renovation timeline aligns with quieter construction schedules.",
      },
      "port-moody": {
        localChallenge:
          "Port Moody townhomes have compact rooms where shiplap or board-and-batten feature walls make the biggest visual impact relative to the wall area. Your hallway or stairwell accent wall may be the first surface guests see when they enter. Inlet humidity means your wood panels need acclimation time indoors before installation, and your finish system needs to resist the moisture fluctuations that Port Moody homes experience year-round.",
        pricingContext:
          "Port Moody millwork and feature wall projects typically range from $1,800 to $6,000 depending on wall size, panel type, and whether humidity-related wood acclimation adds to the timeline.",
        seasonalTip:
          "Any season works for indoor millwork. Summer offers the best ventilation conditions for paint and clear coat curing in compact townhome spaces.",
      },
      surrey: {
        localChallenge:
          "Surrey homes span the full range -- from South Surrey estate foyers with floor-to-ceiling panel walls to Newton family homes adding wainscoting to a dining room. Your South Surrey custom build may have 3 or more rooms that each need different trim profiles and finish levels. Coordinating millwork style across those rooms so the home reads as one cohesive design takes careful planning at the sample board stage.",
        pricingContext:
          "Surrey millwork and feature wall projects typically range from $2,000 to $12,000 depending on room count, profile complexity, and total linear footage of trim.",
        seasonalTip:
          "Book any season. Large multi-room millwork scopes benefit from winter scheduling when dedicated crews can work through the full scope without weather interruptions.",
      },
      "new-westminster": {
        localChallenge:
          "New Westminster heritage homes in Queen's Park have original millwork -- crown moulding, wainscoting, and baseboards -- that may be over 100 years old. Your trim profiles may no longer be available as stock items and need custom milling to match. Period-correct restoration means matching the exact profile, wood species, and finish technique, not replacing heritage details with modern flat stock that changes the room's architectural character.",
        pricingContext:
          "New Westminster heritage millwork projects typically cost $3,500 to $12,000 depending on profile matching, custom milling requirements, and the extent of original trim restoration.",
        seasonalTip:
          "Any season works. Heritage millwork restoration is indoor precision work that benefits from stable temperature and dedicated crew scheduling.",
      },
      langley: {
        localChallenge:
          "Langley homes bridge the gap between modern farmhouse aesthetics in Willoughby and heritage trim details in Fort Langley. Your newer home may suit shiplap or board-and-batten that adds character to plain builder walls. Fort Langley properties with original trim need careful restoration that preserves the historical detail. Temperature swings in Langley also mean your wood trim expands and contracts more than in coastal cities, so flexible caulking systems are essential.",
        pricingContext:
          "Langley millwork and feature wall projects typically range from $2,000 to $8,000 depending on style, installation scope, and whether heritage-grade materials and techniques are needed.",
        seasonalTip:
          "Spring and fall are ideal for millwork installation. Summer heat in Langley can cause wood panels to dry too fast after installation, opening up joints prematurely.",
      },
      richmond: {
        localChallenge:
          "Richmond condos and townhomes often have limited wall space that makes feature wall placement a strategic decision. Your millwork installation needs to create maximum visual impact on the one or two walls that can handle it. Modern flat-panel wainscoting and slim-profile baseboards suit the clean lines of Richmond's newer housing stock better than ornate traditional profiles that fight the architecture.",
        pricingContext:
          "Richmond millwork and feature wall projects typically cost $1,800 to $6,500 depending on wall area, profile style, and whether strata approval is needed for installation work.",
        seasonalTip:
          "Any season works for indoor millwork. Condo projects should confirm noise restrictions and elevator access for material delivery with your building management.",
      },
      delta: {
        localChallenge:
          "Delta homes in Ladner have character-era trim profiles that match the village's heritage architecture. Your Tsawwassen home may suit coastal-inspired panel walls with clean horizontal lines that echo the waterfront setting. North Delta split-levels from the 1970s often have dated trim that can be modernized with board-and-batten or flat-panel wainscoting without removing the original baseboards underneath.",
        pricingContext:
          "Delta millwork and feature wall projects typically range from $2,000 to $7,500 depending on architectural style matching, panel type, and whether existing trim needs updating.",
        seasonalTip:
          "Book any season. Indoor millwork finishing runs well year-round, and winter bookings give you updated rooms before spring entertaining season.",
      },
      "pitt-meadows": {
        localChallenge:
          "Pitt Meadows homes often suit millwork that complements the rural-residential character of the community. Your living room or dining room may benefit from wainscoting or a reclaimed-wood feature wall that feels grounded in the agricultural landscape around you. Valley humidity means your wood panels need extra acclimation time indoors -- a minimum of 2 weeks before installation -- to prevent shrinkage gaps from opening after the finish is applied.",
        pricingContext:
          "Pitt Meadows millwork and feature wall projects typically cost $1,800 to $6,000 depending on wood species, panel style, and humidity-related acclimation scheduling.",
        seasonalTip:
          "Fall and winter are good booking windows when valley humidity is highest and indoor acclimation of materials aligns with your project timeline naturally.",
      },
      "port-coquitlam": {
        localChallenge:
          "Port Coquitlam family homes benefit from millwork that adds character and handles daily wear. Your hallway board-and-batten protects walls from scuffs, backpacks, and strollers while improving the look of a high-traffic zone. Playroom and mudroom feature walls need coatings rated for cleaning and impact. The finish system matters as much as the millwork profile when your household puts real pressure on every surface.",
        pricingContext:
          "Port Coquitlam millwork and feature wall projects typically range from $2,000 to $7,000 depending on room function, durability requirements, and total linear footage.",
        seasonalTip:
          "Any season works well. Fall and winter bookings align with quieter family schedules and give you updated spaces before spring and summer gatherings.",
      },
    },
  },
  "spray-finishes": {
    name: "Spray Finishes",
    shortName: "spray finishes",
    summary:
      "Support service for spray-grade application quality across cabinetry, trim, doors, and selected architectural surfaces.",
    introLead:
      "Spray finishes are used inside core project scopes when clients need a controlled factory-style surface profile.",
    answerBlock:
      "Spray finishing is handled as a technical method inside core services where it improves smoothness, durability, and consistency.",
    processSteps: [
      "Stage equipment, masking, and environmental controls for overspray containment.",
      "Apply spray-grade coatings at calibrated pressure and fan settings for uniform coverage.",
      "Complete cure monitoring and touch-up control before reinstall and handoff.",
    ],
    heroImage: "/images/cabinet-portfolio-4.webp",
    heroAlt: "Spray finish application by Shape of Paint",
    image: "/images/cabinet-portfolio-6.webp",
    imageAlt: "Spray-finished cabinet surface",
    brands: ["Renner", "ALCEA", "Benjamin Moore"],
    indexable: false,
  },
  "design-services": {
    name: "Design Services",
    shortName: "design services",
    summary:
      "Support service for concept development, finish coordination, and colour planning within core painting and finishing engagements.",
    introLead:
      "Design services are delivered as part of scoped projects when finish planning needs deeper direction before production.",
    answerBlock:
      "Design support is included where it improves project certainty, finish coordination, and homeowner decision speed.",
    processSteps: [
      "Review project goals, visual references, and lighting conditions before final finish selection.",
      "Build practical palettes and material combinations aligned with architecture and lifestyle needs.",
      "Finalize production-ready specs so execution teams can deliver the intended look without guesswork.",
    ],
    heroImage: "/images/design-services.webp",
    heroAlt: "Design planning session by Shape of Paint",
    image: "/images/custom-project.webp",
    imageAlt: "Custom design finish concept",
    brands: ["C2 Paint", "Novocolor", "Metropolis"],
    indexable: false,
  },
};

export const CITY_SLUGS = Object.keys(CITY_CONTENT) as CitySlug[];
export const SERVICE_SLUGS = [
  ...INDEXABLE_SERVICE_SLUGS,
  ...SUPPORT_SERVICE_SLUGS,
] as const;

export const SERVICE_KEYWORD_OWNERSHIP = {
  homepage: ["house painters vancouver", "painters vancouver"],
  vancouver: {
    "interior-painting": {
      primary: "interior painting vancouver",
      secondary: [
        "interior house painting vancouver",
        "vancouver interior painting",
      ],
    },
    "exterior-painting": {
      primary: "exterior painting vancouver",
      secondary: [
        "exterior house painting vancouver",
        "exterior home painting vancouver",
        "stucco painting vancouver",
      ],
    },
    "cabinet-painting": {
      primary: "cabinet painting vancouver",
      secondary: [
        "cabinet refacing vancouver",
        "cabinet refinishing vancouver",
        "kitchen cabinet painting vancouver",
      ],
    },
    "decorative-finishes": {
      primary: "venetian plaster vancouver",
      secondary: [
        "decorative finishes vancouver",
        "venetian plaster walls",
      ],
    },
    "deck-fence-staining": {
      primary: "deck staining vancouver",
      secondary: [
        "fence staining vancouver",
        "wood staining vancouver",
      ],
    },
    "custom-millwork-feature-walls": {
      primary: "custom millwork vancouver",
      secondary: [
        "wainscoting vancouver",
        "board and batten vancouver",
        "feature wall painting vancouver",
      ],
    },
  },
  nonVancouverPattern:
    "{service keyword} {city}",
} as const;

export function isCitySlug(value: string): value is CitySlug {
  return value in CITY_CONTENT;
}

export function isServiceSlug(value: string): value is ServiceSlug {
  return value in SERVICE_CONTENT;
}

export function isIndexableServiceSlug(
  value: string
): value is IndexableServiceSlug {
  return (INDEXABLE_SERVICE_SLUGS as readonly string[]).includes(value);
}

export function getCityPath(city: CitySlug): string {
  return `/${city}`;
}

export function getCityServicePath(city: CitySlug, service: IndexableServiceSlug): string {
  return `/${city}/${service}`;
}

export function getVancouverServicePath(service: IndexableServiceSlug): string {
  return getCityServicePath(PRIMARY_CITY_SLUG, service);
}

export function getServiceLabel(service: ServiceSlug): string {
  return SERVICE_CONTENT[service].name;
}
