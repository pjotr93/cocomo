module.exports = {
    questions: [
        {
            type: 'list',
            name: 'industry_experience',
            message: 'How familiar are you with the industry the application will be used?',
            choices: [
                {
                    name: "Not at all - I'm VERY unfamiliar with this area",
                    value: 1.22,
                },
                {
                    name: "I know a little about it",
                    value: 1.1
                },
                {
                    name:"I have a good knowledge about it (neutral)",
                    value: 1
                },
                {
                    name:"I know more about it than the average",
                    value:0.88
                },
                {
                    name: "I'm an expert in this area.",
                    value: 0.81
                }
            ]
        },
        {
            type: "list",
            name: "db_size",
            message: "How would you rate the size / complexity of the database?",
            choices: [
                {
                    name: "Very low size / Tiny complexity",
                    value: 0.9
                },
                {
                    name: "Low size / Small complexity",
                    value: 0.9
                },
                {
                    name: "Average size / Average complexity",
                    value: 1
                },
                {
                    name: "Big size / Big complexity",
                    value: 1.14
                },
                {
                    name:"Huge size / Huge complexity"
                }
            ]
        },
        {
            type: "list",
            name: "reuse",
            message: "How much reusability of the code is expected?",
            choices: [
                {
                    name: "No or very low",
                    value: 0.95
                },
                {
                    name: "Average",
                    value: 1
                },
                {
                    name: "High",
                    value: 1.14
                },
                {
                    name: "Very high - we are planning to reuse big parts of the code",
                    value: 1.15
                },
                {
                    name: "Extreme high - big parts of the code will be reused throughout the application in varying modules",
                    value: 1.24
                }
            ]
        },
        {
            type: "list",
            name: "unspecified",
            message: "How well is the software specified in this stage?",
            choices: [
                {
                    name: "The specification is missing vital informations, or is expected to change in major parts",
                    value: 1.5
                },
                {
                    name: "The specification lacks important informations or data, or is expected to change in parts",
                    value: 1.23
                },
                {
                    name: "The specification is not fully covered, therefore there can be some blind spots, but contains the most important information",
                    value: 1.11
                },
                {
                    name: "The specification is detailed on an OK level. There are details missing, but it contains everything to plan the project reasonably.",
                    value: 1
                },
                {
                    name: "The specification is pretty good and clear.",
                    value: 0.91
                },
                {
                    name: "The specification is very detailed and includes every possible information we would need throughout the project.",
                    value: 0.81
                }
            ]
        },
        {
            type: "list",
            name: "language_experience",
            message: "How would you rate yourself in the technologies you'll need to use in this project? (If you use more than 1 - please rate which you've the least experience)",
            choices: [
                {
                    name: "Very low - I'm new to this technology completely",
                    value: 1.2
                },
                {
                    name: "Low - I've used this tech briefly, but I'll need to learn key methods of this on the fly",
                    value: 1.09
                },
                {
                    name: "Average - I've an average know-how, but if the project required more advanced solutions I'll need to research it",
                    value: 1
                },
                {
                    name: "High - I'm very comfortable with this tech and I'm familiar with it's advanced solutions",
                    value: 0.91
                },
                {
                    name: "Expert - I'm a fucking genius in this. Ask me if you dare, there's nothing that could make me sweat.",
                    value: 0.84
                }
            ]
        },
        {
            type: "list",
            name: "multisite",
            message: "Does multisite development expected? (e.g. there are developers working on the same project but at a different location)",
            choices: [
                {
                    name:"Yes, and I'll need to collaborate with them on a very regular/daily basis",
                    value: 1.22
                },
                {
                    name: "Yes, and I'll need to collaborate with them on regular / weekly basis",
                    value: 1.09
                },
                {
                    name: "Yes, but I won't need to collaborate with them too much (e.g. bi-weekly / monthly)",
                    value: 1
                },
                {
                    name: "Yes, but I won't need to directly collaborate with them or just very briefly (occasionally)",
                    value: 0.93
                },
                {
                    name: "There are no external developers involved in the project",
                    value: 0.81
                }
            ]
        },
        {
            type: "list",
            name: "turnover",
            message: "Personnel Continuity - What are the chances of changing people in the Project Team?",
            choices: [
                {
                    name: "Very high - It's expected that some people are going to leave or join the project",
                    value: 1.29
                },
                {
                    name: "High - It's very likely that people are going to leave or join the project",
                    value: 1.12
                },
                {
                    name: "It's not planned, but there's a chance.",
                    value: 1
                },
                {
                    name: "Low - It's not planned and look very unlikely",
                    value: 0.9
                },
                {
                    name: "Very low - It's not expected at all. The same people are going to work on the project from start to finish.",
                    value: 0.81
                }
            ]
        },
        {
            type: "list",
            name: "workflow",
            message: "How experienced are you with the workflow (Project Management, ticketing, gitflow, repo management) used on the project?",
            choices: [
                {
                    name:"Not at all - it's something very new or different compared to what I'm used to",
                    value: 1.19
                },
                {
                    name: "Not really - it's different from what I'm used to",
                    value: 1.09
                },
                {
                    name: "Okay - It might be partially different, but the concept, tools and methods are not new for me",
                    value: 1
                },
                {
                    name: "Experienced - It's pretty much the same to what I've used",
                    value: 0.9
                },
                {
                    name:"Expert - It's exactly the same to what I'm used to",
                    value: 0.81
                }
            ]
        },
        {
            type: "list",
            name: "complexity",
            message: "Please rate the product's complexity in general?",
            choices: [
                {
                    name: "Very low - it's a very simple software, there're no complex parts",
                    value: 0.73
                },
                {
                    name: "Low - it's simple and straightforward without much complexity",
                    value: 0.87
                },
                {
                    name: "Average",
                    value: 1
                },
                {
                    name: "High",
                    value: 1.17
                },
                {
                    name: "Very high",
                    value: 1.34
                },
                {
                    name: "Extreme high",
                    value: 1.74
                }
            ]
        },
        {
            type: "list",
            name: "expertise",
            message: "How do you rate the project teams overall expertise?",
            choices: [
                {
                    name: "Junior",
                    value: 1.34
                },
                {
                    name: "Medior",
                    value: 1.15
                },
                {
                    name: "Senior",
                    value: 1
                },
                {
                    name: "Expert",
                    value: 0.88
                },
                {
                    name: "Rockstar",
                    value: 0.76
                }
            ]
        },
        {
            type:"list",
            name: "reliability",
            message: "What is the expected / required reliability of the software? (a.k.a is it a prototype or a medical software where a bug could kill someone?)",
            choices:[
                {
                    name: "Very low",
                    value: 0.82
                },
                {
                    name: "Low",
                    value: 0.92
                },
                {
                    name: "Average",
                    value:  1
                },
                {
                    name: "High",
                    value: 1.1
                },
                {
                    name: "Very high",
                    value: 1.26
                },
                {
                    name: "Extreme high",
                    value: 1.4
                }
            ]
        },
        {
            type: "list",
            name: "analysis",
            message: "How do you rate the Requirement Analysis Capability of the project team? (a.k.a How well do you absorb product specifications - honestly?)",
            choices: [
                {
                    name: "Very low - I often made mistakes in the past",
                    value: 1.42
                },
                {
                    name: "Low - I sometimes developed something different than what was specified",
                    value: 1.19
                },
                {
                    name: "Average - I rarely developed something different than what was specified",
                    value: 1
                },
                {
                    name: "High - I've never made a mistake in this, my code is 100% accurate to the specification",
                    value: 0.85
                },
                {
                    name: "Expert - I've wrote that fucking thing, I'm the walking specification itself!",
                    value: 0.71
                }
            ]
        },
        {
            type: "list",
            name: "constraint",
            message: "Are we expected to face any bottlenecks from the clients side? (e.g. using VPN, handling sensitive data, limited access to data etc)",
            choices: [
                {
                    name: "No, I'm not aware any of this",
                    value: 1
                },
                {
                    name: "Yes, there might be some bottlenecks, but not with a serious impact",
                    value: 1.05
                },
                {
                    name: "Yes, we're expecting bottlenecks that we will need to adjust / handle",
                    value: 1.17
                },
                {
                    name: "Yes, we're expecting serious bottlenecks that will interact our workflow on a regular basis",
                    value: 1.46
                }
            ]
        },
        {
            type: "list",
            name: "updates",
            message: "How static is going to be the end product? (a.k.a a blog is quite static, whereas a chat app is real live)",
            choices: [
                {
                    name: "It's going to be static with very rare updates (e.g. a static site)",
                    value: 1
                },
                {
                    name: "It's going to receive occasional updates (e.g. a blog)",
                    value: 1.11
                },
                {
                    name: "It's going to receive updates regularly (e.g. a booking site)",
                    value: 1.29
                },
                {
                    name: "It's a real time app (e.g. a chat app)",
                    value: 1.63
                }
            ]
        },
        {
            type: "list",
            name: "volatility",
            message: "How mature / stable and well supported is the chosen technology? If there are more please rate the one with the lowest.",
            choices: [
                {
                    name: "High - It's very mature and very well supported (e.g. Node)",
                    value: 0.87
                },
                {
                    name: "Average - It's mature and supported, but there's always a chance to bump into something unexpected (e.g. Ionic)",
                    value: 1
                },
                {
                    name: "Low - It's a popular technology with a big community, but minor issues are expected (e.g. TypeORM?)",
                    value: 1.15
                },
                {
                    name: "Very low - It's a trendy technology, but major issues can be anticipated (e.g. Flutter)",
                    value: 1.39
                }
            ]
        }
    ]
}