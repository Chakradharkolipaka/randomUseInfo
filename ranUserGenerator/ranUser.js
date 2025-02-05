async function getRandomUser(){
    try{
        const resourse = await fetch("https://randomuser.me/api/");
        if(!resourse.ok){
            throw new Error(`http error: status: ${resourse.status}`);
        }
        const data = await resourse.json();
        const user = data.results[0];
        let randomUser = document.getElementById("randomUser");
        randomUser.innerHTML =`
        <img src=${user.picture.large} alt="user pic" width=100px height=100px  >
        <p>
            <strong> Name:</strong> ${user.name.first} ${user.name.last}
        </p>
        <p>
            <b>Email:</b> ${user.email}
        </p>
        <p>
            <b>Gender:</b> ${user.gender}
        </p>
        <p>
            <b>location:</b> ${user.location.city} , ${user.location.country}
        </p>
           
        `;

    }catch(error){
        randomUser.innerHTML = `<p>http error occured</p>`;
        console.error(`error fetched : ${error}`);
    }

}