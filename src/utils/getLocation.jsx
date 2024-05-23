import { useState } from "react";


const getLocation = () => {
  const [location, setLocation] = useState();

  function getLocationInfo(latitude, longitude) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status.code === 200) {
          console.log("results:", data.results);
          setLocation(data.results[0].formatted);
        } else {
          console.log("Reverse geolocation request failed.");
        }
      })
      .catch((error) => console.error(error));
  }

  function success(pos) {
    var crd = pos.coords;
    getLocationInfo(crd.latitude, crd.longitude);
  }
  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  if (navigator.geolocation) {
      navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result) {
          if (result.state === "granted") {
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "prompt") {
            //If prompt then the user will be asked to give permission
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
            window.prompt("You must give permission in order to suggest your desired search")
          }
      });
  } else {
      console.log("Geolocation is not supported by this browser.");
  }
  
  return 
};

export default getLocation;