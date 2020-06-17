import React from 'react'
import Header from "./Header"
import Cards from './Cards'
import "./Home.css"


export default function Homepage({ cardData }) {
    let no = 0
    console.log(cardData)
    return (

        <div className="main">
            <Header />
            <section className="tiles">

                {

                    cardData.map(el => {
                        no++
                        return <Cards key={el._id}
                            name={el.name}
                            username={el.username}
                            no={no}
                        />

                    })
                }
            </section>





        </div>


    )
}
