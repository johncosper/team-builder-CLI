function generateHtml(response1, response2) {

    if (response1.role === 'Manager') {
        return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${response2.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${response1.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${response2.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${response2.email}">${response2.email}</a></li>
                <li class="list-group-item">Office number: ${response2.office}</li>
            </ul>
        </div>
    </div>`
    } else if (response1.role === 'Engineer') {
        return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${response2.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${response1.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${response2.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${response2.email}">${response2.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${response2.github}" target="_blank" rel="noopener noreferrer">${response2.github}</a></li>
            </ul>
        </div>
    </div>`
    } else if (response1.role === "Intern") {
        return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${response2.name}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${response1.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${response2.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${response2.email}">${response2.email}</a></li>
                <li class="list-group-item">School: ${response2.school}</li>
            </ul>
        </div>
    </div>`
    }

}

module.exports = generateHtml;