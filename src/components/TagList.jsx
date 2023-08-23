function TagList({ tags }) {
  return (
    <ul className="detail__classification-tag">
      {tags.map((tag, index) => (
        <li key={index} className="detail__classification-tag-item">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default TagList;
