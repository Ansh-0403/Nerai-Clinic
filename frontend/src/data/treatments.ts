export interface Treatment {
  id: string;
  title: string;
  category: 'Orthodontics' | 'Cosmetic' | 'Conservative' | 'Surgery';
  description: string;
  imageUrl: string;
  whatItIs: string;
  benefits: string[];
  procedure: string[];
  recovery: string;
}

export const treatmentsData: Treatment[] = [
  {
    id: 'braces',
    title: 'Precision Braces',
    category: 'Orthodontics',
    description: 'Traditional and modern bracket systems engineered to align teeth with surgical precision and control.',
    imageUrl: '/images/treatments/braces.jpg',
    whatItIs: 'Precision Braces involve the placement of metal or ceramic brackets onto the teeth, connected by archwires that exert gentle, continuous pressure. This co-ordinated tension guides the teeth into their ideal alignment over time, correcting misalignments, crowding, and bite issues.',
    benefits: [
      'Corrects severe crowding, spacing, and complex malocclusions.',
      'Improves long-term jaw alignment, reducing joint wear and strain.',
      'Enhances facial symmetry and overall oral function.'
    ],
    procedure: [
      'Clinical Assessment: Comprehensive diagnostic mapping via 3D scans and digital X-rays.',
      'Bonding Session: Secure, tooth-by-tooth placement of premium brackets with medical-grade adhesive.',
      'Wire Activation: Installation of the initial memory-shape archwire to kickstart alignment.',
      'Routine Adjustments: Periodic tightening (every 4-6 weeks) to maintain continuous corrective force.'
    ],
    recovery: 'Expect minor soreness for 3-5 days after initial placement and updates. Maintain rigorous hygiene utilizing specialized orthodontic brushes and floss threads. Avoid hard, sticky, or crunchy foods.'
  },
  {
    id: 'aligners',
    title: 'Invisalign & Clear Aligners',
    category: 'Orthodontics',
    description: 'Virtually invisible, removable aligner trays custom-modeled for a discreet orthodontic experience.',
    imageUrl: '/images/treatments/aligners.jpg',
    whatItIs: 'Invisalign and clear aligner systems utilize a custom-engineered series of medical-grade, BPA-free plastic trays. These trays are custom-molded to fit snugly over your teeth, incrementally moving them into position according to a precise digital treatment plan.',
    benefits: [
      'Discreet and virtually invisible styling for professionals.',
      'Removable for effortless eating, drinking, brushing, and flossing.',
      'Fewer emergency clinic appointments compared to traditional braces.'
    ],
    procedure: [
      'Digital Scan: Capturing a high-accuracy 3D digital model of your dentition using intraoral scanners.',
      'ClinchCheck Simulation: Visualization of the step-by-step movement path and final aesthetic outcome.',
      'Tray Fabrication: Receiving your series of custom-made aligners.',
      'Wear Compliance: Wearing each tray set for 20-22 hours daily, switching to the next set every 1-2 weeks.'
    ],
    recovery: 'Slight pressure may be felt when transitioning to a new tray set, which subsides within 48 hours. Clean aligners daily using lukewarm water and gentle cleaning crystals.'
  },
  {
    id: 'veneers',
    title: 'Porcelain Veneers',
    category: 'Cosmetic',
    description: 'Wafer-thin, hand-crafted porcelain shells bonded to the front of teeth for a flawless, natural smile.',
    imageUrl: '/images/treatments/veneers.jpg',
    whatItIs: 'Porcelain Veneers are ultra-thin shells of dental ceramic custom-shaped to cover the front surface of teeth. They are designed to correct aesthetic discrepancies such as severe staining, chipping, structural wear, or minor gaps.',
    benefits: [
      'Delivers an instantly brighter, symmetrical, and structurally sound smile.',
      'Highly stain-resistant material that mimics natural tooth enamel translucency.',
      'Long-lasting cosmetic restoration with minimal tooth reduction.'
    ],
    procedure: [
      'Consultation & Design: Co-designing your smile proportions and shade selection.',
      'Tooth Preparation: Conservative removal of a micro-layer of enamel (approx. 0.3mm to 0.5mm) to accommodate the shell.',
      'Impression: Capturing a high-fidelity physical or digital mold for laboratory fabrication.',
      'Final Bonding: Conditioning the enamel and permanently cement-bonding the porcelain veneer.'
    ],
    recovery: 'Minimal recovery period. Some patients experience temporary mild sensitivity to hot and cold liquids, which resolves in a few days. Treat veneers like natural teeth with standard brushing and flossing.'
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment (Endodontics)',
    category: 'Conservative',
    description: 'Precision therapy using microscopic instruments to save infected teeth and alleviate acute pain.',
    imageUrl: '/images/treatments/root-canal.jpg',
    whatItIs: 'Root Canal Treatment is a conservative procedure designed to salvage a tooth whose inner pulp tissue has become infected or necrotized due to decay, trauma, or cracks. The treatment removes the compromised pulp, sanitizes the canal space, and seals it.',
    benefits: [
      'Relieves persistent dental pain and stops the spread of local bone infection.',
      'Saves the natural tooth structure, maintaining normal chewing force.',
      'Avoids the necessity of tooth extraction and subsequent replacement.'
    ],
    procedure: [
      'Anesthesia & Access: Profound local anesthesia followed by the creation of a micro-access cavity.',
      'Debridement: Meticulous extraction of infected pulp tissue using precise endodontic files.',
      'Disinfection: Rigorous flushing of root canals with bio-compatible antibacterial solutions.',
      'Obturation & Sealing: Filling the empty canal system with gutta-percha and sealing the entry point.'
    ],
    recovery: 'The treated tooth may feel tender for 2-3 days following the procedure. Avoid chewing on the treated side until a permanent crown or bridge restoration is placed.'
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    category: 'Cosmetic',
    description: 'Advanced clinical-grade bleaching systems that safely lift deep stains and brighten enamel.',
    imageUrl: '/images/treatments/whitening.jpg',
    whatItIs: 'Teeth Whitening utilizes high-concentration hydrogen peroxide bleaching gels, activated by specialized therapeutic light systems, to oxidize organic pigments lodged inside the enamel micro-structure.',
    benefits: [
      'Achieves up to 5-8 shades of brightening in a single 60-minute visit.',
      'Supervised clinical application minimizes gum irritation and sensitivity.',
      'Removes stubborn stains caused by tea, coffee, red wine, and aging.'
    ],
    procedure: [
      'Prophylaxis: Gentle surface cleaning to remove any active plaque or tartar build-up.',
      'Gingival Barrier: Application of a protective curing resin over the gums to prevent gel contact.',
      'Gel Application: Precise layering of the clinical bleaching compound onto teeth.',
      'Light Activation: Exposing the gel to a specialized blue LED light source for 15-minute cycles.'
    ],
    recovery: 'Avoid strongly pigmented food and drink (the "White Diet") for 48 hours post-treatment. Use a desensitizing toothpaste if temporary thermal sensitivity occurs.'
  },
  {
    id: 'cleaning',
    title: 'Teeth Cleaning & Scaling',
    category: 'Conservative',
    description: 'Ultrasonic scaling and polishing to remove plaque, calculus, and keep gums perfectly healthy.',
    imageUrl: '/images/treatments/cleaning.jpg',
    whatItIs: 'Scaling and polishing involves the mechanical removal of hard tartar (calculus) and soft bacterial plaque deposits from the teeth, particularly along and below the gumline, preventing gingival inflammation.',
    benefits: [
      'Prevents gum disease (gingivitis and periodontitis).',
      'Eliminates chronic bad breath (halitosis) by clearing bacterial nests.',
      'Stops gum bleeding and preserves underlying supporting bone.'
    ],
    procedure: [
      'Ultrasonic Scaling: Employs micro-vibrations to shatter and wash away calcified tartar deposits.',
      'Manual Scaling: Fine hand instruments used to trace sub-gingival pockets and smooth out root surfaces.',
      'Polishing: Utilizing a rotating cup and prophy paste to lift surface stains and smooth the enamel.',
      'Fluoride Coating: Application of a protective mineral varnish to reinforce enamel (optional).'
    ],
    recovery: 'You may experience mild gum tenderness and sensitivity for 24 hours. Continue regular brushing and flossing immediately, using a soft-bristled toothbrush.'
  },
  {
    id: 'smile-designing',
    title: 'Smile Designing',
    category: 'Cosmetic',
    description: 'A holistic digital and clinical mapping to design the ideal smile proportions for your face.',
    imageUrl: '/images/treatments/smile-designing.jpg',
    whatItIs: 'Smile Designing combines facial aesthetics, photography, and digital mockup software to design a customized smile. It coordinates lip lines, facial midline, and gum contours with veneers, crowns, or aligners to draft your ideal smile.',
    benefits: [
      'Tailors the dental aesthetic to harmonize with your unique facial geometry and skin tone.',
      'Allows you to preview and approve the three-dimensional mockups before treatments start.',
      'Integrates orthodontics, cosmetics, and periodontics into a unified plan.'
    ],
    procedure: [
      'Aesthetic Analysis: High-resolution facial photography, dental videography, and intraoral scans.',
      'Digital Prototyping: Modeling the proposed teeth length, width, and position on-screen.',
      'Mockup Walkthrough: Temporary placement of resin mockups on your teeth for real-life evaluation.',
      'Phased Execution: Scheduling the cosmetic, orthodontic, or restorative procedures to complete the design.'
    ],
    recovery: 'Recovery depends on the underlying procedures selected (e.g., veneers vs. gum contouring). A comprehensive post-treatment plan will be customized for you.'
  },
  {
    id: 'crown-bridge',
    title: 'Crown and Bridge Restorations',
    category: 'Conservative',
    description: 'High-strength ceramic caps and bridges to restore broken teeth or bridge gaps seamlessly.',
    imageUrl: '/images/treatments/crown-bridge.jpg',
    whatItIs: 'Crowns are custom caps that cover the entire visible portion of a broken or root-canaled tooth. Bridges utilize adjacent teeth as anchors to support a solid false tooth (pontic) in order to span a gap caused by tooth loss.',
    benefits: [
      'Restores structural strength, function, and aesthetics to heavily decayed teeth.',
      'Prevents shifting of adjacent teeth into empty socket spaces.',
      'Made from premium biocompatible zirconia or E-max porcelain.'
    ],
    procedure: [
      'Tooth Reduction: Reshaping the core tooth structure to create space for the restoration thickness.',
      'Precision Impression: Taking a highly accurate physical mold or 3D scan of the prepared tooth.',
      'Temporary Crown: Cementing a temporary acrylic cap to protect the tooth structure.',
      'Final Bonding: Seating the custom zirconia or ceramic restoration and cementing it securely.'
    ],
    recovery: 'Avoid extremely sticky or hard foods for 24 hours after final cementation. Maintain standard hygiene, paying special attention to flossing under bridge structures.'
  },
  {
    id: 'wisdom-tooth',
    title: 'Wisdom Tooth Removal',
    category: 'Surgery',
    description: 'Gentle, sterile surgical extraction of impacted or painful third molars to preserve spacing.',
    imageUrl: '/images/treatments/wisdom-tooth.jpg',
    whatItIs: 'Wisdom tooth extraction is a surgical procedure to remove one or more third molars, which often lack sufficient eruption room and become impacted, causing pain, infection, or damage to neighboring teeth.',
    benefits: [
      'Alleviates pain, swelling, and chronic gum infections behind the second molars.',
      'Prevents crowding and shifting of orthodontic treatment results.',
      'Avoids cyst development in the jaw bone surrounding impacted teeth.'
    ],
    procedure: [
      'Radiographic Mapping: 3D CBCT or OPG scan to locate root structures and sensory nerves.',
      'Anesthesia: Administration of deep local anesthesia to ensure a pain-free experience.',
      'Surgical Access: Making a micro-incision in the gum tissue and removing minimal bone overlay if needed.',
      'Extraction & Suturing: Gently sectioning and removing the tooth, cleaning the socket, and placing sutures.'
    ],
    recovery: 'Rest for 24-48 hours. Keep a soft diet and avoid hot foods. Do not use straws, smoke, or spit forcefully to prevent dry socket. Bleeding and swelling will subside within 3-5 days.'
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dental Treatment',
    category: 'Surgery',
    description: 'Gentle, reassuring dental care for children, focusing on prevention, sealants, and primary teeth.',
    imageUrl: '/images/treatments/pediatric.jpg',
    whatItIs: 'Pediatric dentistry covers specialized care for infants and children through adolescence. It focuses on preventive sealants, cavity fillings, developmental monitoring, and fostering positive, stress-free dental habits.',
    benefits: [
      'Prevents early childhood caries and maintains space for permanent teeth.',
      'Guarantees positive, trauma-free early clinical experiences for kids.',
      'Monitors jaw growth to intercept orthodontic issues early.'
    ],
    procedure: [
      'Behavior Conditioning: Warm, friendly acclimation to the clinic environment (Tell-Show-Do method).',
      'Visual Examination: Gentle checking of gums, teeth, and overall oral developmental milestones.',
      'Fluoride/Sealant Application: Coating deep grooves with protective resins to prevent cavities.',
      'Micro-Restoration: Filling primary teeth with bio-compatible glass ionomer materials if decay is present.'
    ],
    recovery: 'Children should be monitored until local anesthesia completely wears off to prevent accidental biting of their lip or tongue. Normal eating can resume shortly after.'
  },
  {
    id: 'dentures',
    title: 'Dentures',
    category: 'Conservative',
    description: 'Custom-designed partial or full dentures to restore chewing capacity and natural facial structure.',
    imageUrl: '/images/treatments/dentures.jpg',
    whatItIs: 'Dentures are removable prosthetic appliances designed to replace missing teeth and surrounding tissues. They are custom-fabricated in premium acrylics, composites, or metal-backed alloys.',
    benefits: [
      'Restores the ability to chew and speak clearly after complete or partial tooth loss.',
      'Supports facial muscles, preventing a collapsed, aged aesthetic.',
      'Offers a non-invasive, cost-effective rehabilitation method.'
    ],
    procedure: [
      'Primary Impression: Capturing initial structures of the edentulous arch or remaining teeth.',
      'Bite Registration: Measuring the precise vertical relationship between upper and lower jaws.',
      'Wax Try-In: Reviewing the teeth arrangement in wax to check aesthetics, speech, and bite.',
      'Final Delivery: Processing the denture in premium resins, adjusting for comfort and fit.'
    ],
    recovery: 'A brief adjustment period is normal. Practice reading aloud and start with soft, small food portions. Clean dentures daily using specialized brushes and soaking solutions.'
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    category: 'Surgery',
    description: 'Permanent titanium root replacements supporting crowns or bridges for the most natural tooth replacement.',
    imageUrl: '/images/treatments/implants.jpg',
    whatItIs: 'Dental implants are bio-compatible titanium posts surgically placed into the jawbone to serve as a permanent artificial root. They provide a stable foundation for attaching custom crowns, bridges, or dentures.',
    benefits: [
      'Looks, feels, and functions exactly like natural teeth.',
      'Prevents bone loss in the jaw by simulating natural tooth root stimulation.',
      'Does not require altering or grinding down adjacent healthy teeth.'
    ],
    procedure: [
      'Diagnostic Imaging: 3D CBCT scans to assess bone density and nerve positioning.',
      'Implant Placement: Precision surgical insertion of the titanium implant into the jawbone.',
      'Osseointegration: A healing period of 3-6 months allowing the bone to fuse tightly with the implant.',
      'Restoration: Attaching the abutment and securing the final custom-made ceramic crown.'
    ],
    recovery: 'Mild swelling and discomfort for 2-3 days post-surgery. Stick to a soft diet during the initial healing phase and follow specific oral hygiene instructions to ensure successful integration.'
  },
  {
    id: 'gum-surgery',
    title: 'Gum Surgery & Periodontics',
    category: 'Surgery',
    description: 'Advanced procedures to treat deep gum infections, correct recession, or reshape gummy smiles.',
    imageUrl: '/images/treatments/gum-surgery.jpg',
    whatItIs: 'Gum surgery covers surgical interventions to treat advanced periodontal disease, graft tissue for gum recession, or perform gingivectomies to reshape excess gum tissue for a balanced smile.',
    benefits: [
      'Halts active bone destruction and tooth loss caused by periodontitis.',
      'Covers exposed, sensitive root surfaces to protect against decay.',
      'Reduces a "gummy" look, establishing symmetrical tooth margins.'
    ],
    procedure: [
      'Pocket Debridement: Cleaning out calculus and bacteria from deep gum pockets.',
      'Flap Surgery: Accessing root surfaces through small incisions to clean deep bone defects.',
      'Gum Contouring: Reshaping and trimming excess gingival tissue using precise micro-lasers or scalpels.',
      'Suturing & Dressing: Securing tissues with fine sutures and applying protective periodontal packs.'
    ],
    recovery: 'Sutures are removed in 7-10 days. Maintain a soft diet and avoid spicy foods. Use prescribed antibacterial mouthwashes and do not brush the surgical area directly during initial healing.'
  },
  {
    id: 'rehabilitation',
    title: 'Full Mouth Rehabilitation',
    category: 'Surgery',
    description: 'A comprehensive, multi-disciplinary restoration of all teeth to correct severe wear, bite, and collapse.',
    imageUrl: '/images/treatments/rehabilitation.jpg',
    whatItIs: 'Full Mouth Rehabilitation is an extensive reconstructive treatment that rebuilds or restores all of the teeth in both the upper and lower jaws. It integrates crowns, veneers, implants, and bite correction.',
    benefits: [
      'Completely rebuilds chewing function, joint comfort, and facial aesthetics.',
      'Corrects chronic jaw joint (TMJ) discomfort by re-establishing a balanced bite.',
      'Protects remaining teeth from progressive attrition, cracking, and damage.'
    ],
    procedure: [
      'Diagnostic Mapping: Complex digital records, bite simulations, and diagnostic wax-ups.',
      'Phase 1 Stabilisation: Treating active infections, extracting unsalvageable teeth, and preparing dental structures.',
      'Phase 2 Temporisation: Wearing temporary crowns to test and adapt to the new bite vertical dimension.',
      'Phase 3 Reconstruction: Gradual placement of final premium zirconia crowns, veneers, and bridges.'
    ],
    recovery: 'This is a multi-stage treatment. Recovery varies per stage. Patience is key as neuromuscular adaptation to the new bite layout takes 2-4 weeks.'
  },
  {
    id: 'filling',
    title: 'Tooth Filling',
    category: 'Conservative',
    description: 'Esthetic composite restorations to seal cavities and restore tooth structure perfectly.',
    imageUrl: '/images/treatments/filling.jpg',
    whatItIs: 'Tooth filling utilizes tooth-colored composite resins to fill cavity spaces left by tooth decay. The resin is applied in layers, shaped, and cured with a specialized UV light.',
    benefits: [
      'Restores the strength of decaying teeth and prevents further cavity progression.',
      'Perfect color-match that renders the filling completely invisible in the mouth.',
      'Conservative preparation that preserves maximum healthy tooth enamel.'
    ],
    procedure: [
      'Decay Removal: Shaving away damaged or softened enamel/dentin under local anesthesia.',
      'Etching & Bonding: Applying conditioning gels and liquid bonding agents to prime the tooth surface.',
      'Layering: Placing composite resin incrementally and curing each layer with a specialized light.',
      'Polishing: Shaping, trimming, and buffing the restoration to match your natural bite.'
    ],
    recovery: 'You can chew on the filled tooth immediately once the local anesthesia wears off. Some patients experience temporary sensitivity to cold for 24-48 hours.'
  },
  {
    id: 'consultation',
    title: 'Clinical Consultation',
    category: 'Conservative',
    description: 'Comprehensive dental exams, diagnostic mapping, and tailored treatment planning.',
    imageUrl: '/images/treatments/consultation.jpg',
    whatItIs: 'A clinical consultation includes a comprehensive oral evaluation, high-resolution digital X-rays, intraoral camera mapping, and a thorough discussion about your oral health goals and treatment needs.',
    benefits: [
      'Identifies hidden cavities, bone loss, or gum issues early before they cause pain.',
      'Provides a clear, itemized treatment blueprint and timeline.',
      'Establishes a baseline for routine preventive maintenance.'
    ],
    procedure: [
      'Visual Exam: Check of teeth, gums, tongue, lymph nodes, and jaw joints.',
      'Digital Imaging: Quick, low-radiation dental X-rays (OPG/IOPA) to look between teeth.',
      'Diagnostic Discussion: Reviewing the scans together and discussing different treatment options.',
      'Treatment Planning: Compiling a structured plan containing costs, steps, and options.'
    ],
    recovery: 'No recovery needed. You will leave with a complete understanding of your oral health status and a clear road-map for your treatments.'
  }
];
