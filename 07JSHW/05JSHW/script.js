let activeUser = null;




function loadUser(username, detailsElement) {
    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .then(user => {
            detailsElement.innerHTML = `
                <img width="100" src="${user.avatar_url || 'NoAvatar'}" alt="Avatar">
                <p><strong>Name:</strong> ${user.name || 'NoName'}</p>
                <p><strong>Login:</strong> ${user.login || 'NoLogin'}</p>
                <p><strong>GitHub:</strong> <a href="${user.html_url}" target="_blank">${user.html_url}</a></p>
                <p><strong>Blog:</strong> ${user.blog ? `<a href="${user.blog}" target="_blank">${user.blog}</a>` : 'NoBlog'}</p>
                <p><strong>City:</strong> ${user.location || 'NoCity'}</p>
                <p><strong>Email:</strong> ${user.email || 'NoEmail'}</p>
                <p><strong>Followers:</strong> ${user.followers || 0}</p>
                <p><strong>Following:</strong> ${user.following || 0}</p>
            `;
        })
        .catch(error => console.error('Error fetching user data:', error));
}




function toggleUserDetails(username, detailsElement) {
    const currentlyActive = document.querySelector('.user-details.active');

    if (currentlyActive && currentlyActive !== detailsElement) {
        currentlyActive.classList.remove('active');
    }

    if (detailsElement.classList.contains('active')) {
        detailsElement.classList.remove('active');
    } else {
        loadUser(username, detailsElement);
        detailsElement.classList.add('active');
    }
}







function generateUserListById(id) {
    fetch(`https://api.github.com/users?since=${id}`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .then(users => {
            const usersList = document.getElementById('usersList');
            usersList.innerHTML = ''; 

            users.forEach(user => {
                const userItem = document.createElement('div');
                userItem.className = 'user-item';
                userItem.innerText = user.login;

                const detailsElement = document.createElement('div');
                detailsElement.className = 'user-details';

                userItem.addEventListener('click', () => toggleUserDetails(user.login, detailsElement));

                usersList.appendChild(userItem);
                usersList.appendChild(detailsElement);
            });
        })
        .catch(error => console.error('Error fetching user list:', error));
}





generateUserListById(0); 
