import React from 'react'

function ProjectCard({ name, desc, thumbnail, link, sourceCodeLink }) {
  return (
    <div className='project'>
        <div className="thumbnail-container">
            <img className='project-thumbnail' src={thumbnail} alt="thumbnail"/>
        </div>
        <hr />
        <div className="card-main">
            <h1 style={{textAlign: "center"}}>{name}</h1>
            <br />
            <p>{desc}</p>
        </div>
        <div className="card-footer">
            <div className="buttons">
                <a href={link} target='_blank'>Voir le projet</a>
                <a href={sourceCodeLink} target='_blank'>Voir le code source</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard