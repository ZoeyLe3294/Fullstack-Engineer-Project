const character = {
    name:['Ariel','Athena','Kai','Brooks','Cole','Francis'],
    appearance: ['young girl, slim with long red tangled hair and white skin',
                 'middle-age woman, strong build with platinum short cut and tan skin',
                'Japanese old lady, aristocratic and powerful aura',
                'teenager with black hair and blue eyes',
                'black fit man with bold head',
                'old man with soft straight flossy silky blonde hair'],
    personality: ['hot-tempered','gentle','honest','brave','straightforward','quite','selfish','humble','mischievous','ambitious','timid'],
    job: ['gambler','musician','doctor','CEO','cleaner','cook','streamer','developer','cook','realtor']
}

let randomGenerator = (num) => {
    return Math.floor(Math.random()*num)
} 


function characterCreation(){
    //random Name and Appearance -> they will share same index
    const ranName = randomGenerator(character.name.length)
    const name = character.name[ranName]
    const appearance = character.appearance[ranName]

    //random Personality -> amount and details of personalities print out are random
    let personalityList = character.personality
    let personality = ''
    const ranPersonality = randomGenerator(personalityList.length)+1
    console.log(ranPersonality)
    for (let i=0; i<ranPersonality; i++){
        let selection = personalityList[randomGenerator(personalityList.length)]
        if (i==ranPersonality-1){
            personality += selection //last item
        } else if (i==ranPersonality-2){
            personality += selection + ' and ' //second last item
        } else {
            personality += selection + ', ' //regular item
        }
        //remove the element from the list
        personalityList = personalityList.filter((r)=>{return r!=selection})
    }

    //random job
    const job = character.job[randomGenerator(character.job.length)]

    const message = "Here's your character information:\n"+
                    "Name: "+ name + "\n" +
                    "You're a " + appearance + "\n" +
                    "People says you're " + personality + "\n" +
                    "Your job is: " + job
    console.log(message)
}
characterCreation()
