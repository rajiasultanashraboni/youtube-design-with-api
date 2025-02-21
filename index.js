// categories section is here 

function loadCategories (){
    fetch ('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories))
}

// display categories 

function displayCategories(categories){
    const buttonContainer = document.getElementById('button-container');
    // console.log(categories)
    categories.forEach(element => {
        // console.log(element)
        const button = document.createElement('button');
        button.classList = "btn"
        button.innerText = `${element.category}`;
        buttonContainer.appendChild(button)
    });
}

loadCategories();