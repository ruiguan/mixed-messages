//get infomation from the html file, you need to run html first to retrieve information
const jokelist = document.getElementById("jokelist");
const jokeArr = jokelist.textContent.split("\n").filter(item => item.trim() !== "").map(item => item.substring(8));

// construct other informations below
const nameArr = ["Joe Biden","Lebron James","Douglas MacArthur","Donald Trump","Cai Xukun","Wang Jianguo","Li Bai","Michael Jackson","Mabu","Dust Mites","Adolf Hitler"]
const jobArr = ["The President of United States","Basketball player","Chinese singer and dancer","The Pop King","Field marshal","A standup comedian","A Poet","A Cat","The Nazi leader"]

//test the results of jokeArr via console.log(jokeArr)
//design an objectFactory to store the data
const randomObject = () => {
    const randomJob = jobArr[Math.floor(Math.random()*jobArr.length)];
    const randomName = nameArr[Math.floor(Math.random()*nameArr.length)];
    const randomJoke = jokeArr[Math.floor(Math.random()*jokeArr.length)];
    return {
    job: randomJob,
    name: randomName,
    joke: randomJoke
    };
}

const randomMix = randomObject();

//the mixed message generator
const OUTPUT = `${randomMix.job} ${randomMix.name} once told me "${randomMix.joke}"`

console.log(OUTPUT)