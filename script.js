function remove(connectionRequestName, acceptOrClose){
    let reqCount = document.getElementById('reqCount')
    let curCount = reqCount.innerHTML
    document.getElementById(connectionRequestName).style.visibility = 'hidden'
    curCount--
    reqCount.innerHTML = curCount

    if (acceptOrClose === 'accept')
    {
        updateConnectionCount()
    }

}

function updateConnectionCount(){
    let yourConnCount = document.getElementById('yourConnCount')
    let curCount = yourConnCount.innerHTML
    curCount++
    yourConnCount.innerHTML = curCount
}

function editProfile(){
    var userName = document.getElementById('userName')
    userName.innerHTML = 'Any Other Name'
}