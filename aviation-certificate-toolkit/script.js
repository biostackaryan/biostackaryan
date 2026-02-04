// Aviation Certificate Toolkit - JavaScript

// Coordinate presets for different layouts
const coordinatePresets = {
    'standard': {
        titleX: 50, titleY: 15,
        nameX: 50, nameY: 40,
        detailsX: 50, detailsY: 55,
        footerX: 50, footerY: 85
    },
    'centered': {
        titleX: 50, titleY: 12,
        nameX: 50, nameY: 38,
        detailsX: 50, detailsY: 52,
        footerX: 50, footerY: 80
    },
    'left-aligned': {
        titleX: 30, titleY: 15,
        nameX: 30, nameY: 40,
        detailsX: 30, detailsY: 55,
        footerX: 50, footerY: 85
    },
    'compact': {
        titleX: 50, titleY: 10,
        nameX: 50, nameY: 30,
        detailsX: 50, detailsY: 45,
        footerX: 50, footerY: 70
    },
    'expanded': {
        titleX: 50, titleY: 18,
        nameX: 50, nameY: 45,
        detailsX: 50, detailsY: 62,
        footerX: 50, footerY: 90
    }
};

// Certificate type configurations
const certificateTypes = {
    'flight-completion': {
        title: 'CERTIFICATE OF COMPLETION',
        subtitle: 'Flight Training Program'
    },
    'pilot-training': {
        title: 'PILOT TRAINING CERTIFICATE',
        subtitle: 'Professional Pilot Training'
    },
    'safety-training': {
        title: 'SAFETY TRAINING CERTIFICATE',
        subtitle: 'Aviation Safety Program'
    },
    'maintenance-certification': {
        title: 'MAINTENANCE CERTIFICATION',
        subtitle: 'Aircraft Maintenance Program'
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set default date to today (using local date to avoid timezone issues)
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const today = `${year}-${month}-${day}`;
    document.getElementById('issueDate').value = today;
    
    // Generate default certificate number
    generateCertificateNumber();
    
    // Add event listeners for real-time preview
    addEventListeners();
    
    // Apply default preset
    applyCoordinatePreset();
});

// Add event listeners for form inputs
function addEventListeners() {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', updatePreview);
        input.addEventListener('change', updatePreview);
    });
}

// Generate a random certificate number
function generateCertificateNumber() {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
    document.getElementById('certificateNumber').value = `AV-${year}-${random}`;
}

// Apply coordinate preset
function applyCoordinatePreset() {
    const presetSelect = document.getElementById('coordinatePreset');
    const customCoordsDiv = document.getElementById('customCoordinates');
    const preset = presetSelect.value;
    
    if (preset === 'custom') {
        customCoordsDiv.classList.remove('hidden');
    } else {
        customCoordsDiv.classList.add('hidden');
        
        // Apply preset values to custom inputs (for reference)
        const coords = coordinatePresets[preset];
        document.getElementById('titleX').value = coords.titleX;
        document.getElementById('titleY').value = coords.titleY;
        document.getElementById('nameX').value = coords.nameX;
        document.getElementById('nameY').value = coords.nameY;
        document.getElementById('detailsX').value = coords.detailsX;
        document.getElementById('detailsY').value = coords.detailsY;
        document.getElementById('footerX').value = coords.footerX;
        document.getElementById('footerY').value = coords.footerY;
    }
    
    updatePreview();
}

// Update certificate preview
function updatePreview() {
    // Get form values
    const certificateType = document.getElementById('certificateType').value;
    const recipientName = document.getElementById('recipientName').value || '[Recipient Name]';
    const issueDate = document.getElementById('issueDate').value;
    const certificateNumber = document.getElementById('certificateNumber').value || '[Certificate Number]';
    const courseDetails = document.getElementById('courseDetails').value || '[Course Details]';
    const instructorName = document.getElementById('instructorName').value || '[Instructor Name]';
    
    // Get coordinates
    const titleY = document.getElementById('titleY').value;
    const nameY = document.getElementById('nameY').value;
    const detailsY = document.getElementById('detailsY').value;
    const footerY = document.getElementById('footerY').value;
    
    // Update certificate type
    const typeConfig = certificateTypes[certificateType];
    const certTitle = document.querySelector('#certTitle h2');
    const certSubtitle = document.querySelector('#certTitle .cert-subtitle');
    if (certTitle && typeConfig) {
        certTitle.textContent = typeConfig.title;
        certSubtitle.textContent = typeConfig.subtitle;
    }
    
    // Update recipient name
    const nameElement = document.querySelector('#certName h1');
    if (nameElement) {
        nameElement.textContent = recipientName;
    }
    
    // Update course details
    const courseElement = document.querySelector('#certDetails .course-name');
    if (courseElement) {
        courseElement.textContent = courseDetails;
    }
    
    // Update instructor name
    const instructorElement = document.querySelector('.instructor-name');
    if (instructorElement) {
        instructorElement.textContent = instructorName;
    }
    
    // Update date
    const dateElement = document.querySelector('.date-value');
    if (dateElement) {
        dateElement.textContent = formatDate(issueDate);
    }
    
    // Update certificate number
    const certNumElement = document.querySelector('.cert-num-value');
    if (certNumElement) {
        certNumElement.textContent = certificateNumber;
    }
    
    // Apply coordinate positions
    applyCoordinates(titleY, nameY, detailsY, footerY);
}

// Format date for display
function formatDate(dateStr) {
    if (!dateStr) return '[Issue Date]';
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Apply coordinate positions to certificate elements
function applyCoordinates(titleY, nameY, detailsY, footerY) {
    const title = document.getElementById('certTitle');
    const presented = document.getElementById('certPresented');
    const name = document.getElementById('certName');
    const details = document.getElementById('certDetails');
    const footer = document.getElementById('certFooter');
    
    if (title) title.style.top = `${titleY}%`;
    if (presented) presented.style.top = `${parseInt(nameY) - 7}%`;
    if (name) name.style.top = `${nameY}%`;
    if (details) details.style.top = `${detailsY}%`;
    if (footer) footer.style.top = `${footerY}%`;
}

// Show specific page
function showPage(pageNum) {
    // Hide all pages
    document.querySelectorAll('.certificate-page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Deactivate all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected page
    const selectedPage = document.getElementById(`page${pageNum}`);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Activate selected tab
    const selectedTab = document.querySelector(`.tab[data-page="${pageNum}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}

// Generate PDF (using browser print)
function generatePDF() {
    // Show all pages before printing
    document.querySelectorAll('.certificate-page').forEach(page => {
        page.style.display = 'block';
    });
    
    // Update preview with latest values
    updatePreview();
    
    // Trigger print dialog (can save as PDF)
    window.print();
    
    // Reset to show only active page after printing
    setTimeout(() => {
        document.querySelectorAll('.certificate-page').forEach(page => {
            page.style.display = '';
        });
    }, 1000);
}

// Print certificate
function printCertificate() {
    generatePDF(); // Same functionality
}

// Export certificate data as JSON (for backup/sharing)
function exportData() {
    const data = {
        certificateType: document.getElementById('certificateType').value,
        recipientName: document.getElementById('recipientName').value,
        issueDate: document.getElementById('issueDate').value,
        certificateNumber: document.getElementById('certificateNumber').value,
        courseDetails: document.getElementById('courseDetails').value,
        instructorName: document.getElementById('instructorName').value,
        coordinates: {
            titleY: document.getElementById('titleY').value,
            nameY: document.getElementById('nameY').value,
            detailsY: document.getElementById('detailsY').value,
            footerY: document.getElementById('footerY').value
        }
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `certificate-${data.certificateNumber || 'export'}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
}
