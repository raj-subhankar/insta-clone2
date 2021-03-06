import PropTypes from "prop-types";
import { useRef } from "react";
import Actions from "./actions";
import Comments from "./comments";
import Footer from "./footer";
import Header from "./header";
import Image from "./image";

export default function Post({ content }) {
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();
  return (
    <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
      <Header username={content.username} />
      <Image src={content.imageSrc} caption={content.caption} />
      <Actions
        docId={content.docId}
        totalLikes={content.likes.length}
        likedPhoto={content.userLikedPhoto}
        handleFocus={handleFocus}
      />
      <Footer caption={content.caption} username={content.username} />
      <Comments
        docId={content.docId}
        comments={content.comments}
        posted={content.dateCreated}
        commentInput={commentInput}
      />
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    likes: PropTypes.array.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired,
  }).isRequired,
};
