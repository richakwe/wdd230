const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
var listCount = 0;

// chaperArray
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// button.addEventListener('click', () => {
//     if (input.value != '') {  // make sure the input is not empty
//         displayList(input.value); // call the function that outputs the submitted chapter
//         chaptersArray.push(input.value);  // add the chapter to the array

//         setChapterList(); // update the localStorage with the new array
//         input.value = ''; // clear the input
//         input.focus(); // set the focus back to the input
//     }
// });

function displayList(item) {
    let li = document.createElement('li');  
    let deletebutton = document.createElement('button');  
    li.textContent = item;
    deletebutton.textContent = '✖️';  
    deletebutton.classList.add('delete');  // this references the CSS rule .delete{width:fit-content;} to size the delete button

    li.append(deletebutton);  
    list.append(li);  

    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();  
    })
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

chapter = chapter.slice(0, chapter.length - 1); 
chaptersArray = chaptersArray.filter((item) => item !== chapter);

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

// chaperArray
button.addEventListener('click', () => {
    if (input.value != '') { 

        displayList(input.value); 
        chaptersArray.push(input.value);  

        setChapterList(); 
        input.value = ''; 
        input.focus(); 
    }
});










// button.addEventListener('click', () => {


//     
//     if (input.value != '') {
//         input.focus();
//         if (listCount < 10) {
//             
//             const filter = input.value.split(" ").join("+");

//             
//             const li = document.createElement('li');
//             const deleteButton = document.createElement('button');

//             
//             li.textContent = input.value;

//             //return the li element to a so that a link is generated (Tarren's hyperlink)
//             li.innerHTML = `<a href="https://www.churchofjesuschrist.org/search?lang=eng&query=${filter}&page=1&facet=scriptures" target="_blank">${input.value}</a>`
//             deleteButton.textContent = '✖️';

//             // add the delete button to the li element
//             li.append(deleteButton);

//             // add li to list in HTML
//             list.append(li);

//             listCount += 1;

//             // delete li with the delete button
//             deleteButton.addEventListener('click', () => {
//                 list.removeChild(li);
//                 input.focus();
//                 listCount -= 1;
//             })

//             // It only sends you the input element
//                input.focus()

//             // change the input value to show empty
//               input.value = '';
//         }
//         else {
//             window.alert("The maximum number of elements is 10, Please remove one from the list, to add a new one");
//         }
//     }

// });