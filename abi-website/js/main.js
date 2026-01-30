console.log("JS gestartet");

const memoryData = [
{
title: "Einschulung 2018",
img: "https://picsum.photos/600/400?random=1",
text: "Unser allererster Tag an der Schule 🥹"

},
{
title: "Stufenfahrt Barcelona",
img: "https://picsum.photos/600/400?random=2",
text: "Legendäre Fahrt mit zu wenig Schlaf",
link: "memory-stufenfahrt.html"

},
{
title: "Mottowoche",
img: "https://picsum.photos/600/400?random=3",
text: "Verkleidet durch die Schule 😄"
}
];

const membersData = [
{
name: "Rebekka",
img: "https://picsum.photos/400?random=11",
fact: "Kaffee-süchtig ☕",
quote: "Abi, aber make it fashion"
},
{
name: "Max",
img: "https://picsum.photos/400?random=12",
fact: "Schläft im Unterricht 😴",
quote: "Hauptsache durch"
}
];

const memoryGrid = document.getElementById("memoryGrid");
const membersGrid = document.getElementById("membersGrid");

console.log("memoryGrid:", memoryGrid);
console.log("membersGrid:", membersGrid);

if (!memoryGrid || !membersGrid) {
alert("FEHLER: Grid-Elemente nicht gefunden. IDs stimmen nicht!");
}

// Memory Lane Karten
memoryData.forEach(item => {
const div = document.createElement("div");
div.className =
"bg-white p-3 rounded shadow hover:scale-105 transition cursor-pointer";
div.innerHTML = `
<img src="${item.img}" class="rounded mb-2">
<p class="font-semibold">${item.title}</p>
`;
div.onclick = () => {
    window.location.href = item.link;
};
memoryGrid.appendChild(div);
});

// Mitglieder Karten
membersData.forEach(m => {
const div = document.createElement("div");
div.className =
"bg-white p-3 rounded shadow hover:scale-105 transition cursor-pointer text-center";
div.innerHTML = `
<img src="${m.img}" class="rounded-full mx-auto mb-2 w-32 h-32 object-cover">
<p class="font-semibold">${m.name}</p>
`;
div.onclick = () => alert(`${m.quote}\n\nFun Fact: ${m.fact}`);
membersGrid.appendChild(div);
});

//Zitate
