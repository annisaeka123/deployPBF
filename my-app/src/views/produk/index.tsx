import styles from "../../pages/produk/product.module.scss"
import Link from "next/link"
import Image from "next/image"

type ProductType = {
  id: string
  name: string
  price: number
  size: string
  category: string
  image: string
}

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 data-testid="title" className={styles.produk__title}>
        Daftar Produk
      </h1>
      <div data-testid="product-list" className={styles.produk__content}>
        {products?.length > 0 ? (
          <>
            {products?.map((products: ProductType) => (
              <Link
                href={`/produk/${products.id}`}
                key={products.id}
                className={styles.produk__content__item}
                data-testid="product-item"
              >
                <div className={styles.produk__content__item__image}>
                  <Image
                    src={products.image}
                    alt={products.name}
                    width={200}
                    height={200}
                  />
                </div>
                <h4>{products.name}</h4>
                <p>{products.category}</p>
                <p className={styles.produk__content__item__size}>
                  Size: {products.size}
                </p>
                <p className={styles.produk__content__item__price}>
                  {products.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </Link>
            ))}
          </>
        ) : (
          <div data-testid="skeleton">
            Loading...
          </div>
        )}
      </div>
    </div>
  )
}

export default TampilanProduk