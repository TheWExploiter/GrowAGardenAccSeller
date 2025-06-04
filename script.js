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
      content: `<@1352007336490827888> ✅ New purchase!\nDiscord: ${discordUser}\nRoblox: ${robloxUser}`,
      allowed_mentions: {
        parse: ["users"],
        users: ["123456789012345678"]
      }
    })
  })
  .then(() => {
    result.innerText = "✅ Purchase logged! Check Discord for account details.";
  })
  .catch(() => {
    result.innerText = "❌ Failed to send data.";
  });
}
