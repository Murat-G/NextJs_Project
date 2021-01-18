import styles from '../styles/Home.module.css'
import { useState } from 'react'
export default function Home() {

const [state, setState] = useState( {file: "",imagePreviewUrl: ""})
const [comment, setComment] = useState("")
const [title, setTitle] = useState("")
const [save,setSave] = useState({ saveTitle : "", saveDesc:"", saveImage: "" })

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

function showPage() {
  if(comment && title && imagePreviewUrl) {

  setSave({ saveTitle : title, saveDesc: comment, saveImage: imagePreviewUrl})
  setComment("")
  setTitle("")
  setState({ file:"" , imagePreviewUrl:""})
  }
}

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
              autocomplete="off"
              value={title}
            />

            <div className={styles.mainDesc}>
              <textarea
                name="comments"
                placeholder="New Description"
                className={styles.mainDescInput}
                maxLength="1460"
                onChange={(e) => setComment(e.target.value)} 
                value={comment}
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
                    styles.uploadNone
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
            <button 
              className={comment && title && imagePreviewUrl ? styles.buttonActive : styles.button}
              onClick={showPage}
            >
            </button>

          </div>

        </div>
        
        <div> <hr className={styles.line}/> </div>
                    
      {/* ////////////////////////////////////////////////////////////////////////////////// */}
        <div className={styles.content2}>
          <div className={styles.containerHeader}>
            <p className={styles.headerTitle}>New Title</p>
          </div>
    
          <div className={styles.main}>

            <input 
              type="text" 
              className={styles.mainInput} 
              name="Title" 
              value={save.saveTitle}
              readOnly
            />

            <div className={styles.mainDesc}>
              <textarea
                name="comments"
                className={styles.mainDescInput}
                maxLength="1460"
                value={save.saveDesc}
                readOnly
              >
              </textarea>
            </div>

            <div className={styles.mainDone}>
              <div className={styles.imagePlus} id="my-content"> 
                <img
                  src= {save.saveImage}
                  alt="imagenone"
                  className={
                    save.saveImage ? 
                    styles.uploadImage :
                    styles.uploadNone
                  }        
                />
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}