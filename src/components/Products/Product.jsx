import React from 'react'
import s from "./Product.module.css"
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const SIZES = [4, 4.5, 5]

const Product = ({ title, price, images, description }) => {
  const [currentImage, setCurrentImage] = React.useState()
  const [currentSize, setCurrentSize] = React.useState()

  React.useEffect(() => {
    if (!images.length) return
    setCurrentImage(images[0])
  }, [images])

  return (
    <section className={s.product}>
      <div className={s.images}>
        <div className={s.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={s["images-list"]}>
          {images.map((image, i) => (
            <div
              key={i}
              className={s.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>
      <div className={s.info}>
        <h1 className={s.title}>{title}</h1>
        <div className={s.price}>{price}$</div>
        <div className={s.color}>
          <span>Color:</span>Green
        </div>
        <div className={s.sizes}>
          <span>Sizes:</span>
          <div className={s.list}>
            {SIZES.map((size) => (
              <div key={size} onClick={() => setCurrentSize(size)} className={`${s.size} ${currentSize === size ? s.active : ""}`}>
                {size}
              </div>
            ))}
          </div>
        </div>

        <p className={s.description}>{description}</p>
        <div className={s.actions}>
          <button className={s.add} disabled={!currentSize}>Add to cart</button>
          <button className={s.favourite}>Add to favourites</button>
        </div>

        <div className={s.bottom}>
          <div className={s.purchase}>19 people purchased</div>
          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  )
}

export default Product


