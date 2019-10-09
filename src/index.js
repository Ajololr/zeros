module.exports = function zeros(expression) {
    let twoNumber = 0, fiveNumber = 0;
    expression.split('*').forEach(element => {
        if (element.substr(-2, 2) === '!!') {
            let number = Number(element.substr(0, element.length - 2));
            let i = number % 2 + 2;
            
            while (i <= number) {
                let j = i;

                while (!(j % 2)){  
                    j /= 2;
                    twoNumber++;
                };

                j = i;
                while (!(j % 5)){  
                    j /= 5;
                    fiveNumber++;
                };

                i += 2;
            }
        }  else {
            let number = Number(element.substr(0, element.length - 1));

            for (let i = 1; i <= number; i++) {
                let j = i;

                while (!(j % 2)){  
                    j /= 2;
                    twoNumber++;
                }

                j = i;
                while (!(j % 5)){  
                    j /= 5;
                    fiveNumber++;
                };
            }
        }
    });

    if (twoNumber < fiveNumber) return twoNumber;
    return fiveNumber;
}