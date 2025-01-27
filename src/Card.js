import React from 'react'

export default function Card({id}) {
  return (
    <div class="card">

                    <div class="image-box">
                        <img src="./házikó.png" />
                    </div>
                    <div class="feljo">
                        <h5>Eladó Lakás {id}</h5>
                        <p>Leírás: Csendes környéken található lakás, közel a közlekedéshez.</p>
                    
                    </div>
     </div>
  )
}
