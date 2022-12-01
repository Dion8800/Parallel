function showHeaderMenu() {
    document.querySelector('.mobile-design-menu-popup').style.display = 'block';
}

function closeHeaderMenu() {
    document.querySelector('.mobile-design-menu-popup').style.display = 'none';
}

// function showHeaderProfile() {
//     document.querySelector('#header-user-dropdown').style.display = 'grid';
// }

// function hideHeaderProfile() {
//     document.querySelector('#header-user-dropdown').style.display = 'none';
   
// }

function showpopup(pname) {
    document.querySelector('.popup-underlay').classList.add('showpopup');
    document.querySelector(pname).classList.add('showpopup');
}

function hidepopup(pname) {
    document.querySelector('.popup-underlay').classList.remove('showpopup');
    document.querySelector(pname).classList.remove('showpopup');
}

function showwutisopeli() {
    document.querySelector('.popup-wutisopeli').classList.remove('hidepopup');
}

function hidewutisopeli() {
    document.querySelector('.popup-wutisopeli').classList.add('hidepopup');
}




    var element = document.getElementById("header-user-dropdown");
    element.classList.remove("mystyle");

    var body = document.body;
    var except = document.querySelector(".header-user-container");

    body.addEventListener("click", function () {
        element.classList.remove("mystyle");

        
    }, false);
    except.addEventListener("click", function (ev) {
        element.classList.toggle("mystyle");
        ev.stopPropagation(); //this is important! If removed, you'll get both alerts
    }, false);

    element.addEventListener("click", function (ev) {
        ev.stopPropagation(); //this is important! If removed, you'll get both alerts
    }, false);
