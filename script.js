function scrollProjects(direction) {

    const slider = document.getElementById("projectSlider");

    const scrollAmount = 400;

    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });

}
