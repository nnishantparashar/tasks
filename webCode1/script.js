// search new name data
function searchNew() {
  const input = document.createElement("div");
  input.setAttribute("id", "inputDiv");
  input.innerHTML = `
        <h4> Enter Name to Get Nationality Data </h4>
        <input type="text" id="inputName">
        <br />
        <br />
        <button onclick="getData()">Get Data</button>
    `;

  document.body.appendChild(input);

  document.getElementById("dataTable").remove();
  document.getElementById("searchDiv").remove();
  document.getElementById("dataDiv").remove();
}

// create url to fetch data

function getUrl() {
  var name = document.getElementById("inputName");

  let url = "";

  if (typeof name == "undefined" || name === null || name.value === "") {
    url = `https://api.nationalize.io/?name=michael`;
  } else {
    url = `https://api.nationalize.io/?name=${name.value}`;
  }

  return url;
}

// function to get the nationality data

async function getData() {
  var nationalizeApiUrl = getUrl();
  var flagUrl = "<img src={`https://flagcdn.com/48x36/${code}.png>";
  try {
    const response = await fetch(nationalizeApiUrl);
    const nameList = await response.json();
    var resultName = nameList.name;
    if (resultName === "michael") {
      resultName += "(default)";
    }
    var countryArray = nameList.country;

    const dataDiv = document.createElement("div");
    dataDiv.setAttribute("id", "dataDiv");
    dataDiv.innerHTML = `
            <h1>Response from Nationalize Api</h1>
            
            <p>Showing data for: <mark> ${resultName}</mark></p>
            <button onclick="searchNew()">Search New Name</button><br/>
            <br />
      `;
    document.body.appendChild(dataDiv);
    const dataTable = document.createElement("table");
    dataTable.setAttribute("id", "dataTable");

    const head = `<tr>
      <th>Country Id</th>
      <th>Country Name</th>
      <th>Probability</th>
      <th>Country Flag</th>
  </tr>`;

    dataTable.innerHTML = head;

    countryArray.forEach((country) => {
      var cCode = country.country_id.toLowerCase();
      const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
        type: "region",
      });
      var countryName = regionNamesInEnglish.of(country.country_id);

      var row = `
            <tr>
                <td>${country.country_id}</td>
                <td>${countryName}</td>
                <td>${country.probability}</td>
                <td><img src="https://flagcdn.com/48x36/${cCode}.png"></td>

            </tr>
        `;

      dataTable.innerHTML += row;
    });

    dataTable.setAttribute("border", "1px");

    document.body.appendChild(dataTable);

    const searchDiv = document.createElement("div");
    searchDiv.setAttribute("id", "searchDiv");

    searchDiv.innerHTML = `
        <br />
        <button onclick='getTop1()'>Get Top Country</button>
        <button onclick='getTop2()'>Get Top 2 Country</button>
        <button onclick='getTopProb()'>Get Highest Probability</button>
          
       
    `;

    document.body.appendChild(searchDiv);
    document.getElementById("inputDiv").remove();
  } catch (error) {
    console.log(Error);
  }
}

// get top1 result

async function getTop1() {
  console.log("Top1 function called") //test
  // var nationalizeApiUrl = getUrl();
  // var flagUrl = "<img src={`https://flagcdn.com/48x36/${code}.png>";
  // try {
  //   const response = await fetch(nationalizeApiUrl);
  //   const nameList = await response.json();
  //   var resultName = nameList.name;
  //   if (resultName === "michael") {
  //     resultName += "(default)";
  //   }
  //   var countryArray = nameList.country;

  //   const top1data = document.createElement("div");
  //   top1data.setAttribute("id", "top1data");
  //   top1data.innerHTML = `
  //           <h1>Response from Nationalize Api</h1>
            
  //           <p>Showing data for: <mark> ${resultName}</mark></p>
  //           <button onclick="searchNew()">Search New Name</button><br/>
  //           <br />
  //     `;
  //   document.body.appendChild(top1data);
  //   const top1Table = document.createElement("table");
  //   top1Table.setAttribute("id", "top1Table");

  //   const head = `<tr>
  //     <th>Country Id</th>
  //     <th>Country Name</th>
  //     <th>Probability</th>
  //     <th>Country Flag</th>
  // </tr>`;

  // top1Table.innerHTML = head;

  // var topCountry = countryArray[0].country_id;
  // var topProp = countryArray[0].probability;

  // var cCode = topcountry.toLowerCase();
  // // const regionNamesInEnglish = new Intl.DisplayNames(["en"], {type: "region",
  // // });
  // var countryName = regionNamesInEnglish.of(topCountry);

  // console.log(topCountry, topProp, countryName);
  //     var row = `
  //          <tr>
  //              <td>${topCountry}</td>
  //              <td>${countryName}</td>
  //              <td>${topProp}</td>
  //              <td><img src="https://flagcdn.com/48x36/${cCode}.png"></td>

  //          </tr>
  //      `;

  //     top1Table.innerHTML += row;

     
  //     top1Table.setAttribute("border", "1px");

  //   document.body.appendChild(top1Table);

  //   const searchDiv = document.createElement("div");
  //   searchDiv.setAttribute("id", "searchDiv");

  //   searchDiv.innerHTML = `
  //       <br />
  //       <button onclick='getTop1()'>Get Top Country</button>
  //       <button onclick='getTop2()'>Get Top 2 Country</button>
  //       <button onclick='getTopProb()'>Get Highest Probability</button>
          
       
  //   `;

  //   document.body.appendChild(top1div);
  //   document.getElementById("inputDiv").remove();
  //   document.getElementById("dataDiv").remove();

  // =============================
  
    
  // } catch (error) {
  //   console.log(Error);
  // }
}

function getTop2() {
  console.log("Top2 function called"); //test
}

function getTopProb() {
  console.log("Top Probability function called"); //test
}
