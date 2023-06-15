class Story{
    constructor(story,length,morallesson,agegroup){
        this.story=story
        this.length=length,
        this.morallesson=morallesson,
        this.agegroup=agegroup
    }
    recordStories(){
        return `${this.story} of length ${this.length} has ${this.morallesson} to ${this.agegroup}  agegroup`
    }
}
let story=new Story("babu","12 minutes","it helps girls to understand their role","age 12=18 years");
console.log(story.recordStories());


class Story2 extends Story{
    constructor(story,length,morallesson,agegroup){
        super(story,length,morallesson,agegroup)
    }
    recordStories(){
        return `${this.story} of length ${this.length} has ${this.morallesson} to ${this.agegroup}  agegroup`
    }
}
let story2=new Story("rabbit","15 minutes","it helps boysto understand their role","age 12=18 years");
console.log(story2.recordStories());


class StoryTeller{
    constructor(storyteller,story,length,morallesson,agegroup){
this.storyteller=storyteller,
        this.story=story
        this.length=length,
        this.morallesson=morallesson,
        this.agegroup=agegroup 
    }
    recordStories(){
        return `${this.story} is being narrated by ${this.storyteller} storyteller and is of length ${this.length} has ${this.morallesson} to ${this.agegroup}  agegroup`
    }
}
let stotyteller1=new StoryTeller("Deniss","rabbit","15 minutes","it helps boysto understand their role","age 12=18 years");
console.log(stotyteller1.recordStories());


class StoryTeller2 extends StoryTeller{
    constructor(storyteller,story,length,morallesson,agegroup){
        super(storyteller,story,length,morallesson,agegroup)
    }
    recordStories(){
    return `${this.story} is being narrated by ${this.storyteller} storyteller and is of length ${this.length} has ${this.morallesson} to ${this.agegroup}  agegroup`
}
}
let stotyteller2=new StoryTeller2("DDavid","rabbit","15 minutes","it helps boysto understand their role","age 12=18 years");
console.log(stotyteller2.recordStories());

class Translater{
    constructor(translater,story,language){
        this.translater=translater,
        this.story=story,
        this.language=language
    }
    translateStory(){
        return `${this.translater} translates ${this.story} story to ${this.language} language`
    }
}
let translater1=new Translater("Kongo","babu","kikuyu");
console.log(translater1.translateStory());

class Translater2 extends Translater{
    constructor(translater,story,language){
        super(translater,story,language)
    }
    translateStory(){
        return `${this.translater} translates ${this.story} story to ${this.language} language`
    }
}
let translater2=new Translater2("Grace","babu","kikuyu");
console.log(translater2.translateStory());

class Recipe{
    constructor(ingridients,preparationtime,cookingmethod,nutritionalinfo){
this.ingridients=ingridients,
this.preparationtime=preparationtime,
this.cookingmethod=cookingmethod,
this.nutritionalinfo=nutritionalinfo
 }
    africanCuisine(){
        return `There is different  recipe is avery special recipe ${this.ingredients} ingridients which take ${this.preparationtime} time and ${this.cookingmethod} method and with diffent ${this.nutritionalinfo} `
    }
}
let recipe=new Recipe("cocoa","45 minutes","frying","healthy")
console.log(recipe.africanCuisine())

class EthiopianRecipe extends Recipe{
    constructor(ingridients,preparationtime,cookingmethod,nutritionalinfo){
        super(ingridients,preparationtime,cookingmethod,nutritionalinfo)
    }
    ethipianCuisine(){
        return `The Ethipian recipe is avery special recipe ${this.ingredients} ingridients which take ${this.preparationtime} time and ${this.cookingmethod} method and with diffent ${this.nutritionalinfo} `
    }
}
let ethiopian=new EthiopianRecipe("cocoa","45 minutes","frying","healthy")
console.log(ethiopian.ethipianCuisine())

class MorrocanRecipe extends Recipe{
    constructor(ingridients,preparationtime,cookingmethod,nutritionalinfo){
        super(ingridients,preparationtime,cookingmethod,nutritionalinfo)
    }
    morrocanCuisine(){
        return `The Ethipian recipe is avery special recipe ${this.ingredients} ingridients which take ${this.preparationtime} time and ${this.cookingmethod} method and with diffent ${this.nutritionalinfo} `
    }
}
let morrocco=new MorrocanRecipe("cocoa","45 minutes","frying","healthy")
console.log(morrocco.morrocanCuisine())

class NigerianRecipe extends Recipe{
    constructor(ingridients,preparationtime,cookingmethod,nutritionalinfo){
        super(ingridients,preparationtime,cookingmethod,nutritionalinfo)
    }
    nigerianCuisine(){
        return `The Ethipian recipe is avery special recipe ${this.ingredients} ingridients which take ${this.preparationtime} time and ${this.cookingmethod} method and with diffent ${this.nutritionalinfo} `
    }
}
let nigerian=new NigerianRecipe("cocoa","45 minutes","frying","healthy")
console.log(nigerian.nigerianCuisine())

class Species{
    constructor(diet,lifestyle,migrationpatterns){
        this.diet=diet,
        this.lifestyle=lifestyle,
        this.migrationpatterns=migrationpatterns
    }
    trackspecies(){
        return `Different species have different ${this.diet} with different ${this.lifestyle} lifespan and have different ${this.migrationpatterns} migration patterns`
    }
}
let species=new Species("plants","roaming","preditorlocation")
console.log(species.trackspecies())

class Preditor extends Species{
    constructor(diet,lifestyle,migrationpatterns,preylocation,specie){
super(diet,lifestyle,migrationpatterns)
this.preylocation=preylocation,
this.specie=specie;
    }
    trackspecies(){
    if(this.preylocation=="south"){
        return`Predators will move to the south to search the ${this.specie}`
    }
}
}
let preditor=new Preditor("plants","roaming","preylocation","lion")
console.log(preditor.trackspecies())

class Prey extends Species{
    constructor(diet,lifestyle,migrationpatterns,preditorlocation,specie){
super(diet,lifestyle,migrationpatterns)
this.preditorlocation=preditorlocation,
this.specie=specie;
    }
    trackspecies(){
    if(this.preditorlocation=="south"){
        return`Preys will move to the north to save their life from ${this.specie}`
    }
}
}
let prey=new Prey("plants","roaming","preylocation","south","lion")
console.log(prey.trackspecies())
