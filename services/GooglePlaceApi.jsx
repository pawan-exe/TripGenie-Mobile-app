export const GetPhotoRef = async (placeName) => {
  const resp = await fetch(
    "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" +
      placeName +
      "&key=AIzaSyBqn6Z6ddVRnsdKVUFLozIa7nWkDkZMxjs"
  );
  const result = await resp.json();
  console.log(result);
  return result;
};
