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
        // console.log(video)
        const div = document.createElement('div');
        div.classList = 'card';
        div.innerHTML = `
            <figure>
                <img class = "h-[200px]"
                src="${video.thumbnail}" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">
                Shoes!
                <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
                </div>
            </div>
        `
        videoContainer.appendChild(div)
    }

}

loadCategories();
videoCategories()