import axios from "axios";

const fetchData = async () => {
  const result = await axios(
    'https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json',
  );
  // return the result
  return result;

};

export default fetchData;