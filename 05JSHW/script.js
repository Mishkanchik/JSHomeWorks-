const users = [
    'octocat',
    'mojombo',
    'defunkt',
    'pjhyett',
    'wycats'
]; 
let currentIndex = 0;


function loadUser(username) {
    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(user => {
            
            document.getElementById('avatar').src = user.avatar_url || 'NoAvatar';
            document.getElementById('Name').innerText = user.name || 'NoName';
            document.getElementById('login').innerText = user.login || 'NoLogin';
            document.getElementById('gitHub').innerHTML = `<a href="${user.html_url}" target="_blank">${user.html_url}</a>`;
            document.getElementById('Blog').innerHTML = user.blog ? `<a href="${user.blog}" target="_blank">${user.blog}</a>` : 'NoBlog';
            document.getElementById('City').innerText = user.location || 'NoCity';
            document.getElementById('Email').innerText = user.email || 'NoEmail';
            document.getElementById('Followers').innerText = user.followers || 0;
            document.getElementById('Following').innerText = user.following || 0;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}


document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : users.length - 1;
    loadUser(users[currentIndex]);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < users.length - 1) ? currentIndex + 1 : 0;
    loadUser(users[currentIndex]);
});

loadUser(users[currentIndex]);
