function getRepos() {
    fetch('https://api.github.com/users/wendelsilva/repos', {
            method: 'GET',
        })
        .then((resp) => resp.json())
        .then((data) => {
            let repos = data;
            handleGithubProjects(repos);
        })
        .catch(function (error) {
            console.log(error);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    getRepos();
});

function handleGithubProjects(repos) {
    let projectsWrapper = document.querySelector('.my-projects');
    repos.forEach(repository => {
        projectsWrapper.innerHTML += `
        <div class="project-card">
            <div class="project-name">
                <img src="./assets/icons/folder.svg" alt="icone de pasta de arquivo">
                <p>${repository.name? `${repository.name}` : ''}</p>
            </div>
            <p class="project-description">${repository.description? `${repository.description}` : ''}</p>
            <div class="project-info">
                <div class="project-social">
                    <p><img src="./assets/icons/star.svg" alt="icone de estrela">${repository.stargazers_count}</p>
                    <p><img src="./assets/icons/git-branch.svg" alt="icone de branch do git">${repository.forks_count}</p>
                </div>
                <p>${repository.language? `${repository.language}` : ""}</p>
            </div>
        </div>
        `;
    });
}