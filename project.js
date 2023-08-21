/*
You are
    great
    super
    fabulous
Everething will be
    great
    ok
    super
Today will be a
    great day
    good day
    super day
    faboulous day
Keep
    trying
    up the good work
    learning

    if 'main pe' than 'you are' .... function ..... random
    */


    // function test
    const phrase = () => {
    const mainP = ['You are', 'Everything will be', 'Today will be a', 'Keep'];

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

    if (mainPRandomIndex === 'You are') {
        return `You are ${youAreRandomIndex}`
    }
    else if (mainPRandomIndex === 'Everything will be') {
        return `Everything will be ${everythingRandomIndex}`
    }
    else if (mainPRandomIndex === 'Today will be a') {
        return `Today will be a ${todayRandomIndex}`
    }
    else if (mainPRandomIndex === 'Keep') {
        return `Keep ${keepRandomIndex}`
    }
}

    console.log(phrase())
