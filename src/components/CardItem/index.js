import './index.css'

const TechnologyCard = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={className}>
      <h1 className="title-text"> {title} </h1>
      <p className="description-text"> {description} </p>
      <img src={imgUrl} className="technology-card-image" alt={title} />
    </li>
  )
}

export default TechnologyCard
