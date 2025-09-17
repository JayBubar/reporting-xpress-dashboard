// =====================================
// REPORTING XPRESS DASHBOARD APP
// =====================================

// Global variables
let filteredProjects = [...projectsData];
let currentView = 'projects';

// =====================================
// UTILITY FUNCTIONS
// =====================================

// Format currency with proper formatting
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

// Format currency for display (shorter format for stats)
function formatCurrencyShort(amount) {
    if (amount >= 1000000) {
        return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
        return `$${(amount / 1000).toFixed(0)}k`;
    }
    return formatCurrency(amount);
}

// Show notification to user
function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Generate project card HTML
function generateProjectCard(project) {
    const statusClass = project.status === 'normal' ? '' : project.status;
    const alertIndicator = getAlertIndicator(project);
    const reportLinks = generateReportLinks(project);
    
    return `
        <div class="project-card ${statusClass}" data-project-id="${project.id}">
            ${alertIndicator}
            <div class="project-header">
                <div class="fund-number">${project.fundNumber}</div>
                <h3 class="project-title">${project.title}</h3>
                <div class="project-balance">${formatCurrency(project.balance)}</div>
                <div class="balance-date">Project Balance as of ${project.balanceDate}</div>
            </div>
            
            <div class="project-details">
                <div class="detail-grid">
                    <div class="detail-item">
                        <div class="detail-label">Type</div>
                        <div class="detail-value">
                            <span class="fund-type-badge ${project.type}">${project.type}</span>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Start Date</div>
                        <div class="detail-value">${project.startDate}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">College / Unit</div>
                        <div class="detail-value">${project.college}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Department</div>
                        <div class="detail-value">${project.department}</div>
                    </div>
                </div>
            </div>
            
            <div class="reports-section">
                <div class="reports-title">Available Reports</div>
                <div class="reports-grid">
                    ${reportLinks}
                </div>
            </div>
        </div>
    `;
}

// Generate alert indicator HTML
function getAlertIndicator(project) {
    if (project.status === 'alert') {
        return `<div class="alert-indicator">${project.alertReason.split(' - ')[0]}</div>`;
    } else if (project.status === 'warning') {
        return `<div class="warning-indicator">${project.alertReason.split(' - ')[0]}</div>`;
    }
    return '';
}

// Generate report links HTML
function generateReportLinks(project) {
    const reportTypes = appConfig.reports.types;
    let linksHTML = '';
    
    Object.keys(reportTypes).forEach(reportType => {
        const report = reportTypes[reportType];
        linksHTML += `
            <a href="#" class="report-link" 
               data-report="${reportType}" 
               data-project="${project.id}"
               title="${report.description}">
                <div class="report-icon">${report.icon}</div>
                <div class="report-name">${report.name}</div>
            </a>
        `;
    });
    
    return linksHTML;
}

// =====================================
// DATA FILTERING AND SEARCH
// =====================================

// Filter projects based on current filter settings
function filterProjects() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const fundType = document.getElementById('fundTypeFilter').value;
    const college = document.getElementById('collegeFilter').value;
    const status = document.getElementById('statusFilter').value;

    filteredProjects = projectsData.filter(project => {
        // Search filter
        const matchesSearch = !searchTerm || 
            project.title.toLowerCase().includes(searchTerm) ||
            project.fundNumber.toLowerCase().includes(searchTerm) ||
            project.college.toLowerCase().includes(searchTerm) ||
            project.department.toLowerCase().includes(searchTerm) ||
            project.type.toLowerCase().includes(searchTerm);

        // Fund type filter
        const matchesFundType = !fundType || project.type === fundType;
        
        // College filter
        const matchesCollege = !college || project.organization.toLowerCase() === college;
        
        // Status filter
        const matchesStatus = !status || project.status === status;

        return matchesSearch && matchesFundType && matchesCollege && matchesStatus;
    });

    renderProjects();
    updateSearchResults();
}

// Update search results display
function updateSearchResults() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    const hasFilters = document.getElementById('fundTypeFilter').value || 
                      document.getElementById('collegeFilter').value || 
                      document.getElementById('statusFilter').value;
    
    if (searchTerm || hasFilters) {
        showNotification(`Found ${filteredProjects.length} projects matching your criteria`, 'info');
    }
}

// =====================================
// RENDERING FUNCTIONS
// =====================================

// Render all projects to the grid
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    
    if (filteredProjects.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--neutral-500);">
                <h3>No projects found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
    } else {
        grid.innerHTML = filteredProjects.map(generateProjectCard).join('');
    }
    
    updateStats();
}

// Update statistics bar
function updateStats() {
    // Stats bar removed - no longer calculating or displaying statistics
    // This function is kept for compatibility but does nothing
    return;
}

// =====================================
// REPORT HANDLING
// =====================================

// Handle report link clicks
function handleReportClick(reportType, projectId) {
    const project = getProjectById(projectId);
    const reportConfig = appConfig.reports.types[reportType];
    
    if (!project || !reportConfig) {
        showNotification('Report not found', 'error');
        return;
    }

    // Open PDF directly instead of showing modal
    openPDFReport(project, reportType);
}

// Add this new function for mixed Excel/PDF report handling:
function openPDFReport(project, reportType) {
    // Demo reports: Excel for financial reports, PDF for fund information
    const demoReports = {
        income: 'assets/docs/sample-reports/sample-income-statement.xlsx',
        activity: 'assets/docs/sample-reports/sample-activity-report.xlsx', 
        information: 'assets/docs/sample-reports/sample-fund-information.pdf'
    };
    
    const fileUrl = demoReports[reportType] || demoReports.income;
    const isExcel = fileUrl.endsWith('.xlsx');
    const isPDF = fileUrl.endsWith('.pdf');
    
    if (isExcel) {
        // Handle Excel files - download them
        showNotification(`Downloading ${appConfig.reports.types[reportType].name} for ${project.title}...`, 'info');
        
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = `${project.fundNumber}-${reportType}-report.xlsx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success message after slight delay
        setTimeout(() => {
            showNotification(`${appConfig.reports.types[reportType].name} downloaded successfully!`, 'success');
        }, 1000);
        
    } else if (isPDF) {
        // Handle PDF files - open in new tab
        showNotification(`Opening ${appConfig.reports.types[reportType].name} for ${project.title}...`, 'info');
        window.open(fileUrl, '_blank');
    }
}

// Open local report file
function openLocalReport(project, reportType) {
    const reportUrl = project.reports[reportType];
    
    // For demo purposes, show modal instead of trying to open local files
    showReportModal(project, reportType, 'local');
    
    // In real implementation with actual files:
    // window.open(reportUrl, '_blank');
}

// Show report modal for demo
function showReportModal(project, reportType, source) {
    const modal = document.getElementById('reportModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const reportConfig = appConfig.reports.types[reportType];

    modalTitle.textContent = `${reportConfig.name} - ${project.title}`;
    
    modalContent.innerHTML = generateReportContent(project, reportType, source);
    modal.style.display = 'block';
}

// Generate demo report content
function generateReportContent(project, reportType, source) {
    const reportConfig = appConfig.reports.types[reportType];
    const reportUrl = project.reports[reportType];
    
    let content = `
        <div style="margin-bottom: 1.5rem;">
            <h3>${reportConfig.icon} ${reportConfig.name}</h3>
            <p><strong>Fund:</strong> ${project.fundNumber}</p>
            <p><strong>Project:</strong> ${project.title}</p>
            <p><strong>Generated:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        
        <div style="padding: 1.5rem; background: var(--neutral-50); border-radius: 12px; margin-bottom: 1.5rem;">
            <h4>Demo Report Preview</h4>
            <p style="color: var(--neutral-600); margin: 1rem 0;">
                ${reportConfig.description}
            </p>
    `;
    
    // Add specific content based on report type
    switch(reportType) {
        case 'income':
            content += `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
                    <div><strong>Current Balance:</strong><br>${formatCurrency(project.balance)}</div>
                    <div><strong>Revenue (YTD):</strong><br>${formatCurrency(Math.random() * 200000)}</div>
                    <div><strong>Expenses (YTD):</strong><br>${formatCurrency(Math.random() * 150000)}</div>
                    <div><strong>Net Change:</strong><br>${formatCurrency(Math.random() * 50000)}</div>
                </div>
            `;
            break;
        case 'activity':
            content += `
                <h5>Recent Transactions (Last 30 days)</h5>
                <ul style="margin-top: 0.5rem; padding-left: 1rem;">
                    <li>Investment Income: +${formatCurrency(12500)}</li>
                    <li>Administrative Fees: -${formatCurrency(234.56)}</li>
                    <li>Program Expenses: -${formatCurrency(5678.90)}</li>
                    <li>Donation Receipt: +${formatCurrency(25000)}</li>
                </ul>
            `;
            break;
        case 'information':
            content += `
                <h5>Fund Information</h5>
                <p><strong>Fund Purpose:</strong> ${getFundPurpose(project)}</p>
                <p><strong>Authorized Signers:</strong> L1: John Doe, Jane Smith | L2: Mike Johnson</p>
                <p><strong>Development Officer:</strong> Sarah Wilson</p>
                <p><strong>Financial Administrator:</strong> ${appConfig.user.name}</p>
            `;
            break;
    }
    
    content += `
        </div>
        
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <button onclick="downloadReport('${reportType}', '${project.id}')" 
                    style="background: var(--primary-teal); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: 600;">
                📄 Download PDF
            </button>
            <button onclick="emailReport('${reportType}', '${project.id}')" 
                    style="background: var(--secondary-blue); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: 600;">
                ✉️ Email Report
            </button>
        </div>
        
        <div style="margin-top: 1.5rem; padding: 1rem; background: var(--neutral-100); border-radius: 8px; font-size: 0.875rem; color: var(--neutral-600);">
            <strong>Demo Mode:</strong> In production, this would open your actual report document.
            <br><strong>Report URL:</strong> <code>${reportUrl}</code>
        </div>
    `;
    
    return content;
}

// Get fund purpose description
function getFundPurpose(project) {
    const purposes = {
        endowment: `This endowment provides ongoing support for ${project.department} activities and programs.`,
        unrestricted: `This unrestricted fund supports current operations and strategic initiatives.`,
        restricted: `This fund is restricted for specific purposes as outlined in the fund agreement.`
    };
    
    return purposes[project.type] || 'Fund purpose information available in detailed documentation.';
}

// Simulate report download
function downloadReport(reportType, projectId) {
    const project = getProjectById(projectId);
    const reportConfig = appConfig.reports.types[reportType];
    
    showNotification(`Downloading ${reportConfig.name} for ${project.title}...`, 'info');
    
    // Close modal
    document.getElementById('reportModal').style.display = 'none';
    
    // Simulate download delay
    setTimeout(() => {
        showNotification(`${reportConfig.name} downloaded successfully!`, 'success');
    }, 1500);
}

// Simulate email report
function emailReport(reportType, projectId) {
    const project = getProjectById(projectId);
    const reportConfig = appConfig.reports.types[reportType];
    
    showNotification(`Emailing ${reportConfig.name} for ${project.title}...`, 'info');
    
    // Close modal  
    document.getElementById('reportModal').style.display = 'none';
    
    // Simulate email delay
    setTimeout(() => {
        showNotification(`${reportConfig.name} emailed successfully!`, 'success');
    }, 2000);
}

// =====================================
// EVENT LISTENERS AND INITIALIZATION
// =====================================

// Initialize the application
function initializeApp() {
    // Set user information
    document.getElementById('userName').textContent = appConfig.user.name;
    document.getElementById('userAvatar').textContent = appConfig.user.initials;
    
    // Initial render
    renderProjects();
    
    // Set up event listeners
    setupEventListeners();
    
    // Show welcome message
    showNotification(`Welcome to ${appConfig.organization.name}! Dashboard loaded with ${projectsData.length} projects.`, 'success');
}

// Set up all event listeners
function setupEventListeners() {
    // Search input with debounce
    let searchTimeout;
    document.getElementById('searchInput').addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(filterProjects, 300);
    });

    // Filter dropdowns
    document.getElementById('fundTypeFilter').addEventListener('change', filterProjects);
    document.getElementById('collegeFilter').addEventListener('change', filterProjects);
    document.getElementById('statusFilter').addEventListener('change', filterProjects);

    // View toggle buttons
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentView = this.dataset.view;
            
            if (currentView === 'summary') {
                showNotification('Summary Reports view - Coming soon in Phase 2!', 'info');
            } else {
                renderProjects();
            }
        });
    });

    // Report links - use event delegation for dynamic content
    document.addEventListener('click', function(e) {
        if (e.target.closest('.report-link')) {
            e.preventDefault();
            const link = e.target.closest('.report-link');
            const reportType = link.dataset.report;
            const projectId = link.dataset.project;
            handleReportClick(reportType, projectId);
        }
    });

    // Modal close button
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('reportModal').style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('reportModal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Escape key closes modal
        if (e.key === 'Escape') {
            document.getElementById('reportModal').style.display = 'none';
        }
        
        // Ctrl/Cmd + F focuses search
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            document.getElementById('searchInput').focus();
        }
    });
}

// =====================================
// STARTUP
// =====================================

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);

// Expose functions to global scope for onclick handlers
window.downloadReport = downloadReport;
window.emailReport = emailReport;
