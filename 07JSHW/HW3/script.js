const NextVersionDiv = document.getElementById('NextVersion')

NextVersionDiv.style.display = "none";

const elseColorVersion = document.getElementById('else');
elseColorVersion.addEventListener('click', () => {
    elseColorVersion.hidden = true
    

    NextVersionDiv.style.display = "flex";



});


document.getElementById('colorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const R = document.getElementById('R').value;
    const G = document.getElementById('G').value;
    const B = document.getElementById('B').value;
    const colorName = document.getElementById('colorName').value;

   

    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');

    
    colorBox.style.backgroundColor =`rgb(${R},${G},${B})` && "rgb(130, 50,70)";

 


    const colorLabel = document.createElement('p');
    colorLabel.textContent = colorName || R,G,B; 


    const palette = document.getElementById('palette');
    const colorItem = document.createElement('div');
    colorItem.appendChild(colorBox);
    colorItem.appendChild(colorLabel);
    palette.appendChild(colorItem);

    document.getElementById('colorForm').reset();
});