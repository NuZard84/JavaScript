
    // let js = 'amazing';
    // if(js === 'amazing') alert('amzing');

    let age = 30 ;
    age = 31 ;
    console.log(age);

    const year = 2001;
    // year = 2003;
    // const date ;  This is not eligible
    console.log(year);

    var job = 'hey';
    job = 'hello';
    console.log(job);

    //varible can be declare without specification

    firstName = "varasada";
    firstName = "het";
    console.log(firstName);

    //by template $

    lastName = "varasada";
    let currentYear = 2022;
    let birthYear = 2003;
    let pos = "student"

    const string = `hello I'm ${firstName} ${lastName} and I'm a ${currentYear - birthYear} old ${pos} ! ${"helllo amigos"}`
    console.log(string);

    //type conversion

    const yr = '2001';
    console.log(Number(yr) + 20);

    //type coercion 

    const n = '50' - '10' + '100' + '1'; // 50-10 = 40 and later append as string
    const m = '50' - '10' + 1 + '1'; // 50-10 = 40 and later 40 + 1 and append as string add 1
    console.log(n);
    console.log(m);