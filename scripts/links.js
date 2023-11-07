const baseURL = "https://richakwe.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch('data/links.json');
    const data = await response.json();
    displayLinks(data);

    function displayLinks(weeks) {
        const linksContainer = document.getElementById("links-container");
        let output = "";
        for (let i = 0; i < weeks.length; i++) {
            const week = weeks[i];
            const weekNumber = week.lesson;
            const links = week.links;
            output += `<h2>Week ${weekNumber}</h2>`;
            output += "<ul>";
            for (let j = 0; j < links.length; j++) {
                const link = links[j];
                const url = baseURL + link.url;
                const title = link.title;
                output += `<li><a href="${url}">${title}</a></li>`;
            }
            output += "</ul>";
        }
        linksContainer.innerHTML = output;
    }
    
}

