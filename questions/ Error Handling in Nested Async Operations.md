# Describe how you would handle errors in a multi-step async operation where you need to fetch a user, then fetch their settings, then update those settings. If any step fails, you need to log which step failed and potentially rollback changes. How would you structure this?

```

async function userSettingsFlow() {
    let user , prevSettings
    try{
     const userId = await fetchUSer();
     user = userId;
     const settings = await fetchSettings(userId.id);
     prevSettings = settings
      const updated = await updateUserSettings(userId.id ,{...prevSettings , theme:"dark"});
      return updated;
    } catch(err){
        console.error("Error fetching user data:", err);
        if(user && prevSettings){
          await  updateUserSettings(user.id , prevSettings)
        }
        throw err;
    }
}

userSettingsFlow().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
```