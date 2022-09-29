import styles from 'styles/Home.module.scss'
import { ThemeToggleButton, ThemeToggleList } from 'components/Theme'
import { SkipLink } from 'components/Links'

export default function Home() {
  return (
    <div className={styles.container}>
      <SkipLink href="#main" text="Skip to main" />
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
        <ThemeToggleList />
      </div>
      <div className="flex items-center">
        <ThemeToggleButton /> header <ThemeToggleList />
      </div>

      <div className="flex items-center">
        <ThemeToggleButton />
        <ThemeToggleList />
      </div>
    </header>
  )
}

function Main() {
  return (
    <main className={styles.main} id="main">
      <SkipLink href="#footer" text="Skip to footer" />
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
  return (
    <footer className={styles.footer} id="footer">
      <div>
        <ThemeToggleList />
      </div>
      <div className="flex items-center">
        <ThemeToggleButton /> footer <ThemeToggleList />
      </div>

      <div className="flex items-center">
        <ThemeToggleButton />
        <ThemeToggleList />
      </div>
    </footer>
  )
}
