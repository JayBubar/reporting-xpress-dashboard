// =====================================
// MOCK PROJECT DATA
// =====================================
// Customize this data to match your actual projects
// Add/remove projects and modify fields as needed

const projectsData = [
    {
        id: "200000-200001",
        fundNumber: "200000/200001",
        title: "The College of Business Endowed Fund",
        balance: 854116.08,
        balanceDate: "04/24/2023",
        type: "unrestricted",
        startDate: "01/01/2018",
        endDate: "",
        college: "Research Foundation",
        organization: "research",
        department: "General Research",
        status: "warning",
        alertReason: "High Activity - 15 transactions this week",
        reports: {
            income: "assets/docs/sample-reports/150025-150026-income-statement.pdf",
            activity: "assets/docs/sample-reports/150025-150026-activity-report.pdf",
            information: "assets/docs/sample-reports/150025-150026-information-sheet.pdf"
        }
    },
    {
        id: "300012-300013",
        fundNumber: "300012/300013",
        title: "Library Science Endowment",
        balance: 567890.25,
        balanceDate: "04/24/2023",
        type: "endowment",
        startDate: "09/15/2016",
        endDate: "",
        college: "University Libraries",
        organization: "libraries",
        department: "Library Sciences",
        status: "normal",
        alertReason: "",
        reports: {
            income: "assets/docs/sample-reports/300012-300013-income-statement.pdf",
            activity: "assets/docs/sample-reports/300012-300013-activity-report.pdf",
            information: "assets/docs/sample-reports/300012-300013-information-sheet.pdf"
        }
    },
    {
        id: "400005-400006",
        fundNumber: "400005/400006",
        title: "Engineering Scholarship Fund",
        balance: 892156.75,
        balanceDate: "04/24/2023",
        type: "restricted",
        startDate: "03/22/2019",
        endDate: "",
        college: "College of Engineering",
        organization: "engineering",
        department: "Student Services",
        status: "normal",
        alertReason: "",
        reports: {
            income: "assets/docs/sample-reports/400005-400006-income-statement.pdf",
            activity: "assets/docs/sample-reports/400005-400006-activity-report.pdf",
            information: "assets/docs/sample-reports/400005-400006-information-sheet.pdf"
        }
    },
    {
        id: "500010-500011",
        fundNumber: "500010/500011",
        title: "Athletic Excellence Endowment",
        balance: 1150000.00,
        balanceDate: "04/24/2023",
        type: "endowment",
        startDate: "08/15/2017",
        endDate: "",
        college: "Athletic Department",
        organization: "athletics",
        department: "Athletic Excellence",
        status: "normal",
        alertReason: "",
        reports: {
            income: "assets/docs/sample-reports/500010-500011-income-statement.pdf",
            activity: "assets/docs/sample-reports/500010-500011-activity-report.pdf",
            information: "assets/docs/sample-reports/500010-500011-information-sheet.pdf"
        }
    },
    {
        id: "600007-600008",
        fundNumber: "600007/600008",
        title: "Medical Research Innovation Fund",
        balance: 325678.90,
        balanceDate: "04/24/2023",
        type: "restricted",
        startDate: "11/01/2020",
        endDate: "",
        college: "School of Medicine",
        organization: "medicine",
        department: "Research & Development",
        status: "alert",
        alertReason: "Low Balance - Below minimum operational threshold",
        reports: {
            income: "assets/docs/sample-reports/600007-600008-income-statement.pdf",
            activity: "assets/docs/sample-reports/600007-600008-activity-report.pdf",
            information: "assets/docs/sample-reports/600007-600008-information-sheet.pdf"
        }
    }
];

// =====================================
// CONFIGURATION SETTINGS
// =====================================
// Customize these settings for your organization

const appConfig = {
    // User Information - Update for demo purposes
    user: {
        name: "Development Team",
        initials: "DT",
        role: "Financial Administrator"
    },
    
    // Alert Thresholds - Customize based on your business rules
    alertThresholds: {
        endowmentMinimum: 900000,      // $900k minimum for endowments
        generalFundMinimum: 100000,    // $100k minimum for general funds
        highActivityTransactions: 10,  // 10+ transactions triggers warning
        dormantDays: 90               // 90 days without activity
    },
    
    // Report Configuration
    reports: {
        // If you want to use shared documents (Google Drive, SharePoint, etc.)
        // instead of local files, update these URLs
        useSharedDocuments: false,
        sharedDocumentBaseUrl: "https://drive.google.com/file/d/", // Example
        
        // Report types and their display names
        types: {
            income: {
                name: "Income Statement",
                icon: "📊",
                description: "Financial overview with revenues, expenses, and balances"
            },
            activity: {
                name: "Activity Statement", 
                icon: "📈",
                description: "Detailed transaction history and account activity"
            },
            information: {
                name: "Information Sheet",
                icon: "📋",
                description: "Fund details, signers, and administrative information"
            }
        }
    },
    
    // Organization-specific settings
    organization: {
        name: "Reporting Xpress",
        tagline: "Financial reporting made simple",
        supportEmail: "support@reportingxpress.com"
    }
};

// =====================================
// HELPER FUNCTIONS FOR DATA MANIPULATION
// =====================================

// Function to add new projects (for future use)
function addProject(projectData) {
    const newProject = {
        id: projectData.id || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        ...projectData,
        reports: projectData.reports || {
            income: `assets/docs/sample-reports/${projectData.id || 'new'}-income-statement.pdf`,
            activity: `assets/docs/sample-reports/${projectData.id || 'new'}-activity-report.pdf`,
            information: `assets/docs/sample-reports/${projectData.id || 'new'}-information-sheet.pdf`
        }
    };
    
    projectsData.push(newProject);
    return newProject;
}

// Function to get project by ID
function getProjectById(id) {
    return projectsData.find(project => project.id === id);
}

// Function to get projects by status
function getProjectsByStatus(status) {
    return projectsData.filter(project => project.status === status);
}

// Function to get projects by type
function getProjectsByType(type) {
    return projectsData.filter(project => project.type === type);
}

// Function to calculate total balance
function getTotalBalance() {
    return projectsData.reduce((total, project) => total + project.balance, 0);
}

// Export for use in other files (if using modules)
// export { projectsData, appConfig, addProject, getProjectById, getProjectsByStatus, getProjectsByType, getTotalBalance }; "04/24/2023",
        type: "endowment",
        startDate: "07/01/2014",
        endDate: "",
        college: "College of Business",
        organization: "business",
        department: "Dean's Office",
        status: "alert",
        alertReason: "Balance Alert - Below $900k threshold",
        // Report URLs - Update these to point to your demo documents
        reports: {
            income: "assets/docs/sample-reports/200000-200001-income-statement.pdf",
            activity: "assets/docs/sample-reports/200000-200001-activity-report.pdf", 
            information: "assets/docs/sample-reports/200000-200001-information-sheet.pdf"
        }
    },
    {
        id: "150025-150026",
        fundNumber: "150025/150026", 
        title: "Research Foundation General Fund",
        balance: 1245832.50,
        balanceDate: