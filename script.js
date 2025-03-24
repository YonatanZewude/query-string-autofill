// Hämta URL-parametrar
function getUrlParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split('&');

    for (const pair of pairs) {
        const [key, value] = pair.split('=');
        if (key && value) {
            params[key] = decodeURIComponent(value);
        }
    }

    return params;
}

// 1. Fyll i formulärfält med URL-parametrar
function prefillFormFields() {
    const params = getUrlParams();
    const fieldMap = {
        'name': 'name',
        'email': 'email',
        'phone': 'phone'
    };

    // Loop through all URL parameters
    for (const [param, fieldId] of Object.entries(fieldMap)) {
        if (params[param]) {
            const field = document.getElementById(fieldId);
            if (field) field.value = params[param];
        }
    }
}

// 2. Hämta alla UTM-taggar från URL
function parseAllUtmTags() {
    const params = getUrlParams();
    const utmTags = [];
    
    for (const [key, value] of Object.entries(params)) {
        if (key.startsWith('utm_') || 
            ['name', 'email', 'phone'].includes(key)) {
            utmTags.push({ key, value });
        }
    }
    
    console.log("All UTM Tags:", utmTags);
    return utmTags;
}

// Run both functions when page loads
window.onload = function() {
    prefillFormFields();
    parseAllUtmTags();
};