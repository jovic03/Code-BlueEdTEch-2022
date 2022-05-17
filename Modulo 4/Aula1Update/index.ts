function log(msgem:string){
  return function (constructor:any){
    console.log(msgem);
  }  
}

@log("Fui chamado")
class Blue{

}

const objetoDaClasseBlue = new Blue(;)