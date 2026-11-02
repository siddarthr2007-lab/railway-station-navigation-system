// Comprehensive authentic dataset for 26 Major Railway Stations across Tamil Nadu
// Used as high-reliability offline/cloud fallback and instant seed data

export const FALLBACK_STATIONS = [
  // --- CHENNAI & NORTHERN TAMIL NADU ---
  {
    _id: "MAS",
    stationCode: "MAS",
    stationName: "Dr. M.G. Ramachandran Central (Chennai Central)",
    city: "Chennai",
    state: "Tamil Nadu",
    region: "Chennai & Northern TN",
    division: "MAS",
    category: "Terminal Hub",
    description: "Grand historic railway terminus and the busiest station in Tamil Nadu, serving long-distance Vande Bharat, Rajdhani, and Superfast express trains.",
    totalPlatforms: 12,
  },
  {
    _id: "MS",
    stationCode: "MS",
    stationName: "Chennai Egmore",
    city: "Chennai",
    state: "Tamil Nadu",
    region: "Chennai & Northern TN",
    division: "MAS",
    category: "Terminal Hub",
    description: "Iconic Gothic-style heritage terminal in Chennai, primarily serving central, delta, and southern Tamil Nadu express routes.",
    totalPlatforms: 11,
  },
  {
    _id: "TBM",
    stationCode: "TBM",
    stationName: "Tambaram Junction",
    city: "Chennai",
    state: "Tamil Nadu",
    region: "Chennai & Northern TN",
    division: "MAS",
    category: "Suburban & Express Terminal",
    description: "Major southern gateway terminal of Chennai metropolis, handling high-density suburban EMU traffic and southern express services.",
    totalPlatforms: 8,
  },
  {
    _id: "MSB",
    stationCode: "MSB",
    stationName: "Chennai Beach Junction",
    city: "Chennai",
    state: "Tamil Nadu",
    region: "Chennai & Northern TN",
    division: "MAS",
    category: "Coastal & Suburban Terminal",
    description: "Historic coastal terminal near Chennai Port, serving the MRTS elevated rail line and north-south suburban corridors.",
    totalPlatforms: 8,
  },
  {
    _id: "KPD",
    stationCode: "KPD",
    stationName: "Katpadi Junction (Vellore)",
    city: "Vellore",
    state: "Tamil Nadu",
    region: "Chennai & Northern TN",
    division: "MAS",
    category: "Major Junction",
    description: "Premier junction station serving Vellore metropolitan area, CMC Hospital, and VIT University, linking Chennai, Bengaluru, and Tirupati.",
    totalPlatforms: 5,
  },
  {
    _id: "VM",
    stationCode: "VM",
    stationName: "Villupuram Junction",
    city: "Villupuram",
    state: "Tamil Nadu",
    region: "Chennai & Northern TN",
    division: "TPJ",
    category: "Major Junction",
    description: "Strategic 5-line rail junction linking Chennai with Tiruchirappalli, Madurai, Puducherry, and Katpadi/Tiruvannamalai.",
    totalPlatforms: 6,
  },
  {
    _id: "JTJ",
    stationCode: "JTJ",
    stationName: "Jolarpettai Junction",
    city: "Tirupattur",
    state: "Tamil Nadu",
    region: "Chennai & Northern TN",
    division: "MAS",
    category: "Major Tri-Junction",
    description: "Crucial inter-state railway tri-junction facilitating high-speed traffic between Tamil Nadu, Karnataka (Bengaluru), and Kerala.",
    totalPlatforms: 5,
  },
  {
    _id: "CUPJ",
    stationCode: "CUPJ",
    stationName: "Cuddalore Port Junction",
    city: "Cuddalore",
    state: "Tamil Nadu",
    region: "Chennai & Northern TN",
    division: "TPJ",
    category: "Coastal Junction",
    description: "Historic coastal junction serving the industrial district of Cuddalore, port terminals, and the Chidambaram pilgrimage corridor.",
    totalPlatforms: 3,
  },
  {
    _id: "VLR",
    stationCode: "VLR",
    stationName: "Vellore Cantonment",
    city: "Vellore",
    state: "Tamil Nadu",
    region: "Chennai & Northern TN",
    division: "MAS",
    category: "City Station",
    description: "Urban station located near the historic Vellore Fort and Sripuram Golden Temple, providing direct city access.",
    totalPlatforms: 3,
  },

  // --- KONGU & WESTERN TAMIL NADU ---
  {
    _id: "CBE",
    stationCode: "CBE",
    stationName: "Coimbatore Junction",
    city: "Coimbatore",
    state: "Tamil Nadu",
    region: "Kongu & Western TN",
    division: "SA",
    category: "Premier Junction",
    description: "Premier railway junction and top revenue-earner of Salem division, connecting the textile and industrial hub of Kongu Nadu.",
    totalPlatforms: 6,
  },
  {
    _id: "SA",
    stationCode: "SA",
    stationName: "Salem Junction",
    city: "Salem",
    state: "Tamil Nadu",
    region: "Kongu & Western TN",
    division: "SA",
    category: "Divisional Headquarters",
    description: "Divisional railway headquarters and crucial central junction connecting Bengaluru, Chennai, Erode, Karur, and Mettur Dam.",
    totalPlatforms: 6,
  },
  {
    _id: "ED",
    stationCode: "ED",
    stationName: "Erode Junction",
    city: "Erode",
    state: "Tamil Nadu",
    region: "Kongu & Western TN",
    division: "SA",
    category: "Major Junction & Loco Hub",
    description: "High-density rail junction housing historic Diesel and Electric Locomotive Sheds, linking northern, western, and southern lines.",
    totalPlatforms: 5,
  },
  {
    _id: "TUP",
    stationCode: "TUP",
    stationName: "Tiruppur Railway Station",
    city: "Tiruppur",
    state: "Tamil Nadu",
    region: "Kongu & Western TN",
    division: "SA",
    category: "Industrial Hub",
    description: "Key station serving India's cotton knitwear export capital with heavy daily passenger footfall between Coimbatore and Erode.",
    totalPlatforms: 4,
  },
  {
    _id: "KRR",
    stationCode: "KRR",
    stationName: "Karur Junction",
    city: "Karur",
    state: "Tamil Nadu",
    region: "Kongu & Western TN",
    division: "SA",
    category: "Junction Station",
    description: "Centrally positioned junction in the textile and coach-building basin, linking Salem, Erode, Tiruchirappalli, and Dindigul.",
    totalPlatforms: 5,
  },
  {
    _id: "HSUR",
    stationCode: "HSUR",
    stationName: "Hosur Railway Station",
    city: "Krishnagiri / Hosur",
    state: "Tamil Nadu",
    region: "Kongu & Western TN",
    division: "SWR",
    category: "Border Industrial Station",
    description: "Rapidly expanding manufacturing gateway on the TN-Karnataka border, connecting major automobile clusters with Bengaluru.",
    totalPlatforms: 3,
  },

  // --- CENTRAL & CAUVERY DELTA ---
  {
    _id: "TPJ",
    stationCode: "TPJ",
    stationName: "Tiruchirappalli Junction (Trichy)",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    region: "Central & Cauvery Delta",
    division: "TPJ",
    category: "Divisional Headquarters",
    description: "Massive central railway junction and divisional headquarters, connecting Cauvery Delta districts with southern cities and Chennai.",
    totalPlatforms: 8,
  },
  {
    _id: "TJ",
    stationCode: "TJ",
    stationName: "Thanjavur Junction",
    city: "Thanjavur",
    state: "Tamil Nadu",
    region: "Central & Cauvery Delta",
    division: "TPJ",
    category: "Heritage Junction",
    description: "Gateway to the UNESCO World Heritage Brihadisvara Great Living Chola Temple and the cultural heartland of Cauvery Delta.",
    totalPlatforms: 5,
  },
  {
    _id: "KMU",
    stationCode: "KMU",
    stationName: "Kumbakonam Railway Station",
    city: "Kumbakonam",
    state: "Tamil Nadu",
    region: "Central & Cauvery Delta",
    division: "TPJ",
    category: "Pilgrim Centre",
    description: "Renowned temple town railway station catering to millions of Mahamaham and Navagraha temple pilgrims in the Delta region.",
    totalPlatforms: 3,
  },
  {
    _id: "MV",
    stationCode: "MV",
    stationName: "Mayiladuthurai Junction",
    city: "Mayiladuthurai",
    state: "Tamil Nadu",
    region: "Central & Cauvery Delta",
    division: "TPJ",
    category: "Delta Junction",
    description: "Historic junction linking Main Line routes through Chidambaram, Villupuram, Thiruvarur, and Thanjavur.",
    totalPlatforms: 5,
  },

  // --- SOUTHERN TAMIL NADU ---
  {
    _id: "MDU",
    stationCode: "MDU",
    stationName: "Madurai Junction",
    city: "Madurai",
    state: "Tamil Nadu",
    region: "Southern TN",
    division: "MDU",
    category: "Divisional Headquarters",
    description: "Historic divisional headquarters in the ancient temple city of Madurai, welcoming millions of Meenakshi Temple pilgrims and travelers.",
    totalPlatforms: 8,
  },
  {
    _id: "TEN",
    stationCode: "TEN",
    stationName: "Tirunelveli Junction (Nellai)",
    city: "Tirunelveli",
    state: "Tamil Nadu",
    region: "Southern TN",
    division: "MDU",
    category: "Major Junction",
    description: "Premier junction of deep southern Tamil Nadu situated on the Thamirabarani River, connecting Tenkasi, Thoothukudi, and Cape Comorin.",
    totalPlatforms: 5,
  },
  {
    _id: "DG",
    stationCode: "DG",
    stationName: "Dindigul Junction",
    city: "Dindigul",
    state: "Tamil Nadu",
    region: "Southern TN",
    division: "MDU",
    category: "Strategic Junction",
    description: "Strategic multi-line junction connecting Madurai, Karur, Tiruchirappalli, and Pollachi/Palani lines in the historic rockfort city.",
    totalPlatforms: 5,
  },
  {
    _id: "NCJ",
    stationCode: "NCJ",
    stationName: "Nagercoil Junction",
    city: "Kanyakumari / Nagercoil",
    state: "Tamil Nadu",
    region: "Southern TN",
    division: "TVC",
    category: "Southern Terminus",
    description: "Crucial southern junction and passenger terminus connecting Kanyakumari district with Thiruvananthapuram and Tirunelveli.",
    totalPlatforms: 4,
  },
  {
    _id: "CAPE",
    stationCode: "CAPE",
    stationName: "Kanniyakumari Railway Station",
    city: "Kanyakumari",
    state: "Tamil Nadu",
    region: "Southern TN",
    division: "TVC",
    category: "Land's End Terminus",
    description: "The iconic southernmost railway terminus of the Indian subcontinent, where three oceans meet at Vivekananda Rock Memorial.",
    totalPlatforms: 4,
  },
  {
    _id: "RMM",
    stationCode: "RMM",
    stationName: "Rameswaram Railway Station",
    city: "Ramanathapuram / Rameswaram",
    state: "Tamil Nadu",
    region: "Southern TN",
    division: "MDU",
    category: "Island Pilgrimage Terminus",
    description: "Island railway terminal reached via the historic Pamban Sea Bridge, serving Ramanathaswamy Temple pilgrims from all across India.",
    totalPlatforms: 4,
  },
  {
    _id: "TN",
    stationCode: "TN",
    stationName: "Tuticorin (Thoothukudi)",
    city: "Thoothukudi",
    state: "Tamil Nadu",
    region: "Southern TN",
    division: "MDU",
    category: "Port Terminus",
    description: "Historic Pearl City sea port rail terminus serving heavy commercial industry, salt pans, and container harbor.",
    totalPlatforms: 3,
  },
];

export function getFallbackStationById(id) {
  if (!id) return FALLBACK_STATIONS[0];
  const normalized = String(id).toUpperCase();
  return (
    FALLBACK_STATIONS.find((s) => s._id === id || s.stationCode.toUpperCase() === normalized) ||
    FALLBACK_STATIONS[0]
  );
}

// Generate graph, nodes, facilities and paths client-side
export function getFallbackStationGraph(stationId) {
  const station = getFallbackStationById(stationId);
  const stId = station._id;
  const platformCount = station.totalPlatforms || 4;

  const nodeDefs = [
    { key: "Entrance_Main", nodeName: "Main Entrance Portico", position: { x: 450, y: 530 }, isAccessible: true },
    { key: "Entrance_West", nodeName: "West Entrance Gate", position: { x: 140, y: 530 }, isAccessible: true },
    { key: "Entrance_East", nodeName: "East / Suburban Entrance", position: { x: 760, y: 530 }, isAccessible: true },
    { key: "Ramp_Entrance", nodeName: "Main Entrance Accessible Ramp", position: { x: 380, y: 485 }, isAccessible: true },

    { key: "Concourse_Lobby", nodeName: "Main Booking Concourse", position: { x: 450, y: 440 }, isAccessible: true },
    { key: "Ticket_Counter", nodeName: "Ticket Booking Office & ATVM", position: { x: 300, y: 440 }, isAccessible: true },
    { key: "ATM", nodeName: "Multi-Bank ATM Centre", position: { x: 180, y: 440 }, isAccessible: true },
    { key: "Info_Counter", nodeName: "Help Desk & Information Counter", position: { x: 600, y: 440 }, isAccessible: true },
    { key: "First_Aid", nodeName: "Medical Booth & First Aid", position: { x: 720, y: 440 }, isAccessible: true },

    { key: "Concourse_Central", nodeName: "Central Concourse Hall", position: { x: 450, y: 350 }, isAccessible: true },
    { key: "Waiting_AC", nodeName: "AC Executive Lounge", position: { x: 300, y: 350 }, isAccessible: true },
    { key: "Food_Canteen", nodeName: "IRCTC Food Court & Canteen", position: { x: 180, y: 350 }, isAccessible: true },
    { key: "Waiting_General", nodeName: "General Passenger Waiting Hall", position: { x: 600, y: 350 }, isAccessible: true },
    { key: "Restroom", nodeName: "Accessible Restroom Complex", position: { x: 720, y: 350 }, isAccessible: true },
    { key: "Drinking_Water", nodeName: "Pure RO Drinking Water Station", position: { x: 450, y: 290 }, isAccessible: true },

    { key: "FOB_Stairs_Lower", nodeName: "Central Overbridge Stairs (Concourse)", position: { x: 350, y: 260 }, isAccessible: false },
    { key: "FOB_Lift_Lower", nodeName: "Central Overbridge Passenger Lift (Concourse)", position: { x: 550, y: 260 }, isAccessible: true },
    { key: "FOB_Stairs_Upper", nodeName: "Central Overbridge Stairs (FOB Level)", position: { x: 350, y: 190 }, isAccessible: false },
    { key: "FOB_Lift_Upper", nodeName: "Central Overbridge Lift (FOB Level)", position: { x: 550, y: 190 }, isAccessible: true },
  ];

  const platformXPositions = [];
  for (let i = 1; i <= platformCount; i++) {
    const xPos = 120 + Math.round((i - 1) * (680 / Math.max(platformCount - 1, 1)));
    platformXPositions.push({ index: i, x: xPos });
    nodeDefs.push(
      { key: `Plat_${i}`, nodeName: `Platform ${i}`, position: { x: xPos, y: 90 }, isAccessible: true },
      { key: `FOB_Plat_${i}`, nodeName: `FOB Connector to Platform ${i}`, position: { x: xPos, y: 190 }, isAccessible: true },
      { key: `FOB_Plat_${i}_Lift`, nodeName: `Platform ${i} Elevator / Ramp`, position: { x: xPos + 18, y: 140 }, isAccessible: true }
    );
  }

  const nodes = nodeDefs.map((n) => ({
    _id: `${stId}_node_${n.key}`,
    stationId: stId,
    nodeName: n.nodeName,
    position: n.position,
    isAccessible: n.isAccessible,
    key: n.key,
  }));

  const nodeKeyMap = {};
  nodes.forEach((n) => {
    nodeKeyMap[n.key] = n;
  });

  const facilityDefs = [
    { name: "Main Entrance Portico", type: "entrance", nodeKey: "Entrance_Main", wheelchairAccessible: true, rampAvailable: true, description: "Primary station entrance with tactile pathways and wheelchair access ramp." },
    { name: "West Entrance Gate", type: "entrance", nodeKey: "Entrance_West", wheelchairAccessible: true, description: "Secondary entrance with direct connectivity to city bus stand and parking." },
    { name: "East / Suburban Entrance", type: "entrance", nodeKey: "Entrance_East", wheelchairAccessible: true, description: "Eastern gate providing swift passenger entry to concourse." },
    { name: "Main Entrance Accessible Ramp", type: "ramp", nodeKey: "Ramp_Entrance", wheelchairAccessible: true, rampAvailable: true, description: "Gentle incline wheelchair ramp connecting portico to ticket lobby." },
    { name: "Ticket Booking Office & ATVM", type: "ticket_counter", nodeKey: "Ticket_Counter", wheelchairAccessible: true, description: "Unreserved ticketing counters and Automated Ticket Vending Machines (ATVM)." },
    { name: "Multi-Bank ATM Centre", type: "atm", nodeKey: "ATM", wheelchairAccessible: true, description: "24/7 Nationalized & Commercial Bank Cash Dispenser Kiosks." },
    { name: "Help Desk & Information Counter", type: "information_counter", nodeKey: "Info_Counter", wheelchairAccessible: true, description: "Rail enquiry counter for train status, coach positions, and passenger assistance." },
    { name: "Medical Booth & First Aid", type: "first_aid", nodeKey: "First_Aid", wheelchairAccessible: true, description: "Emergency healthcare booth with stretcher and basic medical support." },
    { name: "AC Executive Lounge", type: "waiting_hall", nodeKey: "Waiting_AC", wheelchairAccessible: true, description: "Comfortable air-conditioned waiting lounge with cushioned seating and WiFi." },
    { name: "IRCTC Food Court & Canteen", type: "food_canteen", nodeKey: "Food_Canteen", wheelchairAccessible: true, description: "Multi-cuisine refreshments, hot meals, South Indian filter coffee, and packaged drinking water." },
    { name: "General Passenger Waiting Hall", type: "waiting_hall", nodeKey: "Waiting_General", wheelchairAccessible: true, description: "Spacious waiting hall with digital train indicator displays." },
    { name: "Accessible Restroom Complex", type: "restroom", nodeKey: "Restroom", wheelchairAccessible: true, description: "Clean gents, ladies, and Divyangjan accessible toilet facilities." },
    { name: "Pure RO Drinking Water Station", type: "drinking_water", nodeKey: "Drinking_Water", wheelchairAccessible: true, description: "Free reverse osmosis drinking water refill unit." },
    { name: "Central Overbridge Stairs", type: "stairs", nodeKey: "FOB_Stairs_Lower", wheelchairAccessible: false, description: "Pedestrian stairs connecting ground concourse to the Central Foot Overbridge." },
    { name: "Central Overbridge Passenger Lift", type: "lift", nodeKey: "FOB_Lift_Lower", wheelchairAccessible: true, liftAvailable: true, description: "Wheelchair-accessible elevator providing barrier-free vertical transit to the bridge." },
  ];

  for (let i = 1; i <= platformCount; i++) {
    facilityDefs.push({
      name: `Platform ${i}`,
      type: "platform",
      nodeKey: `Plat_${i}`,
      wheelchairAccessible: true,
      liftAvailable: true,
      rampAvailable: i === 1,
      description: `Platform ${i} serving express, superfast, and passenger train arrivals and departures.`,
    });
  }

  const facilities = facilityDefs.map((f, idx) => {
    const matchingNode = nodeKeyMap[f.nodeKey] || nodes[0];
    return {
      _id: `${stId}_fac_${idx}`,
      stationId: stId,
      name: f.name,
      type: f.type,
      position: matchingNode.position,
      wheelchairAccessible: f.wheelchairAccessible,
      liftAvailable: f.liftAvailable || false,
      rampAvailable: f.rampAvailable || false,
      description: f.description,
      navigationNodeId: matchingNode._id,
      floor: 0,
      operatingHours: "24 Hours",
    };
  });

  const pathDefs = [
    { from: "Entrance_Main", to: "Concourse_Lobby", distance: 15, pathType: "walkway", isWheelchairAccessible: true, instruction: "Walk to Main Booking Concourse" },
    { from: "Entrance_Main", to: "Ramp_Entrance", distance: 10, pathType: "ramp", isWheelchairAccessible: true, instruction: "Take the accessible entrance ramp" },
    { from: "Ramp_Entrance", to: "Concourse_Lobby", distance: 10, pathType: "ramp", isWheelchairAccessible: true, instruction: "Follow the ramp into Main Booking Concourse" },
    { from: "Entrance_West", to: "ATM", distance: 18, pathType: "walkway", isWheelchairAccessible: true, instruction: "Walk past the West Gate towards ATM" },
    { from: "ATM", to: "Ticket_Counter", distance: 15, pathType: "walkway", isWheelchairAccessible: true, instruction: "Proceed towards Ticket Booking Office" },
    { from: "Ticket_Counter", to: "Concourse_Lobby", distance: 18, pathType: "walkway", isWheelchairAccessible: true, instruction: "Walk into Main Booking Concourse" },
    { from: "Concourse_Lobby", to: "Info_Counter", distance: 18, pathType: "walkway", isWheelchairAccessible: true, instruction: "Proceed towards Information Counter" },
    { from: "Info_Counter", to: "First_Aid", distance: 15, pathType: "walkway", isWheelchairAccessible: true, instruction: "Continue towards Medical Booth" },
    { from: "First_Aid", to: "Entrance_East", distance: 18, pathType: "walkway", isWheelchairAccessible: true, instruction: "Proceed towards East / Suburban Entrance" },

    { from: "Concourse_Lobby", to: "Concourse_Central", distance: 15, pathType: "walkway", isWheelchairAccessible: true, instruction: "Walk into Central Concourse Hall" },
    { from: "Concourse_Central", to: "Waiting_AC", distance: 18, pathType: "walkway", isWheelchairAccessible: true, instruction: "Walk towards AC Executive Lounge" },
    { from: "Waiting_AC", to: "Food_Canteen", distance: 15, pathType: "walkway", isWheelchairAccessible: true, instruction: "Proceed towards Food Court" },
    { from: "Concourse_Central", to: "Waiting_General", distance: 18, pathType: "walkway", isWheelchairAccessible: true, instruction: "Walk towards General Waiting Hall" },
    { from: "Waiting_General", to: "Restroom", distance: 15, pathType: "walkway", isWheelchairAccessible: true, instruction: "Proceed towards Accessible Restrooms" },
    { from: "Concourse_Central", to: "Drinking_Water", distance: 10, pathType: "walkway", isWheelchairAccessible: true, instruction: "Walk towards RO Water Station" },

    { from: "Concourse_Central", to: "Plat_1", distance: 25, pathType: "walkway", isWheelchairAccessible: true, instruction: "Walk directly to Platform 1 concourse" },

    { from: "Concourse_Central", to: "FOB_Stairs_Lower", distance: 15, pathType: "walkway", isWheelchairAccessible: true, instruction: "Walk towards Overbridge Stairs" },
    { from: "FOB_Stairs_Lower", to: "FOB_Stairs_Upper", distance: 12, pathType: "stairs", isWheelchairAccessible: false, instruction: "Take the stairs up to the Central Foot Overbridge" },
    { from: "Concourse_Central", to: "FOB_Lift_Lower", distance: 15, pathType: "walkway", isWheelchairAccessible: true, instruction: "Walk towards Central Overbridge Passenger Lift" },
    { from: "FOB_Lift_Lower", to: "FOB_Lift_Upper", distance: 10, pathType: "lift", isWheelchairAccessible: true, instruction: "Take the passenger elevator / lift up to Foot Overbridge Level" },
    { from: "FOB_Stairs_Upper", to: "FOB_Lift_Upper", distance: 20, pathType: "walkway", isWheelchairAccessible: true, instruction: "Walk across the Foot Overbridge landing" },
  ];

  let closestStairPlat = 1;
  let closestLiftPlat = 1;
  let minDistStairs = Infinity;
  let minDistLift = Infinity;

  for (const p of platformXPositions) {
    const distS = Math.abs(p.x - 350);
    if (distS < minDistStairs) {
      minDistStairs = distS;
      closestStairPlat = p.index;
    }
    const distL = Math.abs(p.x - 550);
    if (distL < minDistLift) {
      minDistLift = distL;
      closestLiftPlat = p.index;
    }
  }

  pathDefs.push(
    { from: "FOB_Stairs_Upper", to: `FOB_Plat_${closestStairPlat}`, distance: 15, pathType: "walkway", isWheelchairAccessible: true, instruction: `Proceed along FOB towards Platform ${closestStairPlat}` },
    { from: "FOB_Lift_Upper", to: `FOB_Plat_${closestLiftPlat}`, distance: 15, pathType: "walkway", isWheelchairAccessible: true, instruction: `Proceed along FOB towards Platform ${closestLiftPlat}` }
  );

  if (closestStairPlat !== 1 && closestLiftPlat !== 1) {
    pathDefs.push(
      { from: "FOB_Stairs_Upper", to: "FOB_Plat_1", distance: 20, pathType: "walkway", isWheelchairAccessible: true, instruction: "Proceed along FOB towards Platform 1" }
    );
  }

  for (let i = 1; i <= platformCount; i++) {
    if (i < platformCount) {
      pathDefs.push({
        from: `FOB_Plat_${i}`,
        to: `FOB_Plat_${i + 1}`,
        distance: 15,
        pathType: "walkway",
        isWheelchairAccessible: true,
        instruction: `Walk along the Foot Overbridge towards Platform ${i + 1}`,
      });
    }

    pathDefs.push({
      from: `FOB_Plat_${i}`,
      to: `Plat_${i}`,
      distance: 14,
      pathType: "stairs",
      isWheelchairAccessible: false,
      instruction: `Take the stairs down to Platform ${i}`,
    });

    pathDefs.push({
      from: `FOB_Plat_${i}`,
      to: `FOB_Plat_${i}_Lift`,
      distance: 5,
      pathType: "walkway",
      isWheelchairAccessible: true,
      instruction: `Move towards Platform ${i} Elevator / Ramp`,
    });
    pathDefs.push({
      from: `FOB_Plat_${i}_Lift`,
      to: `Plat_${i}`,
      distance: 14,
      pathType: "lift",
      isWheelchairAccessible: true,
      instruction: `Take the elevator down to Platform ${i}`,
    });
  }

  const paths = pathDefs.map((p, idx) => ({
    _id: `${stId}_path_${idx}`,
    stationId: stId,
    fromNode: (nodeKeyMap[p.from] || nodes[0])._id,
    toNode: (nodeKeyMap[p.to] || nodes[0])._id,
    distance: p.distance,
    pathType: p.pathType,
    isWheelchairAccessible: p.isWheelchairAccessible !== false,
    instruction: p.instruction,
  }));

  return { nodes, facilities, paths };
}

export function getFallbackFacilities(stationId) {
  return getFallbackStationGraph(stationId).facilities;
}

export function getFallbackNodes(stationId) {
  return getFallbackStationGraph(stationId).nodes;
}

export function getFallbackPaths(stationId) {
  return getFallbackStationGraph(stationId).paths;
}

// Client-side Dijkstra calculation
export function calculateFallbackRoute({ stationId, fromNodeId, toNodeId, wheelchair = false }) {
  const { nodes, paths } = getFallbackStationGraph(stationId);
  const nodeMap = {};
  nodes.forEach((n) => {
    nodeMap[n._id] = n;
  });

  const graph = {};
  for (const p of paths) {
    if (wheelchair && p.isWheelchairAccessible === false) continue;
    const from = String(p.fromNode);
    const to = String(p.toNode);
    if (!graph[from]) graph[from] = [];
    if (!graph[to]) graph[to] = [];

    graph[from].push({ to, distance: p.distance, pathType: p.pathType, instruction: p.instruction });
    graph[to].push({ to: from, distance: p.distance, pathType: p.pathType, instruction: p.instruction });
  }

  const start = String(fromNodeId);
  const end = String(toNodeId);
  const distances = {};
  const previous = {};
  const unvisited = new Set(Object.keys(graph));
  unvisited.add(start);
  unvisited.add(end);

  for (const n of unvisited) distances[n] = Infinity;
  distances[start] = 0;

  while (unvisited.size > 0) {
    let current = null;
    let min = Infinity;
    for (const n of unvisited) {
      if (distances[n] < min) {
        min = distances[n];
        current = n;
      }
    }

    if (!current || min === Infinity) break;
    if (current === end) break;

    unvisited.delete(current);
    const neighbors = graph[current] || [];
    for (const edge of neighbors) {
      if (!unvisited.has(edge.to)) continue;
      const alt = distances[current] + edge.distance;
      if (alt < distances[edge.to]) {
        distances[edge.to] = alt;
        previous[edge.to] = { from: current, edge };
      }
    }
  }

  const pathNodes = [];
  const instructions = [];
  let curr = end;

  if (distances[end] !== Infinity) {
    pathNodes.unshift(nodeMap[curr] || { _id: curr, nodeName: curr });
    while (previous[curr]) {
      const { from, edge } = previous[curr];
      instructions.unshift(edge.instruction || `Move towards ${(nodeMap[curr] || {}).nodeName || curr}`);
      curr = from;
      pathNodes.unshift(nodeMap[curr] || { _id: curr, nodeName: curr });
    }
  }

  const totalDist = distances[end] !== Infinity ? distances[end] : 0;
  return {
    path: pathNodes,
    totalDistance: totalDist,
    estimatedTimeMinutes: Math.max(1, Math.round(totalDist / 1.2 / 60)),
    wheelchairAccessible: Boolean(wheelchair),
    instructions,
  };
}
