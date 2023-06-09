import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';


import { NextPageWithLayout } from '../_app';

import useMediaQuery from '@/hooks/useMediaQuery';
import { transformTagsByProduct } from '@/util';
import { IProduct, ITag } from '@/interfaces';

import { getProductById, getProducts } from '@/services';
import { BaseLayout } from '@/components/layouts';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

import {
  CharacteristicsProduct,
  ListTags,
  ProductButtons,
  ProductInfo,
} from '@/components/products';
import SectionSlider from '@/components/sectionSlider';
import productSample from '@/assets/images/examples/productSample.png';
import { baseURL } from '@/helpers/axios';
import { getProductByIdServer } from '@/services/products/getProduct';
import Head from 'next/head';

const mockData = Array.from({ length: 20 }).map((_, i) => ({
  id: `${i + 1}`,
  title: `Tapete Heritage - ${i + 1}`,
  description: 'Crin de caballo tejido',
  img: productSample,
}));

interface Props {
  product: IProduct;
}

const ProductPage: NextPageWithLayout<Props> = ({ product }) => {
  const { key, name, description, minMeasure, maxMeasure, minPrice, maxPrice } =
    product;
  let tags: ITag[] = transformTagsByProduct(product);
  const matches = useMediaQuery('(min-width: 768px)');
  const iconSize = matches ? 16 : 20;

  return (
    <div className="relative flex flex-col mt-7 gap-5">
      <Head>
        <title>VERDI - CLIENTS - {name}</title>
      </Head>
      {/* Basic Product Information */}
      <ProductInfo
        code={key}
        name={name}
        description={description}
        product={product}
        tags={tags}
        iconSize={iconSize}
      />

      {/* Tags */}
      <ListTags
        tags={tags}
        className="lg:hidden"
        classNameTitle="mx-5"
        classNameTags="px-5"
      />

      {/* Characteristics */}
      <CharacteristicsProduct
        minMeasure={minMeasure}
        maxMeasure={maxMeasure}
        minPrice={minPrice}
        maxPrice={maxPrice}
        tags={tags}
        className="lg:hidden"
      />

      {/* Product Buttons */}
      <div className="flex flex-col w-full justify-center lg:flex-row">
        <ProductButtons iconSize={iconSize} />
      </div>

      {/* Product carousel */}
      <div className="hidden xl:flex xl:flex-col xl:gap-3 xl:mb-16 xl:px-20">
        <SectionSlider sectionTitle="Te pueden interesar" products={mockData} />
      </div>
    </div>
  );
};

// export const getStaticPaths: GetStaticPaths = async (ctx) => {
//   const { data } = await getProducts({ });
//   const { rows: products } = data.data;

//   return {
//     paths: products.map(({ key }) => ({
//       params: { key: `${key}` },
//     })),
//     fallback: 'blocking',
//   };
// };

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params, req, res } = ctx;
  const { key = '' } = params as { key: string };

  try {
    const session = await getServerSession(ctx.req, ctx.res, authOptions)

    const token = session?.user?.token;

    const { data } = await getProductByIdServer(key, token!);

    const product = data?.data;

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
};

ProductPage.getLayout = (page) => {
  return <BaseLayout title="PRODUCT - VERDI">{page}</BaseLayout>;
};

export default ProductPage;
