// =====================================================
// SAMARTH ERECTORS - COMPANY DATA
// Source: Official Company Profile
// =====================================================


// ================= COMPANY INFORMATION =================

export const COMPANY = {
  name: "Samarth Erectors",
  since: 1990,
  iso: "ISO 9001:2015",

  email: "info@samartherectors.com",
  alternateEmail: "samarth.kmg@gmail.com",

  phone: "+91 9820501218",
  alternatePhone: "+91 9820501219",

  address:
    "Bhoomi Land Mark Premises Co. Op Ltd., Unit No. 602, Sector 17, Khanda Colony, New Panvel, Raigad - 410206, Maharashtra, India",

  workshop: [
    {
      name: "Rasayani Workshop",
      address:
        "Plot No. E-29/3, Addl Patalganga MIDC, Rasayani, Raigad, Maharashtra - 410220"
    },
    {
      name: "Dahej Workshop",
      address:
        "Plot No. D2/E/67 & 68, GIDC, Dahej, Bharuch, Gujarat"
    }
  ],

  hours: "Mon to Sat, 9:00 am to 6:00 pm"
};


// ================= INDUSTRIES =================

export const INDUSTRIES = [
  "Chemical",
  "Pharmaceutical",
  "Food Processing",
  "Petrochemical",
  "Oil and Gas",
  "Natural Gas",
  "Engineering",
  "Steel",
  "Paper and Packaging",
  "Power Plants",
  "Paint Manufacturing",
  "Soap Manufacturing"
];


// ================= SERVICES =================

export const SERVICES = [

  {
    t: "Piping",
    d: "Supply, fabrication and installation of process piping, from shop spools to final hook-up."
  },

  {
    t: "Structural Fabrication",
    d: "Steel structures, platforms, pipe racks and industrial sheds fabricated and erected to engineering drawings."
  },

  {
    t: "Equipment and Machinery Erection",
    d: "Positioning, alignment, installation and commissioning support for industrial plant equipment and machinery."
  },

  {
    t: "Storage Tanks",
    d: "Site fabrication of MS and SS storage tanks with shot blasting, painting and thermal insulation."
  },

  {
    t: "Shutdown Planning",
    d: "Planned industrial shutdown and maintenance activities designed to minimize plant downtime."
  },

  {
    t: "Drawing and Design",
    d: "Complete project drawings, plant design, engineering and project planning services."
  },

  {
    t: "Skilled Manpower",
    d: "Experienced site engineers, supervisors, fabricators, welders, fitters and skilled industrial manpower."
  },

  {
    t: "Equipment Hire",
    d: "Hydra cranes, mobile cranes, forklifts, stackers, scissor lifts and boom lifts available for hire."
  }

];


// ================= PROJECT HELPER =================

// Format:
// [year, client, title, location, industry, cost]

const completed = [

  // ================= 2017 =================

  [2017, "BASF Ltd.", "MS/SS Piping, Structure and Equipment Fabrication & Installation", "Turbhe, Navi Mumbai", "Chemical", 65],

  [2017, "Indian Oil Corporation Ltd. (IOCL)", "Fabrication of 3000 KL MS Storage Tank", "Miraj, Maharashtra", "Oil and Gas", 22],

  [2017, "Excel Industries Ltd.", "Structural Fabrication, Galvanizing, Transportation and Erection", "Roha, Maharashtra", "Chemical", 259],

  [2017, "UPL Ltd.", "Structural Fabrication and Installation", "Vapi, Gujarat", "Chemical", 275],

  [2017, "IVP Ltd.", "Design, Drawing, Supply, Fabrication and Painting of MS Storage Tanks", "Tarapur, Maharashtra", "Chemical", 165],

  [2017, "IVP Ltd.", "IBR Piping Fabrication and Approval Work", "Tarapur, Maharashtra", "Chemical", 22],

  [2017, "Excel Crop Care Ltd.", "Annual Maintenance of Equipment, Piping, Structure and Insulation", "Bhavnagar / Bhuj, Gujarat", "Chemical", 225],

  [2017, "Ferrero India Pvt. Ltd.", "Industrial Equipment Rental Services", "Baramati, Maharashtra", "Food Processing", 56],

  [2017, "Hindustan Coca-Cola Beverages Pvt. Ltd.", "Industrial Equipment Rental Services", "Nashik, Maharashtra", "Food Processing", 26],


  // ================= 2018 =================

  [2018, "Pidilite Industries Ltd.", "Piping, Structure and Equipment Erection", "Mahad, Maharashtra", "Chemical", 92],

  [2018, "AAK Kamani Oil Industries", "SS/MS Tank Fabrication and Structural Work", "Khopoli, Maharashtra", "Petrochemical", 62],

  [2018, "Excel Crop Care Ltd.", "Structural Fabrication and Erection", "Bhuj, Gujarat", "Chemical", 95],

  [2018, "IVP Ltd.", "SS 304 50 KL Tank and Chimney Structure", "Tarapur, Maharashtra", "Chemical", 41],

  [2018, "Jell Pharmaceuticals Pvt. Ltd.", "Storage Tanks, Piping and Structural Platform", "Rabale, Maharashtra", "Pharmaceutical", 65],

  [2018, "BASF India Ltd.", "500 KL Storage Tank Fabrication", "Dahej, Gujarat", "Chemical", 88],

  [2018, "Envirocare Labs Pvt. Ltd.", "Fire Protection System Installation", "Thane, Maharashtra", "Engineering", 102],

  [2018, "Johnson Matthey Chemicals India Pvt. Ltd.", "Boiler Ducting Fabrication and Installation", "Taloja, Maharashtra", "Chemical", 35],

  [2018, "Excel Crop Care Ltd.", "Annual Maintenance of Equipment, Piping and Structure", "Bhavnagar / Bhuj, Gujarat", "Chemical", 244],

  [2018, "UPL Ltd.", "Annual Maintenance of Equipment, Piping and Insulation", "Vapi, Gujarat", "Chemical", 122],


  // ================= 2019 =================

  [2019, "Jotun India Pvt. Ltd.", "FRP Piping and Equipment Erection", "Ranjangaon, Pune", "Paint", 55],

  [2019, "PepsiCo India Holdings Pvt. Ltd.", "GI Roof Gutter Supply and Installation", "Nelamangala, Bangalore", "Food Processing", 25],

  [2019, "BASF India Ltd.", "Roof Gutter Supply and Installation", "Turbhe, Navi Mumbai", "Chemical", 12],

  [2019, "IVP Ltd.", "Structural Shed and SS/MS Piping Fabrication and Installation", "Tarapur, Maharashtra", "Chemical", 322],

  [2019, "Johnson Matthey Chemicals India Pvt. Ltd.", "Boiler Ducting Supply and Installation", "Taloja, Maharashtra", "Chemical", 81],

  [2019, "Saint-Gobain India Pvt. Ltd.", "Equipment Dismantling and Structural Installation", "Wada, Maharashtra", "Engineering", 48],

  [2019, "Sumitomo Chemical India Ltd.", "Annual Maintenance and Industrial Shutdown", "Bhavnagar / Bhuj, Gujarat", "Chemical", 315],

  [2019, "UPL Ltd.", "Annual Maintenance of Equipment, Piping and Structure", "Vapi, Gujarat", "Chemical", 75],

  [2019, "Inventys Research Company Pvt. Ltd.", "Annual Maintenance of Equipment, Piping and Structure", "Butibori, Nagpur", "Chemical", 60],


  // ================= 2020 =================

  [2020, "PepsiCo India Holdings Pvt. Ltd.", "Container and RBS Line Dismantling, Shifting, Transportation and Warehousing", "Ranjangaon, Maharashtra", "Food Processing", 280],

  [2020, "Huhtamaki PPL Pvt. Ltd.", "Industrial Machine Dismantling", "Ambernath, Maharashtra", "Paper and Packaging", 20],

  [2020, "Huhtamaki PPL Pvt. Ltd.", "Machine, Ducting, Insulation and MS/SS Piping Installation", "Silvassa, Gujarat", "Paper and Packaging", 28],

  [2020, "Jell Pharmaceuticals Pvt. Ltd.", "Structural Platform, Storage Tank and Plant Piping Fabrication", "Silvassa / Rabale", "Pharmaceutical", 70],

  [2020, "Sumitomo Chemical India Ltd.", "Annual Maintenance and Shutdown Work", "Bhavnagar / Bhuj, Gujarat", "Chemical", 150],

  [2020, "UPL Ltd.", "Annual Maintenance of Equipment, Piping and Insulation", "Vapi, Gujarat", "Chemical", 55],


  // ================= 2021 =================

  [2021, "Johnson Matthey Chemicals India Pvt. Ltd.", "Chimney Fabrication with Supporting Tower", "Taloja, Maharashtra", "Chemical", 40],

  [2021, "Procter & Gamble Home Products Pvt. Ltd.", "Fire Protection System Supply and Installation", "Mandideep, Bhopal", "Engineering", 315],

  [2021, "Pidilite Industries Pvt. Ltd.", "Supply and Site Fabrication of 9 SS Storage Tanks", "Dahej, Gujarat", "Chemical", 248],

  [2021, "CasteZee Manufacturing Pvt. Ltd.", "Civil, Structural, MS/SS Piping and Equipment Erection", "Rasayani, Panvel", "Paint", 211],

  [2021, "Sathavrao Coating Pvt. Ltd. / CasteZee Manufacturing", "MS/SS Piping and Equipment Erection", "Rasayani, Panvel", "Paint", 83],

  [2021, "Sumitomo Chemical India Ltd.", "Annual Maintenance and Shutdown Work", "Bhavnagar / Bhuj, Gujarat", "Chemical", 150],

  [2021, "UPL Ltd.", "Annual Maintenance of Equipment, Piping and Insulation", "Vapi, Gujarat", "Chemical", 66],

  [2021, "AAK Kamani Pvt. Ltd.", "Structural Shed Fabrication and Erection", "Khopoli, Maharashtra", "Petrochemical", 125],

  [2021, "Herbert Brown Pharmaceutical & Research Labs", "SS Piping and Equipment Fabrication and Erection", "Dombivli, Mumbai", "Pharmaceutical", 12],


  // ================= 2022 =================

  [2022, "Gatik Synthesis LLP", "Piping, Structure and Equipment Erection", "Rasayani, Panvel", "Chemical", 450],

  [2022, "Aarti Industries Ltd.", "Fabrication and Erection of Four Storage Tanks", "Jhagadia, Gujarat", "Chemical", 206],

  [2022, "Laxmi Organic Industries Ltd.", "SS Piping and Equipment Erection", "Mahad, Maharashtra", "Chemical", 127],

  [2022, "Lubrizol India Pvt. Ltd.", "Pipe Rack Structure Fabrication and Installation", "Turbhe, Maharashtra", "Chemical", 117],


  // ================= 2023 =================

  [2023, "Trishul Buildtech & Infrastructures Pvt. Ltd.", "MS Structural Work Supply and Installation", "Turbhe, Maharashtra", "Engineering", 14],

  [2023, "Gatik Synthesis LLP", "MS Tank Supply with Epoxy Painting", "Rasayani, Panvel", "Chemical", 102]

];


// Convert completed project records into objects.

const completedProjects = completed.map(
  ([year, client, title, place, industry, cost], index) => ({
    id: `completed-${year}-${index + 1}`,
    year,
    client,
    title,
    place,
    industry,
    status: "Completed",
    cost,
    costUnit: "Lakhs",
    scope: title
  })
);


// ================= PROJECTS IN PROGRESS =================

const ongoing = [

  {
    client: "Sumitomo Chemical India Ltd.",
    title: "Annual Maintenance and Shutdown Work",
    place: "Bhavnagar / Bhuj, Gujarat",
    industry: "Chemical",
    cost: 200
  },

  {
    client: "UPL Ltd.",
    title: "Annual Maintenance and Insulation",
    place: "Vapi, Gujarat",
    industry: "Chemical",
    cost: 70
  },

  {
    client: "Agrocel Industries Pvt. Ltd.",
    title: "Annual Maintenance and Shutdown Work",
    place: "Bhuj, Gujarat",
    industry: "Chemical",
    cost: 65
  },

  {
    client: "Jell Pharmaceuticals Pvt. Ltd.",
    title: "Tank, Piping and Structural Fabrication",
    place: "Mumbai / Silvassa",
    industry: "Pharmaceutical",
    cost: 80
  },

  {
    client: "Lubrizol India Pvt. Ltd.",
    title: "Annual Maintenance and Shutdown Work",
    place: "Turbhe, Maharashtra",
    industry: "Chemical",
    cost: 200
  },

  {
    client: "Apcotex Industries Ltd.",
    title: "MS/SS Piping, Structure and Equipment Installation",
    place: "Taloja, Maharashtra",
    industry: "Chemical",
    cost: 80
  },

  {
    client: "IVP Ltd.",
    title: "Structural Shed Supply, Fabrication and Installation",
    place: "Tarapur, Maharashtra",
    industry: "Chemical",
    cost: 95
  },

  {
    client: "Eastern Petroleum Pvt. Ltd.",
    title: "Structural Steel Fabrication, Erection and Sheeting",
    place: "Kamothe, Maharashtra",
    industry: "Petrochemical",
    cost: 86
  }

].map((project, index) => ({
  id: `ongoing-${index + 1}`,
  year: 2023,
  ...project,
  status: "In Progress",
  costUnit: "Lakhs",
  scope: project.title
}));


// ================= UPCOMING PROJECTS =================

const upcoming = [

  {
    client: "Godrej Industries Ltd.",
    title: "500 KL SS Storage Tank Erection - 2 Units",
    place: "Valia, Gujarat",
    industry: "Chemical",
    cost: 191
  },

  {
    client: "Godrej Industries Ltd.",
    title: "65 KL SS Storage Tank Erection - 2 Units",
    place: "Valia, Gujarat",
    industry: "Chemical",
    cost: 92
  },

  {
    client: "Pidilite Industries Pvt. Ltd.",
    title: "200 KL SS 304 Site Fabricated Tank",
    place: "Visakhapatnam",
    industry: "Chemical",
    cost: 65
  },

  {
    client: "Thyssenkrupp Industries India Pvt. Ltd.",
    title: "ESP Erection with Thermal Insulation",
    place: "Angul, Odisha",
    industry: "Engineering",
    cost: 630
  },

  {
    client: "Procter & Gamble Home Products Pvt. Ltd.",
    title: "100 KL Vertical Limpet Coil Tank with Thermal Insulation",
    place: "Hyderabad",
    industry: "Engineering",
    cost: 98
  },

  {
    client: "Procter & Gamble Home Products Pvt. Ltd.",
    title: "200 KL Vertical Limpet Coil Tank with Thermal Insulation",
    place: "Hyderabad",
    industry: "Engineering",
    cost: 110
  }

].map((project, index) => ({
  id: `upcoming-${index + 1}`,
  year: 2023,
  ...project,
  status: "Planned",
  costUnit: "Lakhs",
  scope: project.title
}));


// ================= WEBSITE PROJECT LIST =================

// Includes completed, ongoing and historical planned projects.
// The source profile is from 2017-2023.

export const PROJECTS = [

  ...completedProjects,

  ...ongoing,

  ...upcoming,

  {
    id: "quotation-pepsico",
    year: null,
    client: "PepsiCo India Holdings Pvt. Ltd.",
    title: "Piping, Structure and Equipment Erection",
    place: "Punjab",
    industry: "Food Processing",
    status: "Quoting Stage",
    cost: 304,
    costUnit: "Lakhs",
    scope:
      "Supply, fabrication and installation of piping, structural work and equipment erection."
  }

];


// ================= CLIENTS =================

// Client names from the official company profile.
// This includes the profile's client directory and
// additional clients appearing in project records.

export const CLIENTS = [

  // Pharmaceutical

  { name: "Cipla Ltd.", industry: "Pharmaceutical" },

  { name: "Gelnova Laboratories India Pvt. Ltd.", industry: "Pharmaceutical" },

  { name: "Jindal Drugs Ltd.", industry: "Pharmaceutical" },

  { name: "Jell Pharmaceuticals Pvt. Ltd.", industry: "Pharmaceutical" },

  { name: "Procter & Gamble Home Products Pvt. Ltd.", industry: "Pharmaceutical" },

  { name: "Herbert Brown Pharmaceutical & Research Labs", industry: "Pharmaceutical" },


  // Chemical

  { name: "Aditya Birla Science & Technology Company Ltd.", industry: "Chemical" },

  { name: "BASF India Ltd.", industry: "Chemical" },

  { name: "Excel Crop Care Ltd.", industry: "Chemical" },

  { name: "Excel Industries Ltd.", industry: "Chemical" },

  { name: "Gatik Synthesis LLP", industry: "Chemical" },

  { name: "Johnson Matthey Chemicals India Pvt. Ltd.", industry: "Chemical" },

  { name: "United Phosphorus Ltd. (UPL)", industry: "Chemical" },

  { name: "Agrocel Ltd.", industry: "Chemical" },


  // Food Industries

  { name: "Aradhana Foods & Juices Pvt. Ltd.", industry: "Food Processing" },

  { name: "Ferrero India Pvt. Ltd.", industry: "Food Processing" },

  { name: "Hindustan Coca-Cola Beverages Pvt. Ltd.", industry: "Food Processing" },

  { name: "ITC Ltd.", industry: "Food Processing" },

  { name: "McCain Foods India Ltd.", industry: "Food Processing" },

  { name: "PepsiCo India Holdings Pvt. Ltd.", industry: "Food Processing" },

  { name: "Perfetti Van Melle Pvt. Ltd.", industry: "Food Processing" },


  // Petrochemical, Oil and Gas

  { name: "Bharat Petroleum Corporation Ltd.", industry: "Oil and Gas" },

  { name: "Brilliant Polymer Pvt. Ltd.", industry: "Petrochemical" },

  { name: "Expanded Polymers Pvt. Ltd.", industry: "Petrochemical" },

  { name: "Hindustan Petroleum Corporation Ltd.", industry: "Oil and Gas" },

  { name: "Indian Oil Tanking Ltd.", industry: "Oil and Gas" },

  { name: "Kamani Oil Industries Pvt. Ltd.", industry: "Petrochemical" },

  { name: "Laxmi Organic Industries Ltd.", industry: "Chemical" },

  { name: "Madhu Silica Pvt. Ltd.", industry: "Chemical" },

  { name: "Pidilite Industries Ltd.", industry: "Chemical" },

  { name: "Inventys Research Company Pvt. Ltd.", industry: "Chemical" },

  { name: "Aarti Industries Ltd.", industry: "Chemical" },

  { name: "Eastern Petroleum Pvt. Ltd.", industry: "Petrochemical" },

  { name: "Mechemco Resins Pvt. Ltd.", industry: "Chemical" },


  // Engineering Industries

  { name: "Bosch Ltd.", industry: "Engineering" },

  { name: "Larsen & Toubro Ltd.", industry: "Engineering" },

  { name: "Mazda Ltd.", industry: "Engineering" },

  { name: "Mili India Ltd.", industry: "Engineering" },

  { name: "Saint-Gobain Gyproc India Ltd.", industry: "Engineering" },

  { name: "Symtech India Pvt. Ltd.", industry: "Engineering" },

  { name: "Transweigh India Pvt. Ltd.", industry: "Engineering" },

  { name: "Libra Ltd.", industry: "Engineering" },

  { name: "Wright Brothers, UK", industry: "Engineering" },


  // Steel Industries

  { name: "Bohler-Uddeholm India Ltd.", industry: "Steel" },

  { name: "Bhushan Industries Ltd.", industry: "Steel" },

  { name: "JSW - Ispat Ltd.", industry: "Steel" },


  // Paper and Packaging

  { name: "Huhtamaki PPL Ltd.", industry: "Paper and Packaging" },

  { name: "Bombay Dyeing Industries", industry: "Paper and Packaging" },


  // Power Plants

  { name: "Tata Power Ltd.", industry: "Power" },

  { name: "BASF Ltd. - Chemithon Engineers Pvt. Ltd.", industry: "Power" },

  { name: "Hamlet and Solar Project Collaborators Pvt. Ltd.", industry: "Power" },


  // Paint Manufacturing

  { name: "Bombay Paint", industry: "Paint" },

  { name: "CasteZee Manufacturing Pvt. Ltd.", industry: "Paint" },

  { name: "Jotun India Pvt. Ltd.", industry: "Paint" },

  { name: "Asian Paints", industry: "Paint" },

  { name: "Sathavrao Coating Pvt. Ltd.", industry: "Paint" },


  // Soap Industries

  { name: "Godrej Industries Ltd.", industry: "Soap and FMCG" },

  { name: "Hindustan Unilever Ltd.", industry: "Soap and FMCG" },


  // Additional project clients

  { name: "Indian Oil Corporation Ltd. (IOCL)", industry: "Oil and Gas" },

  { name: "AAK Kamani Oil Industries", industry: "Petrochemical" },

  { name: "Envirocare Labs Pvt. Ltd.", industry: "Engineering" },

  { name: "Sumitomo Chemical India Ltd.", industry: "Chemical" },

  { name: "Lubrizol India Pvt. Ltd.", industry: "Chemical" },

  { name: "Trishul Buildtech & Infrastructures Pvt. Ltd.", industry: "Engineering" },

  { name: "Apcotex Industries Ltd.", industry: "Chemical" },

  { name: "Thyssenkrupp Industries India Pvt. Ltd.", industry: "Engineering" }

];


// ================= MACHINERY =================

export const MACHINES = [

  {
    t: "Hydra Crane",
    d: "Pick-and-carry lifting for material and equipment movement on industrial sites."
  },

  {
    t: "Mobile Crane",
    d: "Heavy lifting and equipment placement on plant floors and industrial yards."
  },

  {
    t: "Forklift",
    d: "Loading, unloading and internal material handling."
  },

  {
    t: "Stacker",
    d: "Industrial stacking and warehouse material handling."
  },

  {
    t: "Scissor Lift",
    d: "Stable elevated working platform for piping and structural installation."
  },

  {
    t: "Boom Lift",
    d: "Elevated access equipment for industrial maintenance and installation."
  },

  {
    t: "Finger Working Platform",
    d: "Access equipment for overhead piping and difficult-to-reach industrial joints."
  },

  {
    t: "Welding Machines",
    d: "Industrial welding equipment for structural, piping and tank fabrication."
  },

  {
    t: "Plate Rolling Machine",
    d: "Plate rolling equipment for industrial storage tank and vessel fabrication."
  },

  {
    t: "Air Compressors",
    d: "Electric and diesel-operated compressors for industrial site operations."
  },

  {
    t: "Chain Pulley Blocks",
    d: "Material lifting equipment available in multiple load capacities."
  },

  {
    t: "Hydraulic Jack System",
    d: "Hydraulic jacking equipment for storage tank lifting and installation."
  }

];


// ================= GALLERY =================

export const GALLERY = Array.from(
  { length: 8 },
  (_, i) => ({
    src: `/images/gallery/site-${i + 1}.jpg`,
    alt: `Samarth Erectors industrial project ${i + 1}`
  })
);


// ================= PROJECT STATISTICS =================

export const PROJECT_STATS = {

  completedProjects: completedProjects.length,

  industriesServed: INDUSTRIES.length,

  yearsOfExperience: 2026 - COMPANY.since,

  totalClients: CLIENTS.length

};