document.getElementById('colorForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const colorName = document.getElementById('colorName').value;
    const colorValue = document.getElementById('colorPicker').value;


    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = colorValue;


    const colorLabel = document.createElement('p');
    colorLabel.textContent = colorName || colorValue; 


    const palette = document.getElementById('palette');
    const colorItem = document.createElement('div');
    colorItem.appendChild(colorBox);
    colorItem.appendChild(colorLabel);
    palette.appendChild(colorItem);

    document.getElementById('colorForm').reset();
});