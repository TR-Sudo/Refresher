let {people}=require('../data')

const getPeople = (req,res)=>{// javascript.html is looking for json
    res.status(200).json({success: true, data: people})
}

const createPerson= (req,res)=>{// javascript.html is looking for json
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:"Please provide name value"})
    }
    res.status(201).json({success:false,person:name})
}

const createPersonPostman = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:"Please provide name value"})
    }
    res.status(201).json({success:true,person:[...people,name]})

}

const updatePerson = (req,res)=>{
    const {id} = req.params
    const {name} = req.body
    const findID= people.find((person) => person.id == Number(id))
    if(!findID){
        return res.status(404).json({success:false,msg:`no person with id ${id}`})
    }

    const newPeople= people.map((person)=>{
        if(person.id==Number(id)){
            person.name=name
        }
        return person
    })
    res.status(200).json({success:true,data:newPeople})
}//change at id

const deletePerson = (req,res)=>{

    const {id} = req.params
    const findID= people.find((person) => person.id == Number(id))
    if(!findID){
        return res.status(404).json({success:false,msg:`no person with id ${id}`})
    }
    const newPeople= people.filter((person)=>person.id!==Number(id))
    res.status(200).json({success:true,data:newPeople})
}

module.exports={getPeople,createPerson,createPersonPostman,updatePerson,deletePerson}