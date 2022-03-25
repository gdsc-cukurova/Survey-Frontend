 const  json = {
    title: "Software Developer Survey",
    "description": "Please answer the following questions",
    "logo": "https://surveyjs.io/favicon.ico",
    "logoWidth": 60,
    "logoHeight": 60,
    pages: [
        {
            "title": "What operating system do you use?",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "opSystem",
                    "title": "OS",
                    "hasOther": true,
                    "isRequired": true,
                    "choices": ["Windows", "Linux", "Macintosh OSX"]
                }
            ]
        }, {
            "title": "What language(s) are you currently using?",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "langs",
                    "title": "Please select from the list",
                    "colCount": 4,
                    "isRequired": true,
                    "choices": [
                        "Javascript",
                        "Java",
                        "Python",
                        "CSS",
                        "PHP",
                        "Ruby",
                        "C++",
                        "C",
                        "Shell",
                        "C#",
                        "Objective-C",
                        "R",
                        "VimL",
                        "Go",
                        "Perl",
                        "CoffeeScript",
                        "TeX",
                        "Swift",
                        "Scala",
                        "Emacs Lisp",
                        "Haskell",
                        "Lua",
                        "Clojure",
                        "Matlab",
                        "Arduino",
                        "Makefile",
                        "Groovy",
                        "Puppet",
                        "Rust",
                        "PowerShell"
                    ]
                }
            ]
        }, 
    ]
};

export default json;