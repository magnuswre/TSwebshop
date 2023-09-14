interface CollectionCardProps {
  card: {
    imageURL: string;
    name: string;
    price: number;
  };
}

const CollectionCard: React.FC<CollectionCardProps> = ({ card }) => {
  return (
    <div className='collection-card'>
      <div className='image-container'>
        <img src={card.imageURL} alt={card.name} />
      </div>
      <p>{card.name}</p>
      <p>{card.price} kr</p>
    </div>
  );
};

export default CollectionCard;
