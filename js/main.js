const collapsibles = document.querySelectorAll(".collapsible__toggler")


collapsibles.forEach(item => item.addEventListener("click", function() {
    item.classList.toggle("collapsible--expanded");
    })
);