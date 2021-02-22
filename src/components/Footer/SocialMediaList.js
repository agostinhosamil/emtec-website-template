import { Fragment } from "react"
import { useAppContext } from "~/src/config/appContext"
import arraySplit from "array-split-base"
import { SocialMedia } from "./SocialMedia"

export const SocialMediaList = () => {
  const { socialMedias } = useAppContext()

  const socialMediaRows = socialMedias && arraySplit(socialMedias, 3) || []

  if (!(socialMedias instanceof Array && socialMedias.length >= 1)) {
    return <Fragment />
  }

  return (
    <Fragment>
      {socialMediaRows.map((socialMediaRow, socialMediaRowIndex) => (
        <ul key={ socialMediaRowIndex } className="divided icons col-6 col-12-mobile">
          {socialMediaRow.map((socialMedia) => <SocialMedia key={ socialMedia.id } { ...socialMedia } />)}
        </ul>
      ))}
    </Fragment>
  )
}
