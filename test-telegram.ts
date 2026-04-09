const token = "8674799798:AAFSkxvVafBaSZmi38gKOh7px4oea4IqsG0";
const chatId = "1641700298";
fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ chat_id: chatId, text: "Test message from AI Studio backend" })
}).then(res => res.json()).then(console.log).catch(console.error);
