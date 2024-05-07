import React, {useState} from "react";
import Button from '@mui/material/Button';
import Header from "../components/header";
function Dashboard() {


  const[followingUsers, setFollowingusers]=useState([]);
  const[followersUsers, setFollowersUsers]=useState([]);


  const handleFile=(event)=>{
    if(event.target.files.length!==2){
      alert("You must upload 2 files");
      event.target.value='';
      return;
    }
    const following= findFile(event.target.files, "following");
    const followers= findFile(event.target.files, "followers_1");
    
    if(following){
      readFile(following)
    }
    if(followers){
      readFile(followers)
    }
    else {
      alert("Your uploaded files do not match specifications")
    }
       
  }
  const findFile=(files,name)=>{
    for(let i = 0; i<files.length;i++) {
      console.log(files[i].name +" name in findfile")
      if(files[i].name.toLowerCase().includes(name)){
        console.log("found file with name "+name)
        return files[i];
      }
    }
    console.log("file with name ," +name+ " not found")
    return null;
  }
  const readFile=(file) =>{
    file.text().then((text)=>{
      const data = JSON.parse(text);
      console.log("parsed json data "+data)
      if(data.relationships_following) {
        console.log("am i here?")
        const usernames = data.relationships_following.map(item=>item.string_list_data[0].value);
        console.log(usernames+"usernames")
        setFollowingusers(usernames);

      } else {
          const usernames = data.map(item=>item.string_list_data[0].value);
          console.log(usernames+ " Here we added to followers")
          setFollowersUsers(usernames);
      }
    }).catch((error)=>{
            console.log("error reading following" + error)
        })
  }
/*
    const handleFileFollowing=(event)=>{
        const file = event.target.files[0]
        file.text().then((text)=>{
            const data = JSON.parse(text);
             const usernames = data.relationships_following.map(item=>item.string_list_data[0].value);
             setFollowingusers(usernames);
        }).catch((error)=>{
            console.log("error reading following" + error)
        })
    }
    const handleFileFollowers=(event)=>{
        const file = event.target.files[0]
        file.text().then((text)=>{
            const data = JSON.parse(text);
            const usernames = data.map(item=>item.string_list_data[0].value);
            console.log(usernames+ " Here we added to followers")
            setFollowersUsers(usernames);
        }).catch((error)=>{
            console.log("error reading followers" + error)
        })
    }
*/

    const checkFollowers=()=>{
        console.log("Following Users;, "  + followingUsers)
        console.log("Followers Users;, "  + followersUsers)

        const notFollowing= followingUsers.filter(name=>!followersUsers.includes(name));
        console.log(" notfollowing u back\n"+notFollowing);
    }
  return (
    <>
    <Header/>
      <div style = {{paddingTop:"70px", paddingLeft:"20px"}}>
      
       <h1>
         Place your JSON file in here</h1>
         <input type="file" accept=".json" multiple onChange={handleFile}/>
      </div>
     
      <div>
        <Button onClick={checkFollowers}>See who doesnt follow you back!</Button>
      </div>
      
    </>
  );
}

export default Dashboard;
