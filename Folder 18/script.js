const quoteText = document.querySelector('#quoteText h3');
const quoteAuthor = document.querySelector('#quoteAuthor p');
const btn = document.querySelector('#btn');

async function showRandomQuote() {
    btn.textContent = "Loading...";
  quoteText.textContent = "⏳ Loading quote...";
  quoteAuthor.textContent = "Please wait...";
  await new Promise(resolve => setTimeout(resolve, 500));

    try {
        const response = await fetch("https://zenquotes.io/api/random");

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();

        quoteText.innerHTML = `<i class="fa fa-quote-left" aria-hidden="true"></i> ${data[0].q} <i class="fa fa-quote-right"></i>`;
        quoteAuthor.textContent = data[0].a || "Unknown";
        
    } catch (error) {
        console.error("Error fetching quote:", error);
        quoteText.innerHTML = "❌ Could not fetch quote. Please check your connection.";
        quoteAuthor.textContent = "Error 404";
    } finally {
        btn.textContent = "Get A Qoute";
    }
}

// Load one quote when page loads
showRandomQuote();

// Load new quote on button click
btn.addEventListener("click", showRandomQuote);
