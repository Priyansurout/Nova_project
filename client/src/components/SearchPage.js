import React from 'react'
import MusicCardes from './MusicCardes'
import {useState ,useEffect} from 'react'



export default function SearchPage(props) {

    //const [searchtext,SetsearchText] = useState("")
    const [musicdata, SetMusic] = useState(false)
    //const [alert, Setalert] = useState(false)
    const [art_name, Setname] = useState("")


    console.log("Renser after useState ->", art_name);


    const Callfunc = () => {

        
        console.log("<--------- GO BUTTON IS CLICKED --------->")
        
        let name = document.getElementById("text_name").value;
    
        Setname(name)

       

    
    }
    
     
    useEffect( () => {
        
        Work_onclick()
        
        console.log("USER EFFECT: ",art_name)
        if (art_name.trim().length !== 0){
            
            props.search(art_name);     
            //Setalert(false)
        
        }
        else {
            console.log("<--------- INPUT VALUE IS EMPTY --------->")
            //Setalert(true)
        }
        
    }
    ,[art_name])


    
    const Work_onclick = () => {
        console.log("work on fun--------------------->: ", art_name)
        if (props.data_art && art_name){

            SetMusic(true)
        }else{
            SetMusic(false)
        }
    }


    

  
  return (
    <>
        {/* GO FORM HERE */}
       
    
        
        <div className="flex justify-between py-7 px-10 bg-gray-50 border-b">


            <form >
                <span className="block text-xl font-medium text-slate-800 ml-3 mb-2">Artist-Name:</span>
                <input type='text' name="search" placeholder='Search Name' id="text_name"  className='px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2  '
                                                           />
                <button type="button" className="btn btn-outline-primary mx-3" onClick={Callfunc} >GO</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => {Setname("");SetMusic(false)}}>Clear</button>
            </form>
            
        </div>
        

        <div className='container mx-3 my-3'>
    
                    <div className='row'>
                        {musicdata && props.data_art?.map( element => {
                                        return <div key={element.uri} className='col-md-4 my-3'>
                                            <MusicCardes  music_img={element.images[0].url} name_music={element.name} uri={element.uri} /> 
                                        </div>
                                    })} 
                    </div>

        </div>
       

        <div className='container'>
            {!musicdata && <MusicCardes/>}
        </div>
       



        

    </>
  )
}
