import { useParams } from "react-router-dom";
import { allContext } from "../../Constants/allContext";
import MasonryComponent from "../Photos/MasonryComponent";
import useFetch from "../UseFetch";
import { useState, useContext } from "react";
import Loading from "../Loading";
import NoResults from "../NoResults";

const UserLikes = () => {
  const { username } = useParams();
  const { URL, apikey } = useContext(allContext);
  const url = `${URL}users/${username}/likes?client_id=${apikey}`;
  const { data, loading, error } = useFetch(url);
  const [userPhotos, setUserPhotos] = useState();
  if (data) {
    if (userPhotos == null) {
      setUserPhotos(data);
    }
  }
  document.title = `${username} | Likes`;
  return (
    <>
      {userPhotos ? (
        userPhotos.length !== 0 ? (
          <MasonryComponent photoList={userPhotos} />
        ) : (
          <NoResults thing="Likes" />
        )
      ) : (
        ""
      )}
    </>
  );
};

export default UserLikes;
