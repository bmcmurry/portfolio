document.addEventListener("DOMContentLoaded", function () {
    const yearbookButton = document.querySelector("#showYearbookButton");
    const modal = document.querySelector("#myModal");
    const closeButton = document.querySelector(".close");

    const screenWidthThreshold = 780; // You can adjust this value
    if (window.innerWidth < screenWidthThreshold) {
      showYearbookButton.addEventListener('click', function () {
        // Open the yearbook in a new tab or window
        window.open('yearbook.html', '_blank');
      });
    } else {
      showYearbookButton.addEventListener('click', function () {
        modal.style.display = 'block';
        console.log("display");
      });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });
    }
});
