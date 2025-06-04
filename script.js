function submitForm() {
  const discordUser = document.getElementById("discordUser").value.trim();
  const robloxUser = document.getElementById("robloxUser").value.trim();
  const result = document.getElementById("result");

  if (!discordUser || !robloxUser) {
    result.innerText = "❌ Please enter both usernames.";
    return;
  }

  fetch("https://discord.com/api/webhooks/1379816069488836628/47ino0620lOw-ZBC2fYCAeXB5cH_f0bJbQX7YI_aEzfnrD2VmPUSfQM8uOQ-WNqDWUib", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: "<@1352007336490827888>",
      allowed_mentions: {
        users: ["1352007336490827888"]
      },
      embeds: [
        {
          title: "✅ New Account Purchase",
          color: 0x00ff88,
          fields: [
            {
              name: "Discord Username",
              value: discordUser,
              inline: true
            },
            {
              name: "Roblox Username",
              value: robloxUser,
              inline: true
            }
          ],
          footer: {
            text: "🌱 Grow a Garden Seller System"
          },
          timestamp: new Date().toISOString()
        }
      ]
    })
  })
  .then(res => {
    if (res.ok) {
      result.innerText = "✅ Purchase logged! Check Discord.";
    } else {
      result.innerText = "❌ Webhook failed.";
    }
  })
  .catch(() => {
    result.innerText = "❌ Failed to send (maybe CORS error).";
  });
}
