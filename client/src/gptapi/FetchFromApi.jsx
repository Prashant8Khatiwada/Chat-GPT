export const fetchResponse = async (chat) => {
  try {
    const response = await fetch("https://pkchat-gpt.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: chat.map((message) => message.message),
      }),
    });
    const data = await response.json();
    return data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
