import { pageLinks } from '../data'

const PageLinks = ({ type }) => {
  let filteredPageLinks = null
  if (type === 'nav-link') {
    filteredPageLinks = pageLinks.filter((link) => link.id < 5)
  }
  if (type === 'footer-link') {
    filteredPageLinks = pageLinks.filter((link) => link.id !== 4)
  }
  return (
    <>
      {filteredPageLinks.map((link) => {
        const { id, href, text } = link
        return (
          <li key={id}>
            <a href={href} className={type}>
              {text}
            </a>
          </li>
        )
      })}
    </>
  )
}

export default PageLinks
