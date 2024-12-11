const palette = document.getElementById('palette');
const colorForm = document.getElementById('colorForm');
const colorNameInput = document.getElementById('colorName');
const colorTypeSelect = document.getElementById('colorType');
const colorCodeInput = document.getElementById('colorCode');
const errorMessages = document.getElementById('errorMessages');

function loadColors() {
    const colorsCookie = document.cookie.split('; ').find(row => row.startsWith('colors='));
    const colors = colorsCookie 
    ? JSON.parse(decodeURIComponent(colorsCookie.split('=')[1])) 
    : [];
    colors.forEach(color => addColorToPalette(color));
}

function saveColors(colors) {
    document.cookie = `colors=${encodeURIComponent(JSON.stringify(colors))}; max-age=${3 * 60 * 60}`;
}

function addColorToPalette(color) {
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = color.code;
    colorBox.textContent = color.name;
    palette.appendChild(colorBox);
}

function validateColor(name, type, code) {
    const errors = [];
    const nameRegex = /^[a-zA-Z]+$/;
    const rgbRegex = /^\d{1,3},\d{1,3},\d{1,3}$/;
    const rgbaRegex = /^\d{1,3},\d{1,3},\d{1,3},(0(\.\d+)?|1)$/;
    const hexRegex = /^#[0-9A-Fa-f]{6}$/;

    if (!name) errors.push('Назва є обов’язковою.');
    if (!nameRegex.test(name)) errors.push('Назва повинна містити лише літери.');

    const existingColors = JSON.parse(decodeURIComponent(document.cookie.split('; ').find(row => row.startsWith('colors='))?.split('=')[1] || '[]'));
    if (existingColors.some(color => color.name.toLowerCase() === name.toLowerCase())) errors.push('Назва має бути унікальною.');

    if (type === 'RGB' && !rgbRegex.test(code)) errors.push('RGB повинен бути у форматі "R,G,B", де R, G, B – від 0 до 255.');
    if (type === 'RGBA' && !rgbaRegex.test(code)) errors.push('RGBA повинен бути у форматі "R,G,B,A", де R, G, B – від 0 до 255, A – від 0 до 1.');
    if (type === 'HEX' && !hexRegex.test(code)) errors.push('HEX повинен починатися з # та містити 6 цифр або літер A-F.');

    return errors;
}

document.getElementById('saveColor').addEventListener('click', () => {
    const name = colorNameInput.value.trim();
    const type = colorTypeSelect.value;
    const code = colorCodeInput.value.trim();
    const errors = validateColor(name, type, code);

    if (errors.length) {
        errorMessages.textContent = errors.join(' ');
        return;
    }

    errorMessages.textContent = '';

    const color = { name, type, code };
    const existingColors = JSON.parse(decodeURIComponent(document.cookie.split('; ').find(row => row.startsWith('colors='))?.split('=')[1] || '[]'));
    existingColors.push(color);
    saveColors(existingColors);

    addColorToPalette(color);
    colorForm.reset();
});

loadColors();