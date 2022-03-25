const json = {
    "title": "Personal Information Survey",
    "description": "Please answer the following questions",
    "logo": "https://surveyjs.io/favicon.ico",
    "logoWidth": 60,
    "logoHeight": 60,
    questions: [
        {
            "name": "name",
            "type": "text",
            "title": "Please enter your name:",
            "placeHolder": "Jon Snow",
            "autoComplete": "name"
        }, {
            "name": "birthdate",
            "type": "text",
            "inputType": "date",
            "title": "Your birthdate:",
            "autoComplete": "bdate"
        }, {
            "name": "color",
            "type": "text",
            "inputType": "color",
            "isRequired": true,
            "title": "Your favorite color:"
        }, {
            "name": "email",
            "type": "text",
            "inputType": "email",
            "title": "Your e-mail:",
            "placeHolder": "jon.snow@nightwatch.org",
            "autoComplete": "email",
            "validators": [
                {
                    "type": "email"
                }
            ]
        }
    ]
};
export default json;