
    // function random message
    const phrase = () => {
        // main phase array
    const mainP = ['Today you are', 'Today everything will be', 'Today will be a', 'Always keep'];

        // secondary phrases arrays
    const youAre = ['great!', 'super!', 'fabulous!'];
    const everythingWillBe = ['great!', 'ok!', 'super!'];
    const todayWillBeA = ['great day!', 'good day!', 'super day!', 'faboulos day!'];
    const keep = ['trying!', 'up the good work!', 'learning!'];


    // Generate a random index between 0 and the array length
    // Use the random index to get a random element from the array
    
    const mainPRandomIndex = mainP[Math.floor(Math.random() * mainP.length)];

    const youAreRandomIndex = youAre[Math.floor(Math.random() * youAre.length)];
    const everythingRandomIndex = everythingWillBe[Math.floor(Math.random() * everythingWillBe.length)];
    const todayRandomIndex = todayWillBeA[Math.floor(Math.random() * todayWillBeA.length)];
    const keepRandomIndex = keep[Math.floor(Math.random() * keep.length)];

    // if main phase ... then secondary phrase ...
    if (mainPRandomIndex === 'Today you are') {
        return `${mainPRandomIndex} ${youAreRandomIndex}`
    }
    else if (mainPRandomIndex === 'Today everything will be') {
        return `${mainPRandomIndex} ${everythingRandomIndex}`
    }
    else if (mainPRandomIndex === 'Today will be a') {
        return `${mainPRandomIndex} ${todayRandomIndex}`
    }
    else if (mainPRandomIndex === 'Always keep') {
        return `${mainPRandomIndex} ${keepRandomIndex}`
    }
}

    // test results of the function (it works :))
    console.log(phrase())
