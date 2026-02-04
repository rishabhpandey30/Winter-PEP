
/* Fetch API */
const container = document.getElementById("container");
async function fetchData() {
    container.innerHTML = "<h1>Loading data...</h1>";
    try {
        const [usersRes, postsRes] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/posts"),
        ]);
        if (!usersRes.ok) throw new Error(`Users HTTP error: ${usersRes.status}`);
        if (!postsRes.ok) throw new Error(`Posts HTTP error: ${postsRes.status}`);
        const [usersData, postsData] = await Promise.all([usersRes.json(), postsRes.json()]);
        let html = "<b>Users:</b><br/>";
        html += usersData.map(u => `<li>${u.name}</li>`).join("");
        html += "<br/><b>Posts:</b><br/>";
        html += postsData.slice(0, 10).map(p => `<li>${p.title}</li>`).join("");
        container.innerHTML = html;
    } catch (err) {
        container.innerHTML = `Error: ${err.message}`;
        console.error(err);
    }
}
fetchData();