$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "front-end Developer",
      "Programmer",
      "web design",
      "Web Development",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "front-end Developer",
      "Programmer",
      "web design",
      "Web Development",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

let myWorkContainer = document.querySelector(".my-work-container");
function ShowProjects() {
  // let projects;
  fetch("projects.json")
    .then((response) => response.json())
    .then((data) => {
      // You can access the JSON data here
      appendProjectsToPage(data.projects);
    })
    .catch((error) => console.error("Error loading JSON:", error));

  function appendProjectsToPage(projects) {
    projects.forEach((element) => {
      // console.log("test", element);
      if (element.state == "show") {
        // Create the card element
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        const card = document.createElement("div");
        card.classList.add("card");

        // console.log(projects);
        const cardImg = document.createElement("img");
        cardImg.classList.add("card-img");
        cardImg.setAttribute("src", `images/${element.coverPhoto}`);
        cardImg.setAttribute("alt", element.title);

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        const cardHeader = document.createElement("h1");
        cardHeader.classList.add("card-header");
        cardHeader.textContent = element.title;

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = element.description;

        const cardBtn = document.createElement("a");
        cardBtn.classList.add("card-btn");
        cardBtn.setAttribute("href", element.link);
        cardBtn.setAttribute("target", "-blank");
        cardBtn.innerHTML = "check this <span>→</span>";

        // Append all elements together
        cardContent.appendChild(cardHeader);
        cardContent.appendChild(cardText);
        cardContent.appendChild(cardBtn);

        card.appendChild(cardImg);
        card.appendChild(cardContent);

        gridItem.appendChild(card);

        // Append the card to the desired container (e.g., the grid container)
        myWorkContainer.appendChild(gridItem);
      }
    });
  }
  appendProjectsToPage();
}
ShowProjects();

// function sendEmail ( ) {
//     Email.send ( {
//         Host : " smtp.gmail.com " ,
//         Username : " avinash6252@gmail.com " ,
//         Password : ""
//         To : ' avinashkrdm@gmail.com ' ,
//         From :  document.getElementById ( " email " ) . value ,
//         Subject : " New Contact Form Enquiry " ,
//         Body " Name : + document.getElementById ( " name " ) . value ,
//             + " <br> Email : + document.getElementById ( " email " ) . value ,
//             + " <br> Pnone no : + document.getElementById ( " phone " ) . value ,
//             + " <br> Message : + document.getElementById ( " message " ) . value ,
//     } ) . then (
//     message = > alert ( " Message Sent Succesfully " )
//    ) ;
// }
