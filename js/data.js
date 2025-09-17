// Reporting Xpress Dashboard - Sample Data Configuration

// Application Configuration
const AppConfig = {
    organizationName: "Reporting Xpress Foundation",
    version: "1.0.0",
    lastUpdated: "2025-09-17"
};

// Sample Projects Data
const projectsData = [
    {
        id: 1,
        title: "Student Success Initiative",
        college: "College of Arts & Sciences",
        department: "Academic Affairs",
        fundType: "endowment",
        totalValue: 2500000,
        currentBalance: 2487500,
        ytdExpenses: 125000,
        budgetRemaining: 875000,
        principalInvestigator: "Dr. Sarah Johnson",
        startDate: "2024-01-15",
        endDate: "2026-12-31",
        status: "active",
        lastReportDate: "2025-08-15",
        alertLevel: "none",
        reports: [
            { name: "Financial Summary", type: "financial" },
            { name: "Activity Report", type: "activity" },
            { name: "Compliance Report", type: "compliance" }
        ],
        description: "Comprehensive student support program focusing on retention, academic success, and career preparation for first-generation college students."
    },
    {
        id: 2,
        title: "Research Excellence Fund",
        college: "College of Engineering",
        department: "Research & Innovation",
        fundType: "research",
        totalValue: 5000000,
        currentBalance: 4200000,
        ytdExpenses: 950000,
        budgetRemaining: 1800000,
        principalInvestigator: "Dr. Michael Chen",
        startDate: "2023-07-01",
        endDate: "2027-06-30",
        status: "active",
        lastReportDate: "2025-06-30",
        alertLevel: "orange",
        reports: [
            { name: "Research Progress Report", type: "research" },
            { name: "Financial Dashboard", type: "financial" },
            { name: "Equipment Inventory", type: "inventory" }
        ],
        description: "Multi-year research initiative supporting breakthrough technologies in renewable energy and sustainable engineering practices."
    },
    {
        id: 3,
        title: "Community Outreach Program",
        college: "College of Liberal Arts",
        department: "Community Relations",
        fundType: "operating",
        totalValue: 750000,
        currentBalance: 325000,
        ytdExpenses: 425000,
        budgetRemaining: 125000,
        principalInvestigator: "Prof. Jennifer Williams",
        startDate: "2024-03-01",
        endDate: "2025-02-28",
        status: "active",
        lastReportDate: "2025-09-01",
        alertLevel: "red",
        reports: [
            { name: "Impact Assessment", type: "impact" },
            { name: "Budget Analysis", type: "financial" },
            { name: "Partnership Report", type: "partnership" }
        ],
        description: "Neighborhood engagement initiative providing educational resources, health screenings, and workforce development programs."
    },
    {
        id: 4,
        title: "Merit Scholarship Endowment",
        college: "Financial Aid Office",
        department: "Student Financial Services",
        fundType: "scholarship",
        totalValue: 1200000,
        currentBalance: 1195000,
        ytdExpenses: 48000,
        budgetRemaining: 52000,
        principalInvestigator: "Maria Rodriguez",
        startDate: "2020-01-01",
        endDate: "Perpetual",
        status: "active",
        lastReportDate: "2025-07-31",
        alertLevel: "none",
        reports: [
            { name: "Scholarship Awards Summary", type: "awards" },
            { name: "Recipient Tracking", type: "tracking" },
            { name: "Endowment Performance", type: "financial" }
        ],
        description: "Permanent endowment providing annual merit-based scholarships to academically exceptional students demonstrating financial need."
    },
    {
        id: 5,
        title: "Campus Sustainability Project",
        college: "Facilities Management",
        department: "Environmental Services",
        fundType: "operating",
        totalValue: 850000,
        currentBalance: 680000,
        ytdExpenses: 170000,
        budgetRemaining: 330000,
        principalInvestigator: "Dr. Robert Kim",
        startDate: "2024-05-15",
        endDate: "2026-05-14",
        status: "active",
        lastReportDate: "2025-08-30",
        alertLevel: "none",
        reports: [
            { name: "Environmental Impact Report", type: "environmental" },
            { name: "Cost-Benefit Analysis", type: "financial" },
            { name: "Progress Dashboard", type: "progress" }
        ],
        description: "Comprehensive green initiative implementing renewable energy systems, waste reduction programs, and sustainable transportation options."
    },
    {
        id: 6,
        title: "Alumni Engagement Initiative",
        college: "Alumni Relations",
        department: "Development",
        fundType: "endowment",
        totalValue: 450000,
        currentBalance: 445000,
        ytdExpenses: 15000,
        budgetRemaining: 35000,
        principalInvestigator: "Lisa Thompson",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        status: "pending",
        lastReportDate: "2025-09-15",
        alertLevel: "none",
        reports: [
            { name: "Engagement Metrics", type: "metrics" },
            { name: "Event Summary", type: "events" },
            { name: "Fundraising Report", type: "fundraising" }
        ],
        description: "Strategic program to strengthen alumni connections through targeted communications, regional events, and mentorship opportunities."
    }
];

// Fund Types Configuration
const fundTypes = {
    all: "All Fund Types",
    endowment: "Endowment",
    operating: "Operating",
    scholarship: "Scholarship", 
    research: "Research"
};

// Status Types Configuration
const statusTypes = {
    all: "All Statuses",
    active: "Active",
    pending: "Pending",
    completed: "Completed"
};

// Alert Configuration
const alertThresholds = {
    red: {
        budgetRemaining: 0.15, // 15% or less remaining
        description: "Critical: Low budget remaining"
    },
    orange: {
        budgetRemaining: 0.30, // 30% or less remaining
        lastReportDays: 90, // No report in 90+ days
        description: "Warning: Budget or reporting concerns"
    }
};

// Colleges/Departments for filtering
const colleges = [
    "All Colleges",
    "College of Arts & Sciences", 
    "College of Engineering",
    "College of Liberal Arts",
    "Financial Aid Office",
    "Facilities Management",
    "Alumni Relations"
];

// Report types and templates
const reportTemplates = {
    financial: {
        icon: "💰",
        description: "Financial performance and budget analysis"
    },
    activity: {
        icon: "📊", 
        description: "Project activities and milestone progress"
    },
    compliance: {
        icon: "✅",
        description: "Regulatory compliance and audit reports"
    },
    research: {
        icon: "🔬",
        description: "Research progress and outcomes"
    },
    impact: {
        icon: "🌟",
        description: "Community impact and success metrics"
    },
    awards: {
        icon: "🏆",
        description: "Scholarship awards and recipient information"
    },
    environmental: {
        icon: "🌱",
        description: "Environmental impact and sustainability metrics"
    }
};

// Export for module use (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        AppConfig,
        projectsData,
        fundTypes,
        statusTypes,
        alertThresholds,
        colleges,
        reportTemplates
    };
}