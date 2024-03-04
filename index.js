const animeImgEl = document.getElementById('anime-img');
const animeNameEl = document.getElementById('anime-name');
const btnEl = document.getElementById('btn');
const animeContainerEl = document.querySelector('.anime-container');

function displayData() {
    try {
        fetch("https://api.waifu.pics/sfw/neko", {
        method: "GET",
        }).then(res => res.json())
        .then(data => {
            animeImgEl.src = data.url;
            console.log(data);
            animeContainerEl.style.display = 'block';
        })
    } catch (error) {
        console.log(error);
    }
}

btnEl.addEventListener('click', () => {
    displayData();
})