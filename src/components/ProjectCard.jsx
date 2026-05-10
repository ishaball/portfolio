export default function ProjectCard({ title, desc, tags = [], href }) {
  return (
    <a className="card card--hover" href={href || '#'} target={href ? '_blank' : undefined} rel="noreferrer">
      <div className="card__top">
        <div className="card__titleWrap">
          <h3 className="card__title">{title}</h3>
          
        </div>
       
      </div>
      <p className="card__desc">{desc}</p>
      <div className="card__tags">
        {tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <div className="card__cta">
        <span>View</span>
        <span aria-hidden="true">→</span>
      </div>
    </a>
  );
}

