import { memo } from "react";

export const Service = memo(({ image, description, ...props }) => {
  return (
    <section className="col-4 col-12-narrower feature">
      <div className="image-wrapper first">
        <a href={ props.id && `/services/${ props.id }?_a=ServiceList` || '#' } className="image featured">
          <img src={ process.env.API_URL + image.url } alt={ description } />
        </a>
      </div>
      <p>
        { description }
      </p>
    </section>
  )
})
