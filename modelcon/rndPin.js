/**
 * @rsTeam02
 * sakai.jun01@gmail.com
 * 
 * + generate a random 4-digit pin without repeating digits eg. 1012 - 9876
 * + split string into char arrays compare each, if match => generate another new pin, till every digits are not equal
 * 
 */

class RandomPin {
    generate() {
        var element = [...Math.floor((Math.random() * 8999) + 1000).toString()];

        for (let i = 0; i < element.length - 1; i++) {
            for (let j = i; j < element.length; j++) {
                if (element[i] === element[j + 1]) {
                    return this.generate();
                } else {
                    if (element.length - 2 === i) {
                        return element.join("");
                    }
                }
            }
        }
    }

}