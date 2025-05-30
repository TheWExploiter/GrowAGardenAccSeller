
function submitForm() {
  const discordUser = document.getElementById("discordUser").value.trim();
  const robloxUser = document.getElementById("robloxUser").value.trim();
  const result = document.getElementById("result");

  if (!discordUser || !robloxUser) {
    result.innerText = "❌ Please enter both usernames.";
    return;
  }

  fetch("YOUR_WEBHOOK_URL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: `✅ New purchase!\nDiscord: ${discordUser}\nRoblox: ${robloxUser}`
    })
  })
  .then(() => {
    result.innerText = "✅ Purchase logged! Check Discord for account details.";
  })
  .catch(() => {
    result.innerText = "❌ Failed to send data.";
  });
}
