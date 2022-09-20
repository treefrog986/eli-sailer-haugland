import { useState } from "react"

export default function Hello() {
    const [name,setName] = useState()
    async function Submit(){
        const res =await fetch('/api/hello',{
            method:"POST",
            body: null
        }).then(t=> t.json())
        setName(res.message)
    }
    return (<div>
        {name}
        <form method="POST" action="/api/hello">
            <input type="button" value="Submit" onClick={Submit}/>
        </form>
        </div>
    )
}