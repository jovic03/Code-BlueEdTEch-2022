function log(msgem: string) {
	return function (constructor:any){
        console.log(msgem)
    }
}

@log('fui chamado')
class Blue {}

const objetoDaClasseBlue = new Blue();