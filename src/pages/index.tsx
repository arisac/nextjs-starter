import Head from 'next/head'
import styles from 'styles/Home.module.scss'
import ThemeToggleButton from 'components/Layout/ThemeToggleButton'
import ThemeToggle from 'components/Layout/ThemeToggle'

export default Home

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Title hello</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <ThemeToggle />
      </div>
      header
      <ThemeToggleButton />
      <div>
        <ThemeToggle menuPosition="right-0" />
      </div>
    </header>
  )
}

function Main() {
  return (
    <main className={styles.main}>
      <article className="prose dark:prose-invert md:prose-lg lg:prose-xl">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
      </article>
    </main>
  )
}

function Footer() {
  return <footer className={styles.footer}>footer</footer>
}
