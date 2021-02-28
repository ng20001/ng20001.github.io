x = new Date()
month = ["January", "Feburary", "March", "Apil", "May", "June", "July", "August", "September", "October", "November", "December"]
day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
document.getElementById("currentDate").innerHTML = `${day[x.getDay()]}, ${x.getDate()} ${month[x.getMonth()]} ${x.getFullYear()}`
