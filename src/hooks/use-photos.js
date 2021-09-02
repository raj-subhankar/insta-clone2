import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import { getPhotos, getUserByUserId } from "../services/firebase";

export default function usePhotos() {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = "" },
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {
      const [{ following }] = await getUserByUserId(userId);
      let followedUserPhotos = [];

      // check if the user actually following anyone
      if (following.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);
      }

      // re-arrange arrays to be newest photos first by dateCreated
      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }

    if (userId) {
      getTimelinePhotos();
    }
  }, [userId]);

  return { photos };
}
