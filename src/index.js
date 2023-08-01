//Here we're importing items we'll need. You can add other imports here.

const runScript = function () {
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("OData-Version", "4.0");
  myHeaders.append("OData-MaxVersion", "4.0");
  myHeaders.append(
    "Authorization",
    "Basic b2RhdGE6ZmF0dGVuLWFyaWEtV0FMS0VSLWNvbmZpZGU="
  );

  console.log(myHeaders);

  var raw = JSON.stringify({
    scriptParameterValue: "hello",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://fmsdev.truelogik.com/fmi/odata/v4/OData_SampleData/Script.Hello",
    requestOptions
  )
    .then((response) => response.text())
    .then((text) => console.log(text))
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

const btn = document.querySelector("button");
btn.onclick = runScript;
