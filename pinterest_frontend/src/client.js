import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "g6nzaf6h",
  dataset: "production",
  apiVersion: "2022-01-03",
  useCdn: true,
  token:
    "skT81dc8pdCi8H3mGNTvVa7uZ8moKHdryLSwnSkszAL79WycKjknVkqLiBTV1GckhYyfzcEylHX8vBQQ0Az2l2oECUXH3W8RrqpjPZSmaKl9gSqQryDEn6qeJJZqW4v7vjBOMEJhqV1zsAjFO5JrXVn2brEklRIDcM93pQXVShLbuqHS3daF",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
