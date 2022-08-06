// Components
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

// Styles
import styles from './App.module.css'
import './global.css'



// Author: { avatar_url:"", name:"", role:"" }
// publishedAt: Date
// content: String 
const posts = [
  {
    id:1,
    author: {
      avatarUrl:"https://github.com/wilsonmdrs.png",
      name:"Wilson Medeiros",
      role:"Computer Scientist"
    },
    publishedAt: new Date("2022-07-27 12:00:00"),
    content: [
      {type:"paragraph", content:"Fala galeraa 👋<"},
      {type:"paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type:"link", content:"jane.design/doctorcare"},
    ]
  },
  {
    id:2,
    author: {
      avatarUrl:"https://github.com/diego3g.png",
      name:"Diego Fernandes",
      role:"CTO @rocketseat"
    },
    publishedAt: new Date("2022-07-27 12:00:00"),
    content: [
      {type:"paragraph", content:"Fala galeraa 👋<"},
      {type:"paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type:"link", content:"jane.design/doctorcare"},
    ]
  }
]

export function App() {

  

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post key={post.id} {...post} />
            )
          })}
        </main>

      </div>
    </div>
  )
}

