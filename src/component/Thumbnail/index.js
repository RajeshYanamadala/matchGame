import './index.css'

const Thumbnail = props => {
  const {thumbnailDetails, getShuffledCategoryImg} = props
  const {id, imageUrl, thumbnailUrl, category} = thumbnailDetails

  const onClickChangeCategoryImg = () => {
    getShuffledCategoryImg(imageUrl)
  }

  return (
    <li className="thumb-list">
      <button
        type="button"
        className="btn-thumb"
        onClick={onClickChangeCategoryImg}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default Thumbnail
