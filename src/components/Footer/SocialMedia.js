
export const SocialMedia = ({ icon, url, link }) => (
  <li className={"icon brands " + icon}>
    <a href={ url } target="__new">
      <span className="extra">
        { link }
      </span>
    </a>
  </li>
)
