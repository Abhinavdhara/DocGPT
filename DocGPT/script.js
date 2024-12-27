// Log the selected download type
document.querySelectorAll('input[name="download"]').forEach((radio) => {
    radio.addEventListener('change', () => {
        console.log(`Selected: ${radio.value}`);
    });
});

function validateGPTLink() {
    const inputField = document.getElementById('fname');
    const link = inputField.value.trim();

    // Regular Expression to match valid GPT link patterns
    const gptLinkPattern = /^(https?:\/\/)?(chat\.openai\.com|chatgpt\.com)\/share\/[a-z0-9\-]+$/;

    if (!link || !gptLinkPattern.test(link)) {
        alert("Please enter a valid GPT link (chat.openai.com or chatgpt.com).");
        inputField.style.border = "2px solid red";
        inputField.focus();
        setTimeout(() => {
            inputField.style.border = ""; // Reset border after 2 seconds
        }, 2000);
        return false;
    }

    alert("Valid GPT link! Proceeding...");
    // Trigger further logic or backend call here
    return true;
}

function showLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'block';
}

