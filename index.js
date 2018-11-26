var inquirer = require('inquirer');
const questions = require('./questions')
const Table = require('cli-table')




const influence = [
    1.51, //industry_experience
    1.42, //db_size
    1.31, //reuse
    1.52, //unspecified
    1.43, //language_experience
    1.56, //multisite
    1.59, //turnover
    1.40, //workflow
    2.38, //complexity
    1.76, //expertise
    1.54, //reliability
    2.00, //analysis
    1.46, //constraint
    1.63, //updates
    1.39  //volatility
];

let logo = `
                
BBBBBBBBBBBBBBBBB                                 d::::::d                                                                  d::::::d                    
B::::::::::::::::B                                d::::::d                                                                  d::::::d                    
B::::::BBBBBB:::::B                               d::::::d                                                                  d::::::d                    
BB:::::B     B:::::B                              d:::::d                                                                   d:::::d                     
  B::::B     B:::::Buuuuuu    uuuuuu      ddddddddd:::::d   aaaaaaaaaaaaa      cccccccccccccccc   ooooooooooo       ddddddddd:::::d     eeeeeeeeeeee    
  B::::B     B:::::Bu::::u    u::::u    dd::::::::::::::d   a::::::::::::a   cc:::::::::::::::c oo:::::::::::oo   dd::::::::::::::d   ee::::::::::::ee  
  B::::BBBBBB:::::B u::::u    u::::u   d::::::::::::::::d   aaaaaaaaa:::::a c:::::::::::::::::co:::::::::::::::o d::::::::::::::::d  e::::::eeeee:::::ee
  B:::::::::::::BB  u::::u    u::::u  d:::::::ddddd:::::d            a::::ac:::::::cccccc:::::co:::::ooooo:::::od:::::::ddddd:::::d e::::::e     e:::::e
  B::::BBBBBB:::::B u::::u    u::::u  d::::::d    d:::::d     aaaaaaa:::::ac::::::c     ccccccco::::o     o::::od::::::d    d:::::d e:::::::eeeee::::::e
  B::::B     B:::::Bu::::u    u::::u  d:::::d     d:::::d   aa::::::::::::ac:::::c             o::::o     o::::od:::::d     d:::::d e:::::::::::::::::e 
  B::::B     B:::::Bu::::u    u::::u  d:::::d     d:::::d  a::::aaaa::::::ac:::::c             o::::o     o::::od:::::d     d:::::d e::::::eeeeeeeeeee  
  B::::B     B:::::Bu:::::uuuu:::::u  d:::::d     d:::::d a::::a    a:::::ac::::::c     ccccccco::::o     o::::od:::::d     d:::::d e:::::::e           
BB:::::BBBBBB::::::Bu:::::::::::::::uud::::::ddddd::::::dda::::a    a:::::ac:::::::cccccc:::::co:::::ooooo:::::od::::::ddddd::::::dde::::::::e          
B:::::::::::::::::B  u:::::::::::::::u d:::::::::::::::::da:::::aaaa::::::a c:::::::::::::::::co:::::::::::::::o d:::::::::::::::::d e::::::::eeeeeeee  
B::::::::::::::::B    uu::::::::uu:::u  d:::::::::ddd::::d a::::::::::aa:::a cc:::::::::::::::c oo:::::::::::oo   d:::::::::ddd::::d  ee:::::::::::::e  
BBBBBBBBBBBBBBBBB       uuuuuuuu  uuuu   ddddddddd   ddddd  aaaaaaaaaa  aaaa   cccccccccccccccc   ooooooooooo      ddddddddd   ddddd    eeeeeeeeeeeeee  
                                                                                                                                                        
                                                                                                                                                        
                                                                                                      
`;

const intro = `
Hello Budacoder! You're running the super cool and science backed version of our estimation probability counter.
It's core is called CoCoMo II - which stands for the Constructive Cost Model (2nd -reviewed version).

Basically it's a regression analysis that was carried out by multiple economist on MIT and Stanford.

They studied what factors leads to estimation errors - so they made a close look of 300+ software projects and identified 17 areas that're usually not taken into consideration when estimating a software project.

`;

console.log(logo);
console.log(intro);

inquirer.prompt({
    type: 'confirm',
    name: 'doesnt mater',
    message: 'Are you Ready?'
}).then(() => {
    start()
});


const restable = new Table({
    head: ['Modifier', 'Value', 'Influence','Modification']
    , colWidths: [20, 10, 10,10]
});

function start() {
    inquirer
        .prompt(questions.questions)
        .then(answers => {
            let tableContent = [];
            let val = 0;
            let inf = 0;
            let result = 0;

            Object.keys(answers).map(function (key, i) {
                let row = [key,answers[key],influence[i],answers[key]*influence[i]/influence[i]];
                val += answers[key] * influence[i];
                inf += influence[i];
                restable.push(row)
            })
            result = val / inf;
            console.log(result);
            console.log(restable.toString())
        });
};