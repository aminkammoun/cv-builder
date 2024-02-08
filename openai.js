import OpenAI from "openai";

const openai = new OpenAI({
    organization: 'org-Kj51TQ11n8AeFqxJWoWcLSgH',
    apiKey: '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',
});

const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
});

chatCompletion()