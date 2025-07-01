const quizData = [
  {
    question: "A provider’s privileges were suspended at Hospital A due to a peer review issue. The provider now seeks to practice at Hospital B within the same health system. What should the credentialing department at Hospital B do?",
    options: [
      "Automatically deny privileges at Hospital B.",
      "Grant privileges if the provider has active licensure.",
      "Review system bylaws/policies; act according to established cross-facility processes.",
      "Ignore the suspension since it was at a different location."
    ],
    answer: 2,
    category: "Scenario"
  },
  {
    question: "A department chair wants to grant temporary privileges to a new surgeon for convenience while waiting for references. What should the medical staff office do?",
    options: [
      "Grant temporary privileges for up to 120 days for convenience.",
      "Decline, as temporary privileges are only for patient care needs or pending final approval.",
      "Ask the board to grant privileges.",
      "Allow the chair to make a final decision."
    ],
    answer: 1,
    category: "Scenario"
  },
  {
    question: "During reappointment, a provider submits an incomplete application missing required licensure documentation. What is the next step?",
    options: [
      "Begin the credentialing process immediately.",
      "Wait until the application is complete before starting the timeline.",
      "Send to MEC for recommendation.",
      "Notify the NPDB."
    ],
    answer: 1,
    category: "Scenario"
  },
  {
    question: "A low-volume specialist applies for re-privileging. There is insufficient case log data. What should be considered?",
    options: [
      "Deny privileges automatically.",
      "Accept malpractice history as sufficient.",
      "Utilize peer recommendations, simulation labs, or case review.",
      "No evaluation is necessary."
    ],
    answer: 2,
    category: "Scenario"
  },
  {
    question: "After an adverse action, how long must the privileges be affected before NPDB reporting is required?",
    options: [
      "Any length of time",
      "15 days",
      "Over 30 days",
      "Only if privileges are revoked"
    ],
    answer: 2,
    category: "Scenario"
  },
  {
    question: "Why is it important to check that the practitioner is not currently excluded from federal health care programs?",
    options: [
      "A facility could lose its accreditation",
      "It is required by Medicare Conditions of Participation",
      "The facility won’t get paid unless provider is authorized",
      "To comply with Joint Commission standards"
    ],
    answer: 2,
    category: "Regulatory & Compliance",
    explanation: "If a practitioner is excluded from federal health care programs, claims for their services will not be reimbursed, making this check crucial for payment and compliance."
  },
  {
    question: "Which of the following credentials must be tracked on an ongoing basis?",
    options: [
      "Medical school completion",
      "Post graduate education completed",
      "Licensure",
      "Board certification"
    ],
    answer: 2,
    category: "Credentialing",
    explanation: "Licensure must be tracked continually because it can expire or be revoked at any time, directly affecting a practitioner's ability to practice legally."
  },
  {
    question: "According to NCQA standards, an organization that discovers sanction information, complaints, or adverse events regarding a practitioner must take what action?",
    options: [
      "Determine if there is evidence of poor quality that could affect the health and safety of its members.",
      "Immediately take action to remove the provider from its panel.",
      "Initiate Ongoing Professional Practice Evaluation.",
      "File a report with the state medical board."
    ],
    answer: 0,
    category: "Regulatory & Compliance",
    explanation: "The organization must evaluate if the new information suggests a risk to members' safety or quality of care before taking further action."
  },
  {
    question: "What is the name of the entity established through the Health Care Quality Improvement Act of 1986 to restrict the ability of incompetent healthcare practitioners to move without disclosure?",
    options: [
      "Emergency Medical Treatment and Active Labor Act",
      "The National Practitioner Data Bank",
      "The Patient Safety and Quality Improvement Act",
      "The Office of Inspector General"
    ],
    answer: 1,
    category: "Regulatory & Compliance",
    explanation: "The National Practitioner Data Bank (NPDB) was created to prevent practitioners with a history of malpractice or disciplinary actions from moving state to state undetected."
  },
  {
    question: "When developing clinical privileging criteria, what is important to evaluate?",
    options: [
      "How many providers are in that specialty.",
      "Established standards of practice such as specialty board recommendations.",
      "Whether or not the quality department can support the FPPE process.",
      "The availability of office space."
    ],
    answer: 1,
    category: "Privileging",
    explanation: "Best practices recommend using established standards of practice and specialty board recommendations when developing privileging criteria."
  },
  {
    question: "What is the main reason for periodically assessing appropriateness of clinical privileges for each specialty?",
    options: [
      "It’s required by accreditation standards",
      "It is required by the Medicare Conditions of Participation",
      "To protect patient safety by ensuring current competency, relevance to the facility, and accepted standards of care",
      "To support claims processing and appeals"
    ],
    answer: 2,
    category: "Privileging",
    explanation: "Assessing privilege appropriateness ensures ongoing patient safety by confirming that privileges remain relevant and based on current competence."
  },
  {
    question: "Which of the following specialists is most likely to perform a PTCA?",
    options: [
      "General surgeon",
      "OB/GYN",
      "Interventional Cardiologist",
      "Radiologist"
    ],
    answer: 2,
    category: "Privileging",
    explanation: "PTCA (Percutaneous Transluminal Coronary Angioplasty) is most commonly performed by an interventional cardiologist."
  },
  {
    question: "The Joint Commission hospital standards require that clinical privileges are hospital-specific and:",
    options: [
      "Based on the individual’s demonstrated current competence and the procedures the hospital can support",
      "Based on board certification",
      "Based on the privileges the individual is currently approved to perform at other hospitals",
      "Based on Medicare coverage criteria"
    ],
    answer: 0,
    category: "Privileging",
    explanation: "Privileges must reflect both the individual's competence and the hospital's ability to support the requested services."
  },
  {
    question: "Which of the following would be routinely performed by a cardiologist?",
    options: [
      "Hysterectomy",
      "Transesophageal Echocardiography",
      "Urethral dilation",
      "Corneal transplant"
    ],
    answer: 1,
    category: "Privileging",
    explanation: "Transesophageal echocardiography is a diagnostic procedure commonly performed by cardiologists."
  },
  {
    question: "Which NCQA-required committee makes recommendations regarding credentialing decisions?",
    options: [
      "Medical Executive Committee",
      "Quality Care Committee",
      "Credentialing Committee",
      "Utilization Review Committee"
    ],
    answer: 2,
    category: "Credentialing",
    explanation: "NCQA requires that credentialing decisions be reviewed and recommended by a credentialing committee."
  },
  {
    question: "ACHC standards require three medical staff committees to be delineated in the medical staff structure. Two are the Medical Executive Committee and the Utilization of Osteopathic Methods & Concepts Committee. What is the other required committee?",
    options: [
      "Credentials Committee",
      "Investigational Review Board",
      "Utilization Review Committee",
      "Peer Review Committee"
    ],
    answer: 2,
    category: "Medical Staff Governance",
    explanation: "Utilization Review Committee is the third required committee for certain hospitals, ensuring resource use and care appropriateness."
  },
  {
    question: "If you needed to find out about what the Federal Government requires in regards to antitrust issues, what law would you consult?",
    options: [
      "Healthcare Quality Improvement Act",
      "Patient Safety and Quality Improvement Act",
      "Sherman Anti-trust Act",
      "False Claims Act"
    ],
    answer: 2,
    category: "Legal/Ethics",
    explanation: "The Sherman Anti-trust Act addresses antitrust issues at the federal level and impacts provider and hospital practices."
  },
  {
    question: "Peer references should be obtained from:",
    options: [
      "Practitioners who have referred patients to the provider",
      "Family, friends and neighbors",
      "Practitioners in the same professional discipline as the applicant",
      "Any hospital staff"
    ],
    answer: 2,
    category: "Credentialing",
    explanation: "Peer references should be from colleagues in the same discipline who can attest to the applicant’s current competence."
  },
  {
    question: "Patrick v. Burgett is an important case because it:",
    options: [
      "Showed that a hospital can assert that peer review is performed at the state’s request",
      "Illustrates that the governing body is the ultimate authority",
      "Illustrates the potential for antitrust liability arising out of peer review activities",
      "Demonstrates vicarious liability of a hospital"
    ],
    answer: 2,
    category: "Legal/Ethics",
    explanation: "Patrick v. Burgett highlights that peer review activity may expose a hospital to antitrust liability, influencing how hospitals manage peer review."
  },
  {
    question: "If a medical staff member has privileges and/or medical staff appointment revoked, he/she must be:",
    options: [
      "Granted temporary privileges",
      "Provided due process",
      "Reported immediately to the national practitioner data bank",
      "Allowed to reapply in one year"
    ],
    answer: 1,
    category: "Medical Staff Governance",
    explanation: "Due process must be provided to any practitioner facing revocation of appointment or privileges to ensure fairness and legal compliance."
  },
  {
    question: "Access to credentials files should be:",
    options: [
      "Available to all members of the organization’s staff",
      "Described fully in an access policy",
      "Available to the organization’s patients and potential patients",
      "Restricted to the state medical board"
    ],
    answer: 1,
    category: "Credentialing",
    explanation: "Access policies define who may view credential files to protect confidentiality and meet legal requirements."
  },
  {
    question: "Which of the following bodies approves clinical privileges?",
    options: [
      "Credentials Committee",
      "Peer Review Committee",
      "Governing Body or Board",
      "Medical Executive Committee"
    ],
    answer: 2,
    category: "Privileging",
    explanation: "Ultimately, the governing body or board is responsible for approving clinical privileges, even if others recommend or review."
  },
  {
    question: "What primary source verification is required by NCQA prior to provisional credentialing?",
    options: [
      "Current competence",
      "Licensure and 5 year malpractice history or NPDB",
      "Education and Training",
      "Peer references"
    ],
    answer: 1,
    category: "Credentialing",
    explanation: "NCQA requires licensure and malpractice history (or NPDB query) be primary source verified before provisional credentialing is granted."
  },
  {
    question: "According to The Joint Commission standards, initial appointments to the medical staff are made for a period of:",
    options: [
      "One year",
      "Two years",
      "Not to exceed three years",
      "Indefinitely"
    ],
    answer: 2,
    category: "Medical Staff Governance",
    explanation: "Initial appointments cannot exceed three years to ensure regular review of competence and suitability for staff membership."
  },
  {
    question: "According to The Joint Commission standards, temporary privileges may be granted by:",
    options: [
      "The department chair",
      "The CEO",
      "The CEO on the recommendation of the medical staff president or authorized designee",
      "The board of directors"
    ],
    answer: 2,
    category: "Medical Staff Governance",
    explanation: "Temporary privileges require both administrative and medical staff oversight; the CEO acts on the recommendation of the medical staff leadership."
  },
  {
    question: "According to The Joint Commission Standards, which of the following items must be verified with a primary source?",
    options: [
      "Medicare/Medicaid Sanctions",
      "Proof of professional liability insurance",
      "Licensure, training, experience, and competence",
      "Hospital affiliations"
    ],
    answer: 2,
    category: "Credentialing",
    explanation: "Primary source verification is required for licensure, training, experience, and competence to ensure providers are qualified and eligible to practice."
  },
  {
    question: "According to NCQA standards, a copy of which of the following is acceptable verification of the document?",
    options: [
      "DEA certificate",
      "Licensure",
      "Board certification",
      "Malpractice insurance"
    ],
    answer: 0,
    category: "Credentialing",
    explanation: "NCQA allows a copy of the DEA certificate as acceptable verification, while other items require primary source verification."
  },
  {
    question: "According to NCQA standards, which is an acceptable source for primary source verification of Medicare and Medicaid sanction activity against physicians?",
    options: [
      "Federation of State Medical Boards",
      "American Board of Medical Specialties",
      "Education Commission on Foreign Medical Graduates Profile",
      "AMA Masterfile"
    ],
    answer: 0,
    category: "Credentialing",
    explanation: "The Federation of State Medical Boards is an acceptable primary source for sanction verification against physicians."
  },
  {
    question: "According to The Joint Commission standards, which of following is considered a designated equivalent source for verification of board certification?",
    options: [
      "The American Board of Medical Specialties",
      "Education Commission on Foreign Medical Graduates Profile",
      "Federation of State Medical Boards",
      "AMA Masterfile"
    ],
    answer: 0,
    category: "Credentialing",
    explanation: "The American Board of Medical Specialties (ABMS) is considered a designated equivalent source for board certification verification."
  },
  {
    question: "Which of the following organizations have been recognized by The Joint Commission and NCQA to provide primary source verification of medical school graduation and residency training for U.S. graduates?",
    options: [
      "American Medical Association Masterfile",
      "National Practitioner Data Bank",
      "Federation of State Medical Boards",
      "NCQA CVO"
    ],
    answer: 0,
    category: "Credentialing",
    explanation: "The AMA Masterfile is recognized by both JC and NCQA for verifying U.S. medical school and residency completion."
  },
  {
    question: "According to NCQA standards, the application attestation statement must affirm that the application...",
    options: [
      "Is correct and complete",
      "Was actually completed by the provider",
      "Was signed in the presence of a notary public",
      "Was completed by the medical staff office"
    ],
    answer: 0,
    category: "Credentialing",
    explanation: "NCQA requires that practitioners attest the application is complete and correct to ensure accurate credentialing."
  },
  {
    question: "According to The Joint Commission standards, medical staff bylaws should define:",
    options: [
      "The structure of the medical staff",
      "Mechanism for appointment/reappointment of physician employed non-independent practitioners",
      "A requirement that departments meet on at least a quarterly basis",
      "Membership dues"
    ],
    answer: 0,
    category: "Medical Staff Governance",
    explanation: "Medical staff bylaws must define the structure of the medical staff to clarify roles, responsibilities, and governance."
  },
  {
    question: "According to The Joint Commission hospital standards, professional criteria for the granting of clinical privileges must include at least:",
    options: [
      "Relevant training or experience, ability to perform privileges requested, current licensure, and competence",
      "Verification of all current and prior malpractice suits filed and settlements made",
      "Letters of reference from the Chief Executive Officer of all current and prior hospital affiliations",
      "Proof of CME credits"
    ],
    answer: 0,
    category: "Privileging",
    explanation: "Granting clinical privileges requires consideration of training/experience, ability, licensure, and current competence."
  },
  {
    question: "The Joint Commission hospital standards require medical staff bylaws to include:",
    options: [
      "A mechanism for selection and removal of officers",
      "A requirement that all quality of care information be reviewed by the medical staff president",
      "A mechanism for removal of the hospital’s chief executive officer",
      "An ethics committee"
    ],
    answer: 0,
    category: "Medical Staff Governance",
    explanation: "Selection and removal of officers must be included to ensure proper governance and accountability."
  },
  {
    question: "According to NCQA standards, which of the following is an approved source for verification of board certification?",
    options: [
      "National Practitioner Data Bank",
      "State licensing agency if state agency conducts primary verification of board status",
      "Viewing of the original board certificate",
      "NCQA CVO"
    ],
    answer: 1,
    category: "Credentialing",
    explanation: "A state licensing agency that performs primary source verification can be an approved source for board certification status under NCQA."
  }
];
export default quizData;
