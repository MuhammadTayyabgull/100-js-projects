const tab1 = document.querySelector('[data-tab="tab1"]');
const tab2 = document.querySelector('[data-tab="tab2"]');
const tab3 = document.querySelector('[data-tab="tab3"]');
const title = document.querySelector('#tab-title');
const content = document.querySelector('.tab-content p')
const image = document.querySelector(".image img")
tabButtons = document.querySelectorAll('.tab-button')

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
       const tabValue = button.dataset.tab;

       if(tabValue === 'tab1') {
        tab1.classList.add('active');
        tab2.classList.remove('active');
        tab3.classList.remove('active');
        title.textContent = "Tab 1 Content"
        image.src = "futurecar.jpg"
        content.textContent = "This is the content for Tab 1. It contains information about futuristic cars and their technology. It also includes a video of a futuristic car. You can watch the video to learn more about how these cars work and their features.";
       } else if (tabValue === 'tab2') {
        tab1.classList.remove('active');
        tab2.classList.add('active');
        tab3.classList.remove('active');
        title.textContent = "Tab 2 Content"
        image.src = "spiderman.jpg"
        content.textContent = "This is the content for Tab 2. It contains information about Spiderman and his adventures in the city. It also includes a video of Spiderman swinging through the city. You can watch the video to see Spiderman in action and learn more about his powers.";
       } else if (tabValue === 'tab3')  {
        tab1.classList.remove('active');
        tab2.classList.remove('active');
        tab3.classList.add('active');
        title.textContent = "Tab 3 Content"
        image.src = "astronaut.jpg"
        content.textContent = "This is the content for Tab 3. It contains information about astronauts and space exploration. It also includes a video of an astronaut floating in space. You can watch the video to learn more about the life of an astronaut and the challenges they face in space.";
       }

    })
});
