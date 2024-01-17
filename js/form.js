function submitForm(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Prepare the message to send to Discord
    const discordMessage = `New Feedback:\nName: ${name}\nEmail: ${email}\nFeedback: ${message}`;

    // Discord Webhook URL
    const webhookUrl = "https://discord.com/api/webhooks/1196455108213481542/XDPPxnjdQH-ao1UYOo1xv_FDT3Nj8V1Pi79u16K2xcLICxddNU--hJGxFAcZncSTzjNe";

    // Use fetch to send a POST request to the Discord webhook
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: discordMessage,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Feedback submitted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to submit feedback. Please try again.');
    });
}