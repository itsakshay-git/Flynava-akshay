import axios from 'axios';


const url = "https://wookie.codesubmit.io/movies";

let token = 'Bearer Wookie2019'

const fetchData = async () => {
  try {
    const response =await axios
      .get(url, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      })
console.log(response)
      return response.data
  } catch (error) {
    console.log("error", error);
  }
};

export default fetchData;