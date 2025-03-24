//hämtar alla parametrar från URL
function getAllUrlParams() {
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

//Extrahera och visa alla parametrar
function displayAllParameters() {
    const params = getAllUrlParams();
    const parameterDisplay = document.getElementById('parameterDisplay');
    
    const allParameters = Object.entries(params).map(([key, value]) => {
        return { parameter: key, value: value };
    });

    console.log("All URL Parameters:", JSON.stringify(allParameters, null, 2));
    
    if (parameterDisplay) {
        parameterDisplay.innerHTML = `
            <h3>URL Parameters Found:</h3>
            <pre>${JSON.stringify(allParameters, null, 2)}</pre>
        `;
    }

    return allParameters;
}

// Förfyll formulärfält från URL-parametrar
function prefillFormFields() {
    const params = getAllUrlParams();
    const fields = ['name', 'email', 'phone'];
    
    fields.forEach(field => {
        if (params[field]) {
            const element = document.getElementById(field);
            if (element) element.value = params[field];
        }
    });
}

window.onload = function() {
    prefillFormFields();
    displayAllParameters();
};