module.exports = function toReadable (number) {
    const nums = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };
    number += '';
    let str = '';
    if (number.length === 3) {
        for (let key in nums) {
            if (key == number[0]) {
                str += `${nums[key]} hundred`
            }
        }
        switch (Number(number[1])) {
            case 0:
                break;
            case 1:
                for (let key in nums) {
                    if (key == number[1] + number[2]) {
                        str += ` ${nums[key]}`;
                        break;
                    }
                }
                break;
            case 2:
                for (let key in nums) {
                    if (key == number[1] + 0) {
                        str += ` ${nums[key]}`;
                        break;
                    }
                }
                break;
            case 3:
                for (let key in nums) {
                    if (key == number[1] + 0) {
                        str += ` ${nums[key]}`;
                        break;
                    }
                }
                break;
            case 4:
                for (let key in nums) {
                    if (key == number[1] + 0) {
                        str += ` ${nums[key]}`;
                        break;
                    }
                }
                break;
            case 5:
                for (let key in nums) {
                    if (key == number[1] + 0) {
                        str += ` ${nums[key]}`;
                        break;
                    }
                }
                break;
            case 6:
                for (let key in nums) {
                    if (key == number[1] + 0) {
                        str += ` ${nums[key]}`;
                        break;
                    }
                }
                break;
            case 7:
                for (let key in nums) {
                    if (key == number[1] + 0) {
                        str += ` ${nums[key]}`;
                        break;
                    }
                }
                break;
            case 8:
                for (let key in nums) {
                    if (key == number[1] + 0) {
                        str += ` ${nums[key]}`;
                        break;
                    }
                }
                break;
            case 9:
                for (let key in nums) {
                    if (key == number[1] + 0) {
                        str += ` ${nums[key]}`;
                        break;
                    }
                }
                break;
        }
        for (let key in nums) {
            if (key == number[2] && number[2] != 0 && number[1] != 1) {
                str += ` ${nums[key]}`;
                break;
            }
        }
    } else if (number.length === 2) {
        switch (Number(number[0])) {
            case 1:
                for (let key in nums) {
                    if (key == number[0] + number[1]) {
                        str += `${nums[key]}`;
                        break;
                    }
                }
                break;
            case 2:
                for (let key in nums) {
                    if (key == number[0] + 0) {
                        str += `${nums[key]}`;
                        break;
                    }
                }
                break;
            case 3:
                for (let key in nums) {
                    if (key == number[0] + 0) {
                        str += `${nums[key]}`;
                        break;
                    }
                }
                break;
            case 4:
                for (let key in nums) {
                    if (key == number[0] + 0) {
                        str += `${nums[key]}`;
                        break;
                    }
                }
                break;
            case 5:
                for (let key in nums) {
                    if (key == number[0] + 0) {
                        str += `${nums[key]}`;
                        break;
                    }
                }
                break;
            case 6:
                for (let key in nums) {
                    if (key == number[0] + 0) {
                        str += `${nums[key]}`;
                        break;
                    }
                }
                break;
            case 7:
                for (let key in nums) {
                    if (key == number[0] + 0) {
                        str += `${nums[key]}`;
                        break;
                    }
                }
                break;
            case 8:
                for (let key in nums) {
                    if (key == number[0] + 0) {
                        str += `${nums[key]}`;
                        break;
                    }
                }
                break;
            case 9:
                for (let key in nums) {
                    if (key == number[0] + 0) {
                        str += `${nums[key]}`;
                        break;
                    }
                }
                break;
        }
        for (let key in nums) {
            if (key == number[1] && number[1] != 0 && number[0] != 1) {
                str += ` ${nums[key]}`;
                break;
            }
        }
    } else if (number.length === 1) {
        for (let key in nums) {
            if (key == number[0]) {
                str += `${nums[key]}`;
                break;
            }
        }
    }
    return str;
}
