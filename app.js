// 1. REUSABLE TOAST NOTIFICATION FUNCTION
function showToast(message) {
    const toast = document.createElement("div");

    toast.textContent = message;

    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.backgroundColor = "#222";
    toast.style.color = "white";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "8px";
    toast.style.zIndex = "10000";
    toast.style.fontSize = "16px";
    toast.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.remove();
    }, 3000);
}
// 2. SMOOTH SCROLLING FOR BOOK BUTTONS

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const bookingSection = document.getElementById("booking");

        if (bookingSection) {

            bookingSection.scrollIntoView({
                behavior: "smooth"
            });

            showToast("Booking section opened!");

        }

    });

});

// 3. BOOKING FORM SUBMISSION

const ticketForm = document.getElementById("ticketForm");

if (ticketForm) {

    ticketForm.addEventListener("submit", function (event) {

        event.preventDefault();

        showToast("Your booking has been confirmed!");

        ticketForm.reset();

    });

}
