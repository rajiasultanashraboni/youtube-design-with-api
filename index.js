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
        const button = document.createElement('button');
        button.classList = "btn"
        button.innerText = `${element.category}`;
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
    // console.log(videos)
    for(const video of videos){
        console.log(video)
        const div = document.createElement('div');
        div.classList = 'card';
        div.innerHTML = `
            <figure>
                <img class = "h-[200px] w-full object-cover"
                src="${video.thumbnail}" />
            </figure>
            <div class="px-0 py-2 flex gap-2 items-center">
                <div><img class = "h-10 w-10 rounded-full object-cover" src="${video.authors[0].profile_picture}" alt=""></div>
        <div>
            <h1 class="font-bold">${video.title}</h1>
            <div class = "flex justify-between items-center">
                <p>
                ${video.authors[0].profile_name}
                </p>
                <img class="h-5 w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt="">
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