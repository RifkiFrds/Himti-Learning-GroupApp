import Replicate from "replicate";

const replicate = new Replicate();

export const handler = async (event) => {
  // 1. Menambahkan pengecekan agar fungsi hanya berjalan untuk request POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { prompt } = JSON.parse(event.body);

    if (!prompt) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Prompt tidak boleh kosong." }),
      };
    }

    console.log("Menjalankan model dengan prompt:", prompt);
    
    const output = await replicate.run(
      "ibm-granite/granite-3.3-8b-instruct",
      {
        input: {
          prompt: prompt,
          max_length: 100, 
          min_tokens: 0,
          temperature: 0.7,
          presence_penalty: 0,
          frequency_penalty: 0
        }
      }
    );

    console.log("Output dari AI:", output);

    return {
      statusCode: 200,
      body: JSON.stringify({ response: output.join("") }),
    };
  } catch (error) {
    console.error("Error dari Replicate API:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Gagal memanggil Replicate API." }),
    };
  }
};