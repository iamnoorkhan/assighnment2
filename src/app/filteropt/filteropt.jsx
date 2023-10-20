
import styles from './filteropt.module.css'
import Image from 'next/image'
import img1 from '../filteropt/firstimg.jpeg';
import img2 from "../filteropt/aws.jpeg"
import img3 from "../filteropt/devops.jpeg"
import img4 from "../filteropt/programming.jpeg"
import img5 from "../filteropt/mobile.jpeg"
import filter from '../filteropt/filter.png'


function Filter() {
  

  return (
    <div className={styles.container}>
        <h1>Latest Posts</h1>

        <div style={{display:'flex'}}>
        <Image src= {filter} alt='logo' style={{height:'20px', width:'20px' , paddingTop:'23px'}}/>
        <h4 style={{ display:'inline-block'}}>filter by category</h4>
        </div>

        <div className={styles.filters}>
            <button>All</button>
            <button>Artificial Intelligence</button>
            <button>Cloud Computing</button>
            <button>DevOps</button>
            <button>Programming Languages</button>
            <button>Mobile Application Development</button>
        </div>

        <div className={styles.mainbox}>

          <div><Image src= {img1} alt="Logo" style={{height:'40%' ,width:'100%'}}/>
          <h3>Typical day of Data Scientist - An insider story!
          </h3>
          <p><span>Saurav Ghosh  </span>|  05 Jul 2019</p>
          <p>To me Data Science can be encapsulated in a simple statement, it helps organizations and       individuals to solve complex problems while minimizing human effort. There are several different  aspects to this, which we shall go into later.
          Here I have tried to answer some of the frequently asked questions by friends and juniors planning to switch their profiles and roles in the areas of Business Analytics, Data Science, and Machine Learning.
          </p>
          </div>

          <div><Image src= {img2} alt="log" style={{height:'40%' ,width:'100%'}}/>
          <h3>Amazon Web Services (AWS) Cloud Day - Bangalore
          </h3>
          <p><span>Kalyan Mahalingam</span>| 05 Jul 2019</p>
          <p>So What is DevOps all about -
              DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the de-facto component in Software Development Lifecycle (SDLC) process in most of the organizations.
          </p>
          </div>

          <div><Image src= {img3} alt="log" style={{height:'40%' ,width:'100%'}}v/>
          <h3>From identity crisis to the Success Story - The DevOps revolution!
          </h3>
          <p><span>Kalyan Mahalingam</span>| 05 Jul 2019</p>
          <p>So What is DevOps all about -
              DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the de-facto component in Software Development Lifecycle (SDLC) process in most of the organizations.
          </p>
          </div>

          <div><Image src= {img4} alt="log" style={{height:'40%' ,width:'100%'}}/>
          <h3>Learn these Programming Languages in 2019
          </h3>
          <p><span>EdYoda</span>| 08 Jul 2019</p>
          <p>Starting a career as a software developer obviously requires one to undertake a programming languages course that can cover everything from the basics to even the minute details. To learn a programming language though, one needs to also understand which one is suitable for you.</p>
          </div>

          <div><Image src= {img5} alt="log" style={{height:'40%' ,width:'100%'}}/>
          <h3>Why you should accelerate your knowledge on Mobile App Development
          </h3>
          <p><span>EdYoda</span>| 23 Jul 2019</p>
          <p>Over the most recent 10 years, Android has become famous, not only with its themes that have candy names yet in addition to its broad, and sudden, achievement. In its lifetime, the open-source portable working framework has developed to incorporate 1.4 billion dynamic clients and 80% of cell phones today run Android programming. </p>
          </div>

          <div><Image src= {img2} alt="log" style={{height:'40%' ,width:'100%'}}/>
          <h3>Amazon Web Services (AWS) Cloud Day - Bangalore
          </h3>
          <p><span>Kalyan Mahalingam</span>| 05 Jul 2019</p>
          <p>So What is DevOps all about -
              DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the de-facto component in Software Development Lifecycle (SDLC) process in most of the organizations.
          </p>
          </div>
        
        </div>
    </div>
  )
}

export default Filter;