
import * as SThumbnails from './styles';

function Thumbnails({ data, activeImageHandler, preview }) {
  return (
    <SThumbnails.Body>
      {data.map((image, key) => (
        <div
          key={key}
          className={key === preview ? "thumb-item active" : "thumb-item"}
          onClick={() => activeImageHandler(key)}
        >
          <img src={image} alt={image} />
        </div>
      ))}
    </SThumbnails.Body>
  );
}

export default Thumbnails;