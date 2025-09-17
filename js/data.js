// =====================================
// REPORTING XPRESS DASHBOARD DATA
// =====================================

// Application Configuration
const appConfig = {
    organization: {
        name: "Reporting Xpress Foundation"
    },
    user: {
        name: "Development Team",
        initials: "DT"
    },
    reports: {
        useSharedDocuments: false, // Set to true for Google Drive/SharePoint links
        types: {
            income: {
                name: "Income Statement",
                icon: "💰",
                description: "Detailed income and expense breakdown for the project period"
            },
            activity: {
                name: "Activity Report", 
                icon: "📊",
                description: "Transaction history and account activity summary"
            },
            information: {
                name: "Fund Information",
                icon: "📋",
                description: "Complete fund setup, signers, and administrative details"
            }
        }
    }
};

// Sample Projects Data - Updated for Reporting Xpress Foundation
const projectsData = [
    {
        id: 1,
        fundNumber: "END-2024-001",
        title: "Student Success Initiative Endowment",
        balance: 2487500.00,
        balanceDate: "August 31, 2025",
        type: "endowment",
        startDate: "January 15, 2024",
        college: "college of arts & sciences",
        department: "Academic Affairs",
        organization: "business",
        status: "normal",
        alertReason: "",
        reports: {
            income: "assets/docs/sample-reports/END-2024-001-income.pdf",
            activity: "assets/docs/sample-reports/END-2024-001-activity.pdf", 
            information: "assets/docs/sample-reports/END-2024-001-information.pdf"
        }
    },
    {
        id: 2,
        fundNumber: "RSH-2023-007",
        title: "Engineering Research Excellence Fund",
        balance: 4200000.00,
        balanceDate: "August 31, 2025",
        type: "unrestricted",
        startDate: "July 1, 2023",
        college: "college of engineering",
        department: "Research & Innovation",
        organization: "engineering",
        status: "warning",
        alertReason: "Budget Review - Spending rate above target threshold",
        reports: {
            income: "assets/docs/sample-reports/RSH-2023-007-income.pdf",
            activity: "assets/docs/sample-reports/RSH-2023-007-activity.pdf",
            information: "assets/docs/sample-reports/RSH-2023-007-information.pdf"
        }
    },
    {
        id: 3,
        fundNumber: "OPR-2024-012",
        title: "Community Outreach Program",
        balance: 325000.00,
        balanceDate: "August 31, 2025", 
        type: "restricted",
        startDate: "March 1, 2024",
        college: "college of liberal arts",
        department: "Community Relations",
        organization: "libraries",
        status: "alert",
        alertReason: "Low Balance - Less than 6 months operating funds remaining",
        reports: {
            income: "assets/docs/sample-reports/OPR-2024-012-income.pdf",
            activity: "assets/docs/sample-reports/OPR-2024-012-activity.pdf",
            information: "assets/docs/sample-reports/OPR-2024-012-information.pdf"
        }
    },
    {
        id: 4,
        fundNumber: "SCH-2020-003",
        title: "Merit Scholarship Endowment",
        balance: 1195000.00,
        balanceDate: "August 31, 2025",
        type: "endowment",
        startDate: "January 1, 2020",
        college: "financial aid office",
        department: "Student Financial Services",
        organization: "research",
        status: "normal",
        alertReason: "",
        reports: {
            income: "assets/docs/sample-reports/SCH-2020-003-income.pdf",
            activity: "assets/docs/sample-reports/SCH-2020-003-activity.pdf",
            information: "assets/docs/sample-reports/SCH-2020-003-information.pdf"
        }
    },
    {
        id: 5,
        fundNumber: "SUS-2024-008",
        title: "Campus Sustainability Project",
        balance: 680000.00,
        balanceDate: "August 31, 2025",
        type: "unrestricted",
        startDate: "May 15, 2024",
        college: "facilities management", 
        department: "Environmental Services",
        organization: "business",
        status: "normal",
        alertReason: "",
        reports: {
            income: "assets/docs/sample-reports/SUS-2024-008-income.pdf",
            activity: "assets/docs/sample-reports/SUS-2024-008-activity.pdf",
            information: "assets/docs/sample-reports/SUS-2024-008-information.pdf"
        }
    },
    {
        id: 6,
        fundNumber: "ALM-2024-005",
        title: "Alumni Engagement Initiative",
        balance: 445000.00,
        balanceDate: "September 15, 2025",
        type: "endowment",
        startDate: "January 1, 2024", 
        college: "alumni relations",
        department: "Development Office",
        organization: "libraries",
        status: "normal",
        alertReason: "",
        reports: {
            income: "assets/docs/sample-reports/ALM-2024-005-income.pdf",
            activity: "assets/docs/sample-reports/ALM-2024-005-activity.pdf",
            information: "assets/docs/sample-reports/ALM-2024-005-information.pdf"
        }
    }
];

// Utility function to get project by ID
function getProjectById(projectId) {
    return projectsData.find(project => project.id == projectId);
}