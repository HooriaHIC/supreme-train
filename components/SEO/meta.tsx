import PropTypes from "prop-types";
import Head from "next/head";

const SEO = (props: any) => {
    const { title, description } = props;
    return <>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
        </Head>
    </>
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SEO;

