const axios = require('axios');

class XytextResponse {
    constructor(response) {
        try {
            this.rawResponse = response;
            this.success = response.data.success || false;

            if (!this.success) {
                this.message = response.data.message || null;
                throw new Error(this.message);
            }

            this.usage = response.data.usage || {};
            this.callId = response.data.call_id || null;

            const resultStr = response.data.result;
            if (resultStr) {
                try {
                    this.result = JSON.parse(resultStr);
                } catch (error) {
                    this.result = resultStr;
                }
            } else {
                this.result = null;
            }
        } catch (error) {
            console.error(error.message);
            this.success = false;
            this.result = null;
        }
    }
}

class Xytext {
    constructor(funcId, stage, authToken, timeout) {
        this.baseUrl = "https://api.xytext.com/invoke";
        this.headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
        };
        this.funcId = funcId;
        this.stage = stage;
        this.timeout = timeout || 900000;
    }
    
    

    async invoke(inputText, extras = {}) {
        const payload = {
            input: inputText,
            func_id: this.funcId,
            stage: this.stage,
            ...extras
        };
        
        const config = {
            headers: this.headers,
            timeout: this.timeout
        };

        try {
            const response = await axios.post(this.baseUrl, payload, config);
            return new XytextResponse(response);
        } catch (error) {
            console.error("Xytext Error Reason: " + error.response.data.message);
            return new XytextResponse({ data: { success: false, message: error.response.data.message } });
        }
    }
}

module.exports = Xytext;
