import React from 'react'

function Card({username=" Not given ",post=" Not mentioned", src}) {
    //console.log();
  return (
    // <div>
    //     <img src="https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=clouds-cloudy-conifers-247478.jpg&fm=jpg" alt=""/>
    //     <h1 classclassName='text-2xl bg-green-500 p-3 rounded'>A card for photos</h1>
    //     <p>Tailwind CSS is a CSS framework that helps users create websites and applications more quickly and easily</p>
    // </div>
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src={src} alt="" width="384" height="512"/>
        <div className="pt-6 text-center space-y-4">
        <blockquote>
            <p className="text-lg font-medium">
            Hi !! Let's learn React...
            </p>
        </blockquote>
        <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
            {username}
        </div>
        <div className="text-slate-700 dark:text-slate-500">
            {post}
        </div>
        </figcaption>
        </div>
    </figure>
    )
}

export default Card