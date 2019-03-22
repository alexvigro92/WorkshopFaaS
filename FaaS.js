const watson = require('watson-developer-cloud'); 

const workspace_id = "your workspace id";

const assistant = new watson.AssistantV1({
    username: "your username",
    password: "your password",
    url: "your url",
    version: "2018-09-20"
});

function main(params) {
    console.log(params.request.context)
    console.log(params.request.question)
	return new Promise((resolve, reject) => {
        let message = {
            "message":{
                "text": params.request.question
            },
            "context":{...params.request.context}
        };
        assistant.message({
            workspace_id: workspace_id,
            input: message.message,
            context: message.context
        }, (err, response) => {
                let question = response.context.question;
                resolve(response)
        }); 
    });
}
