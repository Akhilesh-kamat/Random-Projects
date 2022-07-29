const wordCount = document.getElementById('words')
const characters = document.getElementById('characters')
const inputField = document.getElementById('input')
const img = document.getElementById('img')



// const wordsCounter1 = () => {
//     const inputText = document.getElementById('input').value;
//     let countText = 0
//     for(const letter of inputText){
//         let charCounter = letter
//         if( charCounter == ' '){
//             countText += 1;
//         }
//     }
//     countText += 1;

//     wordCount.innerHTML = countText+" ";
//     characters.innerHTML = inputText.length+" ";


// }
// inputField.oninput = wordsCounter1;

// Fixing the spcace issue



const wordsCounter2 = () => {
    const inputText = document.getElementById('input').value;
    let charCount = inputText.split(" ").join("");
    let wordC = inputText.split(" ")
    wordC = wordC.filter(e => String(e).trim());
// console.log(wordC)
    wordCount.innerHTML = wordC.length + "  "

    characters.innerHTML = charCount.length + "  "
    animate();

}

inputField.oninput = wordsCounter2;

const animate =() => {
    img.classList.remove('img')
    img.classList.add('imgActive')
    
}






