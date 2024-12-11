document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const bio = document.getElementById('bio').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Не вказано';
    const selectedSkills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(checkbox => checkbox.value);


    const skillsAdd =   selectedSkills.length > 0 ? selectedSkills.join(', ') : 'Не вказано';



    const resultText = `
      <hr>
        <h3>Інформація користувача ${name} :</h3>
        <p><strong>Ім'я:</strong> ${name}</p>
        <p><strong>Вік:</strong> ${age}</p>
        <p><strong>Дата народження:</strong> ${dob}</p>
        <p><strong>Країна:</strong> ${country}</p>
        <p><strong>Місто:</strong> ${city}</p>
        <p><strong>Стать:</strong> ${gender}</p>
        <p><strong>Електронна пошта:</strong> ${email}</p>
        <p><strong>Коротка біографія:</strong> ${bio}</p>
        <p><strong>Мови програмування:</strong> ${skillsAdd}</p>
    `;


    document.getElementById('result').innerHTML += resultText;

  
    document.getElementById('userForm').reset();
});