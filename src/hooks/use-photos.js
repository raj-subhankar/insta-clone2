import { useEffect, useState } from "react";
import { getPhotos } from "../services/firebase";

export default function usePhotos(user) {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    async function getTimelinePhotos() {
      // check if the user actually following anyone
      if (user?.following?.length > 0) {
        const followedUserPhotos = await getPhotos(user.userId, user.following);
        // re-arrange arrays to be newest photos first by dateCreated
        followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
        setPhotos(followedUserPhotos);
      }
    }
    getTimelinePhotos();
  }, [user?.userId]);

  return { photos };
}
