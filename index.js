function getTimeString(time) {
    const year = Math.floor(time / (3600 * 24 * 365)); 
    const remainingAfterYear = time % (3600 * 24 * 365);

    const day = Math.floor(remainingAfterYear / (3600 * 24)); 
    const remainingAfterDay = remainingAfterYear % (3600 * 24);

    const hour = Math.floor(remainingAfterDay / 3600);
    const remainingSeconds = remainingAfterDay % 3600;

    const minute = Math.floor(remainingSeconds / 60);
    const second = remainingSeconds % 60;

    let result = "";

    if (year > 0) result += `${year}y `;
    if (day > 0) result += `${day}d `;
    if (hour > 0 || year > 0 || day > 0) result += `${hour}h `; 
    if (minute > 0 || hour > 0 || year > 0 || day > 0) result += `${minute}m `;
    result += `${second}s`; 

    return result.trim(); 
}

// remove button section is here 

function removeActiveClass (){
    const buttons = document.getElementsByClassName('category-button');
    for(const btn of buttons){
        btn.classList.remove('active')
    }

}


// display categories when button is clicked 

function buttonClickedCategories (id){
    fetch (`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res=>res.json())
    .then(data=>{
        // remove active class 
        removeActiveClass();

        // add active class 
        const activeBtn = document.getElementById(`btn-${id}`);
        console.log(activeBtn);
        activeBtn.classList.add ('active');
        displayVideos(data.category);
    });
}


// button categories section is here 

function loadCategories (){
    fetch ('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories))
}

// button display categories 

function displayCategories(categories){
    const buttonContainer = document.getElementById('button-container');
    // console.log(categories)
    categories.forEach(element => {
        // console.log(element)
        const button = document.createElement('div');
        button.innerHTML = `
            <button id = "btn-${element.category_id}" onclick = "buttonClickedCategories(${element.category_id})" class = 'btn category-button'>${element.category}</button>
        `
        // button.classList = "btn"
        // button.innerText = `${element.category}`;
        buttonContainer.appendChild(button)
    });
}


// video categories is here 

function videoCategories (){
    fetch ('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
}

function displayVideos (videos){
    const videoContainer = document.getElementById('video-container')
    videoContainer.innerHTML = ''
    // console.log(videos)
    if(videos.length ===0){
        videoContainer.classList.remove("grid")
        videoContainer.innerHTML = `
            <div class = "flex flex-col justify-center">
                <img class='h-[250px] w-[250px] mx-auto' src="./Icon.png" alt="">
                <p class="text-xl font-bold text-center">no content is here</p>
            </div>
        `
    }

    else{
        videoContainer.classList.add("grid")
    }
    for(const video of videos){
        // console.log(video)
        const div = document.createElement('div');
        div.classList = 'card';
        div.innerHTML = `
            <figure class = 'relative'>
                <img class = "h-[200px] w-full object-cover"
                src="${video.thumbnail}" />

                ${
                    video.others.posted_date.length===0?'': `<span class='absolute right-2 bottom-2 bg-black text-white p-2 rounded-lg'>${getTimeString(video.others.posted_date)}</span>`
                }

                
            </figure>
            <div class="px-0 py-2 flex gap-2 items-center">
                <div><img class = "h-10 w-10 rounded-full object-cover" src="${video.authors[0].profile_picture}" alt=""></div>
        <div>
            <h1 class="font-bold">${video.title}</h1>
            <div class = "flex justify-between items-center">
                <p>
                ${video.authors[0].profile_name}
                </p>
                ${video.authors[0].verified === true? `<img class="h-5 w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt="">`: ''}
                
            </div>
            <div>
                <p class="text-gray-500 font-bold">${video.others.views}</p>
            </div>
        </div>
            </div>
        `
        videoContainer.appendChild(div)
    }

}

loadCategories();
videoCategories()