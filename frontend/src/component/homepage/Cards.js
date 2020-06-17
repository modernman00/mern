import React from 'react'

export default function Cards({name, username, no}) {
    let style = `style${no}`

    return (

          
                    <article className={style}>
									<span className="image">
										<img src={require (`./img/pic${no}.jpg`)} alt="" />
									</span>
									<a href="generic.html">
										<h2>{name}</h2>
										<div className="content">
											<p>{username}.</p>
										</div>
									</a>
								</article>

            
    )
}
