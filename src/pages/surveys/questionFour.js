const json = {
    "title": "Favourite Food Survey",
    "description": "Please answer the following questions",
    "logo": "https://surveyjs.io/favicon.ico",
    "logoWidth": 60,
    "logoHeight": 60,
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "customer_role",
                    "title": "What is your favourite food?",
                    "hasOther": false,
                    "isRequired": true,
                    "choices": [
                        "Pasta",
                        "Pizza",
                        "Sushi",
                        "Fried Chicken",
                        "Fish",
                        "Vegetables",
                    ]
                }
            ]
        },
    ]

}

export default json;