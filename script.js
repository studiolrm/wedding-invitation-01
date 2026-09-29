/* ==========================================
   AOS ANIMATION
========================================== */

AOS.init({
    duration: 1200,
    once: false
});

/* ==========================================
   ELEMENT
========================================== */

const opening = document.getElementById("opening");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const flowerDecoration = document.querySelector(".flower-decoration");
document.body.style.overflowY = "hidden";
/* ==========================================
   OPEN INVITATION
========================================== */

function openInvitation() {

    opening.classList.add("opening-hide");

    music.play()
        .then(() => {
            musicBtn.innerHTML =
                '<i class="fa-solid fa-pause"></i>';
        })
        .catch(() => {
            console.log("Autoplay diblokir browser.");
        });

    document.body.style.overflowY = "auto";

    setTimeout(() => {

        opening.style.display = "none";

        flowerDecoration.classList.add("show");

    }, 1000);
}

/* ==========================================
   MUSIC BUTTON
========================================== */

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML =
            '<i class="fa-solid fa-pause"></i>';

    } else {

        music.pause();

        musicBtn.innerHTML =
            '<i class="fa-solid fa-music"></i>';

    }

});

/* ==========================================
   COUNTDOWN
========================================== */

const weddingDate = new Date(
    "2026-10-08T09:30:00+08:00"
).getTime();

const countdownFunction = setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) {

        clearInterval(countdownFunction);

        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";

        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance %
            (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance %
            (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance %
            (1000 * 60))
        /
        1000
    );

    document.getElementById("days").innerHTML =
        days;

    document.getElementById("hours").innerHTML =
        hours;

    document.getElementById("minutes").innerHTML =
        minutes;

    document.getElementById("seconds").innerHTML =
        seconds;

}, 1000);

/* ==========================================
   GUEST NAME FROM URL
========================================== */

const params =
    new URLSearchParams(window.location.search);

const guestName =
    params.get("to");

if (guestName) {

    document.getElementById("guestName")
        .innerHTML =
        decodeURIComponent(guestName);

}

/* ==========================================
   COPY REKENING
========================================== */

function copyRekening() {

    const rekening =
        document.getElementById("rekening")
        .innerText;

    navigator.clipboard.writeText(rekening);

    alert(
        "Nomor rekening berhasil disalin."
    );

}

/* ==========================================
   RSVP FORM
========================================== */

// const rsvpForm =
//     document.querySelector(".rsvp-form");

// if (rsvpForm) {

//     rsvpForm.addEventListener("submit",
//         function (e) {

//             e.preventDefault();

//             alert(
//                 "Terima kasih atas konfirmasi dan doa Anda ❤️"
//             );

//             rsvpForm.reset();

//         });

// }

/* ==========================================
   FLOWER EFFECT
========================================== */

function createFlower() {

    const flower =
        document.createElement("div");

    // flower.classList.add("flower");

    // const flowers = [
    //     "⏾⋆.˚"
    
    // ];

    flower.innerHTML =
        flowers[
        Math.floor(
            Math.random() *
            flowers.length
        )
        ];

    flower.style.left =
        Math.random() * 100 + "vw";

    flower.style.fontSize =
        Math.random() * 20 + 20 + "px";

    flower.style.animationDuration =
        Math.random() * 5 + 6 + "s";

    document.body.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 12000);

}

// setInterval(createFlower, 600);

/* ==========================================
   HERO FADE EFFECT
========================================== */

window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".hero");

    if (!hero) return;

    const scroll =
        window.pageYOffset;

    hero.style.backgroundPositionY =
        scroll * 0.5 + "px";

});


/* ==========================================
   SMOOTH BUTTON EFFECT
========================================== */

const buttons =
    document.querySelectorAll("button");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter",
        () => {

            btn.style.transform =
                "translateY(-3px)";

        });

    btn.addEventListener("mouseleave",
        () => {

            btn.style.transform =
                "translateY(0px)";

        });

});

/* ==========================================
   CONSOLE SIGNATURE
========================================== */

console.log(`
========================================
   WEDDING INVITATION PREMIUM
========================================
Designed With Love ❤️
Theme : Luxury Maroon Black
Developer : Custom Edition
========================================
`);