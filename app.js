
// ACTIVITY 5: TOAST NOTIFICATION


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

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.remove();
    }, 3000);

}

// ACTIVITY 5: SMOOTH SCROLLING


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


// ACTIVITY 7: LIVE BOOKING SUMMARY


// Select booking form controls

const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");

// Select Booking Summary elements

const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryPrice = document.getElementById("summaryPrice");
const summaryQuantity = document.getElementById("summaryQuantity");
const summaryTotal = document.getElementById("summaryTotal");

// Ticket prices for each match

const ticketPrices = {

    "RCB vs CSK": {
        General: 1500,
        Premium: 3000,
        VIP: 6000
    },

    "MI vs KKR": {
        General: 1200,
        Premium: 2500,
        VIP: 5000
    },

    "CSK vs RR": {
        General: 1000,
        Premium: 2200,
        VIP: 4500
    },

    "SRH vs RCB": {
        General: 1300,
        Premium: 2800,
        VIP: 5500
    }

};


// Check whether all required summary elements exist

if (
    matchSelect &&
    standSelect &&
    quantityInput &&
    summaryMatch &&
    summaryStand &&
    summaryPrice &&
    summaryQuantity &&
    summaryTotal
) {

    // Function to update Booking Summary

    function updateBookingSummary(showMessage = true) {

        const selectedMatch = matchSelect.value;
        const selectedStand = standSelect.value;

        let quantity = Number(quantityInput.value);

        if (!Number.isFinite(quantity) || quantity < 1) {
            quantity = 1;
        }

        if (quantity > 10) {
            quantity = 10;
        }

        let price = 0;

        if (
            selectedMatch &&
            selectedStand &&
            ticketPrices[selectedMatch]
        ) {
            price = ticketPrices[selectedMatch][selectedStand];
        }

        const total = price * quantity;

        // Update Booking Summary Card

        summaryMatch.textContent = selectedMatch || "Not selected";

        summaryStand.textContent = selectedStand || "Not selected";

        summaryPrice.textContent = "₹" + price.toLocaleString("en-IN");

        summaryQuantity.textContent = quantity;

        summaryTotal.textContent = "₹" + total.toLocaleString("en-IN");

        if (showMessage) {
            showToast("Booking Summary Updated!");
        }

    }


    // Listen for Match changes

    matchSelect.addEventListener("change", function () {
        updateBookingSummary();
    });


    // Listen for Stand Category changes

    standSelect.addEventListener("change", function () {
        updateBookingSummary();
    });


    // Listen for Ticket Quantity changes

    quantityInput.addEventListener("change", function () {
        updateBookingSummary();
    });


    // Display initial summary without a toast

    updateBookingSummary(false);

}

// ACTIVITY 5: BOOKING FORM SUBMISSION


const ticketForm = document.getElementById("ticketForm");

if (ticketForm) {

    ticketForm.addEventListener("submit", function (event) {

        event.preventDefault();

        showToast("Your booking has been confirmed!");

    });

}

