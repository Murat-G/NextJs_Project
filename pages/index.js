import styles from '../styles/Home.module.css'
import { useState } from 'react'
export default function Home() {

const [state, setState] = useState( {file: "",imagePreviewUrl: ""})
const [comment, setComment] = useState("")
const [title, setTitle] = useState("")

function onWrite(e) {
  let file = e.target.files;
  let reader = new FileReader();

  reader.onloadend = () => {
    setState({
      file : file,
      imagePreviewUrl : reader.result
      })
  }
    reader.readAsDataURL(file[0]);
}  
  
  let {imagePreviewUrl} = state;
  return (
    <div className={styles.container}>

      <div className={styles.content}>

        <div className={styles.containerHeader}>
          <p className={styles.headerTitle}>New Title</p>
        </div>

        <div className={styles.main}>

          <input 
            type="text" 
            placeholder="New Title" 
            className={styles.mainInput} 
            name="Title" 
            onChange={(e) => setTitle(e.target.value)} 
          />

          <div className={styles.mainDesc}>
            <textarea
              name="comments"
              placeholder="New Description"
              className={styles.mainDescInput}
              maxLength="1460"
              onChange={(e) => setComment(e.target.value)} 
            >
            </textarea>
          </div>

          <div className={styles.mainImage}>
            <div className={styles.imagePlus} id="my-content"> 
              <img
                src= {imagePreviewUrl}
                alt="imagenone"
                className={  
                  imagePreviewUrl ? 
                  styles.uploadImage :
                  styles.uplodaNone
                }        
              />
              <label for="myfile" >
                <span className={imagePreviewUrl ? styles.plusButton : styles.plusSpan}>+</span>
              </label>
              <input 
                type="file" 
                id="myfile" 
                name="myfile" 
                className={styles.plusFile}  
                onChange={(e) => onWrite(e)}
              />
              
              <p className={imagePreviewUrl ? styles.imageNoneText : styles.imageText}>GÖRSEL</p> 

            </div>
          </div>

          <button className={styles.button}></button>

        </div>

      </div>

    </div>
  )
}




// // {/* <form enctype="multipart/form-data" action="/upload/image" method="post">
//               // <input id="image-file" type="file" />
//           // </form> */}

// {/* <p className={styles.mainDescText}>New Description</p> */ }
// {/* <input type="text" placeHolder="New Description"  name="desc" /}