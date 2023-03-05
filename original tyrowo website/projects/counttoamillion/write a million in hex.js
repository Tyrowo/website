function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function millionHex() {
    for (let i = 1; i <= 1000000; i++) {
        currentNum = i.toString(16).toUpperCase()
        for (let j = 0; j < currentNum.length; j++) {
            await sleep(200)
            process.stdout.write(currentNum[j]);
            await sleep(200)
            if ((currentNum.length - j - 1) % 2 == 0 && currentNum.length - j - 1 > 0) {
                await sleep(50);
                process.stdout.write(' ');
                await sleep(50);
            }
        }
        process.stdout.write('\n');
    }
}

async function millionDeci() {
    for (let i = 1; i <= 1000000; i++) {
        currentNum = i.toString().toUpperCase()
        for (let j = 0; j < currentNum.length; j++) {
            await sleep(200)
            process.stdout.write(currentNum[j]);
            await sleep(200)
            if ((currentNum.length - j - 1) % 3 == 0 && currentNum.length - j - 1 > 0) {
                await sleep(200);
                process.stdout.write(',');
                await sleep(200);
            }
        }
        process.stdout.write('\n');
    }
}


async function millionBi() {
    for (let i = 1; i <= 1000000; i++) {
        currentNum = i.toString(2).toUpperCase()
        for (let j = 0; j < currentNum.length; j++) {
            await sleep(200)
            process.stdout.write(currentNum[j]);
            await sleep(200)
            if ((currentNum.length - j - 1) % 4 == 0 && currentNum.length - j - 1 > 0) {
                await sleep(50);
                process.stdout.write(' ');
                await sleep(50);
            }
        }
        process.stdout.write('\n');
    }
}

millionHex();