const json = {
    "title": "Animal Survey",
    "description": "Please answer the following questions",
    "logo": "https://surveyjs.io/favicon.ico",
    "logoWidth": 60,
    "logoHeight": 60,
    "elements": [
        {
            "type": "imagepicker",
            "name": "choosepicture",
            "title": "What animal would you like to see first ?",
            "isRequired": true,
            "choices": [
                {
                    "value": "lion",
                    "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
                }, {
                    "value": "giraffe",
                    "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
                }, {
                    "value": "panda",
                    "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
                }, {
                    "value": "camel",
                    "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
                }
            ]
        }
    ]
};
export default json;