const api_url = "https://kontests.net/api/v1/all";

         async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
    
    
}
function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>url</th>
          <th>start_time</th>
          <th>end_time</th>
         </tr>`;
    
    // Loop to access all rows 
    for (var i=0; i<data.length; i++) {
        tab += `<tr> 
    <td>${data[i].name} </td>
    <td><a class="btn" href="${data[i].url}" rel="noopener noreferrer" target="_blank">visit</a></td>
    <td>${data[i].start_time}</td> 
    <td>${data[i].end_time}</td>          
</tr>`;
    }
    document.getElementById("list").innerHTML = tab;
}
getapi(api_url);
