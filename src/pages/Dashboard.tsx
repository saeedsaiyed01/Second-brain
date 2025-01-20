import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { Sidebar } from "../components/ui/Sidebar";
import { BACKEND_URL } from "../config";
import { useContent } from "../hooks/useContent";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/Shareicon";
function Dashboard() {
    const [modalOpen, setModelOpen] = useState(false);
    const {contents, refresh} = useContent();

    useEffect(() => {
      refresh();
    }, [modalOpen])


    

  return (
    <div >
    <Sidebar/>
  <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
    <CreateContentModal
      onOpen={modalOpen}
      onClose={() => {
        setModelOpen(false);
      }}
    />
     

    <div className="flex justify-end gap-5">
      <Button
      onClick={async ()=>{
        const response:any= await axios.post(BACKEND_URL+"/api/v1/brain/share",{
            share:true
        },{
            headers:{
                "Authorization":localStorage.getItem('token')
            }
        });
        const shareUrl = `http://localhost:5173/share${response.data.hash}`
        alert(shareUrl)
      }}


        startIcon={<ShareIcon size="lg" />}
        size="md"
        variant="primary"
        text="share"
      />
      <Button
        onClick={() => {
          setModelOpen(true);
        }}
        startIcon={<PlusIcon size="lg" />}
        size="md"
        variant="secondary"
        text=" Add content"
      />
    </div>
    <div className="flex gap-4 flex-wrap">
        {contents?.map(({type, link, title}) => <Card 
            type={type}
            link={link}
            title={title}
        />)}
      </div>
  </div>
  </div>
    
  )
}

export default Dashboard
