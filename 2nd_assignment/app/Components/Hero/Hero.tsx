import React from 'react'
import style from "./Hero.module.css"
const Hero = () => {
  return (
    <div>
    <section>
        <p className={style.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            A in nostrum enim cumque dolore. Pariatur eos ut, beatae harum,
            iure laboriosa expedita quos ducimus a repudiandae numquam 
            nostrum quo doloribus.</p>
        <p className={style.paragraph}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Nihil consectetur, maxime mollitia vero provident ad dolorum ex earum quasi corporis, 
             inventore fugit,accusamus quis architecto placeat voluptatum 
             laboriosam adipisci? Nesciunt?</p>   
        <p className={style.paagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit blanditiis quae distinctio molestias
            voluptatibus, quaerat adipisci animi vel voluptate laudantium,
            perspiciatis dolor ullam cumque sit dicta iure sed voluptatem 
            odio.
        </p>      
      </section>
    </div>
  )
}

export default Hero
