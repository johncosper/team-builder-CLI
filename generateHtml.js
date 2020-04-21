function generateHtml(response) {

    if (response.office) {
        return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${response.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${response.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${response.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${response.email}">${response.email}</a></li>
                <li class="list-group-item">Office number: ${response.office}</li>
            </ul>
        </div>
    </div>`
    } else if (response.role === 1) {
        return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${response.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${response.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${response.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${response.email}">${response.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${response.github}" target="_blank" rel="noopener noreferrer">${response.github}</a></li>
            </ul>
        </div>
    </div>`
    } else if (response.role === 2) {
        return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${response.name}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${response.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${response.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${response.email}">${response.email}</a></li>
                <li class="list-group-item">School: ${response.school}</li>
            </ul>
        </div>
    </div>`
    }

}

module.exports = generateHtml;