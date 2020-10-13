const inquirer = require("inquirer")

inquirer.prompt(
    [{name:"title" ,
     type:"input",
      message:"what is the title of the project?"},
    
      {name: "discription",
        type: "input",
        message:"give a brief discription of your project"},
        
           {name: "installation",
                type: "input",
                message:"how is this installed"
                
            },
            {name: "usage",
                type:"input",
                message: "what is the usage"

            },
           {name:"license",
                type: "rawlist",
                message: "what kind of license are you using?",
                choices:["Creative commans","Mit","Mozella public license2.0"]

            },
            
                {name: 'contributing',
                type:"input",
                message:" explain contributing requirments!"

            },
            {name:"questions",
                type: "input",
                message: "how can you users contact you with questions"

            },
               {name:"test",
                type:"input",
                message: "how is the test rulet us know how the test runs"

        }])



.then((answer)=>{
    console.log("# " +answer.title)
    if (answer.license=="creative commans"){
        console.log("[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)")
    }
    if (answer.license=="mit"){
        console.log("[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)")
    }
    if (answer.license=="mozella public license 2.0"){

    
    console.log("[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%2 02.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)")
    console.log("## discription " +answer.discription)
    console.log("## installation " +answer.installation)
    console.log("## usage " +answer.usage)
    console.log("## license " +answer.license)
    console.log("##contributing " +answer.contributing)
    console.log("##questions " +answer.questions)
    console.log("## tests " +answer.test)
    var tableOfcontents = [answer.tittle,answer.discription,answer.instalation,answer.Usage, answer.License ,answer.contributing,answer.questions,answer.tests]

})

