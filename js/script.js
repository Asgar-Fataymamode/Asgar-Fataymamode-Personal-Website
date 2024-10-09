// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick=() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop- 100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top<offset+height){
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            // active sections for animation on scroll
            sec.classList.add('show-animate');

        }

        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
    });


    // sticky header
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);


    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.ScrollHeight);





}

















// const typed = new typed(' multiple-text', {
//     strings:['Frontend Developer','YouTuber', 'Blogger'],
//     typeSpeed: 100,    
//     backSpeed: 100, 
//     backDelay: 1000, 
//     loop: true
// });




// document.querySelector('.summary').addEventListener('click', function() {
//     var detailsDiv = document.querySelector('.details');
//     detailsDiv.style.display = (detailsDiv.style.display === 'none') ? 'block' : 'none';
// });


function toggleDetails(sectionId) {
    var details = document.getElementById(sectionId);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}



// var detailsVisible = true;

    // function toggleDetails() {
    //     var detailsDiv = document.querySelector('.details');
    //     var indicatorSpan = document.querySelector('.toggle-indicator');

    //     detailsVisible = !detailsVisible; // Toggle the state

    //     if (detailsVisible) {
    //         detailsDiv.style.display = 'block';
    //         indicatorSpan.innerHTML = '&#9658;'; // Down-pointing caret
    //     } else {
    //         detailsDiv.style.display = 'none';
    //         indicatorSpan.innerHTML = '&#9660;'; // Right-pointing caret
    //     }
    // }


    const form=document.querySelector("form");
    const fullName=document.getElementById("name");
    const email=document.getElementById("email");
    const phone=document.getElementById("phone");
    const subject=document.getElementById("subject");
    const message=document.getElementById("message");


    function sendEmail(){

        const bodyMessage=`Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Subject: ${subject.value}<br> Message: ${message.value}<br>`;


        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "asgarfataymamode@gmail.com",
            Password : "0D43BFF7D84CBAF045763673D9A2207542BD",
            To : 'asgarfataymamode@gmail.com',
            From : "asgarfataymamode@gmail.com",
            Subject : subject.value,
            Body : bodyMessage
        }).then(
          message => 
          {
            if (message=="OK"){
                Swal.fire({
                    title: "Message sent!",
                    text: "Thank you!",
                    icon: "success"
                  });
                form.reset();
            }
          }
        );
    }


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        sendEmail();
    })

   








    // document.addEventListener("DOMContentLoaded", function() {
    //     const phrases = ["Software Developer", "Web Designer", "Tech Enthusiast"];
    //     let i = 0;
    //     let j = 0;
    //     let currentPhrase = [];
    //     let isDeleting = false;
    //     let typingSpeed = 200;
    
    //     function type() {
    //         let element = document.getElementById("typing");
    //         if (i < phrases.length) {
    //             if (!isDeleting && j <= phrases[i].length) {
    //                 currentPhrase.push(phrases[i][j]);
    //                 j++;
    //                 element.innerHTML = currentPhrase.join('');
    //             }
    
    //             if (isDeleting && j <= phrases[i].length) {
    //                 currentPhrase.pop(phrases[i][j]);
    //                 j--;
    //                 element.innerHTML = currentPhrase.join('');
    //             }
    
    //             if (j == phrases[i].length) {
    //                 isDeleting = true;
    //                 typingSpeed = 500;
    //             }
    
    //             if (isDeleting && j === 0) {
    //                 currentPhrase = [];
    //                 isDeleting = false;
    //                 i++;
    //                 if (i == phrases.length) {
    //                     i = 0;
    //                 }
    //                 typingSpeed = 200;
    //             }
    //         }
    //         setTimeout(type, typingSpeed);
    //     }
    
    //     type();
    // });
    
    document.addEventListener("DOMContentLoaded", function() {
        const phrases = ["University Student", "Software Developer", "Tech Enthusiast" , "Blogger"];
        let i = 0;
        let j = 0;
        let currentPhrase = [];
        let isDeleting = false;
        let typingSpeed = 200; // Speed of typing
        let deletingSpeed = 100; // Speed of deleting, make this smaller for faster deletion
    
        function type() {
            let element = document.getElementById("typing");
            let cursorSpan = document.createElement('span');
            cursorSpan.className = 'typing-cursor';
            cursorSpan.innerHTML = '|';
    
            if (i < phrases.length) {
                if (!isDeleting && j <= phrases[i].length) {
                    currentPhrase.push(phrases[i][j]);
                    j++;
                    element.innerHTML = currentPhrase.join('') + cursorSpan.outerHTML;
                    setTimeout(type, typingSpeed); // Typing speed
                }
    
                if (isDeleting && j <= phrases[i].length) {
                    currentPhrase.pop(phrases[i][j]);
                    j--;
                    element.innerHTML = currentPhrase.join('') + cursorSpan.outerHTML;
                    setTimeout(type, deletingSpeed); // Deleting speed
                }
    
                if (j == phrases[i].length) {
                    isDeleting = true;
                }
    
                if (isDeleting && j === 0) {
                    currentPhrase = [];
                    isDeleting = false;
                    i++;
                    if (i == phrases.length) {
                        i = 0;
                    }
                }
            } else {
                if (!isDeleting) {
                    setTimeout(type, typingSpeed);
                }
            }
        }
    
        type();
    });
    
    

    // document.addEventListener("DOMContentLoaded", function() {
    //     const phrases = ["Software Developer", "Web Designer", "Tech Enthusiast"];
    //     let i = 0;
    //     let j = 0;
    //     let currentPhrase = [];
    //     let isDeleting = false;
    //     let typingSpeed = 200;
    
    //     function type() {
    //         let element = document.getElementById("typing");
    //         let cursorSpan = document.createElement('span');
    //         cursorSpan.className = 'typing-cursor';
    //         cursorSpan.innerHTML = '|';
    
    //         if (i < phrases.length) {
    //             if (!isDeleting && j <= phrases[i].length) {
    //                 currentPhrase.push(phrases[i][j]);
    //                 j++;
    //                 element.innerHTML = currentPhrase.join('') + cursorSpan.outerHTML;
    //             }
    
    //             if (isDeleting && j <= phrases[i].length) {
    //                 currentPhrase.pop(phrases[i][j]);
    //                 j--;
    //                 element.innerHTML = currentPhrase.join('') + cursorSpan.outerHTML;
    //             }
    
    //             if (j == phrases[i].length) {
    //                 isDeleting = true;
    //                 typingSpeed = 500;
    //             }
    
    //             if (isDeleting && j === 0) {
    //                 currentPhrase = [];
    //                 isDeleting = false;
    //                 i++;
    //                 if (i == phrases.length) {
    //                     i = 0;
    //                 }
    //                 typingSpeed = 200;
    //             }
    //         }
    //         setTimeout(type, typingSpeed);
    //     }
    
    //     type();
    // });
    



