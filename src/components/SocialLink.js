import { socialLinks } from '../data'

const SocialLink = ({ type }) => {
  return (
    <>
      {socialLinks.map((link) => {
        const { id, href, icon } = link
        return (
          <li key={id}>
            <a href={href} target='_blank' rel='noreferrer' className={type}>
              <i className={icon}></i>
            </a>
          </li>
        )
      })}
    </>
  )
}
export default SocialLink
