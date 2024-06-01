// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();

// nav menu 
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width")
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
}

document.addEventListener("DOMContentLoaded", function () {
    const mainMenu = document.getElementById("main-menu");
    const menuItems = document.querySelectorAll(".menu-item");
    const backItems = document.querySelectorAll(".back-item");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            const sectionID = item.getAttribute("data-section");
            const activeSubMenu = document.getElementById(sectionID);

            if (activeSubMenu) {
                mainMenu.style.animation = "slideOutToRight 0.5s forwards";
                setTimeout(() => {
                    mainMenu.classList.add("hidden");
                    mainMenu.style.animation = "";
                    activeSubMenu.classList.add("visible");
                    activeSubMenu.style.display = 'flex';
                    activeSubMenu.style.animation = "slideInFromLeft 0.5s forwards";
                }, 500);
            }
        });
    });

    backItems.forEach(item => {
        item.addEventListener("click", function () {
            const activeSubMenu = item.parentElement;
            activeSubMenu.style.animation = "slideOutToLeft 0.5s forwards";
            setTimeout(() => {
                activeSubMenu.classList.remove("visible");
                activeSubMenu.style.display = 'none';
                activeSubMenu.style.animation = "";
                mainMenu.classList.remove("hidden");
                mainMenu.style.animation = "slideInFromRight 0.5s forwards";
            }, 500);
        });
    });
});

