import Head from 'next/head'

const HeadComp = ({title}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content="Byteforce Labs, offering IT solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
        <link rel="icon" href="" />
    </Head>

  )
}
export default HeadComp
