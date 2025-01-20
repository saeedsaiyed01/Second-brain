import axios from "axios";
import { useRef, useState } from "react";
import { BACKEND_URL } from "../../config";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";



enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
  Randomlink = "randomlink",
}
//controlled component
export function CreateContentModal({ onOpen, onClose }) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

 async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    console.log(titleRef.current?.value)
    console.log(linkRef.current?.value)

   await axios.post(BACKEND_URL +"/api/v1/content",{
    link,
    type,
    title,
   
   },{
    headers:{
        "Authorization":localStorage.getItem("token")
    }
   }
   
  
   )
   onClose();
  }
 
  return (
    <div>
        
      {onOpen &&  <div>
        <div className="w-screen  flex items-center justify-center h-screen bg-slate-500 fixed top-0 left-0 opacity-65">
           
        
        </div>

        <div className="w-screen  flex items-center justify-center h-screen fixed left-0 ">
           
        <div className="flex flex-col justify-center opacity-100">
            <span className="p-4 rounded-md bg-white ">
              <div className="flex justify-end cursor-pointer">
                <div onClick={onClose}>
                  <CrossIcon />
                </div>
              </div>
              <div>
                <InputBox reference={titleRef} placeholder={"title"} />
                <InputBox reference={linkRef} placeholder={"link"} />
                <h1>Type</h1>
                <div className="flex gap-2 justify-center">
                  <Button
                 
                  size="md"
                    text="Youtube"
                    variant={
                      type === ContentType.Youtube ? "secondary" : "primary"
                    }
                    onClick={()=>{
                        console.log("Clicked Youtube");
                            setType(ContentType.Youtube)
                    }}
                  ></Button>
          
                    <Button
                       size="md"
                    text="Twiiter"
                    variant={
                      type === ContentType.Twitter ? "secondary" : "primary"
                    }
                    onClick={()=>{
                        console.log("Clicked Twitter");
                            setType(ContentType.Twitter)
                    }}
                  ></Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  onClick={addContent}
                  text="submit"
                  variant="primary"
                  size="md"
                />
              </div>
            </span>
          </div>
        </div>
        </div>
      }
    </div>
  );
}
