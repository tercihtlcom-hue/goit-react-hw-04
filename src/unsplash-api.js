import axios from "axios";
const fetchImages = async (query, page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: query,
      page: page,
      per_page: 12,
      client_id: "IPoIGpfHIoDxEVpu5FWbnOL_mnMVohkcEVaMt420j_I",
    },
  });
  return response.data;
};

export default fetchImages;