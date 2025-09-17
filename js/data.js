/* Reporting Xpress Dashboard - Updated Brand Colors */
:root {
    /* Primary Brand Colors - Based on reportingxpress.com */
    --primary-blue: #1e3a8a;        /* Deep professional blue */
    --secondary-blue: #3b82f6;      /* Lighter blue for accents */
    --accent-teal: #0891b2;         /* Teal for highlights */
    --success-green: #059669;       /* Green for positive metrics */
    --warning-orange: #d97706;      /* Orange for alerts */
    --danger-red: #dc2626;          /* Red for critical alerts */
    
    /* Neutral Colors */
    --white: #ffffff;
    --light-gray: #f8fafc;
    --medium-gray: #64748b;
    --dark-gray: #334155;
    --text-dark: #1e293b;
    
    /* Card and Background Colors */
    --card-bg: #ffffff;
    --dashboard-bg: #f1f5f9;
    --border-color: #e2e8f0;
    
    /* Interactive States */
    --hover-blue: #1d4ed8;
    --active-blue: #1e40af;
}

/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--dashboard-bg);
    color: var(--text-dark);
    line-height: 1.6;
}

/* Header Styles */
.header {
    background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
    color: var(--white);
    padding: 1rem 2rem;
    box-shadow: 0 4px 12px rgba(30, 58, 138, 0.15);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
}

.logo-section {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.logo {
    height: 40px;
    width: auto;
}

.brand-text h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
}

.brand-text p {
    font-size: 0.9rem;
    opacity: 0.9;
    font-weight: 300;
}

/* Stats Dashboard */
.stats-dashboard {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 2rem auto;
    max-width: 1400px;
    padding: 0 2rem;
}

.stat-card {
    background: var(--card-bg);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(30, 58, 138, 0.1);
}

.stat-card.total-projects {
    border-left: 4px solid var(--secondary-blue);
}

.stat-card.active-projects {
    border-left: 4px solid var(--success-green);
}

.stat-card.total-value {
    border-left: 4px solid var(--accent-teal);
}

.stat-card.pending-alerts {
    border-left: 4px solid var(--warning-orange);
}

.stat-value {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.stat-card.total-projects .stat-value {
    color: var(--secondary-blue);
}

.stat-card.active-projects .stat-value {
    color: var(--success-green);
}

.stat-card.total-value .stat-value {
    color: var(--accent-teal);
}

.stat-card.pending-alerts .stat-value {
    color: var(--warning-orange);
}

.stat-label {
    color: var(--medium-gray);
    font-size: 0.95rem;
    font-weight: 500;
}

/* Controls Section */
.controls {
    max-width: 1400px;
    margin: 0 auto 2rem auto;
    padding: 0 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
}

.search-box, .filter-select {
    padding: 0.75rem 1rem;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: var(--white);
}

.search-box:focus, .filter-select:focus {
    outline: none;
    border-color: var(--secondary-blue);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.search-box {
    flex: 1;
    min-width: 300px;
}

.filter-select {
    min-width: 150px;
}

/* Projects Grid */
.projects-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

/* Project Cards with Alert System */
.project-card {
    background: var(--card-bg);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    border: 2px solid var(--border-color);
    transition: all 0.3s ease;
    position: relative;
}

.project-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

/* Alert System - Border Colors */
.project-card.alert-red {
    border-color: var(--danger-red);
    border-width: 3px;
}

.project-card.alert-orange {
    border-color: var(--warning-orange);
    border-width: 3px;
}

.project-card.alert-red::before {
    content: '🚨';
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.2rem;
}

.project-card.alert-orange::before {
    content: '⚠️';
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.2rem;
}

.project-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary-blue);
    margin-bottom: 1rem;
    line-height: 1.3;
}

.project-info {
    display: grid;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
}

.info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f1f5f9;
}

.info-row:last-child {
    border-bottom: none;
}

.info-label {
    font-weight: 600;
    color: var(--medium-gray);
}

.info-value {
    font-weight: 500;
    color: var(--text-dark);
}

.fund-type {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.fund-type.endowment {
    background: rgba(59, 130, 246, 0.1);
    color: var(--secondary-blue);
}

.fund-type.operating {
    background: rgba(5, 150, 105, 0.1);
    color: var(--success-green);
}

.fund-type.scholarship {
    background: rgba(8, 145, 178, 0.1);
    color: var(--accent-teal);
}

.fund-type.research {
    background: rgba(217, 119, 6, 0.1);
    color: var(--warning-orange);
}

.status {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status.active {
    color: var(--success-green);
}

.status.pending {
    color: var(--warning-orange);
}

.status.completed {
    color: var(--medium-gray);
}

/* Buttons */
.reports-section {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 2px solid #f1f5f9;
}

.reports-title {
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 1rem;
}

.reports-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.report-btn {
    background: linear-gradient(135deg, var(--secondary-blue) 0%, var(--primary-blue) 100%);
    color: var(--white);
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    text-align: center;
}

.report-btn:hover {
    background: linear-gradient(135deg, var(--hover-blue) 0%, var(--primary-blue) 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
}

.report-btn:active {
    transform: translateY(0);
}

/* Modal Styles */
.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
}

.modal-content {
    background-color: var(--card-bg);
    margin: 5% auto;
    padding: 2rem;
    border-radius: 16px;
    width: 90%;
    max-width: 600px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    position: relative;
    animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.close {
    color: var(--medium-gray);
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;
}

.close:hover {
    color: var(--text-dark);
}

.modal h2 {
    color: var(--primary-blue);
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.modal-buttons {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
}

.btn-download, .btn-view {
    background: linear-gradient(135deg, var(--secondary-blue) 0%, var(--primary-blue) 100%);
    color: var(--white);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-download:hover, .btn-view:hover {
    background: linear-gradient(135deg, var(--hover-blue) 0%, var(--primary-blue) 100%);
    transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .header {
        padding: 1rem;
    }
    
    .header-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    
    .stats-dashboard {
        grid-template-columns: 1fr;
        padding: 0 1rem;
    }
    
    .controls {
        flex-direction: column;
        padding: 0 1rem;
    }
    
    .search-box {
        min-width: auto;
        width: 100%;
    }
    
    .projects-container {
        padding: 0 1rem;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .reports-buttons {
        flex-direction: column;
    }
    
    .report-btn {
        text-align: center;
    }
}

@media (max-width: 480px) {
    .brand-text h1 {
        font-size: 1.25rem;
    }
    
    .stat-value {
        font-size: 2rem;
    }
    
    .modal-content {
        margin: 10% auto;
        padding: 1.5rem;
    }
}