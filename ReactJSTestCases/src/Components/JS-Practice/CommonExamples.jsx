import React, { useEffect, useState } from "react";
import './Common.css'
import { converToJSON, fetchUserDetailServiceObservable, fetchUserDetailServicePromese, getCharSortArray, getIntSortArray, getPromises, getRandomInt, getRXJSObservable, getSubjectObs, getUniqeArray, setSubjectObs } from "./CommonExamplesService";
//Observable 
//promise,
// filer ,map ,foreach, spreade paramerter
//sorting json
const CommonExamples=()=>{   
    const[intArray, setIntArray] = useState([10,5,20])
    const[charArray, setCharArray] = useState(['s','g','b'])
    const[intSortInput, setIntSortInput] = useState()
    const[charSortInput, setCharSortInput] = useState()
    const[observ, setObserv] = useState('')
    const[subobserv, setsubObserv] = useState('')
    const[promis, setPromis] = useState('')
    const[apiData, setApiData] = useState('')
    useEffect(()=>{
        const newArray = getIntSortArray(intArray);
        setIntArray(newArray)
        const newCharArray = getCharSortArray(charArray);
        setCharArray(newCharArray)
    },[])

    const addNumInSortArray =()=>{      
        console.log(intSortInput)         
        if (intSortInput !== "") {
            const newArray = getIntSortArray( [...intArray, parseInt(intSortInput)] ); // Add new number
            setIntArray(newArray); // Sort and set the new array
            setIntSortInput(""); // Clear input field after adding
          }
    }

    const addCharInSortArray =()=>{      
        console.log(charSortInput)         
        if (charSortInput !== "") {
            const newArray = getCharSortArray( [...charArray, charSortInput] ); // Add new number
            setCharArray(newArray); // Sort and set the new array
            setCharSortInput(""); // Clear input field after adding
          }
    }

    const checkSpradeOperatorsInt =()=>{ 
        const a =[1,2,6,7]
        const b =[4,6]
        const d = a
        d[0] = 11; //change with a
        console.log('Array A-',a)
        b.push(5)
        const c =[...a,...b,8,9]
        b.push(15) // not change
        return c; 
    }

    const getUniqueIntArray =()=>{ 
        const a =[1,2,2,7]
        return getUniqeArray(a)
    }

    const getUniqueCharArray =()=>{ 
        const a =['a','a','b']
        return getUniqeArray(a)
    }

    const checkSimpleSpradeOperatorsJson =()=>{
        let str="";
        const a ={id:'1', name:'Kishor',address:'add'}

        const b = a 
        b.id = '2' //change with a
        str = `${str} <div> First A= ${converToJSON(a)} </div> <div> First B= ${converToJSON(b)} </div>`

        const d = {...a}
        d.id = '3' //Not change with a
        str = `<div> ${str} First D= ${converToJSON(d)} </div> <div> Second A= ${converToJSON(a)} </div>`

        return str
    }

    const checkObjectSpradeOperatorsJson =()=>{
        let str="";
        const a ={id:'1', name:'Kishor',address: {road:'xyx', pincode:'123'}}

        const b = a 
        b.id = '2' //change with B and A
        b.address.pincode = '201' //change with D also change A
        str = `${str} <div> First A= ${converToJSON(a)} </div> <div> First B= ${converToJSON(b)} </div>`

        const d = {...a}
        d.id = '3' //change with D not change A
        d.address.pincode = '501' //change with D also change A
        str = `<div> ${str} First D= ${converToJSON(d)} </div> <div> Second A= ${converToJSON(a)} </div>`

        const r = Object.assign({},a)
        r.id = '3' //change with D not change A
        r.address.pincode = '50123' //change with D also change A
        str = `<div> ${str} First r= ${converToJSON(r)} </div> <div> Second A= ${converToJSON(a)} </div>`

        const e = JSON.parse(JSON.stringify(a))
        e.id = '4' //change with D not change A
        e.address.pincode = '801' //change with D not change A
        str = `<div> ${str} First E= ${converToJSON(e)} </div> <div> Second A= ${converToJSON(a)} </div>`

        return str
    }

     const sortArrayObjectJsonString =()=>{
        let str="";
        const arr =[{id:'1', productName:'Apple', price:100},
        {id:'2', productName:'Orange', price:50},
        {id:'3', productName:'Banana', price:20}]

        // Sort with productName
        const bb = [...arr].sort((a,b)=>a.productName.localeCompare(b.productName))
        arr.sort((a,b)=>a.productName.localeCompare(b.productName))
        return arr
    }

    const sortArrayObjectwithTwoField = ()=>{
        const people = [
            { name: "Alice", age: 30 },
            { name: "Bob", age: 25 },
            { name: "Alice", age: 25 },
            { name: "Charlie", age: 35 }
          ];

          const peo = people.sort((a,b)=>{
            if(a.name === b.name){
                return a.age - b.age;
            }
            return a.name.localeCompare(b.name)
          })

          return peo;
    }

    const sortArrayObjectJsonNumber =()=>{
        let str="";
        const arr =[{id:'1', productName:'Apple', price:100},
        {id:'2', productName:'Orange', price:50},
        {id:'3', productName:'Banana', price:20}]

        // Sort with price
        const bb = [...arr].sort((a,b)=>a.price-b.price)
        arr.sort((a,b)=>a.price-b.price)
        return arr
    }
    const filterObjectJson =()=>{
        let str="";
        const arr =[{id:'1', productName:'Apple', price:100},
        {id:'2', productName:'Orange', price:50},
        {id:'3', productName:'Banana', price:20}]         
        const bb =  arr.filter(item=>item.price>30 && item.id==2)
       
        return bb
    }

    const mapObjectJson =()=>{
        let str="";
        const arr =[{id:'1', productName:'Apple', price:100},
        {id:'2', productName:'Orange', price:50},
        {id:'3', productName:'Banana', price:20}]         
        const bb =  arr.map((item)=>{
            item.productName = "AA"
            return item
        })
       
        return bb
    }

    const forEachObjectJson =()=>{
        let str="";
        const arr =[{id:'1', productName:'Apple', price:100},
        {id:'2', productName:'Orange', price:50},
        {id:'3', productName:'Banana', price:20}]         
        arr.forEach((item)=>{
            item.productName = "AA"
        })
       
        return arr
        /*map():
        Creates a new array, leaving the original array unchanged (immutable operation).
        forEach():
        Doesn't create a new array and can modify the original array (mutable operation if the callback function modifies the elements). */
    }

    const SumOfObjectJson =()=>{
        let str="";
        const arr =[{id:'1', productName:'Apple', price:100},
        {id:'2', productName:'Orange', price:50},
        {id:'3', productName:'Banana', price:20}]         
        const totalPrice = arr.reduce((sum,item)=> sum + item.price,0)
       
        return totalPrice
    }

    const getObservable =()=>{
        getRXJSObservable().subscribe((item)=>{
            console.log('observable -- ',item)
            setObserv(item)
        }) 
    }
    const getPromise =()=>{
        getPromises().then((item)=>{
            console.log('promise -- ',item)
            setPromis(item)
        }).catch((error) => {
            console.error(error);
            setPromis(error)  // If rejected, this will run 
        }) 
    }
    const getSubjectObservable =()=>{
       
        getSubjectObs().subscribe((item)=>{
            console.log('subject observable -- ',item)
            setsubObserv(item)
        }) 
        setSubjectObs('subject observable - 1');
    }

    const fetchApiWithObservable =()=>{       
        fetchUserDetailServiceObservable(1).subscribe((data)=>{
            console.log('api data -- ',data)
            setApiData(data)
        }).catch((error) => {
            console.error(error);
            setApiData(error)  // If rejected, this will run 
        })          
    }
    const fetchApiWithPromise =()=>{       
        fetchUserDetailServicePromese(1).then((res)=>{
            console.log('api data -- ',res.data)
            setApiData(res.data)
        }).catch((error) => {
            console.error(error);
            setApiData(error)  // If rejected, this will run 
        })          
    }

    const uniqArrayWithoutSet=()=>{
        const arr = [1,2,4,1,2,3];
        const uniq = arr.filter((value,index,self)=> self.indexOf(value)===index);
        return uniq;
    }

    const uniqArrayObject=()=>{
        const array = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' },
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' },
          ]
        const uniq = array.filter((value,index,self)=> self.findIndex(v=> v.id === value.id)===index);
        return uniq;
    }

    const findItemFromObjectJson =()=>{
        let str="";
        const arr =[{id:'1', productName:'Apple', price:100},
        {id:'2', productName:'Orange', price:50},
        {id:'3', productName:'Banana', price:20}]  
        const itemarr = [2,3]       
        const sorted = arr.filter((item)=> itemarr.includes(parseInt(item.id)))
       
        return sorted
    }

    const sumFromObjectJson =()=>{
        let str="";
        const arr =[{id:'1', productName:'Apple', price:100},
        {id:'2', productName:'Orange', price:50},
        {id:'3', productName:'Banana', price:20}]  
        const itemarr = [2,3]       
        const a = arr.filter(item=> itemarr.includes(parseInt(item.id)))

        const c =a.reduce((a,b)=> a + parseInt(b.price),0)
            
        return c;
    }

    return (<>
    <h2>Common JS Examples</h2>
    <div className="tab-div" >
         <b>Sorted Integer Array :</b> {intArray.join(' ,')}
        <input type="number" value={intSortInput} onChange={(e)=>setIntSortInput(e.target.value)} placeholder="Enter Number to add in array"/> 
        <button onClick={addNumInSortArray}>Add Int Sort</button>
    </div>
    <div className="tab-div">
         <b>Sorted Char Array : </b>{charArray.join(' ,')}
        <input type="text" value={charSortInput} onChange={(e)=>setCharSortInput(e.target.value)} placeholder="Enter text to add in array"/> 
        <button onClick={addCharInSortArray}>Add Char Sort</button>
    </div>
    <div className="tab-div">
         <b>Unique Int Array :</b> {getUniqueIntArray().join(' ,')} <br></br>
         <b>Unique Char Array :</b> {getUniqueCharArray().join(' ,')} <br></br>
         <b>Unique Array without Set :</b> {uniqArrayWithoutSet().join(' ,')} <br></br>
         <b>Unique Array Objet :</b> {JSON.stringify(uniqArrayObject())}        
    </div>
    <div className="tab-div">
         <b>Sprade Operator Integer :</b> {checkSpradeOperatorsInt().join(' ,')}         
    </div>
    <div className="tab-div">
         <b>Sprade Operator Simple Json :</b>      
         <div dangerouslySetInnerHTML={{ __html: checkSimpleSpradeOperatorsJson() }} />     
    </div>

    <div className="tab-div">
         <b>Sprade Operator Object Json : </b>     
         <div dangerouslySetInnerHTML={{ __html: checkObjectSpradeOperatorsJson() }} />     
    </div>
     <div className="tab-div">
         <b>Sort Array Object Json -ProductName :</b> {JSON.stringify(sortArrayObjectJsonString())}  <br></br>   
         <b>Sort Array Object Json -Price :</b> {JSON.stringify(sortArrayObjectJsonNumber())} <br></br>
         <b>Sort Array Object Sort by age if names are the same :</b> {JSON.stringify(sortArrayObjectwithTwoField())} <br></br>
    </div>
    <div className="tab-div">
         <b>Filter Array Object Json :</b> {JSON.stringify(filterObjectJson())}          
    </div>
    <div className="tab-div">
         <b>MAP Array Object Json :</b> {JSON.stringify(mapObjectJson())}
    </div>
    <div className="tab-div">
         <b>Find Items from Object Json :</b> {JSON.stringify(findItemFromObjectJson())}
    </div>
    <div className="tab-div">
         <b>ForEach Array Object Json :</b> {JSON.stringify(forEachObjectJson())}
    </div>
    <div className="tab-div">
         <b>Reduce Array Object Json Total Price:</b> {(SumOfObjectJson())}
    </div>
     <div className="tab-div">
        <div><b>Observable values :</b> {observ}</div> 
        <button onClick={getObservable}>Get Observable</button>
    </div>
    <div className="tab-div">
        <div><b>Promises values :</b> {promis}</div> 
        <button onClick={getPromise}>Get Promise</button>
    </div>
    <div className="tab-div">
        <div><b>Subject Observable values :</b> {subobserv}</div> 
        <button onClick={getSubjectObservable}>Get subject Observable</button>
    </div>
    <div className="tab-div">
        <div><b>Fetch API Observable :</b> {JSON.stringify(apiData)}</div>
         <button onClick={fetchApiWithObservable}>Fetch API Observable</button>
    </div>
    <div className="tab-div">
        <div><b>Fetch API Promises :</b> {JSON.stringify(apiData)}</div>
         <button onClick={fetchApiWithPromise}>Fetch API Promise</button>
    </div>
    
    </>)
}

export default CommonExamples