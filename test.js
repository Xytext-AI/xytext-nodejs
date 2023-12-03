const Xytext = require('./xytext'); // Assuming xytext.js is in the same directory

async function testXytext() {
    const funcId = process.env.FUNC_ID;
    const stage = process.env.STAGE;
    const authToken = process.env.AUTH_TOKEN;

    const xt = new Xytext(funcId, stage, authToken);
    try {
        const response = await xt.invoke("take medicine tmr at 6am");
        console.log(response.result);
    } catch (error) {
        console.error("Error during invocation:", error.message);
    }
}

testXytext();
