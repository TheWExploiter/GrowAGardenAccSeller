function submitForm() {
  const discordUser = document.getElementById("discordUser").value.trim();
  const robloxUser = document.getElementById("robloxUser").value.trim();
  const result = document.getElementById("result");

  if (!discordUser || !robloxUser) {
    result.innerText = "❌ Please enter both usernames.";
    return;
  }

  fetch("https://discord.com/api/webhooks/1377962494542479441/x2bOgt1GrHvqz4c43YD8P9GB_bSq9ojh4Dk7d6u0tPHiS46y2DUyvJ-I3LeJjdmHw-EN", {
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
