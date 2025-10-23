const handleAddToStorage = () => {
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;

    // localStorage.setItem("email", email); 
    // localStorage.setItem("name", name); 

    localStorage.setItem(id, JSON.stringify(data))
}

