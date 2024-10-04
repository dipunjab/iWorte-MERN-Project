import React, { useContext } from 'react'
import AuthContext from '../../ContextApi/AuthContext/AuthContext';

function Settings() {

    const context = useContext(AuthContext)
    const {deleteUser} = context

    const handleDelete = ()=>{
        const confirm1 = confirm("Wait! Are you sure you want to delete your account? 😯 All your brilliant notes and tasks will vanish into thin air!");
       if (confirm1) {
         const confirm2 = confirm("Think about it... Who will remind you of those sticky notes with world-changing ideas? 📌📝");
         if (confirm2) {
           const confirm3 = confirm("And those tasks you haven't completed yet... They might get sad! 😢 Are you really ready to say goodbye?");
           if (confirm3) {
             const confirm4 = confirm("This is your LAST chance! No more colorful sticky notes to brighten your day! 🌈");
             if (confirm4) {
               alert("Alright, farewell brave soul! Your tasks will miss you... 🗒️💔");
                deleteUser()
            } else {
               alert("Phew! That was close. Glad you're staying with us and your sticky notes! 😌");
             }
           } else {
             alert("Good choice! Your tasks are grateful for your decision. 📝❤️");
           }
         } else {
           alert("Smart move! Those notes have a lot more ideas left in them! ✨");
         }
       } else {
         alert("Crisis averted! Your notes are safe and sound! 🗒️🎉");
       }
       
       
    }
  return (
    <div className='container'>
        <div>
             <h1 className='text-center'>Settings</h1>       
        </div>
        <div className='m-5 p-5'>
            <button className='btn btn-danger' onClick={handleDelete}>Delete Account</button>
        </div>
    </div>
  )
}

export default Settings
