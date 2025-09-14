rtc = () => {
    Array.from(document.getElementsByClassName('wi-ch')).forEach((el) => {
        el.style.width = 0;
    })
}

Array.from(document.getElementsByClassName('w-ch')).forEach((el, i) => {
    el.addEventListener('click', () => {
        rtc();
        let rnd = Math.floor(Math.random()*360);
        document.getElementById(('val')).innerText = '0'+ (i +1);
        document.getElementsByClassName('wi-ch')[i].style.width = "200px";
        document.getElementsByTagName('header')[0].style.filter = `hue-rotate(${rnd}deg)`
    })
})

// This code will prevent default link behavior and show an alert instead.
document.addEventListener('DOMContentLoaded', () => {
    // Select all links with a href="#" attribute.
    const links = document.querySelectorAll('a[href="#"]');

    // Loop through each selected link.
    links.forEach(link => {
        // Add a click event listener to each link.
        link.addEventListener('click', (event) => {
            // Prevent the default action of the link (navigating to a new page).
            event.preventDefault();

            // Display a pop-up alert with the specified message.
            alert("Certificates are not visible due to technical issue. Please try again after 24 hours.");
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const mobileWidth = 768; // You can adjust this value as needed

    function checkScreenSize() {
        if (window.innerWidth <= mobileWidth) {
            alert("This website is only for desktop use. will be available for Mobile soon.");
        }
    }

    checkScreenSize();

    // Optional: Add an event listener to check again if the window is resized
    window.addEventListener('resize', checkScreenSize);
});



// ...existing code...

function showOverlayIfMobile() {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0,0,0,0.85)';
        overlay.style.color = '#fff';
        overlay.style.display = 'flex';
        overlay.style.flexDirection = 'column';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = 9999;
        overlay.innerHTML = `
            <h2 style="margin-bottom: 20px;">Website is under construction</h2>
            <p style="font-size: 18px;">Use Desktop or DesktopSite for best experience</p>
        `;
        document.body.appendChild(overlay);
    }
}

showOverlayIfMobile();
// ...existing code...