async function teste(){
    const info = await fetch("http://localhost:3000/getUsuarios?nome=valdemir")

    console.log(await info.json())
}

teste()