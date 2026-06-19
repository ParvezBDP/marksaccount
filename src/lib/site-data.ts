export const CONTACT = {
  phones: ["+91 97062 32819", "+91 91016 12613"],
  email: "teammarksacc@gmail.com",
  whatsapp: "https://wa.me/919706273154",
  address: "Tilapara, Opposite of Central Bank, Goalpara, Assam-783101, India",
  instagram: "https://www.instagram.com/team_marks/?hl=en",
  facebook: "https://www.facebook.com/profile.php?id=61569245326616",
  linkedin: "https://www.linkedin.com/in/marks-accounting-and-taxation-76983333b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
};

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  details: string[];
  deliverables: string[];
  icon: string;
};

export const SERVICES: Service[] = [
  {
    slug: "digital-sewa",
    title: "Digital Sewa",
    tagline: "One-stop digital government services",
    summary:
      "End-to-end assistance with CSC, PAN, Aadhaar, utility and citizen services through a single trusted desk.",
    details: [
      "New PAN card application, correction and reprint",
      "Aadhaar enrolment support, address & mobile updates",
      "Voter ID, ration card, passport and driving licence assistance",
      "Utility bill payments, recharges, insurance & banking correspondence",
    ],
    deliverables: ["Verified application receipts", "Status tracking", "Document pickup & delivery"],
    icon: "monitor",
  },
  {
    slug: "company-registration",
    title: "Company Registration",
    tagline: "Incorporate the right way, from day one",
    summary:
      "End-to-end company formation and business registration in India — from name approval to incorporation and post-incorporation compliance.",
    details: [
      "Private Limited Company, LLP, OPC and Partnership Firm registration",
      "Proprietorship firm and MSME / Udyam registration",
      "DIN allotment, DSC procurement and Director KYC",
      "Name reservation (RUN), MOA / AOA drafting and SPICe+ filing",
      "PAN, TAN, bank account assistance and GST registration",
      "Post-incorporation ROC compliance — AOC-4, MGT-7, DIR-3 KYC",
    ],
    deliverables: [
      "Certificate of Incorporation",
      "Company PAN & TAN",
      "DIN, DSC and statutory registers",
      "First-year compliance calendar",
    ],
    icon: "building",
  },
  {
    slug: "tan-application",
    title: "TAN Application",
    tagline: "Tax Deduction Account Number, hassle-free",
    summary:
      "Quick application, correction and reissue of TAN for deductors — individuals, firms and companies.",
    details: [
      "Fresh TAN allotment via Form 49B with PAN linkage",
      "TAN correction, reprint and surrender filing",
      "Guidance on TDS deductor classification",
      "Acknowledgement tracking until TAN issuance",
    ],
    deliverables: ["TAN allotment letter", "Filing acknowledgement", "Compliance briefing"],
    icon: "id-card",
  },
  {
    slug: "bookkeeping-accounting",
    title: "Bookkeeping & Accounting",
    tagline: "Books that are audit-ready, always",
    summary:
      "Accurate, timely bookkeeping on Tally / Zoho / Busy with monthly MIS and reconciliations.",
    details: [
      "Daily / weekly / monthly transaction recording",
      "Bank, vendor and customer reconciliations",
      "Receivables & payables tracking with ageing reports",
      "Monthly P&L, balance sheet and management MIS",
      "Year-end closure and audit support",
    ],
    deliverables: ["Monthly MIS pack", "Reconciled ledgers", "Audit-ready trial balance"],
    icon: "book",
  },
  {
    slug: "income-tax-filing",
    title: "Income Tax Filing",
    tagline: "ITR filing for individuals & businesses",
    summary:
      "Accurate ITR preparation, tax planning and notice handling for salaried, business and corporate clients.",
    details: [
      "ITR-1 to ITR-7 preparation and e-filing",
      "Capital gains, F&O, crypto and foreign income reporting",
      "Advance tax computation and tax planning",
      "Refund tracking and rectification under section 154",
      "Response to notices u/s 139(9), 143(1), 142(1), 148",
    ],
    deliverables: ["Filed ITR with ITR-V", "Computation sheet", "Tax planning advisory"],
    icon: "file-check",
  },
  {
    slug: "gst-registration-returns",
    title: "GST Registration & Returns",
    tagline: "GST done right, every month",
    summary:
      "Fresh GST registration, monthly / quarterly returns and end-to-end GST compliance management.",
    details: [
      "New GSTIN registration — regular, composition & casual",
      "GSTR-1, GSTR-3B, CMP-08, GSTR-9 / 9C filing",
      "Input tax credit reconciliation with GSTR-2B",
      "E-way bill and e-invoice setup and support",
      "GST notices, audits and refund applications",
    ],
    deliverables: ["GSTIN certificate", "Monthly filing acknowledgements", "ITC reconciliation report"],
    icon: "receipt",
  },
  {
    slug: "tds-compliance",
    title: "TDS Compliance & Filing",
    tagline: "Quarterly TDS, fully managed",
    summary:
      "Computation, deposit and quarterly e-filing of TDS / TCS returns with Form 16 / 16A generation.",
    details: [
      "Monthly TDS / TCS computation and challan deposit",
      "Quarterly returns — 24Q, 26Q, 27Q, 27EQ",
      "Form 16 / 16A generation and distribution",
      "Correction statements and default resolution on TRACES",
      "Lower deduction certificate (Form 13) assistance",
    ],
    deliverables: ["Filed TDS returns", "Form 16 / 16A", "Challan & traces reports"],
    icon: "calculator",
  },
  {
    slug: "project-report",
    title: "Project Report for Bank Loan",
    tagline: "Bankable reports that get sanctioned",
    summary:
      "Detailed project reports and CMA data for term loans, working capital, MUDRA, PMEGP and CGTMSE.",
    details: [
      "Business profile, market study and SWOT analysis",
      "Cost of project, means of finance and break-even",
      "5-year projected P&L, balance sheet and cash flow",
      "Ratio analysis, DSCR and sensitivity workings",
      "CMA data in bank-prescribed format",
    ],
    deliverables: ["Bound project report", "CMA data sheets", "Loan application support"],
    icon: "landmark",
  },
  {
    slug: "iec-export",
    title: "IEC & Export Documentation",
    tagline: "Go global with the right paperwork",
    summary:
      "Import Export Code registration, modification and complete export documentation support.",
    details: [
      "IEC application, modification and renewal on DGFT",
      "RCMC, AD code and LUT under GST",
      "Shipping bill, BRC and EDPMS / IDPMS follow-up",
      "Export incentive claims — RoDTEP, duty drawback",
      "FEMA compliance and documentation",
    ],
    deliverables: ["IEC certificate", "AD code & RCMC", "Export compliance pack"],
    icon: "globe",
  },
  {
    slug: "internal-control",
    title: "Internal Control",
    tagline: "Process design that prevents leakage",
    summary:
      "Internal control review, SOP design and risk advisory to protect margins and ensure compliance.",
    details: [
      "Process mapping for purchase, sales, inventory & payroll",
      "Segregation of duties and approval matrix design",
      "Standard Operating Procedures (SOPs) documentation",
      "Internal audit and risk-control matrix",
      "Periodic management reporting and follow-through",
    ],
    deliverables: ["SOP manual", "Risk-control matrix", "Quarterly review report"],
    icon: "shield-check",
  },
];

export const TESTIMONIALS = [
  {
    name: "Pradip Bothra",
    company: "M/S Pradip Cloth Store",
    quote:
      "Excellent accounting and taxation service. Professional, reliable, and always helpful.",
  },
  {
    name: "Jamesbirth Marak",
    company: "",
    quote:
      "Very satisfied with the service. Quick response and accurate work.",
  },
  {
    name: "Sonia Danal Sangma",
    company: "",
    quote:
      "Good support and professional guidance. Highly recommended.",
  },
  {
    name: "Anup Jyoti Sharma",
    company: "",
    quote:
      "Trustworthy service with timely completion of all work.",
  },
  {
    name: "Jenia Marak",
    company: "",
    quote:
      "Great experience. Helpful team and quality service.",
  },
  {
    name: "Abhijit Kalita",
    company: "Swastika Enterprise",
    quote:
      "Efficient and dependable service. Thank you for the excellent support.",
  },
  {
    name: "Aftaf Ali",
    company: "Lavish Fashion",
    quote:
      "MARKS has provided excellent accounting and GST services for my business. Their team is professional, responsive, and always ensures timely compliance. Highly recommended for anyone looking for reliable financial and tax support.",
  },
  {
    name: "Samiul Hussain",
    company: "Bharat Automobile",
    quote:
      "MARKS delivers professional and dependable services. From GST filing to financial guidance, everything is handled accurately and on time. Their dedication and customer support are truly commendable.",
  },
  {
    name: "Abdul Khalique",
    company: "M K Mobile Centre",
    quote:
      "The team at MARKS is knowledgeable, efficient, and trustworthy. They have made accounting and tax compliance hassle-free for my business. I appreciate their commitment to quality service.",
  },
  {
    name: "Rasel Alom",
    company: "Daily Supply Enterprise",
    quote:
      "Excellent experience with MARKS. Their prompt service, attention to detail, and professional approach have helped my business stay compliant and organized. Highly recommended.",
  },
  {
    name: "Foridul Islam",
    company: "Digital Mega Mart",
    quote:
      "MARKS provides outstanding accounting and taxation services. Their team is always available to assist and ensures all work is completed accurately and on schedule. A trusted partner for business growth.",
  },
  {
    name: "Ananta Roy",
    company: "M/S A.R Enterprise",
    quote:
      "Working with MARKS has been a great experience. Their team provides accurate accounting, GST, and taxation services with complete professionalism. They are always responsive, reliable, and ensure timely compliance. I highly recommend MARKS to any business looking for trusted financial consulting services.",
  },
];

export const FAQS = [
  {
    q: "Which cities do you serve?",
    a: "We are headquartered in Goalpara, Assam and serve clients across India remotely. Documents are exchanged digitally and we visit on request for on-site work.",
  },
  {
    q: "How do you charge for your services?",
    a: "Pricing depends on scope and volume. We offer one-time service fees as well as monthly retainers for bookkeeping, GST and TDS — share your requirement and we will send a clear quote.",
  },
  {
    q: "Is my financial data safe with MARKS?",
    a: "Absolutely. All client data is stored on secured systems, accessed only by assigned team members, and never shared without written consent.",
  },
  {
    q: "Can you handle notices from the Income Tax or GST department?",
    a: "Yes. We routinely respond to notices, scrutiny assessments and audits on behalf of our clients with full documentation support.",
  },
  {
    q: "How quickly can you onboard a new client?",
    a: "Most engagements start within 48 hours of receiving KYC and prior records. Urgent filings are accommodated on a priority basis.",
  },
];